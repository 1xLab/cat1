import Image from "next/image";
import type { Metadata } from "next";

const illustration = "/imagens/illustration-duvidas-clean.svg";

const faqs = [
  {
    question: "Quem precisa realizar o exame toxicológico de larga janela?",
    answer:
      "Motoristas das categorias C, D e E que vão emitir, renovar ou alterar a CNH e profissionais CLT dessas categorias nos processos de admissão e desligamento previstos na Lei do Motorista (Lei 13.103/15) e Portaria 116 do Ministério do Trabalho.",
  },
  {
    question: "Quais drogas analisamos?",
    answer:
      "Seguimos o painel exigido pelo DENATRAN: cocaína e derivados, maconha e derivados, anfetaminas, metanfetaminas, ecstasy (MDMA/MDA), opiáceos (codeína, morfina, heroína) e anorexígenos (anfetamina, mazindol, femproporex).",
  },
  {
    question: "Quanto tempo demora o resultado?",
    answer:
      "Após a amostra chegar ao laboratório liberamos o laudo digital em até 3 dias úteis. Em regiões remotas ou com alto volume o prazo pode chegar a 5 dias úteis, mas sempre informamos o status no portal.",
  },
  {
    question: "Como funciona a coleta?",
    answer:
      "Coletamos preferencialmente cabelo com pelo menos 4 cm próximo à raiz. Se o motorista estiver sem cabelo suficiente usamos pelos do corpo (axila, tórax, pernas etc.). A ausência total de pelos inviabiliza o exame.",
  },
  {
    question: "Sou empresa, como compro vários exames?",
    answer:
      "Entre em contato com nosso time comercial para planos corporativos. Entregamos vouchers centralizados, relatórios para o CAGED e suporte para auditorias de segurança.",
  },
  {
    question: "Como acesso o resultado?",
    answer:
      "Use o botão Resultado no topo do site, informe CPF e senha e acompanhe o status. Também enviamos alertas por e-mail e WhatsApp quando o laudo está disponível.",
  },
];

export const metadata: Metadata = {
  title: "Dúvidas frequentes | JM Tox",
};

export default function DuvidasPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-[1fr_0.6fr]">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Atendimento ao motorista
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">
            Dúvidas frequentes
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Guia rápido sobre legislação, coleta e acompanhamento do seu exame.
          </p>
        </div>
        <div className="relative h-44 rounded-3xl">
          <Image
            src={illustration}
            alt="Ilustração de caminhão à noite"
            fill
            className="rounded-3xl object-cover"
            sizes="(min-width: 768px) 250px, 100vw"
          />
        </div>
      </div>
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-5"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-text)]">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
