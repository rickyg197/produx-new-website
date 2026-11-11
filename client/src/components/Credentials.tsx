/*
 * Proof strip: where Ricky has led product. These were employers, not clients.
 * Order follows produx.tech Site Copy: Ticketmaster, Fubo, Vista.
 */
import { SectionReveal } from "@/components/SectionReveal";

const LED_PRODUCT = [
  { name: "Ticketmaster", logo: "/assets/ticketmaster-logo.png" },
  { name: "Fubo", logo: "/assets/fubo-logo.png" },
  { name: "Vista", logo: "/assets/vistaprint-logo.png" },
];

export default function Credentials() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-sm font-mono font-medium tracking-wider uppercase text-electric">
              Where I&rsquo;ve led product
            </h2>
          </div>
        </SectionReveal>
        <SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {LED_PRODUCT.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-center h-24 bg-warm-white rounded-xl border border-border"
              >
                <img src={item.logo} alt={item.name} className="h-10 max-w-[140px] object-contain" />
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
