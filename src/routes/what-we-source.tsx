import { createFileRoute } from "@tanstack/react-router";
import { KeyRound, Building2, Hammer, Layers } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, SectionEyebrow } from "@/components/site/Primitives";
import { pageHead } from "@/lib/seo";
import heroImg from "@/assets/hero-sourcing.jpg";
import bmvImg from "@/assets/deal-bmv.jpg";
import btlImg from "@/assets/deal-btl.jpg";
import devImg from "@/assets/deal-dev.jpg";
import portfolioImg from "@/assets/deal-portfolio.jpg";

export const Route = createFileRoute("/what-we-source")({
  head: () =>
    pageHead({
      title: "What We Source",
      description:
        "BMV deals, high-yield buy-to-lets, development and refurbishment projects, and portfolio acquisitions, sourced off-market for serious investors.",
      path: "/what-we-source",
    }),
  component: WhatWeSource,
});

const PILLARS = [
  {
    icon: KeyRound,
    image: bmvImg,
    alt: "Victorian red-brick terrace sourced as a below-market-value UK property deal",
    title: "Below-Market-Value Deals",
    kicker: "10–25% below open-market valuation",
    desc: "Distressed sellers, probate, motivated vendors, and pre-auction stock, sourced through private channels and negotiated on your behalf.",
    profile: [
      ["Typical discount", "10–25% BMV"],
      ["Deal size", "£150k – £2m"],
      ["Location", "London & UK-wide"],
    ],
  },
  {
    icon: Building2,
    image: btlImg,
    alt: "Contemporary apartment building underwritten as a high-yield buy-to-let",
    title: "High-Yield Buy-to-Lets",
    kicker: "7%+ verified gross yields",
    desc: "Cash-flowing rental assets, single lets, HMOs and small blocks, underwritten for yield, tenant demand and long-term operating cost.",
    profile: [
      ["Yield target", "7%+ gross"],
      ["Deal size", "£120k – £1m"],
      ["Format", "Single let, HMO, small block"],
    ],
  },
  {
    icon: Hammer,
    image: devImg,
    alt: "Period house in refurbishment representing a value-add development project",
    title: "Development & Refurbishment",
    kicker: "Value-add with clear exits",
    desc: "Refurbishments, conversions and ground-up development with tender-ready specs, planning routes verified, and modelled exit strategies.",
    profile: [
      ["Profit-on-cost", "18–25% target"],
      ["GDV range", "£500k – £5m+"],
      ["Exit", "Refinance or sale"],
    ],
  },
  {
    icon: Layers,
    image: portfolioImg,
    alt: "London mansion block representing a multi-unit portfolio acquisition",
    title: "Portfolio & Multi-Unit Acquisitions",
    kicker: "Scale in a single transaction",
    desc: "Freehold portfolios, multi-unit blocks and landlord exits, packaged with unit-level financials for family offices and portfolio landlords.",
    profile: [
      ["Portfolio size", "5 – 40+ units"],
      ["Deal size", "£1m – £15m+"],
      ["Buyer profile", "Family office, professional landlord"],
    ],
  },
];

function WhatWeSource() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Upscale London residential crescent of Georgian townhouses at twilight"
        eyebrow="What We Source"
        title={<>Four disciplines. <em className="not-italic text-gold font-normal">One standard.</em></>}
        subtitle="Every category we source is underwritten to the same rigor: numbers before narrative, discretion before distribution."
      />

      <section className="py-24">
        <div className="container-brand">
          <p className="text-condensed text-5xl md:text-6xl lg:text-7xl text-off-white max-w-4xl leading-[0.95]">
            Serious buyers want <span className="text-gold">verified deals</span>,
            not property listings.
          </p>
        </div>
      </section>

      {PILLARS.map((p, i) => (
        <section
          key={p.title}
          className={`relative py-24 lg:py-32 border-t border-white/5 ${i % 2 === 1 ? "bg-[color:var(--slate-deep)]/40" : ""}`}
        >
          <div className="container-brand">
            <div className={`grid gap-14 lg:gap-20 items-center lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden border border-white/8">
                  <img src={p.image} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center border border-gold/60 bg-navy/60 backdrop-blur-sm">
                    <p.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-[11px] uppercase tracking-[0.28em] text-off-white/70">
                    Category · 0{i + 1}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <SectionEyebrow>{p.kicker}</SectionEyebrow>
                <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-off-white">{p.title}</h2>
                <p className="mt-6 text-cool-gray leading-relaxed max-w-xl">{p.desc}</p>

                <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                  {p.profile.map(([k, v]) => (
                    <div key={k} className="border-t border-white/10 pt-4">
                      <dt className="text-[10px] uppercase tracking-[0.28em] text-gold">{k}</dt>
                      <dd className="mt-2 font-display text-lg text-off-white">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
