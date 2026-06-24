import { PROJECTS } from "./lib/projects";
import { REGIONS } from "./lib/regions";

const BASE = "https://returnonreno.com";

// Auto-generates sitemap.xml at build covering every static + programmatic page.
export default function sitemap() {
  const staticPages = [
    "", "cost", "guides/best-home-improvements-roi",
    "about", "contact", "privacy", "terms", "affiliate-disclosure",
  ].map((path) => ({
    url: `${BASE}/${path ? path + "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : 0.6,
  }));

  const projectPages = PROJECTS.map((p) => ({
    url: `${BASE}/cost/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const regionPages = [];
  for (const p of PROJECTS) {
    for (const r of REGIONS) {
      regionPages.push({
        url: `${BASE}/cost/${p.slug}/${r.slug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return [...staticPages, ...projectPages, ...regionPages];
}
