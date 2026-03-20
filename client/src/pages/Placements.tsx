/*
 * PRODUX Placements Page — Fractional Talent Placement
 * Dark navy + electric blue + emerald accents, matching site design system
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Link } from "wouter";
import { openCalendly } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  AlertCircle,
  Clock,
  Search,
} from "lucide-react";

const PLACEMENTS_HERO_IMG = "/assets/placements-hero.png";

const WHO_ITS_FOR = [
  {
    icon: AlertCircle,
    heading: "You've been burned by a generic agency",
    body: "You got a list of profiles and a warm handshake. Three months later, the engagement fizzled. You need someone accountable for the outcome, not just the introduction.",
  },
  {
    icon: Clock,
    heading: "You can't afford to get this hire wrong",
    body: "Your product function is a bottleneck, and every week matters. A mis-hire — even a temporary one — costs more than the fee.",
  },
  {
    icon: Search,
    heading: "You need judgment, not just a CV match",
    body: "The role is nuanced. It needs someone who can hit the ground running and operate like a senior leader from day one. A keyword search won't find that.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "We diagnose before we match",
    body: "Most agencies ask what role you need. We ask what problem you're solving. As a practising CPO, Ricky works with you to find the real gap before a single candidate is considered.",
  },
  {
    step: "02",
    title: "Vetted the way we'd hire ourselves",
    body: "Everyone in our network is personally assessed — how they think, how they handle ambiguity, and whether they have the judgment a fractional role requires. You meet one person. The right one.",
  },
  {
    step: "03",
    title: "We stay involved after the introduction",
    body: "Once your person is embedded, we help onboard them, align them to your strategy, and check in to make sure it's working. We're accountable for the outcome.",
  },
];

const ROLES_WE_PLACE = [
  "Fractional Product Manager",
  "Fractional Head of Product",
  "Fractional UX / Product Designer",
  "Fractional Product Strategist",
  "Fractional AI Product Lead",
  "Fractional Chief Product Officer",
];

export default function Placements() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-navy-dark">
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal>
              <div>
                <span className="text-emerald font-mono text-sm font-medium tracking-wider uppercase">
                  Fractional Talent
                </span>
                <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  The Right Person.{" "}
                  <span className="text-electric">Placed by Someone Who&rsquo;s Done the Job.</span>
                </h1>
                <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-lg">
                  Most agencies match CVs. We place fractional product talent the way a CPO hires
                  for their own team.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25"
                >
                  Start a Conversation
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                  <img
                    src={PLACEMENTS_HERO_IMG}
                    alt="Fractional talent placement collaboration"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-6 -left-4 lg:-left-8 bg-navy/90 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-electric/20 flex items-center justify-center">
                      <Users className="text-electric" size={20} />
                    </div>
                    <div>
                      <div className="text-electric font-bold text-lg">CPO-Led</div>
                      <div className="text-slate-text text-xs">Every Placement</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ========== WHO IT'S FOR ========== */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                Who It's For
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                For Founders Who Need It Done Right
              </h2>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {WHO_ITS_FOR.map((card) => (
              <StaggerItem key={card.heading}>
                <div className="group relative bg-white rounded-xl p-8 border border-border hover:border-electric/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric/5 h-full">
                  <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                    <card.icon className="text-electric" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{card.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
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
        <div className="container relative z-10">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-emerald font-mono text-sm font-medium tracking-wider uppercase">
                How It Works
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Placed by a CPO. Not by an Algorithm.
              </h2>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {HOW_IT_WORKS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 h-full hover:border-electric/30 transition-all duration-300">
                  <span className="text-electric/40 font-mono text-5xl font-bold leading-none">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-white font-bold text-xl">{step.title}</h3>
                  <p className="mt-3 text-slate-text text-sm leading-relaxed">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== ROLES WE PLACE ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Roles We Place
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {ROLES_WE_PLACE.map((role) => (
                <span
                  key={role}
                  className="px-5 py-2.5 bg-warm-white border border-border rounded-lg text-sm font-medium text-navy/70 hover:border-electric/30 hover:text-electric transition-all duration-200"
                >
                  {role}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
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
              Ready to Place the Right Person?
            </h2>
            <p className="mt-6 text-lg text-slate-text max-w-xl mx-auto leading-relaxed">
              We're selectively taking on new placement clients. If you've been through the agency
              process and know there has to be a better way — let's talk.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25 text-base"
              >
                Book a Discovery Call
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
