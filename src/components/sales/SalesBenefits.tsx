"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

export default function SalesBenefits() {
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

  const benefits = [
    {
      title: "Live Roadmap Session",
      desc: "Sesi langsung, bukan sekadar baca materi pasif.",
    },
    {
      title: "Checklist Persiapan",
      desc: "Tahu pasti apa saja langkah & syarat dokumen yang harus disiapkan.",
    },
    {
      title: "Transparansi Estimasi Biaya",
      desc: "Tahu gambaran detail biaya sejak awal, tanpa ada kejutan tak terduga.",
    },
    {
      title: "Form Rekomendasi Jalur",
      desc: "Mengetahui jalur dan posisi kerja di Jepang yang paling cocok untuk kondisimu.",
    },
    {
      title: "Expert Consultation",
      desc: "Konsultasi langsung dengan tim ahli karir Jepang, bukan sekadar bot atau CS biasa.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden border-b border-brand-navy/5"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`font-heading text-2xl sm:text-3xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Apa Saja yang Akan Kamu Dapatkan?
          </h2>
        </div>

        {/* Benefits List */}
        <div
          className={`space-y-6 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-brand-navy/[0.02] border border-brand-navy/5 shadow-xs hover:border-brand-navy/15 hover:bg-white hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
            >
              {/* Checkmark Circle */}
              <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>

              {/* Text Description */}
              <div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-brand-navy">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy-light mt-1">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
