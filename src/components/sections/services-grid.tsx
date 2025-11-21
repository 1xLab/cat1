import Link from "next/link";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";

import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ServicesGrid() {
  return (
    <section className="container space-y-10 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge variant="outline" className="bg-white/70 text-primary">
            Portfólio científico
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">
            Serviços toxicológicos
          </h2>
          <p className="text-muted-foreground">
            Protocolos validados, instrumentação redundante e relatórios
            acionáveis.
          </p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/servicos">
            Ver todos <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full flex flex-col bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-900/80 dark:to-slate-900/40">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FlaskConical className="h-5 w-5" />
                </div>
                <Badge variant="outline">{service.turnaround}</Badge>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {service.name}
              </h3>
              <p className="mt-2 text-muted-foreground">{service.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {service.methods.map((method) => (
                  <span
                    key={method}
                    className="rounded-full bg-muted px-3 py-1 font-medium text-foreground/80"
                  >
                    {method}
                  </span>
                ))}
              </div>
              <Button
                variant="ghost"
                className="mt-6 w-fit px-0 font-semibold text-primary"
                asChild
              >
                <Link href={`/servicos/${service.slug}`}>
                  Detalhar protocolo <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
