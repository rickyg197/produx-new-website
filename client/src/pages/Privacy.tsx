/*
 * PRODUX Privacy Policy. Keep this in step with what the site actually does:
 * form handling in api/contact.ts, analytics in client/index.html.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SECTIONS: { title: string; paragraphs?: string[]; items?: string[] }[] = [
  {
    title: "Who is responsible for your information",
    paragraphs: [
      "This site is run by PRODUX LLC, a US company that operates from the UK. PRODUX decides how the information described here is used. For any privacy question or request, email info@produx.tech.",
    ],
  },
  {
    title: "What PRODUX collects",
    items: [
      "Contact form: your name, work email, company, your role, your company\u2019s annual revenue band, and anything you write in the message field.",
      "Booking a call: Calendly collects the details you enter when you book, and shares them with PRODUX so the call can happen.",
      "Site usage: Google Analytics records how the site is used, such as pages viewed, approximate location, and device and browser type. It uses cookies to do this.",
      "Spam protection: Cloudflare Turnstile checks whether a form submission comes from a person, using technical signals from your browser.",
    ],
  },
  {
    title: "How your information is used",
    items: [
      "To reply to your inquiry and arrange any call you ask for.",
      "To keep a record of inquiries and manage any working relationship that follows.",
      "To understand how the site is used and improve it.",
      "To keep the form free of spam and abuse.",
    ],
    paragraphs: [
      "For people in the UK and EU, the legal basis is PRODUX's legitimate interest in responding to inquiries, running its business and protecting its site, or steps you ask for before entering a contract. PRODUX does not sell your information.",
    ],
  },
  {
    title: "Who handles it for PRODUX",
    paragraphs: [
      "These service providers process information on PRODUX's behalf. Some of them store or process it in the US and other countries outside the UK and EU.",
    ],
    items: [
      "Notion: stores form inquiries.",
      "Resend: delivers form inquiries by email.",
      "Google Workspace: receives and stores email.",
      "Vercel: hosts this site.",
      "Google Analytics: measures site usage.",
      "Calendly: handles call bookings.",
      "Cloudflare: provides the spam check.",
    ],
  },
  {
    title: "How long it is kept",
    paragraphs: [
      "Inquiries are kept for as long as they are needed to respond and manage any relationship that follows, and for any period required by law. Ask at any time and PRODUX will delete what it does not need to keep.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "Depending on where you live, you may have the right to access, correct or delete your information, to object to or limit how it is used, and to receive a copy of it. To make a request, email info@produx.tech.",
      "If you are in the UK, you can also complain to the Information Commissioner's Office (ico.org.uk). If you are in the EU, you can complain to your local data protection authority.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: ["If this policy changes, the updated version will appear on this page with a new date."],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-navy-dark pt-28 pb-14 lg:pt-36 lg:pb-16">
        <div className="container max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-slate-text">Last updated: November 4, 2026</p>
        </div>
      </section>
      <section className="py-14 lg:py-20 bg-warm-white">
        <div className="container max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-navy mb-3">{section.title}</h2>
              {section.items && (
                <ul className="list-disc pl-5 space-y-2 mb-3 text-muted-foreground leading-relaxed">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.paragraphs?.map((p) => (
                <p key={p} className="text-muted-foreground leading-relaxed mb-3">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
