import Image from "next/image";
import type { Metadata } from "next";

const sections = [
  {
    title: "Coleta de dados",
    body: "Coletamos nome, CPF, dados de contato e informações referentes ao exame toxicológico apenas para cumprir exigências legais do DETRAN, DENATRAN e legislação trabalhista. Nenhum dado é vendido a terceiros.",
  },
  {
    title: "Uso e armazenamento",
    body: "Os dados ficam armazenados em ambiente seguro e criptografado. Compartilhamos apenas com laboratórios parceiros envolvidos na análise e com órgãos reguladores quando exigido em lei.",
  },
  {
    title: "Direitos do titular",
    body: "Você pode solicitar correção, anonimização ou exclusão de informações por meio do e-mail jmtox@jmbioanalises.com.br. Seguimos diretrizes da LGPD no tratamento dos dados.",
  },
];

export const metadata: Metadata = {
  title: "Política de privacidade | JM Tox",
};

const illustration = "/imagens/illustration-privacidade.jpg";

export default function PoliticaPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Esta política descreve como tratamos seus dados pessoais durante o
            processo de exames toxicológicos.
          </p>
        </div>
        <div className="relative h-48 rounded-3xl">
          <Image
            src={illustration}
            alt="Segurança e dados"
            fill
            className="rounded-3xl object-cover"
            sizes="(min-width: 768px) 350px, 100vw"
          />
        </div>
      </div>
      <div className="mt-8 space-y-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6"
          >
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              {section.title}
            </h2>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              {section.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
