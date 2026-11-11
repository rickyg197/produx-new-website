/*
 * PRODUX Services Page: one offer, the product advisory retainer.
 * Copy source: Claude doc "produx.tech Site Copy". No prices on the site.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClosingBand from "@/components/ClosingBand";
import { SectionReveal } from "@/components/SectionReveal";
import { openCalendly } from "@/lib/utils";
import { ArrowRight, CheckCircle2, XCircle, Users, UserX } from "lucide-react";

const COVERS = [
  "Product strategy and the roadmap, tied to your growth targets.",
  "Hard calls: what to build, what to cut, where to double down.",
  "Regular time with you and your product leader, plus async review of plans, specs and launches.",
  "Board and investor narrative for the product.",
  "Platform and architecture direction at the decision level.",
  "M&A: who to buy and why, a scoring rubric, diligence and integration planning. Major partnerships: structure, negotiation and rollout.",
  "Senior product hiring: defining the role and the final interview.",
];

const HOW_IT_RUNS = [
  "About 10 hours a month, remote by default, in person when it matters.",
  "Three months to start, then month to month.",
  "Cash only. No equity deals.",
];

const NOT_FOR_YOU = [
  "You need someone hands-on, 20 or more hours a week. Hire, and I can help you find them.",
  "There’s no team to act on the advice yet.",
  "You’re looking for a co-founder paid in equity.",
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
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
                Services
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                One offer. Senior product judgment, on retainer.
              </h1>
              <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-2xl">
                A monthly advisory retainer for CEOs of growth-stage companies, built around about
                10 hours of my time.
              </p>
              <button
                onClick={openCalendly}
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25"
              >
                Book a call
                <ArrowRight size={18} />
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* What it covers + how it runs */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start">
            <SectionReveal>
              <div className="bg-white rounded-xl p-8 lg:p-10 border border-border">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-navy tracking-tight">
                  What the retainer covers
                </h2>
                <ul className="mt-8 space-y-4">
                  {COVERS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-electric" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="bg-navy rounded-xl p-8 lg:p-10 border border-electric/20">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  How it runs
                </h2>
                <ul className="mt-8 space-y-5">
                  {HOW_IT_RUNS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-emerald" />
                      <span className="text-white font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* People + fit */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <SectionReveal className="h-full">
              <div className="bg-warm-white rounded-xl p-8 lg:p-10 border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-6">
                  <Users className="text-electric" size={24} />
                </div>
                <h2 className="text-2xl font-extrabold text-navy tracking-tight">
                  When you need people
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  If the advice needs more hands than you have, I can find them: product managers,
                  designers or a permanent product leader, from a network built since 2000. It&rsquo;s
                  part of the relationship, not a separate business, and I&rsquo;ll quote it when it
                  comes up.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15} className="h-full">
              <div className="bg-warm-white rounded-xl p-8 lg:p-10 border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-6">
                  <UserX className="text-electric" size={24} />
                </div>
                <h2 className="text-2xl font-extrabold text-navy tracking-tight">
                  This is not for you if
                </h2>
                <ul className="mt-4 space-y-4">
                  {NOT_FOR_YOU.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle size={20} className="mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <ClosingBand />

      <Footer />
    </div>
  );
}
