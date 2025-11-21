import Link from "next/link";
import { Metadata } from "next";

import { blogPosts } from "@/lib/data";
import { generatePageMetadata } from "@/lib/seo";
import { formatIsoDate } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description: "Pesquisas, artigos técnicos e bastidores de inovação JMBio.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="container space-y-10 py-16">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
          Conteúdo
        </p>
        <h1 className="text-4xl font-semibold">Biblioteca técnica</h1>
        <p className="text-lg text-muted-foreground">
          Estudos, notas metodológicas e melhores práticas em toxicologia
          aplicada para operações críticas.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex h-full flex-col">
            <Badge className="w-fit">{post.category}</Badge>
            <p className="mt-2 text-sm text-muted-foreground">
              {formatIsoDate(post.publishedAt)}
            </p>
            <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 text-sm font-semibold text-primary"
            >
              Ler artigo completo →
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
