import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const requisitos = [
  "Sala reservada para coleta capilar ou corporal",
  "Equipe treinada para preencher cadeia de custódia",
  "Acesso à internet para registrar vouchers",
  "Endereço comercial regularizado e CNPJ",
];

export const metadata: Metadata = {
  title: "Cadastro de postos de coleta | JM Tox",
};

const illustration = "/imagens/illustration-cadastro-clean.svg";

export default function CadastroPostosPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Rede de coleta
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">
            Cadastre seu posto
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Receba treinamento, kit de coleta e integração com a rede JM Tox.
          </p>
        </div>
        <div className="relative h-48 rounded-3xl">
          <Image
            src={illustration}
            alt="Posto de coleta moderno"
            fill
            className="rounded-3xl object-cover"
            sizes="(min-width: 768px) 350px, 100vw"
          />
        </div>
      </div>
      <div className="mt-10 rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6">
        <h2 className="text-2xl font-semibold text-[var(--color-text)]">
          Pré-requisitos
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-text-muted)]">
          {requisitos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Button className="mt-6" asChild>
          <a href="/contato">Falar com expansão</a>
        </Button>
      </div>
    </section>
  );
}
