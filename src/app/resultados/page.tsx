import { Metadata } from "next";
import { ShieldCheck, Link as LinkIcon } from "lucide-react";

import { generatePageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResultsForm } from "@/components/forms/results-form";

export const metadata: Metadata = generatePageMetadata({
  title: "Área de Resultados",
  description:
    "Acesso seguro aos laudos com autenticação multifator e integrações dedicadas.",
  path: "/resultados",
});

export default function ResultsPage() {
  return (
    <div className="bg-background">
      <section className="container grid gap-8 py-16 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Resultados
          </p>
          <h1 className="text-4xl font-semibold">
            Painel seguro para médicos, RH e gestores
          </h1>
          <p className="text-lg text-muted-foreground">
            Autenticação multifator, logs completos e integrações com sistemas
            de gestão via API REST ou SSO. Consulte os resultados diretamente no
            painel oficial do parceiro tecnológico.
          </p>
          <Card className="bg-primary/5 text-sm text-muted-foreground">
            <p className="flex items-center gap-2 text-primary">
              <ShieldCheck className="h-4 w-4" /> Segurança
            </p>
            <ul className="mt-2 list-disc pl-4">
              <li>Autenticação de dois fatores (OTP)</li>
              <li>Logs por usuário e IP</li>
              <li>Exportação com assinatura ICP-Brasil</li>
            </ul>
          </Card>
        </div>
        <Card className="space-y-4">
          <ResultsForm />
          <div className="rounded-2xl border border-dashed border-primary/30 p-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-primary" />
              Precisa integrar seu sistema?
            </p>
            <Button variant="link" className="px-0" asChild>
              <a href="mailto:integracoes@jmbio.com.br">
                Escreva para integracoes@jmbio.com.br
              </a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
