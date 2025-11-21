import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, Microscope } from "lucide-react";

import { services } from "@/lib/data";
import { generatePageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = generatePageMetadata({
  title: "Serviços",
  description:
    "Protocolos toxicológicos completos, com métodos cromatográficos avançados e integração digital.",
  path: "/servicos",
});

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="container space-y-6 py-16">
        <Badge variant="outline" className="w-fit">
          Portfólio modular
        </Badge>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold text-foreground">
              Protocolos científicos guiados por dados
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Conectamos instrumentação tier-one, compliance regulatório e
              integrações com sistemas críticos da sua operação. Todos os
              exames contam com validação dupla e cadeia de custódia completa.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-primary">
            <p>
              <strong>Metodologias:</strong> GC-MS/MS, LC-HRMS, ICP-MS, RT-PCR,
              imunoensaios multi-analitos.
            </p>
            <p className="mt-2">
              <strong>Integração:</strong> APIs REST, SFTP seguro, laudos com
              assinatura digital ICP-Brasil, SSO (Azure AD / Okta).
            </p>
          </div>
        </div>
      </section>

      <section className="container grid gap-6 py-10 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.slug} className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Microscope className="h-5 w-5" />
              </div>
              <Badge variant="outline" className="text-xs font-semibold">
                {service.turnaround}
              </Badge>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{service.name}</h2>
              <p className="mt-2 text-muted-foreground">{service.summary}</p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Métodos</p>
              <div className="flex flex-wrap gap-2">
                {service.methods.map((method) => (
                  <span
                    key={method}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <Button variant="ghost" className="px-0" asChild>
              <Link href={`/servicos/${service.slug}`}>
                Ver detalhes <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        ))}
      </section>
    </div>
  );
}
