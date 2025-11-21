import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";

const channels = [
  { label: "Telefone fixo", value: siteConfig.contacts.phone },
  { label: "WhatsApp", value: siteConfig.contacts.mobile },
  { label: "E-mail", value: siteConfig.contacts.email },
];

export const metadata: Metadata = {
  title: "Contato | JM Tox",
};

const illustration = "/imagens/caminhao1.jpg";

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Atendimento
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">
            Entre em contato
          </h1>
          <p className="mt-2 text-[var(--color-text-muted)]">
            Laboratório em Botucatu/SP com suporte nacional.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6">
              <p className="text-sm font-semibold text-[var(--color-text)]">
                JM Bioanálises
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {siteConfig.address}
              </p>
              <div className="mt-4 space-y-1 text-sm text-[var(--color-text-muted)]">
                {channels.map((channel) => (
                  <p key={channel.label}>
                    {channel.label}: {channel.value}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative h-48 rounded-3xl">
              <Image
                src={illustration}
                alt="Atendimento para motoristas"
                fill
                className="rounded-3xl object-cover"
                sizes="(min-width: 768px) 400px, 100vw"
              />
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Formulário de contato
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
