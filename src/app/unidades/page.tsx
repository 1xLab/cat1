import { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";

import { units } from "@/lib/data";
import { generatePageMetadata } from "@/lib/seo";
import { formatPhone } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { UnitsMap } from "@/components/maps/units-map";

export const metadata: Metadata = generatePageMetadata({
  title: "Unidades",
  description:
    "Rede de laboratórios e postos de coleta JMBio com infraestrutura para grandes operações.",
  path: "/unidades",
});

export default function UnitsPage() {
  return (
    <div className="bg-background">
      <section className="container space-y-4 py-16">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
          Rede JMBio
        </p>
        <h1 className="text-4xl font-semibold">Laboratórios e postos</h1>
        <p className="text-lg text-muted-foreground">
          Estrutura com salas limpas, GC/LHMS redundante e logística de coleta
          refrigerada. Atendemos clientes em todo o Brasil com cadeia fria
          monitorada por IoT e dashboards em tempo real.
        </p>
      </section>

      <section className="container grid gap-10 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <UnitsMap units={units} />
        </div>
        <div className="space-y-6">
          {units.map((unit) => (
            <Card key={unit.name}>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {unit.type}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{unit.name}</h2>
              <p className="text-sm text-muted-foreground">{unit.address}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {unit.city}
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                {formatPhone(unit.phone)}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-muted/40">
        <div className="container grid gap-6 py-12 md:grid-cols-3">
          {units.map((unit) => (
            <div key={unit.name} className="overflow-hidden rounded-2xl shadow">
              <iframe
                src={unit.mapEmbed}
                className="h-60 w-full border-0"
                loading="lazy"
              />
              <div className="bg-background p-4 text-sm text-muted-foreground">
                Rotas até {unit.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
