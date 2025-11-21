import { partners } from "@/lib/data";

export function PartnersMarquee() {
  return (
    <section className="border-y border-white/10 bg-background/60">
      <div className="container py-10">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Confiam na JMBio
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-10 text-lg font-semibold text-foreground/70">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
