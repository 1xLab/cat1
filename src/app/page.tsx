import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Truck, Users, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";

const heroImage = "/imagens/caminhao1.jpg";

const segments = [
  {
    title: "Motoristas Profissionais",
    highlight: "Exame a partir de R$ 120,00",
    body: [
      "Atendemos categorias C, D e E com coleta agendada em mais de 300 cidades.",
      "Pagamento facilitado em até 3x no cartão ou boleto e laudo digital em até 3 dias úteis após o recebimento da amostra.",
    ],
    bullets: [
      "Voucher enviado por e-mail e WhatsApp",
      "Coleta em cabelo ou pelos conforme legislação",
      "Suporte na hora de acessar o resultado",
    ],
    ctas: [
      { label: "Comprar exame", href: "/registre-se" },
      { label: "Ver postos", href: "/postos-de-coletas" },
    ],
  },
  {
    title: "Empresas e Frotas",
    highlight: "Programas CLT / CAGED",
    body: [
      "Planos corporativos para embarcadores, transportadoras e cooperativas com faturamento centralizado.",
      "Integração com RH para admissões e desligamentos previstos na Lei do Motorista.",
    ],
    bullets: [
      "Dashboard com status dos laudos",
      "Equipe dedicada para auditorias",
      "Rede nacional de coleta assistida",
    ],
    ctas: [
      { label: "Falar com comercial", href: "/contato" },
      { label: "Portal do parceiro", href: "/app/parceiros" },
    ],
  },
  {
    title: "Concursos",
    highlight: "Exame para concursos",
    body: [
      "Exames toxicológicos para processos seletivos e concursos públicos.",
      "Atendemos às exigências legais para admissão em cargos públicos e privados.",
    ],
    bullets: [
      "Laudo oficial para concursos",
      "Coleta em todo território nacional",
      "Resultado em até 3 dias úteis",
    ],
    ctas: [
      { label: "Solicitar exame", href: "/contato" },
      { label: "Ver postos", href: "/postos-de-coletas" },
    ],
  },
];

const metrics = [];

const differentiators = [
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Especialista em transporte",
    body: "Processos pensados para motoristas de cargas, passageiros e operadores logísticos.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Compliance garantido",
    body: "Laboratório acreditado ISO 17025 e reconhecido pela Lei 13.103 e Portaria 116.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Equipe dedicada",
    body: "Consultores para RH e coordenadores de frota acompanhando cada exame.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Rede digital",
    body: "Voucher, agendamento, resultado e faturamento 100% on-line.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[var(--color-bg)]">
        <div className="relative h-[60vh]">
          <Image
            src={heroImage}
            alt="Caminhão na rodovia"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl flex-col gap-6 px-4 py-16 text-white lg:flex-row lg:items-center">
              <div className="space-y-6 lg:w-3/5">
                <p className="text-xs uppercase tracking-[0.5em] text-orange-200">
                  Exame toxicológico para motoristas profissionais
                </p>
                <h1 className="text-balance text-4xl font-semibold lg:text-5xl">
                  Simples, rápido e aprovado pelos órgãos de trânsito
                </h1>
                <p className="text-lg text-orange-100">
                  Resultado em até <strong>3 dias úteis*</strong> após o
                  recebimento da amostra. *Consulte disponibilidade na sua região.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link href="/registre-se">Comprar exame</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/postos-de-coletas">Ver postos de coleta</Link>
                  </Button>
                </div>
              </div>
              <div className="glass-panel rounded-3xl bg-white/95 p-6 text-sm text-slate-600 shadow-2xl">
                <h2 className="text-xl font-semibold text-slate-900">
                  Por que motoristas escolhem a JM Bioanálises?
                </h2>
                <p className="mt-3">
                  Mais de uma década entregando exames de larga janela para
                  caminhoneiros, ônibus rodoviários, transporte urbano e carros
                  executivos.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                  <li>Voucher digital liberado em minutos</li>
                  <li>Coleta monitorada com cadeia de custódia</li>
                  <li>Resultado online com suporte humano</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex flex-col gap-2 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Quem atendemos
          </p>
          <h2 className="text-3xl font-semibold">Menor preço e mais agilidade</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <article
              key={segment.title}
              className="flex h-full flex-col rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6 shadow-lg shadow-black/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
                {segment.highlight}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
                {segment.title}
              </h3>
              <div className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
                {segment.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
                {segment.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {segment.ctas.map((cta) => (
                  <Button key={cta.label} asChild variant="outline" size="sm">
                    <Link href={cta.href}>
                      {cta.label} <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6"
            >
              <div className="flex items-center gap-3 text-[var(--color-primary)]">
                <span className="rounded-full bg-[var(--color-primary)]/10 p-2">
                  {item.icon}
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-16 text-[var(--color-text)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Resultado online
          </p>
          <h2 className="text-3xl font-semibold">
            Acesse seu laudo em poucos cliques
          </h2>
          <p className="text-[var(--color-text-muted)]">
            Assim que o material chega ao laboratório você pode acompanhar cada
            etapa. Enviamos alertas por e-mail, WhatsApp e atualizamos o painel
            do motorista ou da empresa contratante.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/resultados">
                Resultado – Acesse Aqui
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/duvidas-frequentes">Ver dúvidas frequentes</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-16 text-[var(--color-text)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
            Certificações e Acreditações
          </p>
          <h2 className="text-3xl font-semibold">
            Credenciado com o DENATRAN
          </h2>
          <p className="text-[var(--color-text-muted)]">
            Nossa acreditação garante a conformidade com os mais altos padrões de qualidade e segurança para exames toxicológicos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
              Rede nacional
            </p>
            <h3 className="text-2xl font-semibold text-[var(--color-text)]">
              Faça parte da nossa rede de coleta
            </h3>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              Fornecemos kit de coleta, treinamento e logística reversa para que
              clínicas, laboratórios e drogarias ofereçam o exame toxicológico
              em conformidade absoluta.
            </p>
            <Button variant="outline" className="mt-5" asChild>
              <Link href="/cadastro-postos-de-coleta">Cadastre-se já</Link>
            </Button>
          </article>
          <article className="rounded-3xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-text-muted)]">
              Sobre a JM Bioanálises
            </p>
            <h3 className="text-2xl font-semibold text-[var(--color-text)]">
              100% dedicada ao transporte
            </h3>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              Somos referência em exames de larga janela desde 2012,
              certificados pelo INMETRO e com dezenas de cases de grandes frotas,
              usinas, cooperativas, empresas de ônibus e transportadoras.
            </p>
            <Button className="mt-5" asChild>
              <Link href="/parceiros">Conheça nossos programas</Link>
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
}
