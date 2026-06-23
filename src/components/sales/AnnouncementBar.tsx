"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-[#D34742] text-white py-2 px-4 shadow-sm border-b border-brand-red-light/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-xs font-bold">
        {/* Pulsing Alert & Text */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="tracking-wide text-center sm:text-left">
            🔥 Live Webinar: <span className="underline font-extrabold">Senin, 29 Juni 2026 (19.00 WIB)</span>. Sisa 30 Slot Sesi Promo Rp79rb!
          </span>
        </div>

        {/* Action button (hidden on extra small screens) */}
        <a
          href="#register"
          className="hidden sm:inline-flex items-center gap-1 bg-white text-brand-red px-3 py-1 rounded-full text-[10px] font-extrabold hover:bg-white/90 active:scale-95 transition-all duration-200 shadow-sm"
        >
          <Sparkles className="w-3 h-3" />
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
}
