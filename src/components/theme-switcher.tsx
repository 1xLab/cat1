"use client";

import { useEffect, useState } from "react";
import { Cog, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  { id: "sunrise", name: "Sunrise Light", description: "Luz natural com laranja vibrante." },
  { id: "midnight", name: "Midnight Dark", description: "Interface escura para salas de comando." },
  { id: "clinical", name: "Clinical Light", description: "Azul clínico com fundos neutros." },
  { id: "high-contrast", name: "High Contrast", description: "Alto contraste para máxima leitura." },
];

function applyThemeValue(
  value: string,
  setTheme: (theme: string) => void
) {
  const next = themes.find((item) => item.id === value) ? value : "sunrise";
  setTheme(next);
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("jmbio-theme", next);
  } catch {
    /* ignore */
  }
}

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("sunrise");

  useEffect(() => {
    let stored = "sunrise";
    try {
      stored = localStorage.getItem("jmbio-theme") || "sunrise";
    } catch {
      stored = "sunrise";
    }
    applyThemeValue(stored, setTheme);
  }, []);

  function apply(value: string) {
    applyThemeValue(value, setTheme);
  }

  return (
    <div className="relative">
      <button
        aria-label="Alterar tema do site"
        className="rounded-full border border-[var(--color-outline)] bg-[var(--color-surface)] p-2 text-[var(--color-text)] shadow-sm transition hover:shadow-md"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Cog className="h-5 w-5" />
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-3 w-64 rounded-2xl border border-[var(--color-outline)] bg-[var(--color-surface)] p-4 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
            Temas
          </p>
          <div className="mt-3 space-y-2">
            {themes.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "flex w-full items-start gap-2 rounded-2xl border border-transparent p-3 text-left transition hover:border-[var(--color-outline)]",
                  theme === item.id && "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
                )}
                onClick={() => apply(item.id)}
              >
                <span className="mt-1 text-[var(--color-primary)]">
                  {theme === item.id ? <Check className="h-4 w-4" /> : <span className="block h-4 w-4 rounded-full border border-[var(--color-outline)]" />}
                </span>
                <span>
                  <span className="font-semibold text-[var(--color-text)]">{item.name}</span>
                  <span className="block text-xs text-[var(--color-text-muted)]">{item.description}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

