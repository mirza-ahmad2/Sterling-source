import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { C as ArrowUpRight, b as ChartLine, c as Layers, d as Handshake, f as Hammer, i as ShieldCheck, m as FileSearch, u as KeyRound, x as Building2 } from "../_libs/lucide-react.mjs";
import { i as SectionEyebrow, n as Hero, r as Reveal, t as Counter } from "./Primitives-IXymxTD5.mjs";
import { i as deal_portfolio_default, n as deal_btl_default, r as deal_dev_default, t as deal_bmv_default } from "./deal-portfolio-pZ38IOtR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-wAQhvLTi.js
var import_jsx_runtime = require_jsx_runtime();
var hero_home_default = "/assets/hero-home-DoJtUFa3.jpg";
var CATEGORIES = [
	{
		icon: KeyRound,
		title: "Below-Market-Value Deals",
		desc: "Discounted acquisitions sourced through private channels, 10–25% below open-market valuation.",
		image: deal_bmv_default,
		alt: "Victorian red-brick UK terrace house available as a below-market-value investment"
	},
	{
		icon: Building2,
		title: "High-Yield Buy-to-Lets",
		desc: "Cash-flowing rental assets underwritten to 7%+ gross yields across London and regional UK.",
		image: deal_btl_default,
		alt: "Contemporary UK apartment building suited to high-yield buy-to-let investment"
	},
	{
		icon: Hammer,
		title: "Development & Refurbishment",
		desc: "Value-add projects with clear planning routes, tender-ready specifications and exit modelling.",
		image: deal_dev_default,
		alt: "UK period house undergoing a high-end refurbishment and development project"
	},
	{
		icon: Layers,
		title: "Portfolio Acquisitions",
		desc: "Multi-unit and freehold portfolio opportunities for scale-focused buyers and family offices.",
		image: deal_portfolio_default,
		alt: "London mansion-block apartment building representing a multi-unit portfolio acquisition"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			image: hero_home_default,
			imageAlt: "London skyline at dusk, representing discreet off-market UK property opportunities",
			eyebrow: "A Private Deal Desk",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Access to Property Deals",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Most Investors ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "not-italic text-gold font-normal",
					children: "Never See."
				})
			] }),
			subtitle: "Discreet, off-market-preferred sourcing of premium UK property investment opportunities, fully vetted, fully packaged.",
			cta: {
				to: "/register",
				label: "Register as an Investor"
			},
			priority: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative border-y border-white/5 bg-[color:var(--slate-deep)]/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-brand py-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Track record" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-condensed text-6xl md:text-7xl lg:text-8xl text-off-white leading-[0.9]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: 7 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "%+"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xs text-sm text-cool-gray",
							children: "Verified gross yields across London & the UK, underwritten before we present a deal."
						})
					] }) }), [
						{
							n: 180,
							s: "M+",
							l: "GDV sourced across active pipeline"
						},
						{
							n: 240,
							s: "+",
							l: "Vetted deals reviewed each quarter"
						},
						{
							n: 100,
							s: "%",
							l: "Off-market or pre-market"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1 + i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l border-white/10 pl-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-3xl md:text-4xl text-off-white",
								children: [
									"£",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: s.n }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: s.s
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-cool-gray leading-relaxed",
								children: s.l
							})]
						})
					}, s.l))]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative py-28 lg:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-brand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "What We Source" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-off-white",
							children: [
								"Four disciplines.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"One standard of vetting."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/what-we-source",
							className: "inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.28em] text-gold transition-colors duration-300 hover:text-gold-soft",
							children: ["Explore all categories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 md:grid-cols-2",
					children: CATEGORIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							whileHover: { y: -6 },
							transition: { duration: .4 },
							className: "group relative overflow-hidden border border-white/8 bg-[color:var(--slate-deep)] transition-shadow duration-500 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.image,
										alt: c.alt,
										loading: "lazy",
										decoding: "async",
										className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-deep via-slate-deep/40 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-5 left-5 flex h-11 w-11 items-center justify-center border border-gold/60 bg-navy/60 backdrop-blur-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4.5 w-4.5 text-gold" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl text-off-white",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-cool-gray leading-relaxed",
										children: c.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 hairline" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-gold/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", i + 1] })]
									})
								]
							})]
						})
					}, c.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative py-28 lg:py-36 border-t border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-brand grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Why Sterling & Co." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-off-white",
						children: "We work the way serious buyers actually buy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-cool-gray leading-relaxed",
						children: "Off-market. Numbers-first. Fully underwritten before you ever see the deal pack. We source through relationships built over years, not portals, not open marketing."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: [
						{
							icon: FileSearch,
							title: "Vetting rigor",
							desc: "Every opportunity carries comparables, financial breakdown, ROI projection, rental yield and cash-flow analysis before it reaches you."
						},
						{
							icon: ShieldCheck,
							title: "Discretion by default",
							desc: "Off-market or pre-market. No public listings, no address broadcasting. Details shared with qualified investors only."
						},
						{
							icon: ChartLine,
							title: "Deal-pack quality",
							desc: "Professional deal packs with due diligence, priced, modelled, and ready for your solicitor and lender on day one."
						},
						{
							icon: Handshake,
							title: "Support to completion",
							desc: "Ongoing coordination from identification through to legal completion, one point of contact, real accountability."
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex gap-6 border-t border-white/8 pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-4.5 w-4.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-off-white",
								children: f.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-cool-gray leading-relaxed",
								children: f.desc
							})] })]
						})
					}, f.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative py-24 border-t border-white/5 bg-[color:var(--slate-deep)]/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-brand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Representative Deal Flow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl md:text-4xl text-off-white max-w-2xl",
					children: "A cross-section of what our pipeline typically holds."
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-6 px-[6.5vw] snap-x snap-mandatory overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [
						{
							img: deal_bmv_default,
							title: "BMV Freehold Terrace",
							meta: "~18% BMV, London borders",
							alt: "Below-market-value freehold terrace house"
						},
						{
							img: deal_btl_default,
							title: "High-Yield HMO",
							meta: "8.4% gross, Midlands",
							alt: "High-yield house in multiple occupation"
						},
						{
							img: deal_dev_default,
							title: "Refurb + Refinance",
							meta: "GDV £1.9M, 12mo exit",
							alt: "Residential refurbishment and refinance project"
						},
						{
							img: deal_portfolio_default,
							title: "Multi-Unit Portfolio",
							meta: "12 units, freehold",
							alt: "Multi-unit freehold residential portfolio"
						},
						{
							img: deal_bmv_default,
							title: "Below-Market Auction Buy",
							meta: "Off-market, pre-auction",
							alt: "Off-market pre-auction residential purchase"
						}
					].map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "snap-start relative shrink-0 w-[82vw] md:w-[46vw] lg:w-[32vw] aspect-[4/5] overflow-hidden border border-white/8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: card.img,
								alt: card.alt,
								loading: "lazy",
								decoding: "async",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] uppercase tracking-[0.32em] text-gold",
										children: ["Deal 0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-xl text-off-white",
										children: card.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-cool-gray",
										children: card.meta
									})
								]
							})
						]
					}, i))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-brand py-28 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative border border-gold/30 bg-gradient-to-br from-[color:var(--slate-deep)] to-navy p-10 md:p-16 lg:p-24 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Qualified Buyers Only" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-off-white max-w-3xl",
								children: "Register once. See what we actually source."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-cool-gray leading-relaxed",
								children: "Live opportunities are shared privately with registered investors. Tell us your focus and budget and we'll send matching deals as they clear our vetting."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/register",
								className: "btn-gold mt-10 inline-flex items-center gap-3",
								children: ["Register as an Investor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						] })
					})]
				})
			})
		})
	] });
}
//#endregion
export { Home as component };
