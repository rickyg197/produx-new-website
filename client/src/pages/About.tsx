/*
 * PRODUX About Us Page — Architectural Blueprint Design
 * Dark navy base, electric blue accents, Plus Jakarta Sans typography
 * Content from the existing produx.tech/about-us, updated with new positioning
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Link } from "wouter";
import { openCalendly } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  Handshake,
  Lightbulb,
  Linkedin,
  Users,
  Target,
  Award,
  Globe,
} from "lucide-react";

const ABOUT_HERO_IMG = "/assets/about-hero.png";

const RICKY_IMG = "/assets/ricky-gordon.jpg";
const STEVEN_IMG = "/assets/steven-gianakouros.jpeg";
const FEDERICO_IMG = "/assets/federico-salvitte.jpeg";
const STEVE_MORGAN_IMG = "/assets/Steve-Morgan.jpeg";

const FUBO_LOGO = "/assets/fubo-logo.png";
const YAHOO_LOGO = "/assets/yahoo-logo.png";
const WEBIDOO_LOGO = "/assets/webidoo-logo.png";
const RULEX_LOGO = "/assets/rulex-logo.png";

const STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Expert Team Members" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "25+", label: "Years Experience" },
];

const LEADERSHIP_TEAM = [
  {
    name: "Ricky Gordon",
    title: "Founder & CEO",
    description: "Fractional CPO and product strategist. 25+ years across product, engineering, and organisational design in the US, UK, and Europe.",
    image: RICKY_IMG,
    linkedin: "https://www.linkedin.com/in/rickygordon",
  },
  {
    name: "Steven Gianakouros",
    title: "Chief Design Officer",
    description: "Former Netflix Design Manager and VP of Design at Magic. Expert in product design, brand systems, and UX at a global scale.",
    image: STEVEN_IMG,
    linkedin: "https://www.linkedin.com/in/kouros/",
  },
  {
    name: "Federico Salvitte",
    title: "Chief Marketing Officer",
    description: "Brand strategy, go-to-market, and growth. Deep expertise across European and US markets in technology and professional services.",
    image: FEDERICO_IMG,
    linkedin: "https://www.linkedin.com/in/federicosalvitti/",
  },
];

const BOARD_OF_DIRECTORS = [

  {
    name: "Steve Morgan",
    title: "Board Director — Finance & FinTech Strategy",
    description: "Co-Founder of Cultivating Solutions. Former Director at Lehman Brothers and 14-year Citi veteran across Global Markets, Prime Brokerage, and ICG Operations.",
    image: STEVE_MORGAN_IMG,
    linkedin: "https://www.linkedin.com/in/steven-morgan-a10080138/",
  },
  {
    name: "Federico Salvitte",
    title: "Board Director",
    description: "Also serves as Chief Marketing Officer across PRODUX client engagements and advisory work.",
    image: FEDERICO_IMG,
    linkedin: "https://www.linkedin.com/in/federicosalvitti/",
  },
];

const VALUES = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, pushing boundaries to deliver exceptional results for every engagement.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We build lasting partnerships based on trust, transparency, and mutual success. Your outcomes are our outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace innovation and creative thinking to solve complex product challenges with AI-first methodologies.",
  },
];

const CLIENT_LOGOS = [
  { name: "fubo", logo: FUBO_LOGO },
  { name: "yahoo!", logo: YAHOO_LOGO },
  { name: "Webidoo", logo: WEBIDOO_LOGO },
  { name: "RuleX", logo: RULEX_LOGO },
  { name: "Gartner", logo: "/assets/gartner-logo.png" },
  { name: "Netflix", logo: "/assets/netflix-logo.png" },
  { name: "Vistaprint", logo: "/assets/vistaprint-logo.png" },
  { name: "Ticketmaster", logo: "/assets/ticketmaster-logo.png" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ========== HERO ========== */}
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
                  About PRODUX
                </span>
                <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Your Partner in{" "}
                  <span className="text-electric">Product Architecture</span>{" "}
                  Success
                </h1>
                <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-lg">
                  We connect ambitious companies with exceptional product leadership to
                  build organizations that scale predictably. From strategy to execution,
                  we architect the product layer that drives growth.
                </p>
                <button
                  onClick={openCalendly}
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25"
                >
                  Book a Diagnostic Call
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                  <img
                    src={ABOUT_HERO_IMG}
                    alt="PRODUX team strategy session"
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
                      <Globe className="text-electric" size={20} />
                    </div>
                    <div>
                      <div className="text-electric font-bold text-lg">UK &bull; US &bull; EU</div>
                      <div className="text-slate-text text-xs">Cross-Atlantic Coverage</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="py-12 lg:py-16 bg-white border-b border-border">
        <div className="container">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold text-electric tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== FOUNDER SECTION ========== */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-start">
            <SectionReveal>
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-xl mx-auto lg:mx-0">
                    <img
                      src={RICKY_IMG}
                      alt="Ricky Gordon - Founder & CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-electric rounded-tr-lg" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-emerald rounded-bl-lg" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">Ricky Gordon</h3>
                <p className="text-electric text-sm font-medium">Founder & CEO</p>
                <div className="flex justify-center lg:justify-start gap-3 mt-4">
                  <a
                    href="https://www.linkedin.com/in/rickygordon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-electric/10 hover:bg-electric/20 flex items-center justify-center text-electric transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div>
                <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                  Our Story
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                  Founded with a Vision for Excellence
                </h2>
                <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-base">
                  <p>
                    Our journey began with a simple yet powerful vision: to bridge the gap between
                    ambitious companies and exceptional product development leadership. With over 25
                    years of experience across the US, UK, and European markets, we understood the
                    challenges organizations face in building and scaling their product organizations.
                  </p>
                  <p>
                    Today, PRODUX is the trusted partner for growth-stage firms looking to transform
                    their product vision into reality. Our proprietary Tri-Party Co-Creation methodology
                    and 5-Phase Framework set us apart&mdash;we don&rsquo;t just fill seats, we architect
                    the leadership layer that drives predictable outcomes.
                  </p>
                  <p>
                    Our commitment to alignment-first strategy and deep cross-Atlantic pattern recognition
                    ensures that every engagement begins with clarity and ends with measurable results.
                    As PRODUX grows, so does the team &mdash; we&rsquo;re building a network of exceptional
                    fractional specialists who share our commitment to outcome-driven product leadership,
                    and placing them with the same rigour we&rsquo;d apply to hiring for our own organisation.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                The Team
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Leadership &amp; Advisory Board
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our diverse team brings together decades of experience in product development,
                design, and innovation. We&rsquo;re united by our passion for creating exceptional
                product organizations.
              </p>
            </div>
          </SectionReveal>

          {/* Leadership Team */}
          <SectionReveal>
            <h3 className="text-xl font-bold text-navy mb-8">Leadership Team</h3>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 items-stretch">
            {LEADERSHIP_TEAM.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <div className="group relative bg-warm-white rounded-xl p-8 border border-border hover:border-electric/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric/5 text-center h-full flex flex-col">
                  <div className="relative inline-block mb-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto ring-2 ring-border group-hover:ring-electric/30 transition-all">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                  <p className="text-electric text-sm font-medium mt-1">{member.title}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-1">
                    {member.description}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 mt-5 rounded-lg bg-electric/10 hover:bg-electric/20 text-electric transition-colors mx-auto"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Divider */}
          <div className="my-16 border-t border-border" />

          {/* Board of Directors */}
          <SectionReveal>
            <h3 className="text-xl font-bold text-navy mb-8">Board of Directors</h3>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 items-stretch">
            {BOARD_OF_DIRECTORS.map((member) => (
              <StaggerItem key={member.name + member.title} className="h-full">
                <div className="group relative bg-warm-white rounded-xl p-8 border border-border hover:border-electric/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric/5 text-center h-full flex flex-col">
                  <div className="relative inline-block mb-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto ring-2 ring-border group-hover:ring-electric/30 transition-all bg-navy/10 flex items-center justify-center">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-navy/30 text-4xl font-bold">
                          {member.name.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                  <p className="text-electric text-sm font-medium mt-1">{member.title}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-1">
                    {member.description}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 mt-5 rounded-lg bg-electric/10 hover:bg-electric/20 text-electric transition-colors mx-auto"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== VALUES SECTION ========== */}
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
                Our Values
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Guiding Principles for Success
              </h2>
              <p className="mt-4 text-lg text-slate-text leading-relaxed">
                Our values shape everything we do and guide us in delivering exceptional
                results for our clients.
              </p>
            </div>
          </SectionReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {VALUES.map((val) => (
              <StaggerItem key={val.title}>
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 hover:border-electric/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6">
                    <val.icon className="text-electric" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-slate-text leading-relaxed">{val.description}</p>
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

      {/* ========== CTA ========== */}
      <section className="py-20 lg:py-28 bg-navy overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(37,99,235,0.4) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="container relative z-10 text-center">
          <SectionReveal>
            <div className="w-16 h-16 rounded-2xl bg-electric/10 flex items-center justify-center mx-auto mb-8">
              <Award className="text-electric" size={32} />
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
              Ready to Architect Your Product Organization?
            </h2>
            <p className="mt-6 text-lg text-slate-text max-w-xl mx-auto leading-relaxed">
              Start with a complimentary Diagnostic Call. No commitment, just clarity on
              your alignment gaps and a path forward.
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
