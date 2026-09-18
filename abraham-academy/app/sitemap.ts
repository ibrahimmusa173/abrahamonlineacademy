import { MetadataRoute } from "next";
import { coursesData } from "@/lib/courses-data";
import { blogPosts } from "@/lib/blog-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://abrahamonlineacademy.vercel.app";

  // 1. Core Static Pages & Dedicated Landing Pages
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/contact",
    "/blog",
    "/usa-tutoring",
    "/uae-tutoring",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. All 8 Dynamic Subject Course Pages
  const courseRoutes = Object.keys(coursesData).map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Country Landing Page Routes
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
    priority: 0.8,
  }));

  // 4. Dynamic Blog Post Articles
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...countryRoutes, ...blogRoutes];
}