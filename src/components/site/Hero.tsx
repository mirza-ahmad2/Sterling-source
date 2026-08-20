import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type HeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  cta?: { to: "/" | "/what-we-source" | "/who-we-work-with" | "/about" | "/register"; label: string };
  minimal?: boolean;
  priority?: boolean;
  children?: ReactNode;
};

export function Hero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  cta,
  minimal,
  priority,
  children,
}: HeroProps) {
  return (
    <section className="hero-screen relative isolate flex w-full items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center scale-105 animate-hero-zoom"
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
      <div
        aria-hidden
        className={`absolute inset-0 ${
          minimal
            ? "bg-gradient-to-b from-navy/85 via-navy/75 to-navy"
            : "bg-gradient-to-b from-navy/70 via-navy/60 to-navy"
        }`}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,27,46,0.55)_60%,rgba(13,27,46,0.95)_100%)]"
      />

      <div className="hero-inner relative z-10 flex h-full w-full flex-col items-center justify-center px-[6.5vw] pt-20 pb-16 text-center sm:pt-24 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-gold"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-4 sm:mt-5 max-w-5xl font-display font-medium tracking-tight text-off-white text-[clamp(1.7rem,4.6vw,3.75rem)] leading-[1.08]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base text-off-white/70 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 sm:mt-8"
          >
            <Link
              to={cta.to}
              className="btn-gold group inline-flex items-center gap-3"
            >
              {cta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        )}

        {children}
      </div>

      <div
        className="absolute bottom-4 sm:bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-off-white/40"
        aria-hidden
      >
        <span>Scroll</span>
        <span className="h-7 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
