import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as ArrowUpRight, _ as ChevronUp, i as ShieldCheck, s as Linkedin, v as ChevronDown, y as Check } from "../_libs/lucide-react.mjs";
import { i as SectionEyebrow, n as Hero, r as Reveal } from "./Primitives-IXymxTD5.mjs";
import { i as SOCIAL_LABEL, n as CONTACT_EMAIL_LABEL, r as LINKEDIN_URL } from "./router-BO7X3kaS.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-Ho1s4YRN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var hero_register_default = "/assets/hero-register-xqvEXD5-.jpg";
var FOCUS = [
	"Below-Market-Value (BMV)",
	"High-Yield Buy-to-Let",
	"Development & Refurbishment",
	"Portfolio / Multi-Unit"
];
var BUDGET = [
	"Under £250k",
	"£250k – £750k",
	"£750k – £2m",
	"£2m – £5m",
	"£5m+"
];
function Register() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [focus, setFocus] = (0, import_react.useState)("");
	const [focusError, setFocusError] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		if (!focus) {
			setFocusError(true);
			return;
		}
		setSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
		image: hero_register_default,
		imageAlt: "Luxury penthouse interior overlooking city lights at night",
		eyebrow: "Register as an Investor",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Get access to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
			className: "not-italic text-gold font-normal",
			children: "live opportunities."
		})] }),
		subtitle: "Live deals are shared privately with registered investors. Tell us your focus and budget and we'll match opportunities as they clear our vetting.",
		minimal: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-brand grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Discretion by default" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-off-white/85 leading-relaxed",
						children: "Sterling & Co. works exclusively with qualified investors. Your information is held privately and used only to match you against active opportunities."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-white/8 bg-[color:var(--slate-deep)]/60 p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), "Qualified buyers only"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-4 text-sm text-off-white/85",
								children: [
									"No public listings or address broadcasting",
									"Deal packs shared 1:1 with matched investors",
									"First refusal on stock in your criteria",
									"Fast-track from view to exchange"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 text-gold mt-0.5" }), t]
								}, t))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.28em] text-gold",
							children: "Direct contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-off-white/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 items-center justify-center border border-white/15 text-[10px] uppercase tracking-[0.12em] text-gold",
										children: "@"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Email: ", CONTACT_EMAIL_LABEL] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LINKEDIN_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center gap-4 text-off-white/90 transition-colors duration-300 hover:text-gold group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 items-center justify-center border border-white/15 transition-colors group-hover:border-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
									}), "Simon Kohn · LinkedIn"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-off-white/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 items-center justify-center border border-white/15 text-[10px] uppercase tracking-[0.12em] text-gold",
										children: "So"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Social: ", SOCIAL_LABEL] })]
								})
							]
						})] })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative border border-white/8 bg-[color:var(--slate-deep)] p-8 md:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-px left-0 h-px w-1/3 bg-gold" }), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-h-[480px] flex flex-col items-center justify-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-16 w-16 items-center justify-center border border-gold text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-8 font-display text-3xl text-off-white",
								children: "Registration received."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-cool-gray leading-relaxed",
								children: "Simon will be in touch personally to discuss your focus and share matching opportunities. All communication is treated in strict confidence."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl text-off-white",
								children: "Investor registration"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-cool-gray",
								children: "All fields kept confidential. No obligation to proceed."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									name: "name",
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Company / entity",
									name: "company"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "focus",
									className: "text-[10px] uppercase tracking-[0.28em] text-gold",
									children: ["Investment focus ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold/60",
										children: "*"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "hidden",
									name: "focus",
									value: focus,
									required: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: focus,
									onValueChange: (value) => {
										setFocus(value);
										setFocusError(false);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										id: "focus",
										"aria-label": "Investment focus",
										className: `mt-3 h-auto w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-left text-off-white shadow-none ring-offset-navy focus:ring-0 data-[placeholder]:text-cool-gray/70 ${focusError ? "border-red-400" : "border-white/15 focus:border-gold"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a focus" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
										className: "z-[70] rounded-sm border-gold/35 bg-navy text-off-white shadow-[0_16px_40px_rgba(0,0,0,0.45)]",
										children: FOCUS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: f,
											className: "cursor-pointer text-off-white focus:bg-gold/15 focus:text-gold data-[state=checked]:text-gold",
											children: f
										}, f))
									})]
								}),
								focusError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-red-300",
									role: "alert",
									children: "Please select an investment focus."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-[10px] uppercase tracking-[0.28em] text-gold",
								children: "Budget range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: BUDGET.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "budget",
										value: b,
										className: "peer sr-only"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center border border-white/15 px-4 py-2 text-xs text-off-white/80 transition-colors duration-300 hover:border-gold/50 peer-checked:border-gold peer-checked:bg-gold/10 peer-checked:text-gold peer-focus-visible:ring-2 peer-focus-visible:ring-gold",
										children: b
									})]
								}, b))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message",
								className: "text-[10px] uppercase tracking-[0.28em] text-gold",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 4,
								placeholder: "Tell us what you're looking for",
								className: "mt-3 w-full bg-transparent border-b border-white/15 py-3 text-off-white placeholder:text-cool-gray/60 focus:border-gold outline-none transition-colors resize-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "btn-gold group inline-flex items-center gap-3",
								children: ["Submit registration", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					})]
				})
			})]
		})
	})] });
}
function Field({ label, name, type = "text", required }) {
	const id = name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "text-[10px] uppercase tracking-[0.28em] text-gold",
		children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gold/60",
			children: " *"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id,
		name,
		type,
		required,
		className: "mt-3 w-full bg-transparent border-b border-white/15 py-3 text-off-white placeholder:text-cool-gray/60 focus:border-gold outline-none transition-colors"
	})] });
}
//#endregion
export { Register as component };
