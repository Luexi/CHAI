import type { Tesina } from "@/data/tesinas";
import { ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TesinaCardProps {
  tesina: Tesina;
}

export function TesinaCard({ tesina }: TesinaCardProps) {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const hasLink = !!tesina.pdfUrl;

  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col md:flex-row">
      <div className="md:w-1/3 md:flex-shrink-0 bg-muted">
        <img
          src={`${base}${tesina.imagen}`}
          alt={tesina.titulo}
          loading="lazy"
          className="w-full h-56 md:h-full object-cover"
        />
      </div>

      <div className="md:w-2/3 p-5 md:p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-gray-900/10 text-gray-900 text-xs font-medium rounded-lg">
            {tesina.anio}
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3 leading-snug">
          {tesina.titulo}
        </h3>

        <p className="text-sm text-muted-foreground mb-3">
          <span className="font-medium text-foreground">Alumno(s):</span>{" "}
          {tesina.alumnos.join(", ")}
        </p>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
          {tesina.resumen}
        </p>

        <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-border">
          {hasLink ? (
            <a href={tesina.pdfUrl} target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="sm"
                className="w-full md:w-auto gap-2 rounded-xl bg-red-700 hover:bg-red-700/90 text-white md:bg-transparent md:text-foreground md:border md:border-input md:hover:bg-accent md:hover:text-accent-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Abrir PDF
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="w-full md:w-auto gap-2 rounded-xl"
              disabled
              aria-disabled="true"
            >
              <Clock className="h-4 w-4" />
              PDF próximamente
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
