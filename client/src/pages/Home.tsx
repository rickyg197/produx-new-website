/*
 * PRODUX Homepage — Architectural Blueprint Design
 * Content from Kevin's ClickUp document updates
 * Dark navy + electric blue + emerald accents
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Credentials from "@/components/Credentials";
import AdvisoryOffer from "@/components/AdvisoryOffer";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Link } from "wouter";
import { openCalendly } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Globe,
  Search,
  Compass,
  PenTool,
  CheckCircle2,
  Rocket,
  RefreshCw,
  ArrowUpRight,
  Quote,
} from "lucide-react";

const HERO_BG = "/assets/hero-bg.jpg";

const TEAM_IMG = "/assets/team-collaboration.jpg";

const METHODOLOGY_BG = "/assets/methodology-bg.jpg";

const SITUATIONS = [
  {
    title: "You have no senior product leader",
    description: "Get senior product leadership through an advisory retainer or a fractional CPO, without a full-time hire.",
    linkLabel: "See how I can lead",
    href: "/services",
  },
  {
    title: "You have a product leader who needs support",
    description: "Give them a third-party perspective and experienced counsel, whether you are scaling or pivoting.",
    linkLabel: "See the advisory retainer",
    href: "#advisory-retainer",
  },
  {
    title: "You know the need but lack the people",
    description: "Add a senior fractional PM, designer or product leader, selected by a CPO, not matched by an algorithm.",
    linkLabel: "See placements",
    href: "/placements",
  },
];

const VALUE_PROPS = [
  {
    icon: Target,
    title: "Tri-Party Co-Creation",
    description:
      "Most product problems are alignment problems. Before work begins, I align the founder, the person leading the work and the roadmap, whether the question is a role to fill, a gap to close, an opportunity to test or a strategy to change.",
  },
  {
    icon: Globe,
    title: "25 Years Leading Product",
    description:
      "In product since 2000, from Global Crossing to Ticketmaster, Fubo and Vista. I\u2019ve lived and worked on both sides of the Atlantic, and most of my work is with US companies.",
  },
  {
    icon: Search,
    title: "Strategic Gap Analysis",
    description:
      "Where are your strategy and your day-to-day furthest apart? I\u2019ve built AI tools that speed up the audit and surface patterns, but the judgment is mine: 25 years of knowing which gaps matter and what to do about them.",
  },
];

const PHASES = [
  {
    num: "01",
    title: "Diagnostic",
    badge: "COMPLIMENTARY",
    badgeColor: "bg-emerald/20 text-emerald",
    description: "High-level identification of alignment gaps and immediate bottlenecks.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Architecture",
    badge: "FIRST MONTH OF THE RETAINER",
    badgeColor: "bg-electric/20 text-electric",
    description:
      "I define the problem and the strategy, design the leadership seat if one is needed, and lock in the 90-day roadmap.",
    icon: PenTool,
    highlighted: true,
  },
  {
    num: "03",
    title: "Validation",
    badge: null,
    badgeColor: "",
    description: "Stress-testing the strategy against technical and commercial constraints.",
    icon: CheckCircle2,
  },
  {
    num: "04",
    title: "Execution",
    badge: null,
    badgeColor: "",
    description: "Your 90-day roadmap comes to life here, led directly by me or by a fractional specialist I place. Either way, I stay involved. I don't hand off and disappear.",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Iteration",
    badge: null,
    badgeColor: "",
    description: "Continuous measurement of 90-day outcomes and long-term retention.",
    icon: RefreshCw,
  },
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
    title: "The Advisory Retainer",
    subtitle: "Up to 10 Hours a Month for 3 Months",
    price: "Monthly Cash Retainer, No Equity",
    description: "Senior product judgment for you and your team, starting with a board-ready 90-day execution strategy.",
    features: [
      "Tri-Party Co-Creation workshop",
      "90-Day execution roadmap",
      "Board-ready strategy document",
      "Outside perspective for your product leader",
    ],
    highlighted: true,
  },
  {
    title: "Fractional Leadership",
    subtitle: "Hands-On Product Leadership",
    price: "Expert Hourly Rate + Retainer",
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

const CASE_STUDIES: {
  company: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}[] = [
  {
    company: "Webidoo",
    title: "Product Architecture for Global Scale",
    description:
      "Helped turn a service-based business into a product-led organization, and launched 3 AI products.",
    metric: "3",
    metricLabel: "AI Products Launched",
  },
  {
    company: "NEEW",
    title: "Product Strategy, Roadmap and PRDs",
    description:
      "Product strategy, the product roadmap and the PRDs behind it, delivered as NEEW\u2019s fractional CPO.",
  },
];

const TESTIMONIALS = [
  {
    name: "Adriano Araldi",
    role: "Former Head of Product, Webidoo",
    quote:
      "ProdUX is the kind of partner every product team needs. They excel at bridging the gap between high-level vision and tactical execution — clear communication and a level of technical insight that keeps projects moving forward efficiently. Highly recommended for any organisation looking to scale their digital product capabilities.",
  },
  {
    name: "Niousha Roshani",
    role: "Co-Founder, NEEW.io",
    quote:
      "The team's expertise at ProdUX is unparalleled, and helped us bring a complex product to life on a global scale.",
  },
];

const INDUSTRIES = [
  "eCommerce",
  "SaaS",
  "FinTech",
  "Entertainment",
  "MarTech",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
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
                  US &bull; UK &bull; EU
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Senior Product Leadership{" "}
                <span className="text-electric">for Companies at a Turning Point</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 text-lg text-slate-text leading-relaxed max-w-lg"
              >
                Scaling, pivoting, or stuck between the two: I advise your product leader or step in
                where you don&rsquo;t have one. Need more hands? I place the right fractional talent,
                selected by a CPO.
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
                  Book a Diagnostic Call
                  <ArrowRight size={18} />
                </button>
                <Link
                  href="/methodology"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200 text-base"
                >
                  My Methodology
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-electric/10 rounded-2xl blur-2xl" />
                <img
                  src={TEAM_IMG}
                  alt="Product strategy team collaboration"
                  className="relative rounded-xl shadow-2xl shadow-black/40 w-full object-cover aspect-[4/3]"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-navy-light/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl">
                  <div className="text-electric font-mono text-2xl font-bold">Since 2000</div>
                  <div className="text-slate-text text-xs mt-1">In Product, from Global Crossing<br />to Ticketmaster, Fubo and Vista</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== WHERE ARE YOU TODAY ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Where Are You Today?
              </h2>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SITUATIONS.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="bg-warm-white rounded-xl p-8 border border-border h-full flex flex-col">
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                  {item.href.startsWith("#") ? (
                    <a href={item.href} className="mt-6 inline-flex items-center gap-2 text-electric font-semibold text-sm">
                      {item.linkLabel}
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-electric font-semibold text-sm">
                      {item.linkLabel}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== VALUE PROPS SECTION ========== */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                Why PRODUX
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Experience You Are Paying For, Not Software
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                AI speeds up my work. Your results come from the judgment behind it.
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {VALUE_PROPS.map((prop) => (
              <StaggerItem key={prop.title}>
                <div className="group relative bg-white rounded-xl p-8 border border-border hover:border-electric/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric/5 h-full">
                  <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                    <prop.icon className="text-electric" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <AdvisoryOffer />

      {/* ========== 5-PHASE METHODOLOGY (Preview) ========== */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{
          backgroundImage: `url(${METHODOLOGY_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-dark/92" />
        <div className="container relative z-10">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-emerald font-mono text-sm font-medium tracking-wider uppercase">
                My Framework
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                A 5-Phase Framework for Predictable Scaling
              </h2>
              <p className="mt-4 text-lg text-slate-text leading-relaxed">
                A structured approach that builds your product organization on a foundation of
                alignment, not just &ldquo;filling seats.&rdquo;
              </p>
            </div>
          </SectionReveal>

          {/* Phase Timeline */}
          <StaggerContainer className="grid md:grid-cols-5 gap-4 lg:gap-5">
            {PHASES.map((phase) => (
              <StaggerItem key={phase.num}>
                <div
                  className={`relative rounded-xl p-6 h-full transition-all duration-300 ${
                    phase.highlighted
                      ? "bg-electric/15 border-2 border-electric/40 shadow-lg shadow-electric/10"
                      : "bg-white/5 border border-white/10 hover:border-white/20"
                  }`}
                >
                  <span className="text-electric/40 font-mono text-4xl font-bold leading-none">
                    {phase.num}
                  </span>
                  <div className="mt-3 flex items-center gap-2">
                    <phase.icon size={18} className={phase.highlighted ? "text-electric" : "text-slate-text"} />
                    <h3 className="text-white font-bold text-lg">{phase.title}</h3>
                  </div>
                  {phase.badge && (
                    <span className={`inline-block mt-2 px-2 py-0.5 text-[10px] font-mono font-medium rounded ${phase.badgeColor}`}>
                      {phase.badge}
                    </span>
                  )}
                  <p className="mt-3 text-slate-text text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/methodology"
                className="inline-flex items-center gap-2 px-6 py-3 border border-electric/30 text-electric font-semibold rounded-lg hover:bg-electric/10 transition-all duration-200"
              >
                Explore Full Methodology
                <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== TRI-PARTY VENN DIAGRAM ========== */}
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
                Strategy is only as strong as its weakest link. I synchronize Founder Vision,
                Expert Leadership, and the 90-Day Roadmap to eliminate friction.
              </p>
            </div>
          </SectionReveal>

          {/* Venn Diagram - SVG based for precise positioning */}
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

      {/* ========== ENGAGEMENT MODEL ========== */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                Engagement Model
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Investment & Engagement
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Engagement-based pricing tailored to specific strategic outcomes.
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {ENGAGEMENT_TIERS.map((tier) => (
              <StaggerItem key={tier.title}>
                <div
                  className={`relative rounded-xl p-8 h-full flex flex-col transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-navy text-white border-2 border-electric/40 shadow-xl shadow-electric/10 scale-[1.02]"
                      : "bg-white border border-border hover:border-electric/20 hover:shadow-lg"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric text-white text-xs font-mono font-semibold rounded-full">
                      RECOMMENDED
                    </div>
                  )}
                  <div>
                    <h3 className={`text-xl font-bold ${tier.highlighted ? "text-white" : "text-navy"}`}>
                      {tier.title}
                    </h3>
                    <p className={`text-sm mt-1 ${tier.highlighted ? "text-electric-light" : "text-electric"} font-mono font-medium`}>
                      {tier.subtitle}
                    </p>
                  </div>
                  <div className={`mt-4 text-lg font-bold ${tier.highlighted ? "text-electric-light" : "text-navy"}`}>
                    {tier.price}
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${tier.highlighted ? "text-slate-text" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${tier.highlighted ? "text-emerald" : "text-electric"}`}
                        />
                        <span className={`text-sm ${tier.highlighted ? "text-slate-text" : "text-muted-foreground"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 text-sm ${
                      tier.highlighted
                        ? "bg-electric text-white hover:bg-electric-light shadow-lg shadow-electric/25"
                        : "border border-navy/20 text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    {tier.highlighted ? "Talk to Me About a Retainer" : "Learn More"}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== CASE STUDIES ========== */}
      <section className="py-20 lg:py-28 bg-navy-dark">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-emerald font-mono text-sm font-medium tracking-wider uppercase">
                Selected Work
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Recent Client Work
              </h2>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {CASE_STUDIES.map((cs) => (
              <StaggerItem key={cs.company}>
                <div className="group bg-white/5 border border-white/10 rounded-xl p-8 h-full hover:border-electric/30 transition-all duration-300">
                  <div className="text-electric font-mono text-xs tracking-wider uppercase mb-2">
                    {cs.company}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{cs.title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed mb-6">{cs.description}</p>
                  {cs.metric && (
                    <div className="pt-4 border-t border-white/10">
                      <div className="text-electric font-mono text-3xl font-bold">{cs.metric}</div>
                      <div className="text-slate-text text-xs mt-1">{cs.metricLabel}</div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Credentials />

      {/* ========== INDUSTRIES ========== */}
      <section className="py-16 lg:py-20 bg-white border-y border-border">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-navy">
                Proven Expertise Across Diverse Industries
              </h3>
            </div>
          </SectionReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 bg-warm-white border border-border rounded-lg text-sm font-medium text-navy/70"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                Testimonials
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                What Clients Say
              </h2>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white rounded-xl p-8 border border-border h-full flex flex-col">
                  <Quote size={24} className="text-electric/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-bold text-navy">{t.name}</div>
                    <div className="text-muted-foreground text-sm">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
        {/* Decorative grid */}
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
              Not Sure Where the Gap Is? Let\u2019s Find It.
            </h2>
            <p className="mt-6 text-lg text-slate-text max-w-xl mx-auto leading-relaxed">
              Book a complimentary 20-minute Diagnostic Call to identify your alignment gaps.
              If there is a fit, the next step is the advisory retainer.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25 text-base"
              >
                Book a Diagnostic Call
                <ArrowUpRight size={18} />
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
