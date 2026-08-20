import { createFileRoute } from "@tanstack/react-router";
import { Search, ClipboardCheck, FileText, Compass } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, SectionEyebrow } from "@/components/site/Primitives";
import { pageHead } from "@/lib/seo";
import heroImg from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About",
      description:
        "Founded and led by Simon Kohn in London. A relationship-first UK property deal desk built on vetting rigor and discretion.",
      path: "/about",
    }),
  component: About,
});

const PROCESS = [
  { icon: Search, title: "Identification", desc: "Deal origination through private networks, distressed channels, off-market intermediaries, and long-standing agent relationships." },
  { icon: ClipboardCheck, title: "Vetting & Due Diligence", desc: "Comparables, rental analysis, financial modelling, structural indications, planning review and title checks, before any investor sees the deal." },
  { icon: FileText, title: "Packaging", desc: "A professional deal pack: numbers, narrative, risk, exits. Written for lenders and solicitors to move on immediately." },
  { icon: Compass, title: "Support to Completion", desc: "One point of contact through offer, exchange and completion. Coordination with brokers, solicitors and surveyors as required." },
];

function About() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Refined London townhouse facade at twilight"
        eyebrow="About Sterling & Co."
        title={<>A private deal desk. <em className="not-italic text-gold font-normal">Built for serious buyers.</em></>}
        subtitle="Founded and led by Simon Kohn. London-based, relationship-first, and deliberately kept small."
      />

      <section className="py-28 lg:py-36">
        <div className="container-brand grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <SectionEyebrow>Managing Director</SectionEyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-off-white">Simon Kohn</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-cool-gray">London, United Kingdom</p>

            <div className="mt-10 hairline" />
            <dl className="mt-8 space-y-6">
              {[
                ["Base", "London, UK"],
                ["Focus", "UK residential, mixed-use, portfolio"],
                ["Approach", "Off-market preferred, relationship-led"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-gold">{k}</dt>
                  <dd className="mt-2 font-display text-lg text-off-white">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg text-off-white/85 leading-[1.7] font-light">
              <p>
                Sterling &amp; Co. was built around a simple observation: the best UK property investment opportunities almost never reach open market. They move privately, through relationships, before they are ever listed.
              </p>
              <p>
                Simon Kohn founded Sterling &amp; Co. to give qualified investors direct, discreet access to that layer of the market, sourcing below-market-value deals, high-yield rental assets, development projects, and portfolio-scale acquisitions across London and the UK.
              </p>
              <p>
                Every opportunity is underwritten before it reaches an investor. Comparables, financial breakdowns, ROI projections, rental yield and cash-flow analysis, packaged into deal documents that lenders and solicitors can move on immediately.
              </p>
              <p className="text-gold">
                The firm is kept small on purpose. Fewer investors, better matched. More time on each deal, and less noise.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 border-t border-white/5 bg-[color:var(--slate-deep)]/40">
        <div className="container-brand">
          <Reveal>
            <SectionEyebrow>Process</SectionEyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-off-white max-w-3xl">
              Four steps. Same standard on every deal.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <article className="group h-full border border-white/8 bg-navy/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="font-condensed text-4xl text-gold/40">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl text-off-white">{s.title}</h3>
                  <p className="mt-3 text-sm text-cool-gray leading-relaxed">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
