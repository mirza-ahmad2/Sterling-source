import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, LineChart, FileSearch, HandshakeIcon, Building2, KeyRound, Hammer, Layers } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, SectionEyebrow, Counter } from "@/components/site/Primitives";
import { pageHead } from "@/lib/seo";
import heroImg from "@/assets/hero-home.jpg";
import bmvImg from "@/assets/deal-bmv.jpg";
import btlImg from "@/assets/deal-btl.jpg";
import devImg from "@/assets/deal-dev.jpg";
import portfolioImg from "@/assets/deal-portfolio.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Sterling & Co. Property Partners | Access to Off-Market UK Property Deals",
      description:
        "Discreet, off-market-preferred sourcing of premium UK property investment opportunities, fully vetted and fully packaged, for serious investors and family offices.",
      path: "/",
    }),
  component: Home,
});

const CATEGORIES = [
  { icon: KeyRound, title: "Below-Market-Value Deals", desc: "Discounted acquisitions sourced through private channels, 10–25% below open-market valuation.", image: bmvImg, alt: "Victorian red-brick UK terrace house available as a below-market-value investment" },
  { icon: Building2, title: "High-Yield Buy-to-Lets", desc: "Cash-flowing rental assets underwritten to 7%+ gross yields across London and regional UK.", image: btlImg, alt: "Contemporary UK apartment building suited to high-yield buy-to-let investment" },
  { icon: Hammer, title: "Development & Refurbishment", desc: "Value-add projects with clear planning routes, tender-ready specifications and exit modelling.", image: devImg, alt: "UK period house undergoing a high-end refurbishment and development project" },
  { icon: Layers, title: "Portfolio Acquisitions", desc: "Multi-unit and freehold portfolio opportunities for scale-focused buyers and family offices.", image: portfolioImg, alt: "London mansion-block apartment building representing a multi-unit portfolio acquisition" },
];

function Home() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="London skyline at dusk, representing discreet off-market UK property opportunities"
        eyebrow="A Private Deal Desk"
        title={
          <>
            Access to Property Deals
            <br />
            Most Investors <em className="not-italic text-gold font-normal">Never See.</em>
          </>
        }
        subtitle="Discreet, off-market-preferred sourcing of premium UK property investment opportunities, fully vetted, fully packaged."
        cta={{ to: "/register", label: "Register as an Investor" }}
        priority
      />

      <section className="relative border-y border-white/5 bg-[color:var(--slate-deep)]/60">
        <div className="container-brand py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] items-center">
            <Reveal>
              <div>
                <SectionEyebrow>Track record</SectionEyebrow>
                <p className="mt-5 text-condensed text-6xl md:text-7xl lg:text-8xl text-off-white leading-[0.9]">
                  <Counter to={7} />
                  <span className="text-gold">%+</span>
                </p>
                <p className="mt-3 max-w-xs text-sm text-cool-gray">
                  Verified gross yields across London &amp; the UK, underwritten before we present a deal.
                </p>
              </div>
            </Reveal>

            {[
              { n: 180, s: "M+", l: "GDV sourced across active pipeline" },
              { n: 240, s: "+", l: "Vetted deals reviewed each quarter" },
              { n: 100, s: "%", l: "Off-market or pre-market" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={0.1 + i * 0.08}>
                <div className="border-l border-white/10 pl-6">
                  <div className="font-display text-3xl md:text-4xl text-off-white">
                    £<Counter to={s.n} />
                    <span className="text-gold">{s.s}</span>
                  </div>
                  <p className="mt-3 text-sm text-cool-gray leading-relaxed">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 lg:py-36">
        <div className="container-brand">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <Reveal className="max-w-2xl">
              <SectionEyebrow>What We Source</SectionEyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-off-white">
                Four disciplines.
                <br />
                One standard of vetting.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/what-we-source"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.28em] text-gold transition-colors duration-300 hover:text-gold-soft"
              >
                Explore all categories <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden border border-white/8 bg-[color:var(--slate-deep)] transition-shadow duration-500 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-deep via-slate-deep/40 to-transparent" />
                    <div className="absolute top-5 left-5 flex h-11 w-11 items-center justify-center border border-gold/60 bg-navy/60 backdrop-blur-sm">
                      <c.icon className="h-4.5 w-4.5 text-gold" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-off-white">{c.title}</h3>
                    <p className="mt-3 text-sm text-cool-gray leading-relaxed">{c.desc}</p>
                    <div className="mt-5 hairline" />
                    <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-gold/80">
                      <span>Category</span>
                      <span>0{i + 1}</span>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 border-t border-white/5">
        <div className="container-brand grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <SectionEyebrow>Why Sterling &amp; Co.</SectionEyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-off-white">
              We work the way serious buyers actually buy.
            </h2>
            <p className="mt-6 text-cool-gray leading-relaxed">
              Off-market. Numbers-first. Fully underwritten before you ever see the deal pack. We source through relationships built over years, not portals, not open marketing.
            </p>
          </Reveal>

          <div className="space-y-8">
            {[
              { icon: FileSearch, title: "Vetting rigor", desc: "Every opportunity carries comparables, financial breakdown, ROI projection, rental yield and cash-flow analysis before it reaches you." },
              { icon: ShieldCheck, title: "Discretion by default", desc: "Off-market or pre-market. No public listings, no address broadcasting. Details shared with qualified investors only." },
              { icon: LineChart, title: "Deal-pack quality", desc: "Professional deal packs with due diligence, priced, modelled, and ready for your solicitor and lender on day one." },
              { icon: HandshakeIcon, title: "Support to completion", desc: "Ongoing coordination from identification through to legal completion, one point of contact, real accountability." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group flex gap-6 border-t border-white/8 pt-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <f.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-off-white">{f.title}</h3>
                    <p className="mt-2 text-sm text-cool-gray leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5 bg-[color:var(--slate-deep)]/40">
        <div className="container-brand">
          <Reveal>
            <SectionEyebrow>Representative Deal Flow</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl md:text-4xl text-off-white max-w-2xl">
              A cross-section of what our pipeline typically holds.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 overflow-hidden">
          <div className="flex gap-6 px-[6.5vw] snap-x snap-mandatory overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { img: bmvImg, title: "BMV Freehold Terrace", meta: "~18% BMV, London borders", alt: "Below-market-value freehold terrace house" },
              { img: btlImg, title: "High-Yield HMO", meta: "8.4% gross, Midlands", alt: "High-yield house in multiple occupation" },
              { img: devImg, title: "Refurb + Refinance", meta: "GDV £1.9M, 12mo exit", alt: "Residential refurbishment and refinance project" },
              { img: portfolioImg, title: "Multi-Unit Portfolio", meta: "12 units, freehold", alt: "Multi-unit freehold residential portfolio" },
              { img: bmvImg, title: "Below-Market Auction Buy", meta: "Off-market, pre-auction", alt: "Off-market pre-auction residential purchase" },
            ].map((card, i) => (
              <article
                key={i}
                className="snap-start relative shrink-0 w-[82vw] md:w-[46vw] lg:w-[32vw] aspect-[4/5] overflow-hidden border border-white/8"
              >
                <img src={card.img} alt={card.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-gold">Deal 0{i + 1}</div>
                  <h3 className="mt-3 font-display text-xl text-off-white">{card.title}</h3>
                  <p className="mt-2 text-xs text-cool-gray">{card.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="container-brand py-28 lg:py-36">
          <div className="relative border border-gold/30 bg-gradient-to-br from-[color:var(--slate-deep)] to-navy p-10 md:p-16 lg:p-24 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <Reveal>
                <SectionEyebrow>Qualified Buyers Only</SectionEyebrow>
                <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-off-white max-w-3xl">
                  Register once. See what we actually source.
                </h2>
                <p className="mt-6 max-w-xl text-cool-gray leading-relaxed">
                  Live opportunities are shared privately with registered investors. Tell us your focus and budget and we'll send matching deals as they clear our vetting.
                </p>
                <Link to="/register" className="btn-gold mt-10 inline-flex items-center gap-3">
                  Register as an Investor <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
