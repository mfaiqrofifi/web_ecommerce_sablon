import type { MetadataRoute } from "next";
import { allSitemapEntries, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allSitemapEntries().map((entry) => ({
    url: absoluteUrl(entry.url),
    lastModified: now,
    changeFrequency: entry.url === "/" ? "weekly" : "monthly",
    priority: entry.priority,
  }));
}

