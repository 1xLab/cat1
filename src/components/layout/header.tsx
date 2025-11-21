import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dúvidas", href: "/duvidas-frequentes" },
  { label: "Procedimentos de Coleta", href: "/duvidas-frequentes#procedimentos" },
  { label: "Postos de Coletas", href: "/postos-de-coletas" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-outline)] bg-[var(--color-header)]/15 backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-jm-bioanalises-branco.png"
            alt="JM Bioanálises"
            width={150}
            height={42}
            className="h-10 w-auto"
            priority
          />
          <span className="sr-only">JM Bioanálises</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--color-text-muted)] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--color-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href="/resultados">Resultado</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/parceiros">Portal do Parceiro</Link>
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
      <div className="border-t border-[var(--color-outline)] bg-[var(--color-header)] px-4 py-3 lg:hidden">
        <nav className="flex flex-wrap gap-3 text-sm font-semibold text-[var(--color-text-muted)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-gray-600 px-3 py-1 transition hover:border-[var(--color-primary)] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
