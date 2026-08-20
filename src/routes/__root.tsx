import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter } from "../components/site/SiteChrome";
import { LenisProvider } from "../lib/lenis-provider";
import { SITE_NAME, SITE_TAGLINE, LINKEDIN_URL, absoluteUrl, getSiteUrl } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-condensed text-[10rem] leading-none text-gold">404</div>
        <h1 className="mt-4 text-xl font-display text-off-white">Page not found</h1>
        <p className="mt-2 text-sm text-cool-gray">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-gold inline-flex items-center justify-center">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display text-off-white">This page didn't load</h1>
        <p className="mt-2 text-sm text-cool-gray">Something went wrong. Try again or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold inline-flex items-center"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center border border-white/15 px-5 py-2.5 text-[12px] uppercase tracking-[0.24em] text-off-white transition-colors hover:border-gold hover:text-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const siteUrl = getSiteUrl();
    const ogImage = absoluteUrl("/og-image.jpg");
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: `${SITE_NAME} | Discreet UK Property Deal Sourcing` },
        {
          name: "description",
          content:
            "Sterling & Co. Property Partners is a London-based deal desk sourcing off-market UK property investment opportunities: BMV deals, high-yield BTLs, developments and portfolios for qualified investors.",
        },
        {
          name: "keywords",
          content:
            "UK property investment, off-market property deals, BMV deals, buy to let UK, property sourcing London, family office real estate, Sterling and Co Property Partners",
        },
        { name: "author", content: SITE_NAME },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "theme-color", content: "#0D1B2E" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:title", content: SITE_NAME },
        { property: "og:description", content: SITE_TAGLINE },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: ogImage },
        { property: "og:locale", content: "en_GB" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SITE_NAME },
        { name: "twitter:description", content: SITE_TAGLINE },
        { name: "twitter:image", content: ogImage },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "canonical", href: siteUrl },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Bebas+Neue&display=swap",
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: SITE_NAME,
        description: SITE_TAGLINE,
        url: getSiteUrl(),
        image: absoluteUrl("/og-image.jpg"),
        logo: absoluteUrl("/logo-mark.png"),
        areaServed: { "@type": "Country", name: "United Kingdom" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "GB",
        },
        founder: {
          "@type": "Person",
          name: "Simon Kohn",
          jobTitle: "Managing Director",
          sameAs: [LINKEDIN_URL],
        },
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: getSiteUrl(),
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider />
      <SiteHeader />
      <main id="main-content" className="relative">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
