import { Metadata } from "next";
import { Award, CheckCircle2, Users } from "lucide-react";

import { certifications } from "@/lib/data";
import { generatePageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = generatePageMetadata({
  title: "Sobre a JMBio",
  description:
    "Laboratório brasileiro de toxicologia com rigor internacional e integrações digitais.",
  path: "/sobre",
});

const milestones = [
  {
    year: "2015",
    title: "Fundação e primeiros projetos",
    description:
      "Implementação de protocolos para transportadoras reguladas pela ANTT.",
  },
  {
    year: "2018",
    title: "Acreditação ISO 17025",
    description:
      "Automação de cadeia de custódia digital e instrumentação GC-MS/MS redundante.",
  },
  {
    year: "2022",
    title: "Integrações e APIs próprias",
    description:
      "Lançamento do hub de dados com conectores para ERPs e plataformas de RH.",
  },
  {
    year: "2024",
    title: "Expansão para América Latina",
    description:
      "Times remotos operando no Brasil, Chile e Colômbia, com suporte 24/7.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="container space-y-4 py-16">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
          Quem somos
        </p>
        <h1 className="text-4xl font-semibold">
          Engenharia, ciência e dados alinhados ao cuidado
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          A JMBio nasceu dentro de um laboratório de pesquisa aplicada em São
          Paulo com o objetivo de aproximar a toxicologia avançada da rotina das
          empresas brasileiras. Entregamos resultados com alto rigor técnico,
          linguagem acessível e integrações com qualquer stack tecnológica.
        </p>
      </section>

      <section className="container grid gap-8 py-12 md:grid-cols-2">
        {milestones.map((milestone) => (
          <Card key={milestone.year}>
            <p className="text-sm uppercase tracking-widest text-primary">
              {milestone.year}
            </p>
            <h2 className="mt-2 text-2xl font-semibold">{milestone.title}</h2>
            <p className="mt-3 text-muted-foreground">{milestone.description}</p>
          </Card>
        ))}
      </section>

      <section className="container grid gap-6 py-12 md:grid-cols-3">
        <Card className="space-y-3">
          <Award className="h-8 w-8 text-primary" />
          <h3 className="text-lg font-semibold">Certificações</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {cert}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-3">
          <Users className="h-8 w-8 text-primary" />
          <h3 className="text-lg font-semibold">Time</h3>
          <p className="text-sm text-muted-foreground">
            45 especialistas entre toxicologistas, biomédicos, engenheiros e
            cientistas de dados com pós-graduação.
          </p>
        </Card>
        <Card className="space-y-3">
          <Award className="h-8 w-8 text-primary" />
          <h3 className="text-lg font-semibold">Laboratório inteligente</h3>
          <p className="text-sm text-muted-foreground">
            Instrumentação IoT monitora temperatura, fluxo e reagentes com
            alertas automáticos e integração ao NOC.
          </p>
        </Card>
      </section>
    </div>
  );
}
