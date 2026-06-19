"use client";

import { useEffect, useRef, useState } from "react";
import { HelpCircle } from "lucide-react";

export default function ProgramFlow() {
  const [visibleSteps, setVisibleSteps] = useState<Record<number, boolean>>({});
  const [headerVisible, setHeaderVisible] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Header observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);

    // Steps observer
    const stepsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleSteps((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    stepsRefs.current.forEach((ref) => {
      if (ref) stepsObserver.observe(ref);
    });

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      stepsRefs.current.forEach((ref) => {
        if (ref) stepsObserver.unobserve(ref);
      });
    };
  }, []);

  const stages = [
    {
      num: 1,
      title: "Konsultasi & Kenalan Program",
      desc: "Kenalan dulu, mutusin belakangan",
      cost: "Gratis",
      duration: "1-3 hari",
    },
    {
      num: 2,
      title: "Pemetaan Awal & Kecocokan",
      desc: "Tes dasar bahasa + arahan karir (Mag Magang/SSW)",
      cost: "Rp150.000 (promo Rp99.000)",
      duration: "2-7 hari",
      badge: "Mulai di Sini",
    },
    {
      num: 3,
      title: "Daftar Ulang & Mulai Pelatihan",
      desc: "Resmi dimulai",
      cost: "Sesuai Pilihan Karir",
      duration: "1-7 hari",
    },
    {
      num: 4,
      title: "Pelatihan Bahasa Intensif",
      desc: "Dari nol sampai siap N5/N4",
      cost: "Tersedia Dana Talang/Beasiswa",
      duration: "16 minggu",
    },
    {
      num: 5,
      title: "Sertifikasi Bahasa & SSW",
      desc: "Buktiin kesiapanmu",
      cost: "Sesuai Ujian",
      duration: "~7 hari",
    },
    {
      num: 6,
      title: "Pra-Keberangkatan",
      desc: "Siapin mental, dokumen, logistik",
      cost: "Transparan",
      duration: "4-8 minggu",
    },
    {
      num: 7,
      title: "Keberangkatan ke Jepang",
      desc: "Bukan akhir — ini baru mulai",
      cost: "Kemenaker Resmi",
      duration: "1-4 minggu",
      badge: "Tujuan",
    },
  ];

  return (
    <section
      id="alur"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Decorative ambient blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-navy-light/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title and Subtitle */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Rutemu ke Jepang, Jelas dari Awal
          </h2>
          <p
            className={`text-base md:text-lg text-brand-navy-light transition-all duration-700 delay-150 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            7 stasiun, nggak ada yang disembunyikan.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Central Connecting Line (Thick Train Route) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1.5 bg-brand-red rounded-full -translate-x-1/2 z-0" />

          {/* Timeline Nodes */}
          <div className="space-y-12 relative z-10">
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 1;
              const isVisible = visibleSteps[idx];

              return (
                <div
                  key={stage.num}
                  data-index={idx}
                  ref={(el) => {
                    stepsRefs.current[idx] = el;
                  }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0 translate-x-0"
                      : `opacity-0 translate-y-8 translate-x-4 ${
                          isEven ? "md:translate-x-8" : "md:-translate-x-8"
                        }`
                  }`}
                >
                  {/* Left spacer / Card placement */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 md:text-right hidden md:block">
                    {!isEven && (
                      <div className="inline-block bg-white border border-brand-navy/15 rounded-card p-6 md:p-8 text-left shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 w-full relative">
                        {stage.badge && (
                          <span className="absolute -top-3 left-6 px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                            {stage.badge}
                          </span>
                        )}
                        <h3 className="font-heading text-lg md:text-xl font-bold text-brand-navy mb-2">
                          {stage.title}
                        </h3>
                        <p className="text-sm md:text-base text-brand-navy-light mb-4">
                          {stage.desc}
                        </p>
                        <div className="flex flex-wrap items-center md:justify-start gap-4 text-xs font-semibold text-brand-navy/70 border-t border-brand-navy/5 pt-3">
                          <span className="bg-brand-navy/5 px-2.5 py-1 rounded">💰 {stage.cost}</span>
                          <span className="bg-brand-red/5 text-brand-red px-2.5 py-1 rounded">⏱️ {stage.duration}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Middle step circle node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-25">
                    <div className="w-12 h-12 rounded-full bg-brand-red text-white font-heading text-lg font-bold flex items-center justify-center border-4 border-white shadow-md transition-transform duration-300 hover:scale-110">
                      {stage.num}
                    </div>
                  </div>

                  {/* Right spacer / Card placement */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-12 text-left">
                    {/* Render card statically and use responsive utility classes to show/hide */}
                    <div className={`bg-white border border-brand-navy/15 rounded-card p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 w-full relative ${
                      isEven ? "block" : "block md:hidden"
                    }`}>
                      {stage.badge && (
                        <span className={`absolute -top-3 left-6 px-3 py-1 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm ${
                          stage.badge === "Tujuan" ? "bg-brand-navy" : "bg-brand-red"
                        }`}>
                          {stage.badge}
                        </span>
                      )}
                      <h3 className="font-heading text-lg md:text-xl font-bold text-brand-navy mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-sm md:text-base text-brand-navy-light mb-4">
                        {stage.desc}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-navy/70 border-t border-brand-navy/5 pt-3">
                        <span className="bg-brand-navy/5 px-2.5 py-1 rounded">💰 {stage.cost}</span>
                        <span className="bg-brand-red/5 text-brand-red px-2.5 py-1 rounded">⏱️ {stage.duration}</span>
                      </div>
                    </div>
                    {/* Placeholder on Desktop for odd cards */}
                    {!isEven && <div className="hidden md:block h-2" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Estimation Note */}
        <div
          className={`text-center mb-12 transition-all duration-700 delay-500 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm sm:text-base text-brand-navy-light italic font-medium">
            * Estimasi total: ±6-8 bulan, tergantung kesiapan dan hasil pemetaan kamu.
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://wa.me/message/DWVTJESHI2RQC1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white text-base font-bold rounded-button shadow-md hover:shadow-lg transition-all duration-200"
          >
            Mulai dari Pemetaan Awal
          </a>
        </div>
      </div>
    </section>
  );
}
