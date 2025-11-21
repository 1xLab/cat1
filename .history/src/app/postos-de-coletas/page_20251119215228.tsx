import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const states = [
  { sigla: "SP", cidades: ["Botucatu", "Campinas", "Sorocaba", "São Paulo"] },
  { sigla: "PR", cidades: ["Curitiba", "Londrina", "Maringá"] },
  { sigla: "SC", cidades: ["Florianópolis", "Joinville"] },
  { sigla: "MG", cidades: ["Uberlândia", "Belo Horizonte"] },
  { sigla: "BA", cidades: ["Salvador", "Feira de Santana"] },
];

export const metadata: Metadata = {
  title: "Postos de coleta | JM Tox",
};

const illustration = "/imagens/illustration-postos-v2.svg";

export default function PostosPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
              Rede credenciada
            </p>
            <h1 className="text-4xl font-semibold text-[var(--color-text)]">
              Postos de coleta
            </h1>
          </div>
          <p className="text-[var(--color-text-muted)]">
            Considere o posto mais perto de você ou cadastre sua clínica para
            integrar a nossa rede nacional.
          </p>
          <Button asChild>
            <a href="/cadastro-postos-de-coleta">Cadastrar posto</a>
          </Button>
        </div>
        <div className="relative h-56 rounded-3xl">
          <Image
            src={illustration}
            alt="Caminhão em movimento"
            fill
            className="rounded-3xl object-cover"
            sizes="(min-width: 768px) 450px, 100vw"
          />
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {states.map((state) => (
          <article
            key={state.sigla}
            className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
              {state.sigla}
            </p>
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              {state.cidades.join(", ")}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Entre em contato para confirmar horários de coleta, documentos
              exigidos e disponibilidade de agenda para motoristas da região.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
