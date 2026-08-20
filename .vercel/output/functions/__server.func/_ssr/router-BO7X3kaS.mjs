import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRouteWithContext, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { C as ArrowUpRight, o as Menu, s as Linkedin, t as X } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
const __exportAll = (all, no_symbols) => {
	const target = {};
	for (const name in all) Object.defineProperty(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) Object.defineProperty(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#region node_modules/.nitro/vite/services/ssr/assets/router-BO7X3kaS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CdcuQUpt.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function LogoMark({ className = "h-10 w-10" }) {
	const fadeId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 72 64",
		className,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: fadeId,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "currentColor",
						stopOpacity: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "70%",
						stopColor: "currentColor",
						stopOpacity: "0.75"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "currentColor",
						stopOpacity: "0"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 30 L36 6 L64 30",
				stroke: "currentColor",
				strokeWidth: "4.6",
				strokeLinejoin: "miter",
				strokeLinecap: "butt"
			}),
			[
				{
					x: 16,
					y: 28,
					h: 22
				},
				{
					x: 23.5,
					y: 24,
					h: 28
				},
				{
					x: 30.5,
					y: 20,
					h: 34
				},
				{
					x: 36,
					y: 16,
					h: 40
				},
				{
					x: 41.5,
					y: 20,
					h: 34
				},
				{
					x: 48.5,
					y: 24,
					h: 28
				},
				{
					x: 56,
					y: 28,
					h: 22
				}
			].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: b.x - 1.55,
				y: b.y,
				width: "3.1",
				height: b.h,
				rx: "0.35",
				fill: `url(#${fadeId})`
			}, b.x))
		]
	});
}
function BrandLogo({ variant = "header" }) {
	if (variant === "footer") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "h-12 w-12 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-brand text-[15px] uppercase tracking-[0.16em] text-off-white",
				children: "Sterling & Co."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 text-[10px] uppercase tracking-[0.32em] text-gold",
				children: "Property Partners"
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-11 w-11 shrink-0 items-center justify-center text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "h-10 w-10" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "hidden sm:flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-brand text-[13px] uppercase tracking-[0.16em] text-off-white",
				children: "Sterling & Co."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 text-[9px] uppercase tracking-[0.32em] text-gold",
				children: "Property Partners"
			})]
		})]
	});
}
var SITE_NAME = "Sterling & Co. Property Partners";
var SITE_TAGLINE = "Access to property deals most investors never see.";
var SITE_KEYWORDS = "UK property investment, off-market property deals, BMV deals, buy to let UK, property sourcing London, family office real estate, portfolio acquisitions, Sterling and Co Property Partners, Simon Kohn";
var LINKEDIN_URL = "https://www.linkedin.com/in/simon-kohn-9278a83b2/?skipRedirect=true";
var CONTACT_EMAIL_LABEL = "Add here";
var SOCIAL_LABEL = "Add here";
function getSiteUrl() {
	if (typeof process !== "undefined") {
		const vercel = process.env.VITE_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
		if (vercel) return vercel.startsWith("http") ? vercel.replace(/\/$/, "") : `https://${vercel}`;
	}
	if (typeof window !== "undefined") return window.location.origin;
	return "http://localhost:3000";
}
function absoluteUrl(path = "/") {
	const base = getSiteUrl();
	if (!path || path === "/") return base;
	return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/what-we-source",
		label: "What We Source"
	},
	{
		to: "/who-we-work-with",
		label: "Who We Work With"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/register",
		label: "Register"
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-[color:var(--navy)]/80 border-b border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-brand flex items-center justify-between py-4 sm:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
					"aria-label": "Sterling & Co. Property Partners home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-9",
					"aria-label": "Primary",
					children: NAV.slice(0, 4).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "relative text-[12px] uppercase tracking-[0.22em] text-off-white/70 transition-colors duration-300 hover:text-off-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
						activeProps: { className: "text-gold after:w-full" },
						activeOptions: { exact: true },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/register",
						className: "hidden md:inline-flex items-center gap-2 border border-gold/60 px-4 py-2.5 text-[12px] uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy hover:shadow-[0_0_24px_rgba(201,169,106,0.28)]",
						children: ["Register as an Investor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: "lg:hidden inline-flex h-10 w-10 items-center justify-center border border-white/15 text-off-white transition-colors duration-300 hover:border-gold hover:text-gold",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "lg:hidden border-t border-white/5 bg-navy/95 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-brand flex flex-col py-6 gap-4",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "py-1 text-sm uppercase tracking-[0.2em] text-off-white/80 transition-colors hover:text-gold",
					activeProps: { className: "text-gold" },
					children: n.label
				}, n.to))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mt-24 border-t border-white/5 bg-[color:var(--slate-deep)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-brand py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { variant: "footer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm text-cool-gray leading-relaxed",
						children: "A private deal desk sourcing premium UK property investment opportunities for qualified buyers. London-based, discretion by default."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.28em] text-gold mb-4",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2.5 text-sm text-off-white/80",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "transition-colors duration-300 hover:text-gold",
							children: n.label
						}) }, n.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.28em] text-gold mb-4",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 text-sm text-off-white/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Simon Kohn, Managing Director" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "London, United Kingdom" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-off-white/70",
								children: ["Email: ", CONTACT_EMAIL_LABEL]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKEDIN_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 transition-colors duration-300 hover:text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
									className: "h-3.5 w-3.5",
									"aria-hidden": true
								}), "LinkedIn"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-off-white/70",
								children: ["Social: ", SOCIAL_LABEL]
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-cool-gray",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Sterling & Co. Property Partners. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"This website is powered by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://theinnovations.tech/",
						target: "_blank",
						rel: "noreferrer",
						className: "text-gold underline-offset-4 transition-colors hover:underline",
						children: "The Innovations"
					}),
					"."
				] })]
			})]
		})
	});
}
function LenisProvider() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const loop = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-svh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-condensed text-[10rem] leading-none text-gold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-xl font-display text-off-white",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-cool-gray",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-gold inline-flex items-center justify-center",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-svh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-display text-off-white",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-cool-gray",
					children: "Something went wrong. Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-gold inline-flex items-center",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center border border-white/15 px-5 py-2.5 text-[12px] uppercase tracking-[0.24em] text-off-white transition-colors hover:border-gold hover:text-gold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => {
		const siteUrl = getSiteUrl();
		const ogImage = absoluteUrl("/og-image.jpg");
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: `${SITE_NAME} | Discreet UK Property Deal Sourcing` },
				{
					name: "description",
					content: "Sterling & Co. Property Partners is a London-based deal desk sourcing off-market UK property investment opportunities: BMV deals, high-yield BTLs, developments and portfolios for qualified investors."
				},
				{
					name: "keywords",
					content: "UK property investment, off-market property deals, BMV deals, buy to let UK, property sourcing London, family office real estate, Sterling and Co Property Partners"
				},
				{
					name: "author",
					content: SITE_NAME
				},
				{
					name: "robots",
					content: "index, follow, max-image-preview:large"
				},
				{
					name: "theme-color",
					content: "#0D1B2E"
				},
				{
					property: "og:site_name",
					content: SITE_NAME
				},
				{
					property: "og:title",
					content: SITE_NAME
				},
				{
					property: "og:description",
					content: SITE_TAGLINE
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: siteUrl
				},
				{
					property: "og:image",
					content: ogImage
				},
				{
					property: "og:locale",
					content: "en_GB"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: SITE_NAME
				},
				{
					name: "twitter:description",
					content: SITE_TAGLINE
				},
				{
					name: "twitter:image",
					content: ogImage
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "icon",
					href: "/favicon.svg",
					type: "image/svg+xml"
				},
				{
					rel: "icon",
					href: "/favicon-32x32.png",
					type: "image/png",
					sizes: "32x32"
				},
				{
					rel: "shortcut icon",
					href: "/favicon.ico"
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png"
				},
				{
					rel: "canonical",
					href: siteUrl
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Bebas+Neue&display=swap"
				}
			]
		};
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "ProfessionalService",
			name: SITE_NAME,
			description: SITE_TAGLINE,
			url: getSiteUrl(),
			image: absoluteUrl("/og-image.jpg"),
			logo: absoluteUrl("/logo-mark.png"),
			areaServed: {
				"@type": "Country",
				name: "United Kingdom"
			},
			address: {
				"@type": "PostalAddress",
				addressLocality: "London",
				addressCountry: "GB"
			},
			founder: {
				"@type": "Person",
				name: "Simon Kohn",
				jobTitle: "Managing Director",
				sameAs: [LINKEDIN_URL]
			}
		}, {
			"@type": "WebSite",
			name: SITE_NAME,
			url: getSiteUrl()
		}]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "icon",
				href: "/favicon-32x32.png",
				type: "image/png",
				sizes: "32x32"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "shortcut icon",
				href: "/favicon.ico"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LenisProvider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .35,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, pathname)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function pageHead({ title, description, path, keywords = SITE_KEYWORDS }) {
	const url = absoluteUrl(path);
	const ogImage = absoluteUrl("/og-image.jpg");
	const fullTitle = title.includes("Sterling & Co. Property Partners") ? title : `${title} | ${SITE_NAME}`;
	return {
		meta: [
			{ title: fullTitle },
			{
				name: "description",
				content: description
			},
			{
				name: "keywords",
				content: keywords
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				property: "og:title",
				content: fullTitle
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: ogImage
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:locale",
				content: "en_GB"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: fullTitle
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: ogImage
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
var $$splitComponentImporter$4 = () => import("./routes-wAQhvLTi.mjs");
var Route$6 = createFileRoute("/")({
	head: () => pageHead({
		title: "Sterling & Co. Property Partners | Access to Off-Market UK Property Deals",
		description: "Discreet, off-market-preferred sourcing of premium UK property investment opportunities, fully vetted and fully packaged, for serious investors and family offices.",
		path: "/"
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-Bt5WYLFU.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => pageHead({
		title: "About",
		description: "Founded and led by Simon Kohn in London. A relationship-first UK property deal desk built on vetting rigor and discretion.",
		path: "/about"
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./register-Ho1s4YRN.mjs");
var Route$4 = createFileRoute("/register")({
	head: () => pageHead({
		title: "Register as an Investor",
		description: "Register privately to access live UK property investment opportunities sourced by Sterling & Co. Property Partners.",
		path: "/register"
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$3 = createFileRoute("/robots.txt")({ server: { handlers: { GET: async () => {
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${getSiteUrl()}/sitemap.xml\n`;
	return new Response(body, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const base = getSiteUrl();
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/what-we-source",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/who-we-work-with",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/register",
			changefreq: "monthly",
			priority: "0.9"
		}
	].map((e) => `  <url>\n    <loc>${base}${e.path === "/" ? "" : e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./what-we-source-DCh9trGl.mjs");
var Route$1 = createFileRoute("/what-we-source")({
	head: () => pageHead({
		title: "What We Source",
		description: "BMV deals, high-yield buy-to-lets, development and refurbishment projects, and portfolio acquisitions, sourced off-market for serious investors.",
		path: "/what-we-source"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./who-we-work-with-BUp4qA2R.mjs");
var Route = createFileRoute("/who-we-work-with")({
	head: () => pageHead({
		title: "Who We Work With",
		description: "Portfolio landlords, family offices, first-time investors, and cash buyers seeking discreet off-market UK property opportunities.",
		path: "/who-we-work-with"
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	RegisterRoute: Route$4.update({
		id: "/register",
		path: "/register",
		getParentRoute: () => Route$7
	}),
	RobotsDottxtRoute: Route$3.update({
		id: "/robots.txt",
		path: "/robots.txt",
		getParentRoute: () => Route$7
	}),
	SitemapDotxmlRoute: Route$2.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$7
	}),
	WhatWeSourceRoute: Route$1.update({
		id: "/what-we-source",
		path: "/what-we-source",
		getParentRoute: () => Route$7
	}),
	WhoWeWorkWithRoute: Route.update({
		id: "/who-we-work-with",
		path: "/who-we-work-with",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { SOCIAL_LABEL as i, CONTACT_EMAIL_LABEL as n, LINKEDIN_URL as r, router_exports as t };
