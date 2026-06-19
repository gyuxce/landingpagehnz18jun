"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

export default function SalesTestimonials() {
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

  const testimonials = [
    {
      name: "Andi Saputra",
      role: "Alumni Sesi Rekomendasi Jalur - Magang Jepang",
      quote: "Sesi rekomendasi jalurnya ngebantu banget! Awalnya bingung mau lewat LPK mana yang aman. Di sini dijelasin sedetail itu, biayanya juga jujur dibuka semua.",
      avatar: "https://placehold.co/100x100/3B3F7C/FFFFFF?text=Andi",
    },
    {
      name: "Rina Kartika",
      role: "Alumni Sesi Rekomendasi Jalur - Tokutei Ginou (SSW)",
      quote: "Puas banget karena dapet roadmap terarah. Nggak cuma disuruh belajar bahasa, tapi dikasih tips cara lolos interview langsung sama user Jepang.",
      avatar: "https://placehold.co/100x100/3B3F7C/FFFFFF?text=Rina",
    },
    {
      name: "Budi Setiawan",
      role: "Alumni Sesi Rekomendasi Jalur - Career Switcher",
      quote: "Awalnya saya kira bakalan mahal banget. Ternyata sesi 1-on-1 ini ngebuka jalan banget. Sangat direkomendasikan buat yang masih ragu mulai dari mana.",
      avatar: "https://placehold.co/100x100/3B3F7C/FFFFFF?text=Budi",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden border-b border-brand-navy/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`font-heading text-2xl sm:text-3xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Apa Kata Mereka?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`bg-brand-navy/[0.02] rounded-card p-6 md:p-8 border border-brand-navy/10 shadow-xs hover:border-brand-navy/20 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Stars & Quote */}
              <div className="space-y-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-brand-navy italic leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Profile Bio */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-brand-navy/10">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-navy/15 bg-brand-navy/5 flex-shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-brand-navy">
                    {item.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-brand-navy-light font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
