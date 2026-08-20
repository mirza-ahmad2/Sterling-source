import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Landmark, Sparkles, Wallet, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, SectionEyebrow } from "@/components/site/Primitives";
import { pageHead } from "@/lib/seo";
import heroImg from "@/assets/hero-investors.jpg";

export const Route = createFileRoute("/who-we-work-with")({
  head: () =>
    pageHead({
      title: "Who We Work With",
      description:
        "Portfolio landlords, family offices, first-time investors, and cash buyers seeking discreet off-market UK property opportunities.",
      path: "/who-we-work-with",
    }),
  component: WhoWeWorkWith,
});

const PROFILES = [
  {
    icon: Briefcase,
    title: "Portfolio Landlords",
    tag: "Scale with discipline",
    desc: "For landlords scaling from 5 to 50+ units. We surface stock that fits your operating model: tenant demand verified, cash-flow modelled, financing routes prepared.",
    deliver: ["Consistent monthly deal flow matched to your criteria", "Unit-level financials and portfolio-level metrics", "Refinance and pull-out modelling"],
  },
  {
    icon: Landmark,
    title: "Family Offices",
    tag: "Capital deployed with rigor",
    desc: "For principals deploying serious capital into UK real estate. Institutional-grade underwriting on assets typically outside institutional deal flow.",
    deliver: ["Off-market portfolio and multi-unit acquisitions", "Full due diligence packs: legal, structural, commercial", "Direct principal-to-principal engagement"],
  },
  {
    icon: Sparkles,
    title: "First-Time Investors",
    tag: "Get it right the first time",
    desc: "For qualified buyers making a first serious acquisition. Vetted opportunities with the numbers explained plainly, and the pitfalls surfaced upfront.",
    deliver: ["Entry-level BTL and BMV deals under £400k", "Guidance through financing, structure and completion", "Deal packs written to be read, not skimmed"],
  },
  {
    icon: Wallet,
    title: "Cash Buyers Seeking Off-Market Access",
    tag: "Speed is your leverage",
    desc: "For cash-ready buyers who want first look at deals before they hit any market. Priority access to pre-marketed and privately-sourced opportunities.",
    deliver: ["First refusal on new stock in your criteria", "Pre-auction and probate opportunities", "Fast-track from view to exchange"],
  },
];

function WhoWeWorkWith() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Private executive boardroom overlooking a city skyline at night"
        eyebrow="Who We Work With"
        title={<>Serious buyers. <em className="not-italic text-gold font-normal">Discreet access.</em></>}
        subtitle="We work with a small circle of qualified investors. The volume of deals we source is a function of how tightly we hold that circle."
      />

      <section className="py-24 lg:py-32">
        <div className="container-brand">
          <p className="text-condensed text-5xl md:text-6xl lg:text-7xl text-off-white max-w-5xl leading-[0.95]">
            Every deal is <span className="text-gold">matched</span>, not broadcast.
          </p>
          <p className="mt-8 max-w-2xl text-cool-gray leading-relaxed">
            When you register, we build a private profile of your investment focus, budget range, and risk appetite. Opportunities are then shared only with investors they actually fit.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="container-brand grid gap-8 md:grid-cols-2">
          {PROFILES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group relative h-full border border-white/8 bg-[color:var(--slate-deep)]/60 p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-sm text-cool-gray">0{i + 1}</div>
                </div>
                <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-gold">{p.tag}</div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl text-off-white">{p.title}</h2>
                <p className="mt-4 text-sm text-cool-gray leading-relaxed">{p.desc}</p>

                <div className="mt-8 hairline" />
                <div className="mt-6 text-[10px] uppercase tracking-[0.28em] text-gold/80">What Sterling &amp; Co. delivers</div>
                <ul className="mt-4 space-y-3">
                  {p.deliver.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-off-white/85">
                      <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-brand mt-20 text-center">
          <Link to="/register" className="btn-gold inline-flex items-center gap-3">
            Register as an Investor <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
