/*
 * PRODUX Footer
 * Dark navy, structured grid, blueprint aesthetic
 */
import { Link } from "wouter";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { openCalendly } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/assets/produx-logo-white.svg"
                alt="PRODUX"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-slate-text text-sm leading-relaxed max-w-xs">
              Senior product leadership for growth-stage companies. No equity. Since 2000.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/produx-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-electric/20 flex items-center justify-center text-slate-text hover:text-electric transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-slate-text hover:text-electric text-sm transition-colors flex items-center gap-1 group">
                  Product advisory retainer
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-slate-text hover:text-electric text-sm transition-colors flex items-center gap-1 group">
                  How an engagement runs
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-text hover:text-electric text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-slate-text hover:text-electric text-sm transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-text hover:text-electric text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Talk to me</h4>
            <p className="text-slate-text text-sm leading-relaxed mb-5">
              Thirty minutes, no pitch deck. If I&rsquo;m not the right fit, I&rsquo;ll tell you.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric text-white text-sm font-semibold rounded-lg hover:bg-electric-light transition-all duration-200"
            >
              Book a call
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-text/60 text-xs">
            &copy; 2026 PRODUX LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-text/60 hover:text-slate-text text-xs transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
