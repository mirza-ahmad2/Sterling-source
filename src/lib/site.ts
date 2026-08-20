export const SITE_NAME = "Sterling & Co. Property Partners";
export const SITE_TAGLINE = "Access to property deals most investors never see.";
export const SITE_KEYWORDS =
  "UK property investment, off-market property deals, BMV deals, buy to let UK, property sourcing London, family office real estate, portfolio acquisitions, Sterling and Co Property Partners, Simon Kohn";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/simon-kohn-9278a83b2/?skipRedirect=true";
export const CONTACT_EMAIL_LABEL = "Add here";
export const SOCIAL_LABEL = "Add here";

export function getSiteUrl() {
  const explicit = import.meta.env.VITE_SITE_URL as string | undefined;
  if (explicit) return explicit.replace(/\/$/, "");

  if (typeof process !== "undefined") {
    const vercel =
      process.env.VITE_SITE_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      process.env.VERCEL_URL;
    if (vercel) {
      return vercel.startsWith("http") ? vercel.replace(/\/$/, "") : `https://${vercel}`;
    }
  }

  if (typeof window !== "undefined") return window.location.origin;
  return "http://localhost:3000";
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
