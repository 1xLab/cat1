"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { heroStats } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="container grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:py-28">
      <div className="space-y-6">
        <Badge className="w-fit bg-primary/10 text-primary">
          Laboratório de Toxicologia
        </Badge>
        <motion.h1
          className="text-balance text-4xl font-semibold leading-tight text-foreground lg:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Toxicologia de alta performance com integrações digitais
        </motion.h1>
        <p className="text-balance text-lg text-muted-foreground">
          Análises cromatográficas avançadas, times especializados e micro
          serviços conectados a ERPs, plataformas de RH e painéis médicos, em um
          SLA pensado para operações críticas.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <Link href="/servicos">
              Explorar portfólio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={siteConfig.social.whatsapp} target="_blank">
              Falar com especialista
            </Link>
          </Button>
        </div>
        <div className="flex gap-8 pt-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-blue-900/70 p-8 text-white shadow-2xl"
      >
        <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/imagens/caminhao1.jpg"
            alt="Caminhão de transporte"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>Pipeline analítico</span>
          <span>Tempo real</span>
        </div>
        <div className="mt-6 space-y-5">
          {[
            { label: "Amostras priorizadas", value: "32" },
            { label: "Integrações IoT", value: "12" },
            { label: "Alertas críticos", value: "05" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-primary" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-white/20 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">
            Certificações ativas
          </p>
          <p className="mt-2 text-sm font-semibold text-white">
            ISO 17025 • ANVISA • CAP
          </p>
        </div>
      </motion.div>
    </section>
  );
}
