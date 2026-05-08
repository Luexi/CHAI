import type { EjeFormativo } from "@/data/ejesFormativos";
import { BookOpen, Brain, ListChecks, Sparkles, Target } from "lucide-react";
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
        <div className={cn("lg:w-[40%] min-h-80 p-6 flex items-center justify-center", accent.imageBg)}>
          <img
            src={`${base}${eje.imagen}`}
            alt={`Imagen representativa de ${eje.titulo}`}
            loading="lazy"
            className="max-h-96 w-full rounded-xl object-contain"
          />
        </div>

        <div className="lg:w-[60%] p-6 sm:p-8">
          <div className={cn("h-1.5 w-20 rounded-full mb-5", accent.bar)} />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            {eje.titulo}
          </h2>

          <section className="mb-7">
            <h3 className={cn("mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide", accent.text)}>
              <BookOpen className="h-4 w-4" />
              Definición y enfoque
            </h3>
            <p className="text-muted-foreground leading-relaxed">{eje.definicion}</p>
            <div className="mt-4 grid gap-3">
              {eje.descripcionLarga.map((parrafo) => (
                <p key={parrafo} className="text-muted-foreground leading-relaxed">
                  {parrafo}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h3 className={cn("mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide", accent.text)}>
              <Target className="h-4 w-4" />
              Objetivo formativo
            </h3>
            <ul className="grid gap-3">
              {eje.objetivos.map((objetivo) => (
                <li key={objetivo} className="flex gap-3 text-muted-foreground">
                  <span className={cn("mt-2 h-2 w-2 flex-shrink-0 rounded-full", accent.bar)} />
                  <span>{objetivo}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-border p-6 sm:p-8">
        {eje.capacidadesDetalle && (
          <section className="mb-8">
            <h3 className={cn("mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide", accent.text)}>
              <Brain className="h-4 w-4" />
              Capacidades que desarrolla
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {eje.capacidadesDetalle.map((capacidad) => (
                <div
                  key={capacidad.nombre}
                  className={cn("rounded-xl border p-4 ring-1", accent.border, accent.ring)}
                >
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {capacidad.nombre}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {capacidad.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h3 className={cn("mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide", accent.text)}>
            <ListChecks className="h-4 w-4" />
            Temas desarrollados
          </h3>
          <div className="grid gap-5">
            {eje.temasDetalle.map((tema) => (
              <section key={tema.titulo} className={cn("rounded-xl border p-5", accent.border)}>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  {tema.titulo}
                </h4>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {tema.descripcion}
                </p>

                {tema.detalles && (
                  <ul className="mt-4 grid gap-2">
                    {tema.detalles.map((detalle) => (
                      <li key={detalle} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className={cn("mt-2 h-2 w-2 flex-shrink-0 rounded-full", accent.bar)} />
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {tema.ejemplos && (
                  <div className={cn("mt-5 rounded-xl p-4", accent.bg)}>
                    <h5 className={cn("mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide", accent.text)}>
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
              </section>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
