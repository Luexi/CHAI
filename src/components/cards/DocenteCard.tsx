import type { Docente } from "@/data/docentes";
import { User } from "lucide-react";

interface DocenteCardProps {
  docente: Docente;
}

export function DocenteCard({ docente }: DocenteCardProps) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        {docente.foto ? (
          <img
            src={docente.foto}
            alt={docente.nombre}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-700/10 to-blue-700/10">
            <User className="h-24 w-24 text-muted-foreground/40" />
          </div>
        )}
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
          {docente.nombre}
        </h3>
        <p className="text-sm text-red-700 font-medium">{docente.materia}</p>
        <p className="text-xs text-muted-foreground">{docente.carrera}</p>
      </div>
    </div>
  );
}
