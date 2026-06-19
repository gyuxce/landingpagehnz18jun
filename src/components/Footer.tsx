import Image from "next/image";
import { Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F224D] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/logo-harunokaze.png"
                alt="Logo Harunokaze"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <span className="font-heading text-lg font-bold tracking-wide">
                Harunokaze
              </span>
            </a>
            <p className="text-white/70 text-sm max-w-xs leading-relaxed">
              Bukan sekadar berangkat, tapi disiapkan. Persiapan karir ke Jepang dengan proses yang jelas, hangat, dan tanpa janji instan.
            </p>
            <p className="text-xs text-white/50 pt-2">
              &copy; {currentYear} Harunokaze. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-12">
            <h3 className="font-heading text-base font-bold text-brand-red mb-4">
              Jelajahi
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-sm text-white/80 hover:text-brand-red transition-colors font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-sm text-white/80 hover:text-brand-red transition-colors font-medium">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#alur" className="text-sm text-white/80 hover:text-brand-red transition-colors font-medium">
                  Alur Program
                </a>
              </li>
              <li>
                <a href="#bidang" className="text-sm text-white/80 hover:text-brand-red transition-colors font-medium">
                  Bidang Kerja
                </a>
              </li>
              <li>
                <a href="#alumni" className="text-sm text-white/80 hover:text-brand-red transition-colors font-medium">
                  Alumni WBS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-brand-red mb-4">
              Kontak & Konsultasi
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/message/DWVTJESHI2RQC1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-brand-red transition-colors font-medium"
              >
                <MessageSquare className="w-5 h-5 text-brand-red" />
                <span>WhatsApp: Chat Admin</span>
              </a>
              <a
                href="mailto:info@harunokaze.id"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-brand-red transition-colors font-medium"
              >
                <Mail className="w-5 h-5 text-brand-red" />
                <span>Email: info@harunokaze.id</span>
              </a>
            </div>
            <p className="text-xs text-white/60 italic border-l-2 border-brand-red pl-3 pt-1">
              &quot;Konsultasi gratis, tanpa komitmen apa-apa.&quot;
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/50 leading-relaxed max-w-2xl mx-auto">
            Harunokaze bekerja sama dengan **LPK Wiwitan Baru Sukabumi**, terdaftar resmi di Kemenaker RI. <br className="hidden sm:inline" />
            No. Izin LPK: 9120009570071 | Surat Izin SO WBS: No. 2/5702/HK.03.01/XII/2023.
          </p>
        </div>
      </div>
    </footer>
  );
}
