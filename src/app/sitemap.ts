import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services, blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes: MetadataRoute.Sitemap = [
    "",
    "/servicos",
    "/sobre",
    "/unidades",
    "/resultados",
    "/contato",
    "/blog",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/servicos/${service.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...routes, ...serviceRoutes, ...postRoutes];
}
