import { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogPosts } from "@/lib/data";
import { generatePageMetadata } from "@/lib/seo";
import { formatIsoDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    return generatePageMetadata({
      title: "Publicação não encontrada",
    });
  }
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="container space-y-6 py-16">
      <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
        {post.category}
      </p>
      <h1 className="text-4xl font-semibold">{post.title}</h1>
      <p className="text-sm text-muted-foreground">
        {post.author} • {formatIsoDate(post.publishedAt)} • {post.readTime}
      </p>
      <div className="prose max-w-3xl text-muted-foreground prose-headings:text-foreground">
        <p>
          {post.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam congue urna massa, ac laoreet urna pulvinar sit amet. Praesent
          eu dictum odio. Integer sagittis tortor non lectus commodo, id
          facilisis elit aliquet.
        </p>
        <p>
          Vestibulum lacinia, purus sit amet accumsan mattis, ante augue
          venenatis lorem, a mattis ipsum lacus in tortor. Integer ac ligula
          velit. Mauris vehicula consequat enim, at posuere neque vehicula sit
          amet.
        </p>
        <ul>
          <li>Protocolos validados em 3 níveis de controle</li>
          <li>Integração com sistemas HL7 / REST</li>
          <li>Metodologias GC-MS/MS, LC-HRMS e ICP-MS</li>
        </ul>
        <p>
          Para conhecer mais, fale com nosso time pelo e-mail
          integracoes@jmbio.com.br.
        </p>
      </div>
    </article>
  );
}
