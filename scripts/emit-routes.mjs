// Emit a real index.html at each client-side route so the static host returns
// HTTP 200 (not 404 + the 404.html JS fallback) for direct hits and JS-less
// crawlers/validators. The router in src/App.tsx keys off window.location
// .pathname, so a copy of the SPA shell at each path renders the right page.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const routes = ["privacy", "terms", "delete-account"];

for (const route of routes) {
  const dest = join(dist, route, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(join(dist, "index.html"), dest);
  console.log(`emitted /${route}/index.html`);
}
