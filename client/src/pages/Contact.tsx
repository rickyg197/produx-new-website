/*
 * PRODUX Contact Page — Diagnostic Call booking
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";
import { useState } from "react";
import { toast } from "sonner";
import {
  Linkedin,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    companySize: "",
    outcome: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Thank you! We'll be in touch within 24 hours to schedule your Diagnostic Call.");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        industry: "",
        companySize: "",
        outcome: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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
              Book a 20-minute Diagnostic Call to identify your alignment gaps. Qualified partners
              will be invited to enter our Strategy & Architecture Phase to co-create their custom
              90-day roadmap.
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
                      <option value="healthcare">Healthcare</option>
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
                    What is the specific outcome you need to achieve in the next 90 days?{" "}
                    <span className="text-red-500">*</span>
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
                    placeholder="Anything else you'd like us to know..."
                  />
                </div>

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
                  <h3 className="text-lg font-bold text-navy mb-4">Connect with Us</h3>
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
                  <h3 className="text-lg font-bold text-navy mb-4">Global Coverage</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Globe size={18} className="text-electric mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-navy">UK, US & Europe (EEA)</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          Cross-Atlantic strategic coverage
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-electric mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-navy">24/7 Strategic Coverage</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          US-facing strategies during London day, handed off to US teams
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
                      "We review your submission within 24 hours",
                      "You receive a calendar link for your Diagnostic Call",
                      "20-minute complimentary gap analysis session",
                      "Qualified partners are invited to the Architecture Phase",
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
                    Note: The Architecture Phase is a paid foundational engagement.
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
