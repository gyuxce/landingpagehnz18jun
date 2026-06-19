"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Map, UserCheck, Sparkles } from "lucide-react";

export default function SalesWhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
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

  const strengths = [
    {
      icon: <Eye className="w-6 h-6 text-brand-red" />,
      title: "100% Transparan",
      desc: "Semua rincian biaya dijabarkan jelas di awal. Nggak ada biaya nyelip di belakang.",
    },
    {
      icon: <Map className="w-6 h-6 text-brand-red" />,
      title: "Roadmap Terarah",
      desc: "Langkah-langkah terstruktur dari nol belajar bahasa sampai keberangkatan resmi.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-brand-red" />,
      title: "Didampingi Expert",
      desc: "Dibimbing langsung oleh praktisi yang paham seluk-beluk karir dan budaya kerja Jepang.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-red" />,
      title: "Bukan Kursus Biasa",
      desc: "Kami fokus pada pembiasaan komunikasi harian, bukan sekadar menghafal modul ujian.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-brand-navy/[0.03] overflow-hidden border-b border-brand-navy/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`font-heading text-2xl sm:text-3xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Kenapa Memilih Harunokaze?
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-card p-6 md:p-8 border border-brand-navy/10 shadow-xs hover:border-brand-red hover:-translate-y-1 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-5 flex-shrink-0">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-base sm:text-lg font-bold text-brand-navy mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-brand-navy-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
