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
          "It is the intentional alignment between the Founder/CEO, the Fractional Expert, and the Strategic Roadmap. I make sure all three are synchronized before work begins. It works whether the question is a role to fill, a gap to close, an opportunity to test or a strategy to change, because most product problems come down to misalignment between what the founder envisions, what the product leader delivers, and what the roadmap demands.",
      },
      {
        question: "What is the 5-Phase Framework?",
        answer:
          "The 5-Phase Framework consists of: (1) Diagnostic: complimentary gap analysis, (2) Architecture: the first month of the advisory retainer, where I define the problem and strategy, design the leadership seat if one is needed, and set the 90-day roadmap, (3) Validation: stress-testing against technical and commercial constraints, (4) Execution: active fractional leadership, and (5) Iteration: continuous measurement and optimization.",
      },
      {
        question: "Is the first call a consulting session?",
        answer:
          "No, it is a complimentary Diagnostic Session focused on problem identification. Detailed solution work begins in Phase 02, the first month of the advisory retainer.",
      },
    ],
  },
  {
    title: "Services & Engagement",
    items: [
      {
        question: "What services does PRODUX offer?",
        answer:
          "Three: (1) Strategic Product Advisory & Product Architecture, a direct partnership with Founders, Boards, and VCs, including my advisory retainer, (2) Fractional Product Leadership, outcome-driven Fractional CPO and Head of Product work, and (3) Fractional Talent Placement, where I source and embed senior fractional product specialists directly into client teams. All of them begin with Tri-Party Co-Creation.",
      },
      {
        question: "What is the advisory retainer?",
        answer:
          "Up to 10 hours a month for 3 months, working directly with a CEO or founder whose product has traction, whether you have no senior product leader or one who could use a third-party perspective. It is a cash retainer, with no equity.",
      },
      {
        question: "How does pricing work?",
        answer:
          "I use engagement-based pricing tailored to specific strategic outcomes. The Diagnostic phase is complimentary. The advisory retainer is a monthly cash retainer. Ongoing fractional leadership is based on an expert hourly rate plus a retainer. I do not publish rates because every engagement is scoped to deliver specific outcomes.",
      },
      {
        question: "What happens in the first month of the retainer?",
        answer:
          "This is Phase 02 of the framework, Architecture. I run the Tri-Party Co-Creation workshop, define the problem and strategy, design the leadership seat if one is needed, and build a board-ready 90-day execution strategy.",
      },
    ],
  },
  {
    title: "Fractional Talent Placement",
    items: [
      {
        question: "Can PRODUX place a fractional PM or designer into my team?",
        answer:
          "Yes. Alongside my advisory and fractional CPO work, I source and place senior fractional product talent (PMs, designers, and product leaders) directly into client teams. I vet every placement personally. See the Placements page to learn more.",
      },
      {
        question: "How do you vet the people you place?",
        answer:
          "I assess everyone in my placement network directly, through prior collaboration, a structured skills review, or both. I only place people I would hire myself.",
      },
      {
        question: "What's the difference between a PRODUX advisory engagement and a placement?",
        answer:
          "I lead advisory engagements directly: they are strategic, high-level, and focused on architecture and direction. Placements are about execution: I embed a senior fractional specialist into your team to build and deliver alongside your people.",
      },
    ],
  },
  {
    title: "Global Coverage",
    items: [
      {
        question: "Where are you based?",
        answer:
          "I am based in London, after more than a decade living and working in the US. I work mainly with US companies, and also with UK and European firms.",
      },
      {
        question: "How do you handle the US/UK time difference?",
        answer:
          "I schedule working sessions in the overlap between the London day and the US morning and early afternoon, and work asynchronously the rest of the time.",
      },
      {
        question: "Do you work with mainland Europe?",
        answer:
          "Yes. I work with European firms looking to scale globally, enter the US market, or get ready for international investors.",
      },
    ],
  },
  {
    title: "Process & Results",
    items: [
      {
        question: "What industries do you specialize in?",
        answer:
          "eCommerce, SaaS, FinTech, Entertainment, and MarTech. Working across them lets me apply cross-industry insights to your specific challenges.",
      },
      {
        question: "What kind of results can I expect?",
        answer:
          "My engagements are structured around 90-day outcomes. Past work includes launching 3 AI products at Webidoo, and delivering product strategy, the roadmap and PRDs for NEEW.",
      },
      {
        question: "How long does a typical engagement last?",
        answer:
          "The Diagnostic is a single 20-minute call. The advisory retainer runs for 3 months. Ongoing fractional leadership is structured in 90-day cycles with continuous iteration. The total engagement length depends on your organization\u2019s needs and growth trajectory.",
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
              Book a complimentary Diagnostic Call and I&rsquo;ll answer them myself.
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
