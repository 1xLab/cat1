import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { blogPosts } from "@/lib/data";
import { formatIsoDate } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Insights() {
  return (
    <section className="container space-y-8 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge variant="outline" className="bg-white/70 text-primary">
            Insights científicos
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold">Blog e publicações</h2>
        </div>
        <Link
          href="/blog"
          className="text-sm font-semibold text-primary flex items-center gap-2"
        >
          Biblioteca completa <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex h-full flex-col">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{post.category}</span>
              <span>{formatIsoDate(post.publishedAt)}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
              {post.author} • {post.readTime}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center text-sm font-semibold text-primary"
            >
              Ler artigo <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
