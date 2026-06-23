"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, AlertCircle } from "lucide-react";
import SalesCountdown from "./SalesCountdown";
import SalesScarcityBar from "./SalesScarcityBar";

export default function SalesHero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const petals = [
    { id: 1, left: "10%", delay: "0s", size: "w-2.5 h-2.5", opacity: "opacity-30" },
    { id: 2, left: "30%", delay: "3s", size: "w-2 h-2", opacity: "opacity-45" },
    { id: 3, left: "50%", delay: "1.5s", size: "w-3 h-3", opacity: "opacity-35" },
    { id: 4, left: "70%", delay: "4s", size: "w-2 h-2", opacity: "opacity-50" },
    { id: 5, left: "90%", delay: "2.5s", size: "w-2.5 h-2.5", opacity: "opacity-40" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] pt-24 pb-16 flex items-center justify-center bg-brand-navy overflow-hidden"
    >
      {/* 1. Kelopak Sakura Jatuh (Sangat Ringan, Hanya 5 buah) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className={`absolute rounded-full bg-pink-200/30 animate-petal-fall ${petal.size} ${petal.opacity}`}
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              top: "-10px",
            }}
          />
        ))}
      </div>

      {/* 2. Elemen Dekorasi Garis Lengkung Angin Tipis */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute top-10 -left-10 w-64 h-64 text-brand-navy-light/10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <path d="M0 40 Q 30 10, 60 40 T 100 40" />
        </svg>
      </div>

      {/* 3. Konten Utama Hero */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Logo Harunokaze */}
        <div className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="w-20 h-20 bg-white p-2.5 rounded-full shadow-md flex items-center justify-center">
            <img
              src="/logo-harunokaze.png"
              alt="Logo Harunokaze"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Badge Sesi */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-red/20 border border-brand-red/45 text-white text-[11px] font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-red" />
          <span>✦ Special Webinar Harunokaze</span>
        </div>

        {/* Headline Pertanyaan Kebingungan */}
        <h1
          className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Special Webinar Harunokaze: <br className="hidden sm:inline" />
          Kerja di Jepang dari Nol
        </h1>

        {/* Sub-heading Penjelasan Roadmap */}
        <p
          className={`text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Dapatkan <strong className="font-bold text-white">roadmap yang jelas</strong> untuk memulai karier di Jepang pada <strong className="font-bold text-white">Senin, 29 Juni 2026 pukul 19.30 WIB</strong>. Mulai dari persiapan, estimasi biaya, hingga rekomendasi jalur yang sesuai dengan profilmu.
        </p>

        {/* Pricing & CTA Card (Satu Kesatuan Visual) */}
        <div
          className={`w-full max-w-md bg-white rounded-card p-6 md:p-8 shadow-xl border border-white/5 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tag Penawaran Spesial */}
          <p className="text-xs font-bold text-brand-navy-light uppercase tracking-wider mb-2">
            Spesial Sesi Bulan Ini
          </p>

          {/* Baris Harga */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-sm sm:text-base text-brand-navy-light/60 line-through font-semibold">
              Rp150.000
            </span>
            <span className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-red">
              Rp79.000
            </span>
          </div>

          {/* Countdown & Scarcity Indicator */}
          <div className="space-y-4 mb-6">
            <SalesCountdown />
            <SalesScarcityBar />
          </div>

          {/* Tombol CTA Utama */}
          <a
            href="#register"
            className="w-full py-4 bg-brand-red hover:bg-brand-red-light hover:scale-[1.02] active:scale-[0.98] text-white text-base font-bold rounded-button shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Daftar Sesi Rekomendasi Jalur Sekarang
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Keterbatasan Kuota yang Jujur */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[11px] sm:text-xs text-brand-navy-light font-medium">
            <AlertCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>Kuota khusus Rp79rb terbatas untuk 30 pendaftar pertama minggu ini.</span>
          </div>
        </div>

        {/* Stiker Kredibilitas di bawah Kotak Pendaftaran */}
        <div className={`mt-6 flex items-center justify-center gap-2 text-xs text-white/70 font-semibold transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span>🛡️ Keamanan terjamin mitra SO & LPK resmi terdaftar di Kemenaker RI</span>
        </div>
      </div>
    </section>
  );
}
