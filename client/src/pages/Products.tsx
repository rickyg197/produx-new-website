import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { ShoppingCart, ExternalLink } from "lucide-react";
import { useState } from "react";

const PRODUCTS = [
  {
    asin: "B0DGXHNQVQ",
    title: "Product 1",
    url: "https://amzn.to/4bn9RJO",
    image: "https://m.media-amazon.com/images/I/71a98LCjpoL._AC_SX679_.jpg",
  },
  {
    asin: "B0CCGC1V3N",
    title: "Product 2",
    url: "https://amzn.to/4sOhyA2",
  },
  {
    asin: "B0C8X7M477",
    title: "Product 3",
    url: "https://amzn.to/3PyUNlb",
  },
  {
    asin: "B0CCXSPJ83",
    title: "Product 4",
    url: "https://amzn.to/47JJ9Kt",
    image: "https://m.media-amazon.com/images/I/41BTvPQ-VuL._AC_SX679_.jpg",
  },
  {
    asin: "B0DPW7HN23",
    title: "Product 5",
    url: "https://amzn.to/4blzj3J",
    image: "https://m.media-amazon.com/images/I/71RMCqQPZBL._AC_SX679_PIbundle-10,TopRight,0,0_SH20_.jpg",
  },
];

const IMAGE_URLS = (asin: string) => [
  `https://m.media-amazon.com/images/P/${asin}.01._SL1500_.jpg`,
  `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`,
];

function ProductCard({ asin, title, url, image }: { asin: string; title: string; url: string; image?: string }) {
  const [urlIndex, setUrlIndex] = useState(0);
  const urls = image ? [image, ...IMAGE_URLS(asin)] : IMAGE_URLS(asin);
  const failed = urlIndex >= urls.length;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[oklch(0.60_0.20_260)]/50 hover:shadow-[0_0_40px_oklch(0.60_0.20_260)/15] transition-all duration-300"
    >
      {/* Image area */}
      <div className="relative bg-white flex items-center justify-center overflow-hidden" style={{ height: "280px" }}>
        {!failed ? (
          <img
            src={urls[urlIndex]}
            alt={title}
            onError={() => setUrlIndex((i) => i + 1)}
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 text-slate-400 p-8">
            <ShoppingCart className="w-14 h-14 opacity-30" />
            <span className="text-sm font-mono opacity-50">Image unavailable</span>
          </div>
        )}
        {/* Subtle gradient overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content area */}
      <div className="flex flex-col gap-4 p-6">
        <h3 className="font-semibold text-lg text-white leading-snug">{title}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold
            bg-[oklch(0.60_0.20_260)] text-white
            hover:bg-[oklch(0.65_0.22_260)] hover:shadow-[0_0_20px_oklch(0.60_0.20_260)/40]
            active:scale-95 transition-all duration-200 group/btn"
        >
          <ShoppingCart className="w-4 h-4" />
          Shop on Amazon
          <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen bg-[oklch(0.30_0.04_260)] text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[oklch(0.60_0.20_260)]/10 blur-[120px]" />
        </div>

        <div className="container relative">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block font-mono text-xs tracking-widest text-[oklch(0.60_0.20_260)] uppercase mb-4">
                Our Picks
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Recommended{" "}
                <span className="text-[oklch(0.60_0.20_260)]">Products</span>
              </h1>
              <p className="text-[oklch(0.70_0.02_260)] text-lg leading-relaxed">
                Hand-picked products we genuinely recommend. Clicking any product will take you to Amazon, and we earn a small commission on qualifying purchases — at no extra cost to you.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-28">
        <div className="container">
          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {PRODUCTS.map((product) => (
                <StaggerItem key={product.asin}>
                  <ProductCard {...product} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
