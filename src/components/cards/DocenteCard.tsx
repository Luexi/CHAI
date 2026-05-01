import type { Docente } from "@/data/docentes";
import { User, Clock } from "lucide-react";

interface DocenteCardProps {
  docente: Docente;
}

export function DocenteCard({ docente }: DocenteCardProps) {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const isPlaceholder = docente.pendiente === true || !docente.foto;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {isPlaceholder ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-700/10 to-blue-700/10 gap-2">
            {docente.pendiente ? (
              <Clock className="h-20 w-20 text-muted-foreground/40" />
            ) : (
              <User className="h-24 w-24 text-muted-foreground/40" />
            )}
          </div>
        ) : (
          <img
            src={`${base}${docente.foto}`}
            alt={docente.nombre}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
          {docente.nombre}
        </h3>
      </div>
    </div>
  );
}
