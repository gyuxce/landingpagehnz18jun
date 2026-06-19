"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentHero = heroRef.current;
    if (currentHero) {
      observer.observe(currentHero);
    }

    return () => {
      if (currentHero) {
        observer.unobserve(currentHero);
      }
    };
  }, []);

  const petals = [
    { id: 1, left: "8%", delay: "0s", size: "w-3 h-3 md:w-4 md:h-4", opacity: "opacity-40" },
    { id: 2, left: "22%", delay: "3s", size: "w-2.5 h-2.5 md:w-3.5 md:h-3.5", opacity: "opacity-60" },
    { id: 3, left: "38%", delay: "1.2s", size: "w-2 h-2 md:w-3 md:h-3", opacity: "opacity-50" },
    { id: 4, left: "55%", delay: "4.8s", size: "w-3.5 h-3.5 md:w-4.5 md:h-4.5", opacity: "opacity-70" },
    { id: 5, left: "70%", delay: "2s", size: "w-3 h-3 md:w-4 md:h-4", opacity: "opacity-45" },
    { id: 6, left: "85%", delay: "6.5s", size: "w-2.5 h-2.5 md:w-3 md:h-3", opacity: "opacity-65" },
    { id: 7, left: "95%", delay: "8.2s", size: "w-3 h-3 md:w-4 md:h-4", opacity: "opacity-50" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-brand-navy overflow-hidden"
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

      {/* 2. Elemen Dekorasi Garis Lengkung (Wind Curves) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute top-1/4 -left-12 w-64 h-64 text-brand-navy-light/15"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <path d="M0 50 Q 25 15, 50 50 T 100 50" />
          <path d="M0 65 Q 25 30, 50 65 T 100 65" />
        </svg>
        <svg
          className="absolute bottom-1/4 -right-16 w-96 h-96 text-brand-navy-light/10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M0 35 Q 30 10, 60 40 T 100 35" />
          <path d="M5 45 Q 35 20, 65 50 T 100 45" />
        </svg>
      </div>

      {/* 3. Konten Utama Hero */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Logo Utama Harunokaze */}
        <div className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Image
            src="/logo-harunokaze.png"
            alt="Logo Harunokaze"
            width={120}
            height={120}
            className="h-[100px] md:h-[120px] w-auto object-contain"
            priority
          />
        </div>

        {/* Badge Jalur Resmi */}
        <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/25 border border-brand-red text-white text-xs font-semibold tracking-wider mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          ✦ Jalur Resmi SSW & TITP
        </div>

        {/* Heading Utama */}
        <h1
          className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-up ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Bukan Sekadar Berangkat, <br className="hidden sm:inline" />
          Tapi Disiapkan
        </h1>

        {/* Sub-heading */}
        <p
          className={`text-base sm:text-lg md:text-xl text-brand-white/80 max-w-2xl leading-relaxed mb-10 animate-fade-up ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Mulai persiapan karir ke Jepang dengan proses yang jelas, hangat, dan tanpa janji instan.
        </p>

        {/* Tombol CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12 animate-fade-up ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <a
            href="https://wa.me/message/DWVTJESHI2RQC1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white text-base font-bold rounded-button shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
          >
            Mulai Pemetaan Awal — Rp150rb
          </a>
          <a
            href="#alur"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white hover:bg-white hover:text-brand-navy text-white text-base font-bold rounded-button transition-all duration-200 flex items-center justify-center"
          >
            Lihat Alur Program
          </a>
        </div>

        {/* Badge Kredibilitas di Bawah */}
        <div
          className={`flex flex-wrap justify-center items-center gap-3 animate-fade-up ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <span className="px-4 py-2 bg-white/10 text-white text-xs md:text-sm font-semibold rounded-full border border-white/5 backdrop-blur-sm shadow-sm">
            🛡️ Resmi Kemenaker RI
          </span>
          <span className="px-4 py-2 bg-white/10 text-white text-xs md:text-sm font-semibold rounded-full border border-white/5 backdrop-blur-sm shadow-sm">
            📅 ±6-8 Bulan Proses
          </span>
          <span className="px-4 py-2 bg-white/10 text-white text-xs md:text-sm font-semibold rounded-full border border-white/5 backdrop-blur-sm shadow-sm">
            💰 Ada Dana Talang
          </span>
        </div>
      </div>
    </section>
  );
}
