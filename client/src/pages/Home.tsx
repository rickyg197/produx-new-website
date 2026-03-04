/*
 * PRODUX Homepage — Architectural Blueprint Design
 * Content from Kevin's ClickUp document updates
 * Dark navy + electric blue + emerald accents
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const VALUE_PROPS = [
  {
    icon: Target,
    title: "Tri-Party Co-Creation",
    description:
      "Most fractional hires fail due to misalignment. We treat role definition as product discovery\u2014aligning the Founder, the Expert, and the Roadmap before work begins.",
  },
  {
    icon: Globe,
    title: "Cross-Atlantic Pattern Recognition",
    description:
      "25+ years of US-market velocity applied to UK and European growth. We bridge the gap between engineering excellence and global commercial strategy.",
  },
  {
    icon: Search,
    title: "Strategic Gap Analysis",
    description:
      "We use AI-assisted auditing to identify the distance between your strategy and operational reality. We don\u2019t just solve problems; we ensure we are solving the right ones.",
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
    badge: "PAID FOUNDATIONAL ENGAGEMENT",
    badgeColor: "bg-electric/20 text-electric",
    description:
      "The Paid Foundational Engagement. We design the leadership seat and lock in the 90-day execution roadmap.",
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
    description: "Active leadership led by your Product Architect or a vetted specialist.",
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
    subtitle: "Fractional Leadership & Oversight",
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

const CASE_STUDIES = [
  {
    company: "Webidoo SPA",
    title: "Product Architecture for Global Scale",
    description:
      "Transformed a service-based business into a product-led organization. Launched 4 AI products; 10,000+ active users in Q1.",
    metric: "10,000+",
    metricLabel: "Active Users in Q1",
  },
  {
    company: "MyConnect.ai & Eventellect",
    title: "Strategic Executive Search",
    description:
      "Directed the search and 90-day onboarding strategy for senior product roles, eliminating \u201Conboarding lag\u201D and aligning technical roadmaps with commercial goals.",
    metric: "90-Day",
    metricLabel: "Onboarding Strategy",
  },
  {
    company: "LatAm FinTech",
    title: "Financial Inclusion Platform",
    description:
      "Architected a financial inclusion platform serving 60+ enterprises; synchronized requirements across 190+ public-sector databases and secured international banking alignment.",
    metric: "60+",
    metricLabel: "Enterprises Served",
  },
];

const TESTIMONIALS = [
  {
    name: "Madeleine J.",
    role: "Senior Account Manager, Synup",
    quote:
      "ProdUX is the real deal! The founder is great to work with, too. Highly recommend!",
  },
  {
    name: "Adrian A.",
    role: "Head of Product, Webidoo SPA",
    quote:
      "Produx support and experience have been pivotal to the work I am doing as Head of Product.",
  },
  {
    name: "Gerry D.",
    role: "Head of Development, Webidoo SPA",
    quote:
      "I had an outstanding experience with ProdUX! Their expertise in product analysis, design, and launch was invaluable.",
  },
];

const CLIENT_LOGOS = [
  { name: "fubo", logo: "/assets/fubo-logo.png" },
  { name: "yahoo!", logo: "/assets/yahoo-logo.png" },
  { name: "Webidoo", logo: "/assets/webidoo-logo.png" },
  { name: "RuleX", logo: "/assets/rulex-logo.png" },
  { name: "Gartner", logo: "/assets/gartner-logo.png" },
  { name: "Netflix", logo: "/assets/netflix-logo.png" },
  { name: "Vistaprint", logo: "/assets/vistaprint-logo.png" },
  { name: "Ticketmaster", logo: "/assets/ticketmaster-logo.png" },
];

const INDUSTRIES = [
  "eCommerce",
  "SaaS",
  "FinTech",
  "Entertainment",
  "MarTech",
  "Healthcare",
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
                  UK &bull; US &bull; EU
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Fractional Product Leadership{" "}
                <span className="text-electric">That Actually Works</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 text-lg text-slate-text leading-relaxed max-w-lg"
              >
                We don&rsquo;t just place talent&mdash;we co-create the role. Scale faster with a
                Product Architect who bridges the gap between strategy and execution.
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
                  Our Methodology
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
                  <div className="text-electric font-mono text-2xl font-bold">25+</div>
                  <div className="text-slate-text text-xs mt-1">Years of US-Market<br />Pattern Recognition</div>
                </div>
              </div>
            </motion.div>
          </div>
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
                High-Velocity Strategy for Global Scale
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We solve for alignment first, ensuring your product organization is built for speed
                and predictability.
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
                Our Framework
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Our Proprietary 5-Phase Framework for Predictable Scaling
              </h2>
              <p className="mt-4 text-lg text-slate-text leading-relaxed">
                We follow a structured approach to ensure your product organization is built on a
                foundation of alignment, not just &ldquo;filling seats.&rdquo;
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
                Strategy is only as strong as its weakest link. We synchronize Founder Vision,
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
                    {tier.highlighted ? "Start Architecture Phase" : "Learn More"}
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
                Proven Results
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Pattern Recognition Across Global Markets
              </h2>
              <p className="mt-4 text-lg text-slate-text leading-relaxed">
                Framing world-class experience into your product architecture.
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {CASE_STUDIES.map((cs) => (
              <StaggerItem key={cs.company}>
                <div className="group bg-white/5 border border-white/10 rounded-xl p-8 h-full hover:border-electric/30 transition-all duration-300">
                  <div className="text-electric font-mono text-xs tracking-wider uppercase mb-2">
                    {cs.company}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{cs.title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed mb-6">{cs.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-electric font-mono text-3xl font-bold">{cs.metric}</div>
                    <div className="text-slate-text text-xs mt-1">{cs.metricLabel}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== CLIENT LOGOS ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-navy tracking-tight">
                Delivering Results for Leading Companies
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We&rsquo;ve had the privilege of working with innovative companies across various
                industries, helping them achieve their product development goals.
              </p>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {CLIENT_LOGOS.map((logo) => (
              <StaggerItem key={logo.name}>
                <div className="flex items-center justify-center h-24 bg-warm-white rounded-xl border border-border hover:border-electric/20 transition-colors">
                  <img src={logo.logo} alt={logo.name} className="h-10 max-w-[140px] object-contain" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

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
                What Our Partners Say
              </h2>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white rounded-xl p-8 border border-border h-full">
                  <Quote size={24} className="text-electric/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">
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
              Ready to Move from Chaos to Clarity?
            </h2>
            <p className="mt-6 text-lg text-slate-text max-w-xl mx-auto leading-relaxed">
              Book a complimentary 20-minute Diagnostic Call to identify your alignment gaps.
              Qualified partners will be invited to enter our Strategy & Architecture Phase.
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
