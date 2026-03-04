/*
 * PRODUX FAQ Page — Updated questions from Kevin's document
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";
import { Link } from "wouter";
import { openCalendly } from "@/lib/utils";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    title: "Methodology",
    items: [
      {
        question: 'What is the "Tri-Party" methodology?',
        answer:
          "It is the intentional alignment between the Founder/CEO, the Fractional Expert, and the Strategic Roadmap. We ensure all three are synchronized before work begins. This approach eliminates the most common cause of fractional hire failure: misalignment between what the founder envisions, what the expert delivers, and what the roadmap demands.",
      },
      {
        question: "What is the 5-Phase Framework?",
        answer:
          "Our proprietary 5-Phase Framework consists of: (1) Diagnostic \u2014 complimentary gap analysis, (2) Architecture \u2014 paid foundational engagement where we design the leadership seat and 90-day roadmap, (3) Validation \u2014 stress-testing against technical and commercial constraints, (4) Execution \u2014 active fractional leadership, and (5) Iteration \u2014 continuous measurement and optimization.",
      },
      {
        question: "Is the first call a consulting session?",
        answer:
          "No, it is a complimentary Diagnostic Session focused on problem identification. Detailed solution architecture begins during our formal engagement phase (Phase 02: Architecture), which is a paid foundational engagement.",
      },
    ],
  },
  {
    title: "Services & Engagement",
    items: [
      {
        question: "What services does PRODUX offer?",
        answer:
          "We offer two core services: (1) Strategic Product Advisory & Product Architecture \u2014 direct partnership for Founders, Boards, and VCs, and (2) Fractional Product Leadership \u2014 outcome-driven Fractional CPOs and Heads of Product. Both services begin with our proprietary Tri-Party Co-Creation methodology.",
      },
      {
        question: "How does pricing work?",
        answer:
          "We use engagement-based pricing tailored to specific strategic outcomes. The Diagnostic phase is complimentary. The Architecture phase is a fixed-fee strategic engagement. The Scale phase (ongoing fractional leadership) is based on expert hourly rate plus a strategic retainer. We do not publish generic hourly rates because every engagement is scoped to deliver specific outcomes.",
      },
      {
        question: "What is the Architecture Phase?",
        answer:
          "The Architecture Phase is our paid foundational engagement (Phase 02). This is where the real work begins \u2014 we conduct the Tri-Party Co-Creation workshop, design the leadership seat, and build a board-ready 90-day execution strategy. This phase is the foundation upon which all subsequent work is built.",
      },
    ],
  },
  {
    title: "Global Coverage",
    items: [
      {
        question: "Do you work with mainland Europe?",
        answer:
          "Yes. We provide US/UK-style strategy for European firms looking for global scaling and international investor readiness. Our cross-Atlantic pattern recognition allows us to bridge European engineering excellence with US/UK commercial strategy.",
      },
      {
        question: "How do you handle the US/UK time difference?",
        answer:
          "We provide 24/7 strategic coverage. We manage US-facing strategies during the London day and hand them off to US execution teams in their morning. This ensures continuous momentum without timezone-related delays.",
      },
      {
        question: "Where is your team located?",
        answer:
          "Our team operates across the US, UK, and Europe (EEA). This cross-Atlantic presence gives us unique pattern recognition \u2014 25+ years of US-market velocity applied to UK and European growth contexts.",
      },
    ],
  },
  {
    title: "Process & Results",
    items: [
      {
        question: "What industries do you specialize in?",
        answer:
          "We have proven expertise across eCommerce, SaaS, FinTech, Entertainment, MarTech, and Healthcare. Our pattern recognition spans these industries, allowing us to apply cross-industry insights to your specific challenges.",
      },
      {
        question: "What kind of results can I expect?",
        answer:
          "Our engagements are structured around 90-day outcomes. Past results include: launching 4 AI products with 10,000+ active users in Q1 (Webidoo SPA), eliminating onboarding lag for senior product hires (MyConnect.ai & Eventellect), and architecting a financial inclusion platform serving 60+ enterprises (LatAm FinTech).",
      },
      {
        question: "How long does a typical engagement last?",
        answer:
          "The Diagnostic is a single 20-minute call. The Architecture Phase typically runs 2-4 weeks. The Scale Phase (ongoing fractional leadership) is structured in 90-day cycles with continuous iteration. The total engagement length depends on your organization\u2019s needs and growth trajectory.",
      },
    ],
  },
];

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-navy group-hover:text-electric transition-colors pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-electric" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-navy-dark pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
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
            <span className="text-electric font-mono text-sm font-medium tracking-wider uppercase">
              FAQ
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-slate-text leading-relaxed max-w-2xl mx-auto">
              Get answers to common questions about PRODUX&rsquo;s methodology, services, and
              engagement model.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="container max-w-4xl">
          <div className="space-y-10">
            {FAQ_DATA.map((category) => (
              <SectionReveal key={category.title}>
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                  <div className="px-8 pt-6 pb-2">
                    <h2 className="text-lg font-bold text-navy">{category.title}</h2>
                  </div>
                  <div className="px-8">
                    {category.items.map((item) => (
                      <FAQAccordionItem key={item.question} item={item} />
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="container text-center">
          <SectionReveal>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-slate-text max-w-md mx-auto">
              Book a complimentary Diagnostic Call and we&rsquo;ll answer all your questions in
              person.
            </p>
            <button
              onClick={openCalendly}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25"
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
