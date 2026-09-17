import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://abrahamonlineacademy.vercel.app";

  // Core Static Pages
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Targeted Country Landing Pages
  const countryRoutes = [
    "/landing/usa",
    "/landing/uae",
    "/landing/uk",
    "/landing/canada",
    "/landing/australia",
    "/landing/saudi-arabia",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic Blog Posts (Mock Array - Connect to your CMS/DB)
  const blogPosts = [
    "mastering-gcse-math-tips",
    "how-to-score-800-sat-math",
    "why-coding-is-essential-for-kids",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...countryRoutes, ...blogPosts];
}