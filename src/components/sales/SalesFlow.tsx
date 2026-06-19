"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ChevronDown, Check, ArrowRight } from "lucide-react";

export default function SalesFlow() {
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
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const futureSteps = [
    { title: "Analisis Profil & Jalur", desc: "Formulir pendataan profil mendalam" },
    { title: "Expert Consultation", desc: "Diskusi langsung tim ahli karir" },
    { title: "Program Recommendation", desc: "Rekomendasi jalur terbaik (SSW/TITP)" },
    { title: "Preparation & Classes", desc: "Detail kelas bahasa & rincian biaya" },
    { title: "Keberangkatan Jepang", desc: "Proses visa & terbang resmi" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-brand-white overflow-hidden border-b border-brand-navy/5"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`font-heading text-2xl sm:text-3xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Alur Kejelasan Program
          </h2>
        </div>

        {/* KELOMPOK PERTAMA - Yang didapat sekarang */}
        <div
          className={`mb-12 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header Kelompok */}
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <span className="px-3 py-1 bg-brand-navy text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
              <Check className="w-3.5 h-3.5 text-brand-red stroke-[3]" />
              Yang Kamu Dapat Sekarang
            </span>
          </div>

          {/* Unified Container */}
          <div className="bg-brand-navy text-white rounded-card p-6 sm:p-8 md:p-10 shadow-lg border border-brand-navy-light/10 relative overflow-hidden">
            {/* Ambient subtle glow inside card */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
              {/* Steps inside Group 1 */}
              <div className="space-y-4 md:border-r md:border-white/10 md:pr-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-red text-white font-heading text-sm font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">
                      Daftar & Transfer Sesi
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-1">
                      Amankan slot sesi rekomendasi jalur seharga Rp79.000 (Flash Sale).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-red text-white font-heading text-sm font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">
                      Roadmap Session (Webinar)
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-1">
                      Ikuti webinar interaktif 1-on-1/kelompok khusus untuk menentukan arah karir terbaik.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Reassurance Quote/Text */}
              <div className="md:pl-6 text-center md:text-left flex flex-col justify-center">
                <p className="text-sm sm:text-base text-brand-red-light font-bold italic leading-relaxed">
                  &quot;Kamu tidak membeli tiket keberangkatan ke Jepang seharga Rp79 ribu, tapi kamu membeli kejelasan arah agar tidak salah melangkah sebelum berkomitmen lebih besar.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pembatas Visual (Bridge) */}
        <div
          className={`flex flex-col items-center justify-center my-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="h-8 w-[2px] bg-brand-red/45 border-dashed border-l-2" />
          <span className="px-4 py-1.5 bg-brand-navy-light/10 text-brand-navy-light text-xs font-semibold uppercase tracking-wider rounded-full border border-brand-navy-light/10 flex items-center gap-1.5">
            Setelah Roadmap Session Selesai...
            <ChevronDown className="w-3.5 h-3.5" />
          </span>
          <div className="h-8 w-[2px] bg-brand-red/45 border-dashed border-l-2" />
        </div>

        {/* KELOMPOK KEDUA - Gambaran Perjalanan Selanjutnya (Faded/Muted) */}
        <div
          className={`mb-12 transition-all duration-700 delay-450 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header Kelompok */}
          <div className="flex flex-col items-center sm:items-start mb-6">
            <span className="text-brand-navy font-heading text-xs uppercase tracking-wider font-extrabold">
              Gambaran Perjalanan Selanjutnya
            </span>
            <p className="text-[10px] sm:text-xs text-brand-navy-light/85 mt-1 italic text-center sm:text-left font-medium">
              * Rute di bawah disesuaikan dengan hasil rekomendasi jalur masing-masing orang (bukan langkah kaku yang sama).
            </p>
          </div>

          {/* Faded Timeline Grid (5 Steps) */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {futureSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-navy/15 rounded-xl p-4 flex flex-col justify-between min-h-[120px] relative shadow-xs hover:border-brand-navy/30 hover:shadow-sm transition-all duration-200"
              >
                {/* Step Index Circle inside */}
                <span className="absolute top-3 right-3 text-xs font-bold text-brand-navy/40">
                  #{idx + 3}
                </span>

                <div className="space-y-2 mt-2">
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-brand-navy leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-brand-navy-light font-medium leading-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Calm Reassurance */}
        <div
          className={`text-center pt-6 border-t border-brand-navy/5 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs sm:text-sm text-brand-navy-light italic font-medium max-w-lg mx-auto">
            💡 Setelah pendaftaran, Anda cukup melakukan konfirmasi via WhatsApp. Tim admin kami akan menghubungi Anda dalam waktu maksimal 10 menit.
          </p>
        </div>
      </div>
    </section>
  );
}
