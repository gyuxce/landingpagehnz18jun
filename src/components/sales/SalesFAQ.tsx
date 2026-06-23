"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight, AlertCircle } from "lucide-react";
import SalesCountdown from "./SalesCountdown";
import SalesScarcityBar from "./SalesScarcityBar";

export default function SalesFAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isCopied, setIsCopied] = useState(false);
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

  const faqs = [
    {
      q: "Kenapa ada biaya untuk sesi ini?",
      a: "Biaya Rp79.000 (dari harga normal Rp150.000) kami gunakan untuk memastikan komitmen kehadiran pendaftar, sekaligus menghargai waktu tim Expert kami yang meluangkan sesi diskusi eksklusif khusus untuk Anda.",
    },
    {
      q: "Apakah ikut program ini pasti berangkat ke Jepang?",
      a: "Kami menjamin kualitas pelatihan bahasa, keabsahan jalur resmi Kemenaker RI, serta pendampingan penuh hingga interview kerja. Namun keberangkatan tetap bergantung pada komitmen belajar dan kedisiplinan Anda dalam proses.",
    },
    {
      q: "Berapa lama keseluruhan prosesnya?",
      a: "Rata-rata proses persiapan dari nol belajar bahasa, ujian sertifikasi, wawancara kerja, hingga visa selesai berkisar antara 4 sampai 6 bulan, tergantung kesiapan masing-masing orang.",
    },
    {
      q: "Bagaimana kalau saya belum bisa bahasa Jepang sama sekali?",
      a: "Sangat tidak masalah! Justru sesi rekomendasi jalur ini diadakan untuk membantumu melangkah dari nol. Kurikulum pelatihan kami dirancang ramah untuk pemula tanpa dasar bahasa Jepang sama sekali.",
    },
    {
      q: "Apakah ada batasan usia untuk ikut program ini?",
      a: "Ya, untuk jalur resmi ketenagakerjaan Jepang (SSW dan TITP/Magang) yang kami kelola, usia pendaftar dibatasi mulai dari 18 tahun hingga maksimal 40 tahun.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-brand-white overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`font-heading text-2xl sm:text-3xl font-bold text-brand-navy leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div
          className={`space-y-4 mb-20 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="border border-brand-navy/10 rounded-xl overflow-hidden bg-brand-navy/[0.01]"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading text-sm sm:text-base font-bold text-brand-navy hover:bg-brand-navy/[0.03] transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-navy-light transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 border-t border-brand-navy/5 bg-white" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs sm:text-sm text-brand-navy-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA Box (Mengulang Penawaran di Atas) */}
        <div
          id="register"
          className={`bg-brand-navy text-white rounded-card p-8 text-center shadow-lg border border-brand-navy-light/10 relative overflow-hidden transition-all duration-700 delay-450 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Subtle Sakura Ambient */}
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
              Ikuti Special Webinar Harunokaze: Kerja di Jepang dari Nol
            </h3>
            
            <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Dapatkan roadmap yang jelas langsung pada Senin, 29 Juni 2026 pukul 19.00 WIB. Amankan kursi promo Anda seharga Rp79.000 sebelum kehabisan slot!
            </p>

            {/* Countdown & Scarcity Indicator */}
            <div className="space-y-4 max-w-sm mx-auto">
              <SalesCountdown />
              <SalesScarcityBar theme="dark" />
            </div>

            {/* Bank Transfer Details (CRO: Click to Copy) */}
            <div className="bg-white border border-brand-navy/10 rounded-xl p-4 max-w-sm mx-auto space-y-2 text-left shadow-sm">
              <p className="text-[10px] sm:text-xs text-brand-navy-light font-extrabold uppercase tracking-wider">
                Rekening Transfer Resmi:
              </p>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-brand-navy">Bank OCBC NISP</p>
                  <p className="text-sm sm:text-base font-heading font-extrabold text-brand-red tracking-wider">0138 0000 0609</p>
                  <p className="text-[10px] sm:text-xs text-brand-navy-light/90 leading-relaxed max-w-[180px] sm:max-w-none font-medium">a.n. Lembaga Pelatihan Kerja Wiwitan Baru Sukabumi</p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("013800000609");
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                  }}
                  className="flex-shrink-0 px-3 py-1.5 bg-brand-navy hover:bg-brand-navy-light active:scale-95 text-white text-xs font-extrabold rounded-lg transition-all duration-200 shadow-sm"
                >
                  {isCopied ? "✓ Tersalin" : "Salin Rekening"}
                </button>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs sm:text-sm text-white/50 line-through font-semibold">
                Rp150.000
              </span>
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-red">
                Rp79.000
              </span>
            </div>

            {/* Button */}
            <a
              href="https://forms.gle/nM37xTkn7JFjRKGC8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).fbq) {
                  (window as any).fbq("track", "Lead");
                }
              }}
              className="inline-flex px-8 py-3.5 bg-brand-red hover:bg-brand-red-light hover:scale-[1.02] active:scale-[0.98] text-white text-sm sm:text-base font-bold rounded-button shadow-md hover:shadow-lg transition-all duration-200 gap-2 items-center"
            >
              Daftar Sesi Rekomendasi Jalur
              <ArrowRight className="w-4.5 h-4.5" />
            </a>

            {/* Limit Warning */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-white/60">
              <AlertCircle className="w-3.5 h-3.5 text-brand-red" />
              <span>Sisa slot promo minggu ini terus berjalan. Hubungi admin via WA.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
