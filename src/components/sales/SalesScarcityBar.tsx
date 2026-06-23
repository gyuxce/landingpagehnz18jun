"use client";

import { AlertTriangle } from "lucide-react";

export default function SalesScarcityBar() {
  return (
    <div className="space-y-2 p-3 bg-brand-red/5 border border-brand-red/15 rounded-xl max-w-sm mx-auto">
      <div className="flex items-center justify-between text-[11px] sm:text-xs">
        <div className="flex items-center gap-1.5 text-brand-navy font-bold">
          <AlertTriangle className="w-3.5 h-3.5 text-brand-red animate-bounce" />
          <span>Kapasitas Slot Promo Hari Ini:</span>
        </div>
        <span className="text-brand-red font-extrabold font-heading">
          Sisa 30 Slot (70/100 Terisi)
        </span>
      </div>
      
      {/* Progress Bar Track */}
      <div className="w-full h-2.5 bg-brand-navy/10 rounded-full overflow-hidden relative">
        {/* Glow effect */}
        <div 
          className="h-full bg-brand-red rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(211,71,66,0.5)] animate-pulse" 
          style={{ width: "70%" }}
        />
      </div>

      <p className="text-[10px] text-center text-brand-navy-light/80 font-medium italic">
        * Pendaftaran otomatis ditutup setelah slot ke-100 terisi atau waktu hitung mundur habis.
      </p>
    </div>
  );
}
