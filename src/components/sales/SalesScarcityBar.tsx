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
        ? "bg-white/5 border-white/10" 
        : "bg-brand-red/5 border-brand-red/15"
    }`}>
      <div className="flex items-center justify-between text-[11px] sm:text-xs">
        <div className="flex items-center gap-1.5 font-bold">
          <AlertTriangle className={`w-3.5 h-3.5 animate-bounce ${
            isDark ? "text-[#FF8A84]" : "text-brand-red"
          }`} />
          <span className={isDark ? "text-white/90" : "text-brand-navy"}>
            Kapasitas Slot Promo Hari Ini:
          </span>
        </div>
        <span className={`font-extrabold font-heading ${
          isDark ? "text-[#FF8A84]" : "text-brand-red"
        }`}>
          Sisa 30 Slot (70/100 Terisi)
        </span>
      </div>
      
      {/* Progress Bar Track */}
      <div className={`w-full h-2.5 rounded-full overflow-hidden relative ${
        isDark ? "bg-white/10" : "bg-brand-navy/10"
      }`}>
        {/* Glow effect */}
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out animate-pulse ${
            isDark 
              ? "bg-[#FF8A84] shadow-[0_0_8px_rgba(255,138,132,0.5)]" 
              : "bg-brand-red shadow-[0_0_8px_rgba(211,71,66,0.5)]"
          }`}
          style={{ width: "70%" }}
        />
      </div>

      <p className={`text-[10px] text-center font-medium italic ${
        isDark ? "text-white/60" : "text-brand-navy-light/80"
      }`}>
        * Pendaftaran otomatis ditutup setelah slot ke-100 terisi atau waktu hitung mundur habis.
      </p>
    </div>
  );
}
