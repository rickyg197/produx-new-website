/*
 * PRODUX Services Page — Architectural Blueprint Design
 * Updated content: Strategic Product Advisory + Fractional Leadership
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Link } from "wouter";
import { openCalendly } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Globe2,
  TrendingUp,
  Brain,
  Users,
  Target,
  Layers,
  Zap,
  BarChart3,
  Lightbulb,
  Shield,
} from "lucide-react";

const STRATEGY_IMG = "/assets/product-strategy.jpg";

const DISCOVERY_IMG = "/assets/discovery-session.jpg";

const ADVISORY_FOCUS = [
  { icon: Building2, label: "M&A Evaluation" },
  { icon: Globe2, label: "US/UK Expansion" },
  { icon: TrendingUp, label: "Investor Readiness" },
  { icon: Brain, label: "AI-First Transformation" },
];

const ENGAGEMENT_TIERS = [
  {
    title: "The Diagnostic",
    subtitle: "Discovery Phase",
    price: "Complimentary",
    description: "20-minute gap analysis to identify alignment gaps and immediate bottlenecks.",
    features: ["Alignment gap identification", "Bottleneck assessment", "Strategic fit evaluation"],
    highlighted: false,
  },
  {
    title: "The Architecture",
    subtitle: "The Foundation",
    price: "Fixed-Fee Strategic Engagement",
    description: "Tri-Party Co-Creation and Board-Ready 90-Day Execution Strategy.",
    features: [
      "Tri-Party Co-Creation workshop",
      "90-Day execution roadmap",
      "Board-ready strategy document",
      "Leadership seat design",
    ],
    highlighted: true,
  },
  {
    title: "The Scale",
    subtitle: "Fractional Oversight",
    price: "Expert Hourly + Strategic Retainer",
    description: "Predictable scaling and long-term team retention with ongoing strategic oversight.",
    features: [
      "Fractional CPO/Head of Product",
      "Ongoing strategic oversight",
      "Team retention strategies",
      "Continuous 90-day iteration",
    ],
    highlighted: false,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-navy-dark pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
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
        <div className="container relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                Our Services
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Strategic Product Advisory & Fractional Leadership
              </h1>
              <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-2xl">
                We don&rsquo;t just fill seats&mdash;we architect the product leadership layer that
                transforms your organization from reactive to predictable.
              </p>
              <button
                onClick={openCalendly}
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25"
              >
                Book a Diagnostic Call
                <ArrowRight size={18} />
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Service 1: Strategic Product Advisory */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal>
              <div>
                <span className="text-electric font-mono text-xs tracking-wider uppercase">
                  Service 01
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                  Executive Advisory & Product Architecture
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Direct partnership for Founders, Boards, and VCs. We act as the Architect,
                  designing the leadership seats and 90-day roadmaps that allow your permanent team
                  to succeed long-term.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {ADVISORY_FOCUS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border"
                    >
                      <item.icon size={20} className="text-electric flex-shrink-0" />
                      <span className="text-sm font-medium text-navy">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 bg-navy/5 border border-navy/10 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Globe2 size={20} className="text-electric mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-navy text-sm">Cross-Border Advantage</div>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        Scaling across borders requires a global playbook. We bridge European
                        engineering excellence with US/UK commercial strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-electric/5 rounded-2xl blur-xl" />
                <img
                  src={STRATEGY_IMG}
                  alt="Product strategy session"
                  className="relative rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Service 2: Fractional Product Leadership */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal delay={0.2} className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald/5 rounded-2xl blur-xl" />
                <img
                  src={DISCOVERY_IMG}
                  alt="Product discovery workshop"
                  className="relative rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </SectionReveal>

            <SectionReveal className="order-1 lg:order-2">
              <div>
                <span className="text-electric font-mono text-xs tracking-wider uppercase">
                  Service 02
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                  Outcome-Driven Fractional CPOs & Heads of Product
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  High-level leadership without the overhead. Our engagements begin with a
                  High-Intensity Strategy Phase. While the initial diagnostic identifies your
                  challenges, our proprietary framework builds the engine that drives your growth.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    { icon: Layers, text: "Product strategy & roadmap architecture" },
                    { icon: Users, text: "Team structure & leadership seat design" },
                    { icon: Target, text: "90-day execution milestones" },
                    { icon: Zap, text: "AI-first product transformation" },
                    { icon: BarChart3, text: "Investor-ready product metrics" },
                    { icon: Shield, text: "Long-term team retention strategies" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-electric" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-sm text-muted-foreground italic border-l-2 border-electric/30 pl-4">
                  Engagement-based pricing tailored to specific strategic outcomes.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Investment & Engagement Model */}
      <section className="py-20 lg:py-28 bg-navy-dark">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-emerald font-mono text-sm font-medium tracking-wider uppercase">
                Investment Model
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Investment & Engagement Model
              </h2>
              <p className="mt-4 text-lg text-slate-text leading-relaxed">
                A structured path from diagnostic to scale, with clear milestones at every stage.
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {ENGAGEMENT_TIERS.map((tier) => (
              <StaggerItem key={tier.title}>
                <div
                  className={`relative rounded-xl p-8 h-full flex flex-col transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-electric/10 border-2 border-electric/40 shadow-xl shadow-electric/10"
                      : "bg-white/5 border border-white/10 hover:border-white/20"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric text-white text-xs font-mono font-semibold rounded-full">
                      RECOMMENDED
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{tier.title}</h3>
                  <p className="text-electric-light text-sm font-mono font-medium mt-1">
                    {tier.subtitle}
                  </p>
                  <div className="mt-4 text-lg font-bold text-electric">{tier.price}</div>
                  <p className="mt-3 text-slate-text text-sm leading-relaxed">{tier.description}</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-emerald" />
                        <span className="text-slate-text text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 text-sm ${
                      tier.highlighted
                        ? "bg-electric text-white hover:bg-electric-light shadow-lg shadow-electric/25"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy overflow-hidden relative">
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
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
              Ready to Architect Your Product Organization?
            </h2>
            <p className="mt-6 text-lg text-slate-text max-w-xl mx-auto leading-relaxed">
              Start with a complimentary Diagnostic Call. No commitment, just clarity.
            </p>
            <button
              onClick={openCalendly}
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25 text-base"
            >
              Book a Diagnostic Call
              <ArrowUpRight size={18} />
            </button>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
