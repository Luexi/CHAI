import type { EjeFormativo } from "@/data/ejesFormativos";
import { BookOpen, Brain, ChevronDown, ListChecks, Sparkles, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface EjeFormativoCardProps {
  eje: EjeFormativo;
  reverse?: boolean;
}

const accentStyles = {
  red: {
    bar: "bg-red-700",
    bg: "bg-red-700/10",
    text: "text-red-700",
    border: "border-red-700/20",
    imageBg: "bg-red-700/5",
    ring: "ring-red-700/15",
  },
  blue: {
    bar: "bg-blue-800",
    bg: "bg-blue-800/10",
    text: "text-blue-800",
    border: "border-blue-800/20",
    imageBg: "bg-blue-800/5",
    ring: "ring-blue-800/15",
  },
  green: {
    bar: "bg-emerald-700",
    bg: "bg-emerald-700/10",
    text: "text-emerald-700",
    border: "border-emerald-700/20",
    imageBg: "bg-emerald-700/5",
    ring: "ring-emerald-700/15",
  },
};

export function EjeFormativoCard({ eje, reverse = false }: EjeFormativoCardProps) {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const accent = accentStyles[eje.accent];

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg",
        accent.border
      )}
    >
      <div className={cn("flex flex-col", reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
        <div className={cn("lg:w-[40%] min-h-60 md:min-h-80 p-4 md:p-6 flex items-center justify-center", accent.imageBg)}>
          <img
            src={`${base}${eje.imagen}`}
            alt={`Imagen representativa de ${eje.titulo}`}
            loading="lazy"
            className="max-h-72 md:max-h-96 w-full rounded-xl object-contain"
          />
        </div>

        <div className="lg:w-[60%] p-5 sm:p-8">
          <div className={cn("h-1.5 w-16 md:w-20 rounded-full mb-4 md:mb-5", accent.bar)} />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-5 leading-tight">
            {eje.titulo}
          </h2>

          <section className="mb-6 md:mb-7">
            <h3 className={cn("mb-2 md:mb-3 flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wide", accent.text)}>
              <BookOpen className="h-4 w-4" />
              Definición y enfoque
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{eje.definicion}</p>
            <div className="mt-3 md:mt-4 grid gap-3">
              {eje.descripcionLarga.map((parrafo) => (
                <p key={parrafo} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {parrafo}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h3 className={cn("mb-2 md:mb-3 flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wide", accent.text)}>
              <Target className="h-4 w-4" />
              Objetivo formativo
            </h3>
            <ul className="grid gap-2 md:gap-3">
              {eje.objetivos.map((objetivo) => (
                <li key={objetivo} className="flex gap-3 text-sm md:text-base text-muted-foreground">
                  <span className={cn("mt-2 h-2 w-2 flex-shrink-0 rounded-full", accent.bar)} />
                  <span>{objetivo}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-border p-5 sm:p-8">
        {eje.capacidadesDetalle && (
          <details data-mobile-collapsible className="eje-collapsible mb-6 md:mb-8">
            <summary className={cn(
              "eje-summary list-none flex items-center justify-between gap-2 mb-3 md:mb-4 text-xs md:text-sm font-semibold uppercase tracking-wide cursor-pointer md:cursor-default select-none",
              accent.text
            )}>
              <span className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Capacidades que desarrolla
              </span>
              <ChevronDown className="eje-chevron h-4 w-4 md:hidden transition-transform" />
            </summary>
            <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {eje.capacidadesDetalle.map((capacidad) => (
                <div
                  key={capacidad.nombre}
                  className={cn("rounded-xl border p-4 ring-1", accent.border, accent.ring)}
                >
                  <h4 className="font-display text-base md:text-lg font-semibold text-foreground">
                    {capacidad.nombre}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {capacidad.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </details>
        )}

        <section>
          <h3 className={cn("mb-4 md:mb-5 flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wide", accent.text)}>
            <ListChecks className="h-4 w-4" />
            Temas desarrollados
          </h3>
          <div className="grid gap-3 md:gap-5">
            {eje.temasDetalle.map((tema) => (
              <details
                key={tema.titulo}
                data-mobile-collapsible
                className={cn("eje-collapsible rounded-xl border p-4 md:p-5", accent.border)}
              >
                <summary className="eje-summary list-none flex items-center justify-between gap-3 cursor-pointer md:cursor-default select-none">
                  <h4 className="font-display text-lg md:text-xl font-semibold text-foreground leading-tight">
                    {tema.titulo}
                  </h4>
                  <ChevronDown className={cn("eje-chevron h-5 w-5 flex-shrink-0 md:hidden transition-transform", accent.text)} />
                </summary>

                <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                  {tema.descripcion}
                </p>

                {tema.detalles && (
                  <ul className="mt-3 md:mt-4 grid gap-2">
                    {tema.detalles.map((detalle) => (
                      <li key={detalle} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className={cn("mt-2 h-2 w-2 flex-shrink-0 rounded-full", accent.bar)} />
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {tema.ejemplos && (
                  <div className={cn("mt-4 md:mt-5 rounded-xl p-3 md:p-4", accent.bg)}>
                    <h5 className={cn("mb-2 md:mb-3 flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wide", accent.text)}>
                      <Sparkles className="h-4 w-4" />
                      Ejemplos
                    </h5>
                    <ul className="grid gap-2">
                      {tema.ejemplos.map((ejemplo) => (
                        <li key={ejemplo} className="text-sm leading-relaxed text-muted-foreground">
                          {ejemplo}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </details>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
