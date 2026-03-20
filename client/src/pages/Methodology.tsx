/*
 * PRODUX Methodology Page — 5-Phase Framework + Tri-Party Venn
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  PenTool,
  CheckCircle2,
  Rocket,
  RefreshCw,
} from "lucide-react";

const METHODOLOGY_BG = "/assets/methodology-bg.jpg";

const PHASES = [
  {
    num: "01",
    title: "Diagnostic",
    badge: "COMPLIMENTARY",
    badgeColor: "bg-emerald/20 text-emerald border-emerald/30",
    description:
      "High-level identification of alignment gaps and immediate bottlenecks. This is a complimentary 20-minute session designed to assess strategic fit and identify the most critical areas of misalignment in your product organization.",
    details: [
      "Alignment gap identification",
      "Bottleneck assessment",
      "Strategic fit evaluation",
      "Immediate opportunity mapping",
    ],
    icon: Compass,
  },
  {
    num: "02",
    title: "Architecture",
    badge: "PAID FOUNDATIONAL ENGAGEMENT",
    badgeColor: "bg-electric/20 text-electric border-electric/30",
    description:
      "The Paid Foundational Engagement. We design the leadership seat and lock in the 90-day execution roadmap. This is the hero phase where Tri-Party Co-Creation happens\u2014aligning Founder Vision, Expert Leadership, and the Product Roadmap.",
    details: [
      "Tri-Party Co-Creation workshop",
      "Leadership seat design",
      "90-Day execution roadmap",
      "Board-ready strategy document",
      "Venn Diagram alignment exercise",
    ],
    icon: PenTool,
    highlighted: true,
  },
  {
    num: "03",
    title: "Validation",
    badge: null,
    badgeColor: "",
    description:
      "Stress-testing the strategy against technical and commercial constraints. We ensure the architecture holds up under real-world conditions before committing to full execution.",
    details: [
      "Technical feasibility review",
      "Commercial viability testing",
      "Stakeholder alignment check",
      "Risk assessment & mitigation",
    ],
    icon: CheckCircle2,
  },
  {
    num: "04",
    title: "Execution",
    badge: null,
    badgeColor: "",
    description:
      "Your 90-day roadmap comes to life here — led directly by Ricky or by a PRODUX-placed fractional specialist. Either way, we stay involved. We don't hand off and disappear.",
    details: [
      "Fractional CPO/Head of Product",
      "Sprint planning & oversight",
      "Team coaching & mentoring",
      "Stakeholder communication",
    ],
    icon: Rocket,
  },
  {
    num: "05",
    title: "Iteration",
    badge: null,
    badgeColor: "",
    description:
      "Continuous measurement of 90-day outcomes and long-term retention. We don\u2019t just deliver and leave\u2014we iterate, measure, and optimize for sustained growth.",
    details: [
      "90-day outcome measurement",
      "Strategy refinement",
      "Team retention optimization",
      "Next-cycle planning",
    ],
    icon: RefreshCw,
  },
];

export default function Methodology() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
        style={{
          backgroundImage: `url(${METHODOLOGY_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-dark/95" />
        <div className="container relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="text-emerald font-mono text-sm font-medium tracking-wider uppercase">
                Our Framework
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Our Proprietary 5-Phase Framework for Predictable Scaling
              </h1>
              <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-2xl">
                We follow a structured approach to ensure your product organization is built on a
                foundation of alignment, not just &ldquo;filling seats.&rdquo;
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Phase Details */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <div className="space-y-8">
            {PHASES.map((phase, i) => (
              <SectionReveal key={phase.num} delay={i * 0.05}>
                <div
                  className={`relative rounded-xl p-8 lg:p-10 transition-all duration-300 ${
                    phase.highlighted
                      ? "bg-navy border-2 border-electric/30 shadow-xl"
                      : "bg-white border border-border"
                  }`}
                >
                  <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
                    {/* Phase Number */}
                    <div className="flex items-start gap-6">
                      <span
                        className={`font-mono text-6xl lg:text-7xl font-bold leading-none ${
                          phase.highlighted ? "text-electric/30" : "text-electric/15"
                        }`}
                      >
                        {phase.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <phase.icon
                          size={22}
                          className={phase.highlighted ? "text-electric" : "text-electric"}
                        />
                        <h3
                          className={`text-2xl font-bold ${
                            phase.highlighted ? "text-white" : "text-navy"
                          }`}
                        >
                          {phase.title}
                        </h3>
                        {phase.badge && (
                          <span
                            className={`px-3 py-1 text-[11px] font-mono font-medium rounded-full border ${phase.badgeColor}`}
                          >
                            {phase.badge}
                          </span>
                        )}
                      </div>

                      <p
                        className={`mt-4 text-base leading-relaxed max-w-2xl ${
                          phase.highlighted ? "text-slate-text" : "text-muted-foreground"
                        }`}
                      >
                        {phase.description}
                      </p>

                      <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                        {phase.details.map((d) => (
                          <li key={d} className="flex items-center gap-2">
                            <CheckCircle2
                              size={14}
                              className={`flex-shrink-0 ${
                                phase.highlighted ? "text-emerald" : "text-electric"
                              }`}
                            />
                            <span
                              className={`text-sm ${
                                phase.highlighted ? "text-slate-text" : "text-muted-foreground"
                              }`}
                            >
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tri-Party Venn Diagram */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                The Alignment Zone
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Tri-Party Co-Creation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Strategy is only as strong as its weakest link. We synchronize Founder Vision,
                Expert Leadership, and the 90-Day Roadmap to eliminate friction.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="relative max-w-xl mx-auto">
              <svg viewBox="0 0 500 440" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Circle 1 - Founder Vision (top-left) */}
                <circle cx="195" cy="175" r="140" fill="oklch(0.60 0.20 260 / 0.08)" stroke="oklch(0.60 0.20 260 / 0.3)" strokeWidth="2" />
                {/* Circle 2 - Expert Leadership (top-right) */}
                <circle cx="305" cy="175" r="140" fill="oklch(0.65 0.17 160 / 0.08)" stroke="oklch(0.65 0.17 160 / 0.3)" strokeWidth="2" />
                {/* Circle 3 - 90-Day Architecture (bottom-center) */}
                <circle cx="250" cy="275" r="140" fill="oklch(0.15 0.04 260 / 0.05)" stroke="oklch(0.15 0.04 260 / 0.2)" strokeWidth="2" />

                {/* Labels positioned outside overlap zones */}
                <text x="130" y="105" textAnchor="middle" className="fill-electric text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 700 }}>Founder</text>
                <text x="130" y="122" textAnchor="middle" className="fill-electric text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 700 }}>Vision</text>

                <text x="370" y="105" textAnchor="middle" className="fill-emerald text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 700 }}>Expert</text>
                <text x="370" y="122" textAnchor="middle" className="fill-emerald text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 700 }}>Leadership</text>

                <text x="250" y="340" textAnchor="middle" className="fill-navy text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 700 }}>90-Day Product</text>
                <text x="250" y="360" textAnchor="middle" className="fill-navy text-sm font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 700 }}>Architecture</text>

                {/* Center badge background */}
                <rect x="195" y="190" width="110" height="48" rx="12" fill="oklch(0.60 0.20 260)" />
                <text x="250" y="210" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", fontWeight: 500, letterSpacing: "0.15em", fill: "white", opacity: 0.8 }}>THE</text>
                <text x="250" y="228" textAnchor="middle" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", fontWeight: 800, fill: "white" }}>Alignment Zone</text>
              </svg>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy-dark overflow-hidden relative">
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
              Start with a Complimentary Diagnostic
            </h2>
            <p className="mt-6 text-lg text-slate-text max-w-xl mx-auto leading-relaxed">
              Phase 01 is on us. Book a 20-minute call to identify your alignment gaps and discover
              if our framework is the right fit.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25 text-base"
            >
              Book a Diagnostic Call
              <ArrowUpRight size={18} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
