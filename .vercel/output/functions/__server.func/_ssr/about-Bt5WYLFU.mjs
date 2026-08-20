import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Search, g as ClipboardCheck, h as Compass, p as FileText } from "../_libs/lucide-react.mjs";
import { i as SectionEyebrow, n as Hero, r as Reveal } from "./Primitives-IXymxTD5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Bt5WYLFU.js
var import_jsx_runtime = require_jsx_runtime();
var hero_about_default = "/assets/hero-about-JPeyjyfr.jpg";
var PROCESS = [
	{
		icon: Search,
		title: "Identification",
		desc: "Deal origination through private networks, distressed channels, off-market intermediaries, and long-standing agent relationships."
	},
	{
		icon: ClipboardCheck,
		title: "Vetting & Due Diligence",
		desc: "Comparables, rental analysis, financial modelling, structural indications, planning review and title checks, before any investor sees the deal."
	},
	{
		icon: FileText,
		title: "Packaging",
		desc: "A professional deal pack: numbers, narrative, risk, exits. Written for lenders and solicitors to move on immediately."
	},
	{
		icon: Compass,
		title: "Support to Completion",
		desc: "One point of contact through offer, exchange and completion. Coordination with brokers, solicitors and surveyors as required."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			image: hero_about_default,
			imageAlt: "Refined London townhouse facade at twilight",
			eyebrow: "About Sterling & Co.",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A private deal desk. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
				className: "not-italic text-gold font-normal",
				children: "Built for serious buyers."
			})] }),
			subtitle: "Founded and led by Simon Kohn. London-based, relationship-first, and deliberately kept small."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28 lg:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-brand grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Managing Director" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-off-white",
						children: "Simon Kohn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm uppercase tracking-[0.24em] text-cool-gray",
						children: "London, United Kingdom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 space-y-6",
						children: [
							["Base", "London, UK"],
							["Focus", "UK residential, mixed-use, portfolio"],
							["Approach", "Off-market preferred, relationship-led"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[10px] uppercase tracking-[0.28em] text-gold",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-lg text-off-white",
							children: v
						})] }, k))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 text-lg text-off-white/85 leading-[1.7] font-light",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sterling & Co. was built around a simple observation: the best UK property investment opportunities almost never reach open market. They move privately, through relationships, before they are ever listed." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Simon Kohn founded Sterling & Co. to give qualified investors direct, discreet access to that layer of the market, sourcing below-market-value deals, high-yield rental assets, development projects, and portfolio-scale acquisitions across London and the UK." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every opportunity is underwritten before it reaches an investor. Comparables, financial breakdowns, ROI projections, rental yield and cash-flow analysis, packaged into deal documents that lenders and solicitors can move on immediately." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-gold",
								children: "The firm is kept small on purpose. Fewer investors, better matched. More time on each deal, and less noise."
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative py-24 lg:py-32 border-t border-white/5 bg-[color:var(--slate-deep)]/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-brand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Process" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-off-white max-w-3xl",
					children: "Four steps. Same standard on every deal."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: PROCESS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group h-full border border-white/8 bg-navy/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 items-center justify-center border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-condensed text-4xl text-gold/40",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-display text-xl text-off-white",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-cool-gray leading-relaxed",
									children: s.desc
								})
							]
						})
					}, s.title))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
