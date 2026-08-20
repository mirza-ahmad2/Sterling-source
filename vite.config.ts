// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import type { Plugin } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/**
 * Rolldown can emit a cyclic SSR pair:
 *   server-*.mjs  (facade) imports server-*2.mjs, then exports `__exportAll`
 *   server-*2.mjs imports `__exportAll` from the facade
 * On Vercel the facade body has not assigned `__exportAll` yet, so SSR throws
 * `TypeError: __exportAll is not a function`. Inline the helper instead.
 */
function inlineCircularExportAll(): Plugin {
  const cyclicImport =
    /import\s*\{\s*\w+\s+as\s+__exportAll\s*\}\s*from\s*["']\.\/server-[^"']+["'];?\r?\n?/;

  const helper = `const __exportAll = (all, no_symbols) => {
	const target = {};
	for (const name in all) Object.defineProperty(target, name, { get: all[name], enumerable: true });
	if (!no_symbols) Object.defineProperty(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
`;

  return {
    name: "inline-circular-export-all",
    enforce: "post",
    renderChunk(code) {
      if (!cyclicImport.test(code)) return null;
      return { code: code.replace(cyclicImport, helper), map: null };
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
  plugins: [inlineCircularExportAll()],
});
