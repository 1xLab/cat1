import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CheckCircle2, Microscope, TestTubeDiagonal } from "lucide-react";
import Link from "next/link";

import { services } from "@/lib/data";
import { generatePageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return generatePageMetadata({
      title: "Serviço não encontrado",
      description: "",
    });
  }

  return generatePageMetadata({
    title: service.name,
    description: service.summary,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background">
      <section className="container space-y-4 py-16">
        <Link
          href="/servicos"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ← Voltar para serviços
        </Link>
        <h1 className="text-4xl font-semibold">{service.name}</h1>
        <p className="text-lg text-muted-foreground">{service.summary}</p>
      </section>

      <section className="container grid gap-6 pb-16 md:grid-cols-[3fr_2fr]">
        <Card className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Descrição</h2>
            <p className="mt-2 text-muted-foreground">
              {service.longDescription}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Metodologias</h3>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              {service.methods.map((method) => (
                <li
                  key={method}
                  className="flex items-center gap-2 text-foreground"
                >
                  <Microscope className="h-4 w-4 text-primary" />
                  {method}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Analitos</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.analytes.map((analyte) => (
                <span
                  key={analyte}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground"
                >
                  {analyte}
                </span>
              ))}
            </div>
          </div>
        </Card>
        <Card className="space-y-6">
          <div className="rounded-2xl bg-primary/5 p-4 text-sm text-primary">
            SLA médio:{" "}
            <span className="font-semibold text-foreground">
              {service.turnaround}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Diferenciais</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {[
                "Cadeia de custódia digital",
                "Integração com painel de resultados",
                "Alertas críticos por WhatsApp/SMS",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Button asChild>
            <Link href={`/contato?servico=${service.slug}`}>
              {service.cta}
            </Link>
          </Button>
          <div className="rounded-2xl border border-dashed border-primary/40 p-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <TestTubeDiagonal className="h-4 w-4 text-primary" />
              Disponível para coleta local ou in company.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
