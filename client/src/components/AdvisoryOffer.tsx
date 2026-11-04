/*
 * The advisory retainer offer. Do not add a price: Ricky has decided it stays off the site.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { openCalendly } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const TERMS = [
  "Up to 10 hours a month",
  "A 3-month engagement",
  "Working directly with the CEO, founder or product leader",
  "Cash retainer, no equity",
];

export default function AdvisoryOffer() {
  return (
    <section id="advisory-retainer" className="py-20 lg:py-28 bg-navy">
      <div className="container">
        <SectionReveal>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-emerald font-mono text-sm font-medium tracking-wider uppercase">
                Advisory Retainer
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Senior Product Judgment, Without a Full-Time Hire
              </h2>
              <p className="mt-5 text-lg text-slate-text leading-relaxed">
                For companies with traction: you may have no senior product leader, or a product
                leader who could use a third-party perspective as you scale or pivot. Three months
                of direct work with me, starting with the problem, the strategy and a 90-day roadmap.
              </p>
              <button
                onClick={openCalendly}
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25"
              >
                Talk to Me About a Retainer
                <ArrowRight size={18} />
              </button>
            </div>
            <ul className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-5">
              {TERMS.map((term) => (
                <li key={term} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-emerald" />
                  <span className="text-white font-medium">{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
