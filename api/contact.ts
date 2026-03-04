import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, companyName, email, phone, industry, companySize, outcome, message } =
    req.body;

  if (!fullName || !companyName || !email || !industry || !companySize || !outcome) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Produx Contact <noreply@sales.produx.tech>",
      to: "info@produx.tech",
      replyTo: email,
      subject: `New Diagnostic Call Request — ${fullName} @ ${companyName}`,
      html: `
        <h2>New Diagnostic Call Request</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Company</strong></td><td>${companyName}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
          <tr><td><strong>Industry</strong></td><td>${industry}</td></tr>
          <tr><td><strong>Company Size</strong></td><td>${companySize}</td></tr>
          <tr><td><strong>90-day Outcome</strong></td><td>${outcome}</td></tr>
          ${message ? `<tr><td><strong>Message</strong></td><td>${message}</td></tr>` : ""}
        </table>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
