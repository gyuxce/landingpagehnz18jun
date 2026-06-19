"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Calendar, Users } from "lucide-react";

export default function SalesGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("webinar");
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

  const categories = [
    { id: "webinar", label: "Webinar Harunokaze Setiap Minggu" },
    { id: "kelas", label: "Kelas Bahasa & Persiapan (Segera)" },
    { id: "alumni", label: "Keberangkatan & Karir (Segera)" },
  ];

  const webinarImages = [
    { src: "/webinar-1.jpg", title: "Webinar #1", desc: "Sesi pembekalan karir interaktif dan tanya jawab persiapan kerja ke Jepang." },
    { src: "/webinar-2.jpg", title: "Webinar #2", desc: "Penjelasan mengenai estimasi biaya mandiri, dokumen persyaratan, dan rincian alur proses." },
    { src: "/webinar-3.jpg", title: "Webinar #3", desc: "Sesi diskusi bersama para peserta mengenai peluang kerja dan persiapan bahasa." },
    { src: "/webinar-4.jpg", title: "Webinar #4", desc: "Tanya jawab langsung membahas langkah-langkah penentuan program karir yang tepat." },
    { src: "/webinar-5.jpg", title: "Webinar #5", desc: "Sesi berbagi pengalaman dari mentor mengenai kesiapan kerja dan kehidupan di Jepang." },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-brand-white overflow-hidden border-b border-brand-navy/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/[0.04] border border-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-brand-red" />
            <span>Dokumentasi Kegiatan</span>
          </div>
          <h2
            className={`font-heading text-2xl sm:text-3xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Galeri Kegiatan Harunokaze
          </h2>
          <p className="text-xs sm:text-sm text-brand-navy-light mt-3 max-w-lg mx-auto">
            Intip keseruan rangkaian program bimbingan dan persiapan karir ke Jepang yang kami selenggarakan.
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            const isDisabled = tab.id !== "webinar";
            return (
              <button
                key={tab.id}
                onClick={() => !isDisabled && setActiveTab(tab.id)}
                disabled={isDisabled}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-200 ${
                  isActive
                    ? "bg-brand-navy border-brand-navy text-white shadow-xs"
                    : isDisabled
                    ? "bg-brand-navy/[0.02] border-brand-navy/5 text-brand-navy-light/40 cursor-not-allowed"
                    : "bg-white border-brand-navy/10 text-brand-navy hover:bg-brand-navy/[0.03]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Content */}
        {activeTab === "webinar" && (
          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {webinarImages.map((image, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-card overflow-hidden border border-brand-navy/10 shadow-xs hover:border-brand-navy/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-brand-navy/5">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-red text-white text-[9px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                    Live Meet
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-5 flex-grow space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-brand-navy-light/75 font-semibold">
                    <Calendar className="w-3 h-3 text-brand-red" />
                    <span>Rutin Setiap Minggu</span>
                    <span className="text-brand-navy/20">•</span>
                    <Users className="w-3 h-3 text-brand-red" />
                    <span>Interactive</span>
                  </div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-brand-navy leading-snug">
                    {image.title}
                  </h3>
                  <p className="text-xs text-brand-navy-light leading-normal">
                    {image.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
