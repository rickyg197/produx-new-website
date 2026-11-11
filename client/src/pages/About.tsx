/*
 * PRODUX About Page
 * Copy source: Claude doc "produx.tech Site Copy". No team section.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Credentials from "@/components/Credentials";
import ClosingBand from "@/components/ClosingBand";
import { SectionReveal } from "@/components/SectionReveal";
import { openCalendly } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Globe } from "lucide-react";

const ABOUT_HERO_IMG = "/assets/about-hero.png";
const RICKY_IMG = "/assets/ricky-gordon.jpg";

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
                  About
                </span>
                <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  I&rsquo;m Ricky Gordon. I&rsquo;m the CPO{" "}
                  <span className="text-electric">for companies that are growing.</span>
                </h1>
                <button
                  onClick={openCalendly}
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25"
                >
                  Book a call
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
                      <div className="text-electric font-bold text-lg">US &bull; UK</div>
                      <div className="text-slate-text text-xs">Based in London</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ========== STORY ========== */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-start">
            <SectionReveal>
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-xl mx-auto lg:mx-0">
                    <img src={RICKY_IMG} alt="Ricky Gordon" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-electric rounded-tr-lg" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-emerald rounded-bl-lg" />
                </div>
                <h2 className="mt-6 text-xl font-bold text-navy">Ricky Gordon</h2>
                <p className="text-electric text-sm font-medium">CPO</p>
                <div className="flex justify-center lg:justify-start gap-3 mt-4">
                  <a
                    href="https://www.linkedin.com/in/rickygordon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ricky Gordon on LinkedIn"
                    className="w-9 h-9 rounded-lg bg-electric/10 hover:bg-electric/20 flex items-center justify-center text-electric transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I&rsquo;ve been building and running product since 2000, at Ticketmaster, Fubo and
                  Vista, among others. That&rsquo;s ticketing at global scale, streaming in a
                  fast-moving market, and e-commerce for millions of small businesses. More recently,
                  SaaS, social platforms and AI products, from agents to LLM-based tools. Different
                  products, same lesson: growth gets won or lost in product decisions, usually long
                  before anyone notices.
                </p>
                <p>
                  I&rsquo;ve also sat on the business side of the table. As global GM of
                  Vistaprint&rsquo;s $40M digital business, I ran a team of more than 40, rebuilt the
                  product portfolio and business model, and negotiated a five-year partnership with
                  Wix that moved the platform onto theirs. At Fubo I was VP of Product in 2020, the
                  year it listed on the NYSE. And I&rsquo;ve bought companies: choosing targets,
                  running diligence and planning how they fit once the deal closes.
                </p>
                <p>
                  Today I&rsquo;m CPO to a small number of companies at a time, working directly with
                  the CEO. I&rsquo;m not a consultancy with a bench of juniors. You get me, about 10
                  hours a month, focused on the decisions that move the business.
                </p>
                <p>
                  I work remotely from London with clients in the US and the UK, and I&rsquo;ll be in
                  the room when it counts. I use modern tools, including AI, to work fast, but
                  you&rsquo;re paying for judgment, not software.
                </p>
                <p>
                  I don&rsquo;t take equity, and I don&rsquo;t sign long lock-ins. If I&rsquo;m useful,
                  you&rsquo;ll keep me. If I&rsquo;m not, you shouldn&rsquo;t.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Credentials />

      <ClosingBand />

      <Footer />
    </div>
  );
}
