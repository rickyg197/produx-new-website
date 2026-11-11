/*
 * PRODUX Contact Page
 * Copy source: Claude doc "produx.tech Site Copy". Company annual revenue is required and is
 * stored in the Notion Clients database property of the same name. Keep the options in step
 * with REVENUE_OPTIONS in api/contact.ts.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Link } from "wouter";
import { openCalendly } from "@/lib/utils";
import { Linkedin, Globe, ArrowRight } from "lucide-react";

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

const REVENUE_OPTIONS = ["Under $20M", "$20M to $50M", "$50M to $100M", "$100M+"];

const EMPTY_FORM = {
  fullName: "",
  email: "",
  companyName: "",
  role: "",
  revenue: "",
  message: "",
  website: "",
};

const INPUT_CLASS =
  "w-full px-4 py-3 bg-warm-white border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all";

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

  const [formData, setFormData] = useState(EMPTY_FORM);
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
      toast.success("Thanks. I\u2019ll be in touch within two working days.");
      setFormData(EMPTY_FORM);
    } catch {
      toast.error("Something went wrong. Please try again, or book a call directly.");
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
              Contact
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Tell me where growth is stuck.
            </h1>
            <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-2xl mx-auto">
              A few lines is plenty. I read every inquiry myself and reply within two working days.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
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

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-navy mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      required
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-navy mb-1.5">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      name="companyName"
                      required
                      autoComplete="organization"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-navy mb-1.5">
                      Your role <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="role"
                      type="text"
                      name="role"
                      required
                      autoComplete="organization-title"
                      value={formData.role}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="revenue" className="block text-sm font-medium text-navy mb-1.5">
                    Company annual revenue <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className={INPUT_CLASS}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {REVENUE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                    What&rsquo;s going on? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${INPUT_CLASS} resize-none`}
                  />
                </div>

                <div ref={turnstileEl} className="mt-5" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending\u2026" : "Send"}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>
                <p className="mt-5 text-sm text-muted-foreground text-center">
                  Prefer to talk?{" "}
                  <button
                    type="button"
                    onClick={openCalendly}
                    className="text-electric font-semibold underline hover:text-electric-light"
                  >
                    Book 30 minutes directly.
                  </button>
                </p>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  See the{" "}
                  <Link href="/privacy" className="underline hover:text-electric">
                    Privacy Policy
                  </Link>{" "}
                  for how your details are used.
                </p>
              </form>
            </SectionReveal>

            {/* Sidebar */}
            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-border">
                  <h2 className="text-lg font-bold text-navy mb-4">Connect</h2>
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

                <div className="bg-white rounded-xl p-6 border border-border">
                  <h2 className="text-lg font-bold text-navy mb-4">Where I work</h2>
                  <div className="flex items-start gap-3">
                    <Globe size={18} className="text-electric mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-navy">US and UK</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Remote from London, in the room when it counts
                      </div>
                    </div>
                  </div>
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
