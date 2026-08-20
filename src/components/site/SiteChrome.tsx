import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Linkedin } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { CONTACT_EMAIL_LABEL, LINKEDIN_URL, SOCIAL_LABEL } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/what-we-source", label: "What We Source" },
  { to: "/who-we-work-with", label: "Who We Work With" },
  { to: "/about", label: "About" },
  { to: "/register", label: "Register" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[color:var(--navy)]/80 border-b border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="container-brand flex items-center justify-between py-4 sm:py-5">
        <Link to="/" className="group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-navy" aria-label="Sterling & Co. Property Partners home">
          <BrandLogo />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {NAV.slice(0, 4).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-[12px] uppercase tracking-[0.22em] text-off-white/70 transition-colors duration-300 hover:text-off-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{ className: "text-gold after:w-full" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/register"
            className="hidden md:inline-flex items-center gap-2 border border-gold/60 px-4 py-2.5 text-[12px] uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy hover:shadow-[0_0_24px_rgba(201,169,106,0.28)]"
          >
            Register as an Investor <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-white/15 text-off-white transition-colors duration-300 hover:border-gold hover:text-gold"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-white/5 bg-navy/95 backdrop-blur-md">
          <div className="container-brand flex flex-col py-6 gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-1 text-sm uppercase tracking-[0.2em] text-off-white/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[color:var(--slate-deep)]">
      <div className="container-brand py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-6 max-w-sm text-sm text-cool-gray leading-relaxed">
              A private deal desk sourcing premium UK property investment opportunities for qualified buyers. London-based, discretion by default.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold mb-4">Navigate</div>
            <ul className="space-y-2.5 text-sm text-off-white/80">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors duration-300 hover:text-gold">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold mb-4">Contact</div>
            <ul className="space-y-2.5 text-sm text-off-white/80">
              <li>Simon Kohn, Managing Director</li>
              <li>London, United Kingdom</li>
              <li>
                <span className="text-off-white/70">Email: {CONTACT_EMAIL_LABEL}</span>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-gold"
                >
                  <Linkedin className="h-3.5 w-3.5" aria-hidden />
                  LinkedIn
                </a>
              </li>
              <li>
                <span className="text-off-white/70">Social: {SOCIAL_LABEL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-cool-gray">
          <div>© {new Date().getFullYear()} Sterling &amp; Co. Property Partners. All rights reserved.</div>
          <div>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noreferrer"
              className="text-gold underline-offset-4 transition-colors hover:underline"
            >
              The Innovations
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
