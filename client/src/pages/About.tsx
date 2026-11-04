/*
 * PRODUX About Us Page — Architectural Blueprint Design
 * Dark navy base, electric blue accents, Plus Jakarta Sans typography
 * Content from the existing produx.tech/about-us, updated with new positioning
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Credentials from "@/components/Credentials";
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
  Award,
  Globe,
} from "lucide-react";

const ABOUT_HERO_IMG = "/assets/about-hero.png";

const RICKY_IMG = "/assets/ricky-gordon.jpg";
const STEVEN_IMG = "/assets/steven-gianakouros.jpeg";
const FEDERICO_IMG = "/assets/federico-salvitte.jpeg";

const ADVISORS = [
  {
    name: "Steven Gianakouros",
    title: "Advisor",
    description: "Former Netflix Design Manager and VP of Design at Magic. Expert in product design, brand systems, and UX at a global scale.",
    image: STEVEN_IMG,
    linkedin: "https://www.linkedin.com/in/kouros/",
  },
  {
    name: "Federico Salvitti",
    title: "Advisor",
    description: "Brand strategy, go-to-market, and growth. Deep expertise across US and European markets in technology and professional services.",
    image: FEDERICO_IMG,
    linkedin: "https://www.linkedin.com/in/federicosalvitti/",
  },
];

const VALUES = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "I hold every engagement to the standard I would want as the CEO paying for it.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "I build lasting working relationships based on trust and transparency. Your outcomes are the measure of my work.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "I use AI-first methods and creative thinking to solve complex product challenges.",
  },
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
                  I work with ambitious companies, US companies first, to build product
                  organizations that scale predictably. From strategy to execution, I architect
                  the product layer that drives growth.
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
                    alt="Product strategy session"
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
                      <div className="text-electric font-bold text-lg">US &bull; UK &bull; EU</div>
                      <div className="text-slate-text text-xs">Based in London, Working Across the Atlantic</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
          </div>
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
                  My Story
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                  Twenty-Five Years in Product
                </h2>
                <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-base">
                  <p>
                    I have been in product since 2000, from Global Crossing to Ticketmaster, Fubo and
                    Vista. I started PRODUX to bridge the gap between ambitious companies and the
                    senior product leadership they need, drawing on 25 years across the US, UK and
                    European markets.
                  </p>
                  <p>
                    Today I work with growth-stage companies to turn their product vision into reality.
                    My Tri-Party Co-Creation methodology and 5-Phase Framework exist for one reason: I
                    don&rsquo;t just fill seats, I architect the leadership layer that drives
                    predictable outcomes.
                  </p>
                  <p>
                    Every engagement starts with alignment and is measured on outcomes. Alongside my own
                    advisory work, I place senior fractional specialists who share that commitment, with
                    the same rigor I would apply to hiring for my own team.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ========== ADVISORS ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
                Advisors
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                The People I Turn To
              </h2>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto">
            {ADVISORS.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <div className="group relative bg-warm-white rounded-xl p-8 border border-border hover:border-electric/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric/5 text-center h-full flex flex-col">
                  <div className="relative inline-block mb-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto ring-2 ring-border group-hover:ring-electric/30 transition-all">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex items-center justify-center w-9 h-9 mt-5 rounded-lg bg-electric/10 hover:bg-electric/20 text-electric transition-colors mx-auto"
                  >
                    <Linkedin size={16} />
                  </a>
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
                My Values
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Guiding Principles for Success
              </h2>
              <p className="mt-4 text-lg text-slate-text leading-relaxed">
                The principles behind how I work with every client.
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

      <Credentials />

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
