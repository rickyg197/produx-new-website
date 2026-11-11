import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Must match the dropdown in client/src/pages/Contact.tsx and the select options on the
// "Company annual revenue" property in the Notion Clients database.
const REVENUE_OPTIONS = ["Under $20M", "$20M to $50M", "$50M to $100M", "$100M+"];
const REVENUE_PROPERTY = "Company annual revenue";

type Lead = {
  fullName: string;
  email: string;
  companyName: string;
  role: string;
  revenue: string;
  message: string;
};

async function createNotionPage(lead: Lead, includeRevenue: boolean) {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_CLIENTS_DATABASE_ID;
  if (!token || !databaseId) throw new Error("Notion is not configured");

  const notes = [
    "Source: website form",
    `Company annual revenue: ${lead.revenue}`,
    `Role: ${lead.role}`,
    `What's going on: ${lead.message}`,
  ]
    .join("\n")
    .slice(0, 2000);

  const text = (content: string) => ({
    rich_text: [{ text: { content } }],
  });

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: lead.companyName } }] },
    Company: text(lead.companyName),
    "Contact Name": text(lead.fullName),
    Email: { email: lead.email },
    Title: text(lead.role),
    Stage: { status: { name: "Lead" } },
    Notes: text(notes),
  };
  if (includeRevenue) {
    properties[REVENUE_PROPERTY] = { select: { name: lead.revenue } };
  }

  return fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
  });
}

async function addToNotion(lead: Lead) {
  let response = await createNotionPage(lead, true);

  // If the revenue property is missing or set up differently in Notion, save the lead
  // without it rather than lose it. Revenue is still in Notes and in the email.
  if (response.status === 400) {
    const detail = await response.text();
    if (detail.includes(REVENUE_PROPERTY)) {
      console.error("Notion revenue property problem, saving without it:", detail);
      response = await createNotionPage(lead, false);
    } else {
      throw new Error(`Notion 400: ${detail}`);
    }
  }

  if (!response.ok) {
    throw new Error(`Notion ${response.status}: ${await response.text()}`);
  }
}

async function sendEmail(lead: Lead) {
  const row = (label: string, value: string) =>
    `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`;

  const { error } = await resend.emails.send({
    from: "Produx Contact <noreply@sales.produx.tech>",
    to: "info@produx.tech",
    replyTo: lead.email,
    subject: `New inquiry: ${lead.fullName} at ${lead.companyName} (${lead.revenue})`,
    html: `
      <h2>New website inquiry</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
        ${row("Name", lead.fullName)}
        ${row("Work email", lead.email)}
        ${row("Company", lead.companyName)}
        ${row("Role", lead.role)}
        ${row("Company annual revenue", lead.revenue)}
        ${row("What's going on", lead.message)}
      </table>
    `,
  });
  if (error) throw new Error(error.message);
}

// Returns false only when Cloudflare says the visitor failed. If Cloudflare can't be
// reached, or the secret isn't set, the lead is kept rather than lost.
async function passesTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    });
    if (!response.ok) {
      console.error("Turnstile unavailable:", response.status);
      return true;
    }
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch (error) {
    console.error("Turnstile unavailable:", error);
    return true;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body ?? {};

  // Hidden field that people never see. Bots fill it in, so report success and drop it.
  if (clean(body.website)) {
    return res.status(200).json({ success: true });
  }

  if (!(await passesTurnstile(clean(body.turnstileToken, 4096)))) {
    return res.status(400).json({ error: "Spam check failed" });
  }

  const lead: Lead = {
    fullName: clean(body.fullName, 200),
    email: clean(body.email, 320),
    companyName: clean(body.companyName, 200),
    role: clean(body.role, 200),
    revenue: clean(body.revenue, 50),
    message: clean(body.message),
  };

  if (
    !lead.fullName ||
    !lead.email ||
    !lead.companyName ||
    !lead.role ||
    !lead.message ||
    !REVENUE_OPTIONS.includes(lead.revenue)
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Each route backs up the other, so a lead is lost only if both fail.
  const [emailResult, notionResult] = await Promise.allSettled([
    sendEmail(lead),
    addToNotion(lead),
  ]);

  if (emailResult.status === "rejected") {
    console.error("Resend error:", emailResult.reason);
  }
  if (notionResult.status === "rejected") {
    console.error("Notion error:", notionResult.reason);
  }

  if (emailResult.status === "rejected" && notionResult.status === "rejected") {
    return res.status(500).json({ error: "Failed to save inquiry" });
  }

  return res.status(200).json({ success: true });
}
