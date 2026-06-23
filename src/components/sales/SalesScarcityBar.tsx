"use client";

import { AlertTriangle } from "lucide-react";

interface SalesScarcityBarProps {
  theme?: "light" | "dark";
}

export default function SalesScarcityBar({ theme = "light" }: SalesScarcityBarProps) {
  const isDark = theme === "dark";

  return (
    <div className={`space-y-2 p-3 rounded-xl max-w-sm mx-auto border transition-all duration-300 ${
      isDark 
        ? "bg-white border-brand-navy/5 shadow-md" 
        : "bg-brand-red/5 border-brand-red/15"
    }`}>
      <div className="flex items-center justify-between text-[11px] sm:text-xs">
        <div className="flex items-center gap-1.5 font-bold">
          <AlertTriangle className="w-3.5 h-3.5 animate-bounce text-brand-red" />
          <span className="text-brand-navy">
            Kapasitas Slot Promo Hari Ini:
          </span>
        </div>
        <span className="font-extrabold font-heading text-brand-red">
          Sisa 30 Slot (70/100 Terisi)
        </span>
      </div>
      
      {/* Progress Bar Track */}
      <div className="w-full h-2.5 rounded-full overflow-hidden relative bg-brand-navy/10">
        {/* Glow effect */}
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out animate-pulse bg-brand-red shadow-[0_0_8px_rgba(255,51,51,0.3)]"
          style={{ width: "70%" }}
        />
      </div>

      <p className="text-[10px] text-center font-medium italic text-brand-navy-light/80">
        * Pendaftaran otomatis ditutup setelah slot ke-100 terisi atau waktu hitung mundur habis.
      </p>
    </div>
  );
}
