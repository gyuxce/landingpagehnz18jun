"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function JobCategories() {
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

  const categories = [
    {
      id: "caregiver",
      title: "Caregiver",
      desc: "Perawatan lansia, paling banyak diminati",
      delay: "delay-100",
    },
    {
      id: "fnb",
      title: "Food & Beverage",
      desc: "Restoran & industri makanan",
      delay: "delay-150",
    },
    {
      id: "hotel",
      title: "Perhotelan",
      desc: "Akomodasi & layanan tamu",
      delay: "delay-200",
    },
    {
      id: "construction",
      title: "Konstruksi",
      desc: "Proyek infrastruktur",
      delay: "delay-250",
    },
    {
      id: "agriculture",
      title: "Pertanian",
      desc: "Agrikultur modern Jepang",
      delay: "delay-300",
    },
    {
      id: "manufacturing",
      title: "Manufaktur",
      desc: "Pabrik & industri",
      delay: "delay-350",
    },
    {
      id: "cleaning",
      title: "Cleaning Service",
      desc: "Kebersihan gedung & fasilitas",
      delay: "delay-400",
    },
    {
      id: "shipbuilding",
      title: "Galangan Kapal",
      desc: "Industri maritim",
      delay: "delay-450",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="bidang"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Decorative ambient blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-navy-light/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title and Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Pilih Bidang yang Cocok Buatmu
          </h2>
          <p
            className={`text-base md:text-lg text-brand-navy-light transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Semua tersedia lewat jalur resmi SSW/TITP.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`bg-white rounded-card p-6 md:p-8 border border-brand-navy/15 hover:border-brand-red shadow-sm hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center ${
                cat.delay
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 mb-5 relative flex items-center justify-center bg-brand-navy/5 rounded-full text-brand-red">
                {/* 
                  IMAGE: ikon flat sederhana mewakili [nama bidang: ${cat.title}], gaya line-art warna brand-red dengan outline brand-navy, ukuran kecil 64x64px 
                */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-heading text-base md:text-lg font-bold text-brand-navy mb-2">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-brand-navy-light leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Card */}
        <div
          className={`max-w-3xl mx-auto rounded-card bg-gradient-to-r from-brand-red to-brand-red-light p-6 md:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-lg md:text-xl font-bold mb-1">
              Bingung pilih yang mana?
            </h4>
            <p className="text-sm text-white/90">
              Konsultasi dulu, gratis tanpa komitmen apa-apa.
            </p>
          </div>
          <a
            href="https://wa.me/message/DWVTJESHI2RQC1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-brand-red font-bold text-sm rounded-button shadow-sm hover:bg-brand-white hover:shadow-md transition-all duration-200 flex items-center gap-2 group-hover:translate-x-1"
          >
            Tanya Admin
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
