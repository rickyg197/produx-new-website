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

const ENQUIRY_LABELS: Record<string, string> = {
  "fractional-leadership": "Fractional product leadership",
  "place-fractional": "Place a PM, designer or product leader",
  advisory: "Advisory retainer",
  other: "Something else",
};

type Lead = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  companySize: string;
  enquiryType: string;
  outcome: string;
  message: string;
};

async function addToNotion(lead: Lead) {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_CLIENTS_DATABASE_ID;
  if (!token || !databaseId) throw new Error("Notion is not configured");

  const notes = [
    "Source: website form",
    `Looking for: ${lead.enquiryType}`,
    `Industry: ${lead.industry}`,
    `Company size: ${lead.companySize}`,
    `90-day outcome: ${lead.outcome}`,
    lead.message ? `Message: ${lead.message}` : "",
  ]
    .filter(Boolean)
    .join("\n")
    .slice(0, 2000);

  const text = (content: string) => ({
    rich_text: [{ text: { content } }],
  });

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: lead.companyName } }] },
        Company: text(lead.companyName),
        "Contact Name": text(lead.fullName),
        Email: { email: lead.email },
        Phone: { phone_number: lead.phone || null },
        Stage: { status: { name: "Lead" } },
        Notes: text(notes),
      },
    }),
  });

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
    subject: `New Diagnostic Call Request — ${lead.fullName} @ ${lead.companyName}`,
    html: `
      <h2>New Diagnostic Call Request</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
        ${row("Name", lead.fullName)}
        ${row("Company", lead.companyName)}
        ${row("Email", lead.email)}
        ${row("Phone", lead.phone || "—")}
        ${row("Looking for", lead.enquiryType)}
        ${row("Industry", lead.industry)}
        ${row("Company Size", lead.companySize)}
        ${row("90-day Outcome", lead.outcome)}
        ${lead.message ? row("Message", lead.message) : ""}
      </table>
    `,
  });
  if (error) throw new Error(error.message);
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

  const enquiryType = clean(body.enquiryType, 100);
  const lead: Lead = {
    fullName: clean(body.fullName, 200),
    companyName: clean(body.companyName, 200),
    email: clean(body.email, 320),
    phone: clean(body.phone, 50),
    industry: clean(body.industry, 100),
    companySize: clean(body.companySize, 100),
    enquiryType: ENQUIRY_LABELS[enquiryType] ?? enquiryType,
    outcome: clean(body.outcome),
    message: clean(body.message),
  };

  if (
    !lead.fullName ||
    !lead.companyName ||
    !lead.email ||
    !lead.industry ||
    !lead.companySize ||
    !lead.enquiryType ||
    !lead.outcome
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
    return res.status(500).json({ error: "Failed to save enquiry" });
  }

  return res.status(200).json({ success: true });
}
