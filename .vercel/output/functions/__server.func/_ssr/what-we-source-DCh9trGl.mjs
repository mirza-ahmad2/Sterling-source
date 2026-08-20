import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as Layers, f as Hammer, u as KeyRound, x as Building2 } from "../_libs/lucide-react.mjs";
import { i as SectionEyebrow, n as Hero, r as Reveal } from "./Primitives-IXymxTD5.mjs";
import { i as deal_portfolio_default, n as deal_btl_default, r as deal_dev_default, t as deal_bmv_default } from "./deal-portfolio-pZ38IOtR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/what-we-source-DCh9trGl.js
var import_jsx_runtime = require_jsx_runtime();
var hero_sourcing_default = "/assets/hero-sourcing-BMOyh4gl.jpg";
var PILLARS = [
	{
		icon: KeyRound,
		image: deal_bmv_default,
		alt: "Victorian red-brick terrace sourced as a below-market-value UK property deal",
		title: "Below-Market-Value Deals",
		kicker: "10–25% below open-market valuation",
		desc: "Distressed sellers, probate, motivated vendors, and pre-auction stock, sourced through private channels and negotiated on your behalf.",
		profile: [
			["Typical discount", "10–25% BMV"],
			["Deal size", "£150k – £2m"],
			["Location", "London & UK-wide"]
		]
	},
	{
		icon: Building2,
		image: deal_btl_default,
		alt: "Contemporary apartment building underwritten as a high-yield buy-to-let",
		title: "High-Yield Buy-to-Lets",
		kicker: "7%+ verified gross yields",
		desc: "Cash-flowing rental assets, single lets, HMOs and small blocks, underwritten for yield, tenant demand and long-term operating cost.",
		profile: [
			["Yield target", "7%+ gross"],
			["Deal size", "£120k – £1m"],
			["Format", "Single let, HMO, small block"]
		]
	},
	{
		icon: Hammer,
		image: deal_dev_default,
		alt: "Period house in refurbishment representing a value-add development project",
		title: "Development & Refurbishment",
		kicker: "Value-add with clear exits",
		desc: "Refurbishments, conversions and ground-up development with tender-ready specs, planning routes verified, and modelled exit strategies.",
		profile: [
			["Profit-on-cost", "18–25% target"],
			["GDV range", "£500k – £5m+"],
			["Exit", "Refinance or sale"]
		]
	},
	{
		icon: Layers,
		image: deal_portfolio_default,
		alt: "London mansion block representing a multi-unit portfolio acquisition",
		title: "Portfolio & Multi-Unit Acquisitions",
		kicker: "Scale in a single transaction",
		desc: "Freehold portfolios, multi-unit blocks and landlord exits, packaged with unit-level financials for family offices and portfolio landlords.",
		profile: [
			["Portfolio size", "5 – 40+ units"],
			["Deal size", "£1m – £15m+"],
			["Buyer profile", "Family office, professional landlord"]
		]
	}
];
function WhatWeSource() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			image: hero_sourcing_default,
			imageAlt: "Upscale London residential crescent of Georgian townhouses at twilight",
			eyebrow: "What We Source",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Four disciplines. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
				className: "not-italic text-gold font-normal",
				children: "One standard."
			})] }),
			subtitle: "Every category we source is underwritten to the same rigor: numbers before narrative, discretion before distribution."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-brand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-condensed text-5xl md:text-6xl lg:text-7xl text-off-white max-w-4xl leading-[0.95]",
					children: [
						"Serious buyers want ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "verified deals"
						}),
						", not property listings."
					]
				})
			})
		}),
		PILLARS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: `relative py-24 lg:py-32 border-t border-white/5 ${i % 2 === 1 ? "bg-[color:var(--slate-deep)]/40" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-brand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid gap-14 lg:gap-20 items-center lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] overflow-hidden border border-white/8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.alt,
								loading: "lazy",
								decoding: "async",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-6 left-6 flex h-12 w-12 items-center justify-center border border-gold/60 bg-navy/60 backdrop-blur-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5 text-gold" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-6 left-6 right-6 text-[11px] uppercase tracking-[0.28em] text-off-white/70",
								children: ["Category · 0", i + 1]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .1,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: p.kicker }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-off-white",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-cool-gray leading-relaxed max-w-xl",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-10 grid gap-6 sm:grid-cols-3",
								children: p.profile.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-white/10 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[10px] uppercase tracking-[0.28em] text-gold",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-2 font-display text-lg text-off-white",
										children: v
									})]
								}, k))
							})
						]
					})]
				})
			})
		}, p.title))
	] });
}
//#endregion
export { WhatWeSource as component };
