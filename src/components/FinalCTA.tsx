"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FinalCTA() {
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

  const petals = [
    { id: 1, left: "10%", delay: "0s", size: "w-3 h-3 md:w-4 md:h-4", opacity: "opacity-30" },
    { id: 2, left: "25%", delay: "2s", size: "w-2 h-2 md:w-3 md:h-3", opacity: "opacity-50" },
    { id: 3, left: "40%", delay: "4s", size: "w-3.5 h-3.5 md:w-4.5 md:h-4.5", opacity: "opacity-40" },
    { id: 4, left: "60%", delay: "1.5s", size: "w-2.5 h-2.5 md:w-3.5 md:h-3.5", opacity: "opacity-60" },
    { id: 5, left: "75%", delay: "3.5s", size: "w-3 h-3 md:w-4 md:h-4", opacity: "opacity-35" },
    { id: 6, left: "90%", delay: "5s", size: "w-2 h-2 md:w-3 md:h-3", opacity: "opacity-45" },
    { id: 7, left: "5%", delay: "6s", size: "w-3 h-3 md:w-4 md:h-4", opacity: "opacity-30" },
    { id: 8, left: "85%", delay: "7.5s", size: "w-2.5 h-2.5 md:w-3 md:h-3", opacity: "opacity-50" },
  ];

  return (
    <section
      ref={sectionRef}
      id="daftar"
      className="relative py-20 md:py-28 bg-brand-navy text-center overflow-hidden flex items-center justify-center"
    >
      {/* 1. Kelopak Sakura Jatuh (Falling Petals) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className={`absolute rounded-full bg-pink-200/40 dark:bg-pink-100/30 animate-petal-fall ${petal.size} ${petal.opacity}`}
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              top: "-15px",
            }}
          />
        ))}
      </div>

      {/* Decorative ambient blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-navy-light/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative SVG curves */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute -bottom-10 -right-10 w-64 h-64 text-brand-navy-light/10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <path d="M0 60 Q 35 30, 70 60 T 100 60" />
        </svg>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Logo Harunokaze kecil */}
        <div className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Image
            src="/logo-harunokaze.png"
            alt="Logo Harunokaze"
            width={60}
            height={60}
            className="h-[60px] w-auto object-contain"
            priority
          />
        </div>

        {/* Heading besar putih */}
        <h2
          className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Langkah Pertama Nggak Harus Besar
        </h2>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 transition-all duration-700 delay-350 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Cukup mulai dari Pemetaan Awal seharga Rp150.000. Sisanya, kita jalani bareng.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://wa.me/message/DWVTJESHI2RQC1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white text-base font-bold rounded-button shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
          >
            Daftar Pemetaan Awal Sekarang
          </a>
          <a
            href="https://wa.me/message/DWVTJESHI2RQC1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white hover:bg-white hover:text-brand-navy text-white text-base font-bold rounded-button transition-all duration-200 flex items-center justify-center"
          >
            Tanya Dulu, Gratis
          </a>
        </div>

        {/* 3 small badges pill shape */}
        <div
          className={`flex flex-wrap justify-center items-center gap-3 mb-6 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="px-4 py-2 bg-white/10 text-white text-xs md:text-sm font-semibold rounded-full border border-white/5 backdrop-blur-sm shadow-sm">
            🛡️ Proses Resmi
          </span>
          <span className="px-4 py-2 bg-white/10 text-white text-xs md:text-sm font-semibold rounded-full border border-white/5 backdrop-blur-sm shadow-sm">
            💎 Transparan
          </span>
          <span className="px-4 py-2 bg-white/10 text-white text-xs md:text-sm font-semibold rounded-full border border-white/5 backdrop-blur-sm shadow-sm">
            💰 Ada Dana Talang
          </span>
        </div>

        {/* Catatan kecil italic */}
        <div
          className={`transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs sm:text-sm text-white/70 italic font-medium">
            * Promo flash sale Rp99.000 tersedia. Tanya admin untuk info terbaru.
          </p>
        </div>
      </div>
    </section>
  );
}
