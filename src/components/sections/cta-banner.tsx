import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 to-blue-900 p-10 text-white shadow-xl">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Atendimento 24/7
          </p>
          <h2 className="text-3xl font-semibold lg:text-4xl">
            Ative um laboratório científico dentro da sua operação
          </h2>
          <p className="max-w-2xl text-white/80">
            Conectamos laudos, dashboards e integrações em menos de 7 dias.
            Protocolos customizados para logística, óleo & gás, mineração e
            indústria farmacêutica.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/contato">
                Desenhar projeto <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={siteConfig.social.whatsapp} target="_blank">
                Atender agora
              </Link>
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
      </div>
    </section>
  );
}
