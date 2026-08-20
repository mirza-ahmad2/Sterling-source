import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Linkedin, ShieldCheck, ArrowUpRight, Check } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, SectionEyebrow } from "@/components/site/Primitives";
import { pageHead } from "@/lib/seo";
import { CONTACT_EMAIL_LABEL, LINKEDIN_URL, SOCIAL_LABEL } from "@/lib/site";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImg from "@/assets/hero-register.jpg";

export const Route = createFileRoute("/register")({
  head: () =>
    pageHead({
      title: "Register as an Investor",
      description:
        "Register privately to access live UK property investment opportunities sourced by Sterling & Co. Property Partners.",
      path: "/register",
    }),
  component: Register,
});

const FOCUS = ["Below-Market-Value (BMV)", "High-Yield Buy-to-Let", "Development & Refurbishment", "Portfolio / Multi-Unit"] as const;
const BUDGET = ["Under £250k", "£250k – £750k", "£750k – £2m", "£2m – £5m", "£5m+"] as const;

function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [focus, setFocus] = useState("");
  const [focusError, setFocusError] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!focus) {
      setFocusError(true);
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Luxury penthouse interior overlooking city lights at night"
        eyebrow="Register as an Investor"
        title={<>Get access to <em className="not-italic text-gold font-normal">live opportunities.</em></>}
        subtitle="Live deals are shared privately with registered investors. Tell us your focus and budget and we'll match opportunities as they clear our vetting."
        minimal
      />

      <section className="py-24 lg:py-32">
        <div className="container-brand grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="space-y-10">
            <Reveal>
              <SectionEyebrow>Discretion by default</SectionEyebrow>
              <p className="mt-6 text-off-white/85 leading-relaxed">
                Sterling &amp; Co. works exclusively with qualified investors. Your information is held privately and used only to match you against active opportunities.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-white/8 bg-[color:var(--slate-deep)]/60 p-8">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold">
                  <ShieldCheck className="h-4 w-4" />
                  Qualified buyers only
                </div>
                <ul className="mt-6 space-y-4 text-sm text-off-white/85">
                  {[
                    "No public listings or address broadcasting",
                    "Deal packs shared 1:1 with matched investors",
                    "First refusal on stock in your criteria",
                    "Fast-track from view to exchange",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <Check className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Direct contact</div>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center gap-4 text-off-white/90">
                    <span className="flex h-10 w-10 items-center justify-center border border-white/15 text-[10px] uppercase tracking-[0.12em] text-gold">
                      @
                    </span>
                    <span>Email: {CONTACT_EMAIL_LABEL}</span>
                  </div>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-off-white/90 transition-colors duration-300 hover:text-gold group"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors group-hover:border-gold">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    Simon Kohn · LinkedIn
                  </a>
                  <div className="flex items-center gap-4 text-off-white/90">
                    <span className="flex h-10 w-10 items-center justify-center border border-white/15 text-[10px] uppercase tracking-[0.12em] text-gold">
                      So
                    </span>
                    <span>Social: {SOCIAL_LABEL}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative border border-white/8 bg-[color:var(--slate-deep)] p-8 md:p-12">
              <div className="absolute -top-px left-0 h-px w-1/3 bg-gold" />

              {submitted ? (
                <div className="min-h-[480px] flex flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center border border-gold text-gold">
                    <Check className="h-6 w-6" />
                  </div>
                  <h2 className="mt-8 font-display text-3xl text-off-white">Registration received.</h2>
                  <p className="mt-4 max-w-md text-cool-gray leading-relaxed">
                    Simon will be in touch personally to discuss your focus and share matching opportunities. All communication is treated in strict confidence.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl text-off-white">Investor registration</h2>
                    <p className="mt-3 text-sm text-cool-gray">All fields kept confidential. No obligation to proceed.</p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Company / entity" name="company" />
                  </div>
                  <Field label="Email" name="email" type="email" required />

                  <div>
                    <label htmlFor="focus" className="text-[10px] uppercase tracking-[0.28em] text-gold">
                      Investment focus <span className="text-gold/60">*</span>
                    </label>
                    <input type="hidden" name="focus" value={focus} required={false} />
                    <Select
                      value={focus}
                      onValueChange={(value) => {
                        setFocus(value);
                        setFocusError(false);
                      }}
                    >
                      <SelectTrigger
                        id="focus"
                        aria-label="Investment focus"
                        className={`mt-3 h-auto w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-left text-off-white shadow-none ring-offset-navy focus:ring-0 data-[placeholder]:text-cool-gray/70 ${focusError ? "border-red-400" : "border-white/15 focus:border-gold"}`}
                      >
                        <SelectValue placeholder="Select a focus" />
                      </SelectTrigger>
                      <SelectContent className="z-[70] rounded-sm border-gold/35 bg-navy text-off-white shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                        {FOCUS.map((f) => (
                          <SelectItem
                            key={f}
                            value={f}
                            className="cursor-pointer text-off-white focus:bg-gold/15 focus:text-gold data-[state=checked]:text-gold"
                          >
                            {f}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {focusError && (
                      <p className="mt-2 text-xs text-red-300" role="alert">
                        Please select an investment focus.
                      </p>
                    )}
                  </div>

                  <fieldset>
                    <legend className="text-[10px] uppercase tracking-[0.28em] text-gold">Budget range</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {BUDGET.map((b) => (
                        <label key={b} className="cursor-pointer">
                          <input type="radio" name="budget" value={b} className="peer sr-only" />
                          <span className="inline-flex items-center border border-white/15 px-4 py-2 text-xs text-off-white/80 transition-colors duration-300 hover:border-gold/50 peer-checked:border-gold peer-checked:bg-gold/10 peer-checked:text-gold peer-focus-visible:ring-2 peer-focus-visible:ring-gold">
                            {b}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="message" className="text-[10px] uppercase tracking-[0.28em] text-gold">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us what you're looking for"
                      className="mt-3 w-full bg-transparent border-b border-white/15 py-3 text-off-white placeholder:text-cool-gray/60 focus:border-gold outline-none transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold group inline-flex items-center gap-3">
                    Submit registration
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = name;
  return (
    <div>
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.28em] text-gold">
        {label}
        {required && <span className="text-gold/60"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-transparent border-b border-white/15 py-3 text-off-white placeholder:text-cool-gray/60 focus:border-gold outline-none transition-colors"
      />
    </div>
  );
}
