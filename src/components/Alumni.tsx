"use client";

import { useEffect, useRef, useState } from "react";

export default function Alumni() {
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

  const stats = [
    { value: "3+", label: "Alumni Berangkat 2025" },
    { value: "2", label: "Kota Mitra Pelatihan" },
    { value: "1", label: "LPK Resmi Kemenaker" },
  ];

  const alumni = [
    {
      name: "Ai Zahra Azkianti",
      role: "Caregiver",
      location: "Koshigaya, 2025",
      image: "https://placehold.co/300x400/3B3F7C/FFFFFF?text=Ai+Zahra",
      rotate: "rotate-[-2deg] hover:rotate-0",
    },
    {
      name: "Kimas Arya & Husrianto",
      role: "Caregiver",
      location: "Osaka, 2025",
      image: "https://placehold.co/300x400/3B3F7C/FFFFFF?text=Kimas+%26+Husrianto",
      rotate: "rotate-[2deg] hover:rotate-0",
    },
    {
      name: "Windi & Melisah",
      role: "Caregiver",
      location: "Hokkaido, 2025",
      image: "https://placehold.co/300x400/3B3F7C/FFFFFF?text=Windi+%26+Melisah",
      rotate: "rotate-[-1.5deg] hover:rotate-0",
    },
  ];

  // Duplicate list to create seamless infinite scroll
  const duplicatedAlumni = [...alumni, ...alumni];

  return (
    <section
      ref={sectionRef}
      id="alumni"
      className="relative py-20 md:py-28 bg-brand-navy overflow-hidden"
    >
      {/* Dynamic Keyframes for Carousel (via native style tag for App Router safety) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Decorative ambient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-navy-light/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Wind Lines (SVG) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute -top-10 -left-10 w-72 h-72 text-brand-navy-light/10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <path d="M0 45 Q 35 15, 70 45 T 100 45" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title and Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold text-white leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Mereka Dulu Juga Bingung Kayak Kamu
          </h2>
          <p
            className={`text-base md:text-lg text-white/70 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Sekarang udah hidup dan kerja di Jepang.
          </p>
        </div>

        {/* Small Statistics Grid */}
        <div
          className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16 border-b border-t border-white/10 py-6 text-center text-white transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-heading text-2xl md:text-3xl font-extrabold text-brand-red">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Carousel */}
        <div
          className={`w-full overflow-hidden py-8 mb-16 transition-all duration-700 delay-450 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex w-max gap-8 animate-infinite-scroll hover-pause">
            {duplicatedAlumni.map((person, idx) => (
              <div
                key={idx}
                className={`bg-white shadow-xl p-4 pb-6 rounded-sm w-[260px] md:w-[280px] flex-shrink-0 flex flex-col items-center border border-brand-navy/5 transition-transform duration-300 transform ${person.rotate} hover:scale-105`}
              >
                {/* Polaroid Photo Frame */}
                <div className="relative w-full aspect-[3/4] bg-zinc-100 rounded-xs overflow-hidden mb-4 border border-zinc-200">
                  {/* 
                    IMAGE: foto placeholder potret casual orang Indonesia muda tersenyum dengan background suasana Jepang (gunakan https://placehold.co/300x400/3B3F7C/FFFFFF?text=Alumni sebagai sumber sementara) 
                  */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Polaroid Info Text */}
                <div className="text-center w-full">
                  <h4 className="font-heading text-base font-bold text-brand-navy tracking-tight leading-tight mb-1">
                    {person.name}
                  </h4>
                  <p className="text-xs text-brand-navy-light/95 font-medium italic">
                    {person.role} — {person.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://wa.me/message/DWVTJESHI2RQC1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white text-base font-bold rounded-button shadow-md hover:shadow-lg transition-all duration-200"
          >
            Kamu Bisa Jadi Cerita Selanjutnya
          </a>
        </div>
      </div>
    </section>
  );
}
