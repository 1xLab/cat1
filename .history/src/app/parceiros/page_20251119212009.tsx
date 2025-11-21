import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Integração completa",
    body: "Fornecemos sistema de vouchers, treinamento para coleta, manual de cadeia de custódia e logística reversa das amostras.",
  },
  {
    title: "Marketing compartilhado",
    body: "Divulgamos sua unidade no site e direcionamos motoristas da região para manter o fluxo constante.",
  },
  {
    title: "Remuneração transparente",
    body: "Pagamentos quinzenais com relatórios digitais e suporte financeiro dedicado.",
  },
];

export const metadata: Metadata = {
  title: "Parceiros | JM Tox",
};

const illustration = "/imagens/illustration-parceiros.jpg";

export default function ParceirosPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Rede JM Tox
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">
            Parceiros e laboratórios
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Tornamos sua clínica ou laboratório um posto de coleta homologado
            pela JM Bioanálises.
          </p>
        </div>
        <div className="relative h-48 rounded-3xl">
          <Image
            src={illustration}
            alt="Tecnologia embarcada em caminhões"
            fill
            className="rounded-3xl object-cover"
            sizes="(min-width: 768px) 400px, 100vw"
          />
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6"
          >
            <h2 className="text-xl font-semibold text-[var(--color-text)]">
              {pillar.title}
            </h2>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              {pillar.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild>
          <a href="/cadastro-postos-de-coleta">Cadastrar posto</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/app/parceiros">Portal do parceiro</a>
        </Button>
      </div>
    </section>
  );
}
