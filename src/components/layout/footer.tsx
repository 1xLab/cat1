import Link from "next/link";

import { siteConfig } from "@/lib/site";

const quickLinks = [
  { label: "Dúvidas", href: "/duvidas-frequentes" },
  { label: "Postos de Coletas", href: "/postos-de-coletas" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Contato", href: "/contato" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-outline)] bg-[var(--color-surface)]/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:justify-between">
        <div className="max-w-lg space-y-3">
          <p className="text-lg font-semibold text-[var(--color-text)]">
            {siteConfig.name}
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            {siteConfig.description}
          </p>
          <div className="text-sm text-[var(--color-text-muted)]">
            <p>{siteConfig.address}</p>
            <p>Telefone: {siteConfig.contacts.phone}</p>
            <p>WhatsApp: {siteConfig.contacts.mobile}</p>
            <p>E-mail: {siteConfig.contacts.email}</p>
            <p>Horário: {siteConfig.businessHours}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
            Links rápidos
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-outline)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © 2022 - Todos Direitos Reservados a JM Bioanálises Exames Toxicológicos
          </p>
          <p>Desenvolvido por Megaweb Solutions Ltda</p>
        </div>
      </div>
    </footer>
  );
}
