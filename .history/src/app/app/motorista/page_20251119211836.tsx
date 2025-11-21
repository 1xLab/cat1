import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "App Motorista | JM Tox",
};

const illustration = "/imagens/truck-futuristic.jpg";

export default function AppMotoristaPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Tecnologia
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">
            Aplicativo do Motorista
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Acompanhe voucher, coleta e resultado direto do celular.
          </p>
        </div>
        <div className="relative h-48 rounded-3xl">
          <Image
            src={illustration}
            alt="Motorista usando aplicativo"
            fill
            className="rounded-3xl object-cover"
            sizes="(min-width: 768px) 350px, 100vw"
          />
        </div>
      </div>
      <ul className="mt-8 space-y-3 rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
        <li>
          <strong className="text-[var(--color-text)]">Status do exame:</strong>{" "}
          veja quando o material chega ao laboratório e quando o laudo estiver
          liberado.
        </li>
        <li>
          <strong className="text-[var(--color-text)]">Documentos:</strong>{" "}
          baixe o PDF assinado e encaminhe diretamente ao DETRAN ou RH.
        </li>
        <li>
          <strong className="text-[var(--color-text)]">Suporte:</strong> chat
          humano 8h-22h para tirar dúvidas sobre coleta, prazos e legislações.
        </li>
      </ul>
      <div className="mt-6 flex gap-3">
        <Button variant="outline" asChild>
          <a href="/registre-se">Quero meu voucher</a>
        </Button>
        <Button asChild>
          <a href="/duvidas-frequentes">Como funciona</a>
        </Button>
      </div>
    </section>
  );
}
