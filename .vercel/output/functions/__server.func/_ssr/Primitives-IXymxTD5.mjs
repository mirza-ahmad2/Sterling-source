import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { C as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Primitives-IXymxTD5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero({ image, imageAlt, eyebrow, title, subtitle, cta, minimal, priority, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero-screen relative isolate flex w-full items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt,
				className: "absolute inset-0 h-full w-full object-cover object-center scale-105 animate-hero-zoom",
				fetchPriority: priority ? "high" : "auto",
				decoding: priority ? "sync" : "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: `absolute inset-0 ${minimal ? "bg-gradient-to-b from-navy/85 via-navy/75 to-navy" : "bg-gradient-to-b from-navy/70 via-navy/60 to-navy"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,27,46,0.55)_60%,rgba(13,27,46,0.95)_100%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-inner relative z-10 flex h-full w-full flex-col items-center justify-center px-[6.5vw] pt-20 pb-16 text-center sm:pt-24 sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .08
						},
						className: "mt-4 sm:mt-5 max-w-5xl font-display font-medium tracking-tight text-off-white text-[clamp(1.7rem,4.6vw,3.75rem)] leading-[1.08]",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .18
						},
						className: "mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base text-off-white/70 leading-relaxed",
						children: subtitle
					}),
					cta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .28
						},
						className: "mt-6 sm:mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: cta.to,
							className: "btn-gold group inline-flex items-center gap-3",
							children: [cta.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						})
					}),
					children
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-4 sm:bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-off-white/40",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-7 w-px bg-gradient-to-b from-gold/60 to-transparent" })]
			})
		]
	});
}
function SectionEyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" }), children]
	});
}
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function Counter({ to, suffix = "", prefix = "", duration = 1.6, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / (duration * 1e3));
			const eased = 1 - Math.pow(1 - p, 3);
			setN(to * eased);
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	const rounded = to % 1 === 0 ? Math.round(n) : n.toFixed(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [
			prefix,
			rounded,
			suffix
		]
	});
}
//#endregion
export { SectionEyebrow as i, Hero as n, Reveal as r, Counter as t };
