/*
 * Shared closing call to action. Copy from the "Closing band" in produx.tech Site Copy.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { openCalendly } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function ClosingBand() {
  return (
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
            Let&rsquo;s talk about where growth is stuck.
          </h2>
          <p className="mt-6 text-lg text-slate-text max-w-xl mx-auto leading-relaxed">
            Thirty minutes, no pitch deck. If I&rsquo;m not the right fit, I&rsquo;ll tell you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric text-white font-semibold rounded-lg hover:bg-electric-light transition-all duration-200 shadow-lg shadow-electric/25 text-base"
            >
              Book a call
              <ArrowUpRight size={18} />
            </button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
