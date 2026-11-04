/*
 * Where Ricky has led product (not clients), and current clients.
 * Keep these two groups separate: Fubo, Vista and Ticketmaster were employers.
 */
import { SectionReveal } from "@/components/SectionReveal";

const LED_PRODUCT = [
  { name: "Fubo", logo: "/assets/fubo-logo.png" },
  { name: "Vista", logo: "/assets/vistaprint-logo.png" },
  { name: "Ticketmaster", logo: "/assets/ticketmaster-logo.png" },
];

const CLIENTS = [{ name: "Webidoo", logo: "/assets/webidoo-logo.png" }];

function LogoTile({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center h-24 bg-warm-white rounded-xl border border-border">
      <img src={logo} alt={name} className="h-10 max-w-[140px] object-contain" />
    </div>
  );
}

export default function Credentials() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-navy tracking-tight">
              In Product Since 2000
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From Global Crossing to Ticketmaster, Fubo and Vista.
            </p>
          </div>
        </SectionReveal>
        <SectionReveal>
          <div className="grid lg:grid-cols-[3fr_1fr] gap-10">
            <div>
              <h3 className="text-sm font-mono font-medium tracking-wider uppercase text-electric mb-4">
                Where I&rsquo;ve led product
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {LED_PRODUCT.map((item) => (
                  <LogoTile key={item.name} {...item} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-mono font-medium tracking-wider uppercase text-electric mb-4">
                Client
              </h3>
              {CLIENTS.map((item) => (
                <LogoTile key={item.name} {...item} />
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
