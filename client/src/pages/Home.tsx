/*
 * PRODUX Homepage
 * Copy source: Claude doc "produx.tech Site Copy" (11 Nov 2026 positioning).
 * One offer for one buyer: a product advisory retainer for CEOs of $20M+ companies.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Credentials from "@/components/Credentials";
import ClosingBand from "@/components/ClosingBand";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Link } from "wouter";
import { openCalendly } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote, Briefcase, Handshake, TrendingUp, Layers } from "lucide-react";

const HERO_BG = "/assets/hero-bg.jpg";

// Placeholder until Ricky supplies a new hero picture (the old one showed "2025 ROADMAP").
const HERO_IMG = "/assets/discovery-session.jpg";

const WHO = [
  {
    title: "No product leader yet.",
    description:
      "The company has outgrown founder-led product, and hiring a full-time CPO is a big, slow bet. I give you that judgment now, and help you hire the right person when it’s time.",
  },
  {
    title: "A product leader who needs backup.",
    description:
      "Your head of product is good and stretched. I work alongside them as a sounding board and a second pair of eyes, not a replacement.",
  },
  {
    title: "A turning point.",
    description:
      "A new market, a new segment, a pricing change or a platform rebuild. The product decisions here are expensive to get wrong. I’ve made them before.",
  },
];

const WHAT_CHANGES = [
  "A roadmap tied to the growth targets the board actually cares about.",
  "Clear calls on what to build, what to cut and what to stop talking about.",
  "A product team that knows why, not just what.",
  "Fewer expensive surprises.",
];

const TRACK_RECORD = [
  {
    icon: Briefcase,
    title: "Ran the business, not just the roadmap.",
    description:
      "Global GM of Vistaprint’s $40M digital business: 40+ people, a rebuilt product portfolio and business model.",
  },
  {
    icon: Handshake,
    title: "Negotiated the deal.",
    description:
      "Led a five-year partnership with Wix, and the migration of Vistaprint’s digital platform onto it.",
  },
  {
    icon: TrendingUp,
    title: "Built through a public listing.",
    description: "VP of Product at Fubo in 2020, the year it listed on the NYSE.",
  },
  {
    icon: Layers,
    title: "Bought and integrated.",
    description:
      "Built the evaluation rubric, ran diligence and planned integration on acquisitions as an operator and as CPO.",
  },
];

// Adriano Araldi's testimonial stays exactly as given. Do not edit its wording or punctuation.
const TESTIMONIAL = {
  name: "Adriano Araldi",
  role: "Former Head of Product, Webidoo",
  quote:
    "ProdUX is the kind of partner every product team needs. They excel at bridging the gap between high-level vision and tactical execution — clear communication and a level of technical insight that keeps projects moving forward efficiently. Highly recommended for any organisation looking to scale their digital product capabilities.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ========== HERO ========== */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/60" />

        <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-electric/10 border border-electric/20 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                <span className="text-electric text-xs font-mono font-medium tracking-wide">
                  Product advisory for growth-stage companies
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Your next stage of growth{" "}
                <span className="text-electric">runs through the product.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 text-lg text-slate-text leading-relaxed max-w-lg"
              >
                I work with CEOs as their CPO, about 10 hours a month. Your team does the work. I
                make sure it lands.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25 hover:shadow-electric/40 text-base"
                >
                  Book a call
                  <ArrowRight size={18} />
                </button>
                <Link
                  href="/methodology"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200 text-base"
                >
                  How it works
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-electric/10 rounded-2xl blur-2xl" />
                <img
                  src={HERO_IMG}
                  alt="Leadership team working through product decisions"
                  className="relative rounded-xl shadow-2xl shadow-black/40 w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-4 lg:-left-6 bg-navy-light/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl">
                  <div className="text-electric font-mono text-2xl font-bold">Since 2000</div>
                  <div className="text-slate-text text-xs mt-1">Ticketmaster, Fubo, Vista.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== WHO I WORK WITH ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Who I work with
              </h2>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {WHO.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="bg-warm-white rounded-xl p-8 border border-border h-full flex flex-col">
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== WHAT CHANGES + WHY A RETAINER ========== */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container">
          <SectionReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-emerald font-mono text-sm font-medium tracking-wider uppercase">
                  Why a retainer
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  What changes
                </h2>
                <p className="mt-5 text-lg text-slate-text leading-relaxed">
                  You get executive product judgment without a full-time salary, a recruiter fee or
                  a six-month search. I work remotely, about 10 hours a month, for cash, not equity.
                  If it stops being useful, you stop.
                </p>
                <button
                  onClick={openCalendly}
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25"
                >
                  Book a call
                  <ArrowRight size={18} />
                </button>
              </div>
              <ul className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-5">
                {WHAT_CHANGES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-emerald" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== TRACK RECORD ========== */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Track record
              </h2>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TRACK_RECORD.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="group relative bg-white rounded-xl p-8 border border-border hover:border-electric/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric/5 h-full">
                  <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                    <item.icon className="text-electric" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== PROOF STRIP ========== */}
      <Credentials />

      <section className="pb-20 lg:pb-28 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="max-w-2xl mx-auto bg-warm-white rounded-xl p-8 border border-border">
              <Quote size={24} className="text-electric/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                &ldquo;{TESTIMONIAL.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-border">
                <div className="font-bold text-navy">{TESTIMONIAL.name}</div>
                <div className="text-muted-foreground text-sm">{TESTIMONIAL.role}</div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ClosingBand />

      <Footer />
    </div>
  );
}
