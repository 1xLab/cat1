import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const illustration = "/imagens/illustration-app-parceiros.jpg";

export const metadata: Metadata = {
  title: "App Parceiros | JM Tox",
};

export default function AppParceirosPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Tecnologia
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">
            Portal do Parceiro
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Controle total dos vouchers emitidos, status das coletas e
            faturamento.
          </p>
        </div>
        <div className="relative h-48 rounded-3xl">
          <Image
            src={illustration}
            alt="Painel do parceiro"
            fill
            className="rounded-3xl object-cover"
            sizes="(min-width: 768px) 350px, 100vw"
          />
        </div>
      </div>
      <ul className="mt-8 space-y-3 rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
        <li>
          Painel de agendamentos em tempo real e confirmação de recebimento da
          amostra pela logística.
        </li>
        <li>
          Lançamento de despesas e consulta de repasses semanais para o posto.
        </li>
        <li>
          Biblioteca com POPs, vídeos e formulários oficiais do programa.
        </li>
      </ul>
      <Button className="mt-6" asChild>
        <a href="/parceiros">Quero ser parceiro</a>
      </Button>
    </section>
  );
}
