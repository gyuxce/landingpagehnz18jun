"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Coins, MessageSquare } from "lucide-react";

export default function PainPoints() {
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

  const cards = [
    {
      icon: <Shield className="w-5 h-5 text-brand-red" />,
      question: "Jangan-jangan ini penipuan juga?",
      answer: "Kami bermitra langsung sama LPK Wiwitan yang diawasi Kemenaker RI. No. Izin LPK 9120009570071 — bisa kamu cek sendiri kok.",
      delay: "delay-300",
    },
    {
      icon: <Coins className="w-5 h-5 text-brand-red" />,
      question: "Pasti ada biaya nyelip puluhan juta kan?",
      answer: "Pintu masuknya cuma Rp150.000 buat Pemetaan Awal. Semua biaya dijelasin transparan dulu, sebelum kamu mutusin apa-apa.",
      delay: "delay-450",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-brand-red" />,
      question: "Saya belum bisa bahasa Jepang sama sekali, lho.",
      answer: "Justru dari situ kita mulai. Metode belajar kami didesain buat yang benar-benar dari nol — bukan hafalan buat ujian, tapi kebiasaan yang nempel di kepala.",
      delay: "delay-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pain-points"
      className="relative py-20 md:py-28 bg-brand-navy overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-navy-light/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Wind Lines (SVG) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute -top-10 -right-10 w-72 h-72 text-brand-navy-light/10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <path d="M0 25 Q 35 60, 70 25 T 100 25" />
          <path d="M0 40 Q 35 75, 70 40 T 100 40" />
        </svg>
        <svg
          className="absolute -bottom-16 -left-16 w-80 h-80 text-brand-navy-light/10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <path d="M0 75 Q 35 40, 70 75 T 100 75" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title and Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold text-white leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Kamu Mungkin Pernah Mikir Gini, Kan?
          </h2>
          <p
            className={`text-base md:text-lg text-white/70 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Wajar banget. Ini jawaban jujur dari kami.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-card p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-700 ${card.delay} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-full bg-brand-red/15 flex items-center justify-center mb-6">
                {card.icon}
              </div>

              {/* Question */}
              <h3 className="font-heading text-lg md:text-xl font-bold text-brand-navy mb-4">
                {card.question}
              </h3>

              {/* Answer */}
              <p className="text-sm md:text-base text-brand-navy-light leading-relaxed">
                {card.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Quotes Section */}
        <div
          className={`relative max-w-3xl mx-auto text-center pt-8 border-t border-white/10 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative Quote Mark */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-serif text-brand-red/20 pointer-events-none select-none">
            “
          </div>
          
          <blockquote className="relative z-10 space-y-2">
            <p className="font-heading text-lg sm:text-xl md:text-2xl text-white font-semibold italic tracking-wide">
              &quot;言語とは身につくものである&quot;
            </p>
            <cite className="block text-xs sm:text-sm text-white/60 not-italic uppercase tracking-widest pt-2">
              — Bahasa adalah sesuatu yang melekat pada diri
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
