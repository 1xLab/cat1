import {
  LucideIcon,
  Cpu,
  ShieldCheck,
  Users,
  Workflow,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { differentials } from "@/lib/data";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  "shield-check": ShieldCheck,
  users: Users,
  workflow: Workflow,
  default: Sparkles,
};

export function Differentials() {
  return (
    <section className="bg-gradient-to-b from-white/60 to-transparent dark:from-slate-900/60">
      <div className="container grid gap-6 py-16 md:grid-cols-2">
        {differentials.map((item, index) => {
          const Icon = iconMap[item.icon] ?? iconMap.default;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
