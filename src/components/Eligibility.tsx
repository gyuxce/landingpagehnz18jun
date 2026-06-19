"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X, HelpCircle } from "lucide-react";

export default function Eligibility() {
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

  const suitableItems = [
    "Usia 18-40 tahun",
    "Belum bisa bahasa Jepang sama sekali, dan itu oke!",
    "Belum pernah ke Jepang",
    "Pengen prosesnya jelas dan aman",
    "Siap belajar serius dari nol",
    "Mau penghasilan lebih besar buat keluarga",
    "Minimal lulusan SMA/SMK",
  ];

  const unsuitableItems = [
    "Pengen langsung berangkat tanpa pelatihan",
    "Cari jalan pintas tanpa proses",
    "Belum siap komitmen beberapa bulan",
    "Belum siap belajar disiplin & intensif",
  ];

  return (
    <section
      ref={sectionRef}
      id="eligibility"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* 
        IMAGE: ilustrasi flat dua orang muda Indonesia casual, salah satu sedang melihat peta/globe dengan ekspresi penasaran, gaya flat design warna brand-red dan brand-navy 
      */}

      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-navy-light/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title and Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ini Kamu Banget, Kalau...
          </h2>
          <p
            className={`text-base md:text-lg text-brand-navy-light transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Coba cek, apa kamu cocok lanjut ke tahap berikutnya?
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Card: Suitable */}
          <div
            className={`p-8 md:p-10 border-2 border-brand-red bg-brand-red/5 rounded-card shadow-sm hover:shadow-md transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red flex-shrink-0">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-navy">
                Cocok Buat Kamu ✓
              </h3>
            </div>
            
            <ul className="space-y-4">
              {suitableItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm md:text-base text-brand-navy/90 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card: Unsuitable */}
          <div
            className={`p-8 md:p-10 border-2 border-brand-navy bg-brand-navy/5 rounded-card shadow-sm hover:shadow-md transition-all duration-700 delay-450 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-navy/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                <X className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-navy">
                Mungkin Belum Cocok
              </h3>
            </div>

            <ul className="space-y-4">
              {unsuitableItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-navy/85 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm md:text-base text-brand-navy/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Small Note Box */}
        <div
          className={`max-w-3xl mx-auto p-5 md:p-6 bg-brand-navy text-white text-center rounded-card border border-brand-navy-light/10 shadow-md mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <HelpCircle className="w-8 h-8 text-brand-red flex-shrink-0" />
          <p className="text-sm md:text-base font-medium leading-relaxed max-w-xl text-left sm:text-center">
            Harunokaze nggak janji hasil instan ya. Hasilnya tergantung komitmen belajar dan proses yang dijalani bareng-bareng.
          </p>
        </div>

        {/* Bottom CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://wa.me/message/DWVTJESHI2RQC1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white text-base font-bold rounded-button shadow-md hover:shadow-lg transition-all duration-200"
          >
            Cek Kecocokanmu Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
