import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "1. Dados pessoais",
    body: "Informe nome completo, CPF e contatos para gerar o voucher digital. Utilizamos essas informações apenas para o exame.",
  },
  {
    title: "2. Escolha do posto",
    body: "Selecione o posto mais conveniente, veja horários disponíveis e confirme sua ida.",
  },
  {
    title: "3. Pagamento seguro",
    body: "Finalize via cartão (até 3x) ou boleto. Assim que confirmado, enviamos o voucher por e-mail e WhatsApp.",
  },
];

export const metadata: Metadata = {
  title: "Registre-se | JM Tox",
};

const illustration = "/imagens/illustration-registre-v2.svg";

export default function RegistrePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
              Cadastro online
            </p>
            <h1 className="text-4xl font-semibold text-[var(--color-text)]">
              Registre-se
            </h1>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Preencha o formulário para gerar seu voucher de coleta.
            </p>
          </div>
          <Button asChild>
            <a href="/contato">Falar com a equipe</a>
          </Button>
        </div>
        <div className="relative h-44 rounded-3xl">
          <Image
            src={illustration}
            alt="Caminhão em movimento"
            fill
            className="rounded-3xl object-cover"
            sizes="(min-width: 768px) 350px, 100vw"
          />
        </div>
      </div>
      <div className="mt-10 space-y-4">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6"
          >
            <h2 className="text-xl font-semibold text-[var(--color-text)]">
              {step.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
