/*
 * PRODUX Contact Page — Diagnostic Call booking
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Linkedin,
  Globe,
  ArrowRight,
} from "lucide-react";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

type TurnstileApi = {
  render: (
    el: HTMLElement,
    options: {
      sitekey: string;
      appearance: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};

function getTurnstile() {
  return (window as unknown as { turnstile?: TurnstileApi }).turnstile;
}

export default function Contact() {
  const turnstileEl = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    const renderWidget = () => {
      const api = getTurnstile();
      if (!api || !turnstileEl.current || turnstileId.current) return;
      turnstileId.current = api.render(turnstileEl.current, {
        sitekey: TURNSTILE_SITE_KEY,
        appearance: "interaction-only",
        callback: setTurnstileToken,
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };
    let script = document.querySelector<HTMLScriptElement>("script[data-turnstile]");
    if (!script) {
      script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.dataset.turnstile = "true";
      document.head.appendChild(script);
    }
    if (getTurnstile()) renderWidget();
    else script.addEventListener("load", renderWidget);
    return () => {
      script?.removeEventListener("load", renderWidget);
      if (turnstileId.current) getTurnstile()?.remove(turnstileId.current);
      turnstileId.current = null;
    };
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    companySize: "",
    enquiryType: "",
    outcome: "",
    message: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      toast.error("Just a moment while a quick security check finishes, then try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Thank you! I'll be in touch within 24 hours to schedule your Diagnostic Call.");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        industry: "",
        companySize: "",
        enquiryType: "",
        outcome: "",
        message: "",
        website: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTurnstileToken("");
      if (turnstileId.current) getTurnstile()?.reset(turnstileId.current);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-navy-dark pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="container relative z-10 text-center">
          <SectionReveal>
            <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
              Get Started
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Book a Diagnostic Call
            </h1>
            <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-2xl mx-auto">
              Book a 20-minute Diagnostic Call to identify your alignment gaps. If there is a fit,
              the next step is the advisory retainer, starting with your custom 90-day roadmap.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* Form */}
            <SectionReveal>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 lg:p-10 border border-border shadow-sm">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <h2 className="text-2xl font-bold text-navy mb-8">Get in Touch</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                    >
                      <option value="">Select Industry</option>
                      <option value="technology">Technology / SaaS</option>
                      <option value="fintech">FinTech</option>
                      <option value="ecommerce">eCommerce</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="martech">MarTech</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Company Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                    >
                      <option value="">Select Size</option>
                      <option value="1-50">1-50</option>
                      <option value="51-500">51-500</option>
                      <option value="501-1000">501-1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    What are you looking for? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all"
                  >
                    <option value="" disabled>Select one...</option>
                    <option value="fractional-leadership">I need fractional product leadership for my business</option>
                    <option value="place-fractional">I want to hire a PM, designer or product leader (fractional or full-time)</option>
                    <option value="advisory">I'm interested in the advisory retainer</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    {formData.enquiryType === "place-fractional"
                      ? "Tell me about the role and team you're hiring for"
                      : "What is the specific outcome you need to achieve in the next 90 days?"}
                    {" "}<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="outcome"
                    required
                    rows={3}
                    value={formData.outcome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all resize-none"
                    placeholder="Describe the key outcome you're targeting..."
                  />
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Additional Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all resize-none"
                    placeholder="Anything else you'd like me to know..."
                  />
                </div>

                <div ref={turnstileEl} className="mt-5" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending…" : "Submit & Book Diagnostic Call"}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>
              </form>
            </SectionReveal>

            {/* Sidebar */}
            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                {/* Connect */}
                <div className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-navy mb-4">Connect</h3>
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/company/produx-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-electric transition-colors"
                    >
                      <Linkedin size={18} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Coverage */}
                <div className="bg-white rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-navy mb-4">Where I Work</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Globe size={18} className="text-electric mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-navy">US, UK & Europe</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          Based in London, working across the Atlantic
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process note */}
                <div className="bg-navy rounded-xl p-6 border border-electric/20">
                  <h3 className="text-lg font-bold text-white mb-3">What Happens Next?</h3>
                  <ol className="space-y-3">
                    {[
                      "I review your submission within 24 hours",
                      "You receive a calendar link for your Diagnostic Call",
                      "20-minute complimentary gap analysis session",
                      "If there is a fit, we discuss the advisory retainer",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-electric/20 text-electric text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-slate-text text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 text-xs text-slate-text/60 italic">
                    Note: The advisory retainer is a paid engagement.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
