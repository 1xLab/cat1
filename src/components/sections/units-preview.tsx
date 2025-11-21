import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { units } from "@/lib/data";
import { formatPhone } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function UnitsPreview() {
  return (
    <section className="container py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Rede JMBio
          </p>
          <h2 className="mt-2 text-3xl font-semibold">Unidades e coleta</h2>
        </div>
        <Link href="/unidades" className="text-primary text-sm font-semibold">
          Ver mapa completo →
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {units.map((unit) => (
          <Card key={unit.name}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  {unit.type}
                </p>
                <h3 className="text-lg font-semibold">{unit.name}</h3>
              </div>
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{unit.address}</p>
            <p className="text-sm text-muted-foreground">{unit.city}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              {formatPhone(unit.phone)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
