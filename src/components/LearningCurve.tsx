"use client";

import { useEffect, useRef, useState } from "react";

export default function LearningCurve() {
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

  const steps = [
    {
      stage: "Awal",
      emoji: "😅",
      desc: "Belum bisa bahasa Jepang sama sekali, dan itu normal banget",
      translateClass: "md:translate-y-18",
      delay: "delay-100",
    },
    {
      stage: "Minggu 1-4",
      emoji: "🙂",
      desc: "Mulai adaptasi disiplin & dasar bahasa Jepang",
      translateClass: "md:translate-y-12",
      delay: "delay-250",
    },
    {
      stage: "Bulan 2-3",
      emoji: "😊",
      desc: "Mulai paham pola kerja, mulai level N5",
      translateClass: "md:translate-y-6",
      delay: "delay-400",
    },
    {
      stage: "Bulan 4-5",
      emoji: "😄",
      desc: "Masuk tahap N4, siap sertifikasi",
      translateClass: "md:translate-y-0",
      delay: "delay-550",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="belajar"
      className="relative py-20 md:py-28 bg-brand-navy overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-navy-light/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-[130px] pointer-events-none" />

      {/* 
        IMAGE: ilustrasi flat sederhana orang naik tangga kecil sambil membawa buku/bendera Jepang mini, gaya flat minimalis warna brand-red dan putih 
      */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold text-white leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Perjalanan Belajarmu, Selangkah demi Selangkah
          </h2>
        </div>

        {/* Staircase Grid Container */}
        <div className="relative mb-28 max-w-5xl mx-auto">
          {/* Slanted Connecting Dashed Line (Desktop Only) */}
          <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 hidden md:block z-0 pointer-events-none">
            <svg
              className="w-full h-32 text-brand-red/50"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M5 15 L 35 11 L 65 7 L 95 3"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Steps List */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10 items-end">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-card p-6 md:p-8 shadow-sm hover:shadow-md border border-white/5 transition-all duration-700 ${
                  step.translateClass
                } ${step.delay} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {/* Step Number Circle */}
                <div className="w-8 h-8 rounded-full bg-brand-navy-light/10 text-brand-navy font-heading font-bold text-sm flex items-center justify-center mb-4">
                  {idx + 1}
                </div>

                {/* Emoji Indicator */}
                <div className="text-4xl md:text-5xl mb-4 select-none">
                  {step.emoji}
                </div>

                {/* Step Stage/Title */}
                <h3 className="font-heading text-base md:text-lg font-bold text-brand-navy mb-2">
                  {step.stage}
                </h3>

                {/* Step Description */}
                <p className="text-xs md:text-sm text-brand-navy-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Small Note Underneath */}
        <div
          className={`text-center pt-8 border-t border-white/5 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs sm:text-sm text-white/70 italic font-medium">
            * Setiap orang punya kecepatan belajar yang beda-beda, dan itu nggak masalah.
          </p>
        </div>
      </div>
    </section>
  );
}
