"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ShieldCheck, Award } from "lucide-react";

export default function Trust() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-navy-light/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Title */}
        <h2
          className={`font-heading text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Resmi, Transparan, Bisa Dicek Sendiri
        </h2>

        {/* Large Badge Centered */}
        <div
          className={`inline-flex items-center gap-2.5 px-6 py-3 bg-brand-navy text-white font-heading text-sm sm:text-base font-bold rounded-full mb-12 shadow-md transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <ShieldCheck className="w-5 h-5 text-brand-red stroke-[2.5]" />
          <span>Terdaftar & Diawasi Kemenaker RI</span>
        </div>

        {/* 2 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          <div
            className={`bg-white border border-brand-navy/15 rounded-card p-6 sm:p-8 flex items-start gap-4 text-left shadow-sm hover:shadow-md transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-brand-navy-light uppercase tracking-wider mb-1">
                Lembaga Pelatihan Kerja (LPK)
              </h4>
              <p className="text-base font-bold text-brand-navy mb-2">
                LPK Wiwitan Baru Sukabumi
              </p>
              <p className="text-sm text-brand-navy-light font-semibold bg-brand-navy/5 px-2.5 py-1 rounded inline-block">
                No. Izin LPK 9120009570071
              </p>
            </div>
          </div>

          <div
            className={`bg-white border border-brand-navy/15 rounded-card p-6 sm:p-8 flex items-start gap-4 text-left shadow-sm hover:shadow-md transition-all duration-700 delay-450 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-brand-navy-light uppercase tracking-wider mb-1">
                Sending Organization (SO)
              </h4>
              <p className="text-base font-bold text-brand-navy mb-2">
                Surat Izin SO WBS
              </p>
              <p className="text-sm text-brand-navy-light font-semibold bg-brand-navy/5 px-2.5 py-1 rounded inline-block">
                No. 2/5702/HK.03.01/XII/2023
              </p>
            </div>
          </div>
        </div>

        {/* Small Line (Award) */}
        <div
          className={`flex items-center gap-2 text-sm sm:text-base font-bold text-brand-navy mb-8 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Award className="w-5 h-5 text-brand-red animate-pulse" />
          <span>🏆 Penerima Jabar Award — LPK Terbaik Jawa Barat</span>
        </div>

        {/* Closing Sentence */}
        <div
          className={`transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm sm:text-base text-brand-navy-light italic font-medium max-w-xl leading-relaxed">
            &quot;Semua nomor izin bisa kamu cek langsung ke Kemenaker RI. Nggak ada yang kami sembunyikan.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
