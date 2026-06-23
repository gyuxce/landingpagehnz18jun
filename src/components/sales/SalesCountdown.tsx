"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function SalesCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Senin, 29 Juni 2026 pukul 19.00 WIB (GMT+0700)
    const targetTime = new Date("2026-06-29T19:00:00+07:00").getTime();

    const calculateTime = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    // Tampilan kosong saat server-side rendering untuk mencegah hydration mismatch
    return (
      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto text-center opacity-0">
        <div className="bg-brand-navy/10 rounded-lg p-2.5">--</div>
        <div className="bg-brand-navy/10 rounded-lg p-2.5">--</div>
        <div className="bg-brand-navy/10 rounded-lg p-2.5">--</div>
        <div className="bg-brand-navy/10 rounded-lg p-2.5">--</div>
      </div>
    );
  }

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="space-y-2">
      <p className="text-[10px] sm:text-xs font-bold text-brand-red uppercase tracking-wider text-center animate-pulse">
        ⏳ Sisa Waktu Pendaftaran Webinar Spesial:
      </p>
      <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto text-center">
        {timeBlocks.map((block, idx) => (
          <div
            key={idx}
            className="bg-brand-navy/90 border border-white/10 rounded-lg p-2.5 flex flex-col items-center justify-center shadow-inner"
          >
            <span className="font-heading text-lg sm:text-2xl font-extrabold text-white leading-none">
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="text-[9px] sm:text-[10px] text-white/50 font-bold uppercase tracking-wider mt-1">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
