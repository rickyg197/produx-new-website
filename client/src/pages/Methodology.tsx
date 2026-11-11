/*
 * PRODUX Methodology Page: how a retainer engagement runs, in five phases that repeat.
 * Copy source: Claude doc "produx.tech Site Copy". Diagram captions are short forms of the phase text.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClosingBand from "@/components/ClosingBand";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowDown, ArrowRight, Ear, Search, Target, Compass, RefreshCw } from "lucide-react";

const METHODOLOGY_BG = "/assets/methodology-bg.jpg";

const PHASES = [
  {
    num: "01",
    title: "Listen",
    caption: "What growth needs from the product",
    description:
      "Two weeks with you, your product leader and the numbers. What does growth need from the product, and what\u2019s in the way?",
    icon: Ear,
  },
  {
    num: "02",
    title: "Diagnose",
    caption: "The few things that matter most",
    description:
      "A short, plain read-out: the three to five things that matter most, and what to stop doing.",
    icon: Search,
  },
  {
    num: "03",
    title: "Decide",
    caption: "The bets, the order, what success looks like",
    description:
      "Agree the bets, the order and what success looks like, in terms the board will recognize.",
    icon: Target,
  },
  {
    num: "04",
    title: "Steer",
    caption: "Your team executes, I stay close",
    description:
      "Your team executes. I stay close: reviews, hard calls, unblocking, and keeping the plan honest.",
    icon: Compass,
  },
  {
    num: "05",
    title: "Review",
    caption: "Every quarter, reset the bets",
    description:
      "Every quarter we look at what moved and reset the bets. If I\u2019m no longer the best use of your money, I\u2019ll say so.",
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
                Methodology
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                How an engagement runs
              </h1>
              <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-2xl">
                Advice is only worth something if your team can act on it. So the work follows the
                same shape every time, then repeats.
              </p>
            </div>
          </SectionReveal>

          {/* Process diagram */}
          <SectionReveal delay={0.1}>
            <ol
              aria-label="The five phases, in order"
              className="mt-12 lg:mt-16 grid gap-8 lg:grid-cols-5 lg:gap-10"
            >
              {PHASES.map((phase, i) => (
                <li key={phase.num} className="relative">
                  <div className="h-full rounded-xl p-4 lg:p-5 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 bg-white/5 border border-white/10">
                    <div className="w-11 h-11 flex-shrink-0 rounded-lg bg-electric/15 flex items-center justify-center">
                      <phase.icon size={22} className="text-electric" />
                    </div>
                    <div>
                      <div className="text-electric font-mono text-xs font-medium">{phase.num}</div>
                      <div className="text-white font-bold text-lg leading-snug">{phase.title}</div>
                      <div className="mt-1 text-slate-text text-sm leading-snug">{phase.caption}</div>
                    </div>
                  </div>
                  {i < PHASES.length - 1 && (
                    <>
                      <ArrowDown
                        size={18}
                        aria-hidden="true"
                        className="lg:hidden absolute -bottom-[26px] left-1/2 -translate-x-1/2 text-electric"
                      />
                      <ArrowRight
                        size={18}
                        aria-hidden="true"
                        className="hidden lg:block absolute top-1/2 -right-[29px] -translate-y-1/2 text-electric"
                      />
                    </>
                  )}
                </li>
              ))}
            </ol>
          </SectionReveal>
        </div>
      </section>

      {/* Phase details */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <div className="space-y-6 max-w-4xl mx-auto">
            {PHASES.map((phase, i) => (
              <SectionReveal key={phase.num} delay={i * 0.05}>
                <div className="rounded-xl p-8 lg:p-10 bg-white border border-border">
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-5xl lg:text-6xl font-bold leading-none text-electric/15">
                      {phase.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <phase.icon size={22} className="text-electric" />
                        <h2 className="text-2xl font-bold text-navy">{phase.title}</h2>
                      </div>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <p className="mt-16 text-center text-2xl lg:text-3xl font-extrabold text-navy tracking-tight max-w-3xl mx-auto">
              I bring the pattern recognition. Your team brings the hands. That&rsquo;s the deal.
            </p>
          </SectionReveal>
        </div>
      </section>

      <ClosingBand />

      <Footer />
    </div>
  );
}
