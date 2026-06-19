import Image from "next/image";

export default function SalesFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1F45] text-white/80 py-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        {/* Simple Brand Info */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            <img
              src="/logo-harunokaze.png"
              alt="Logo Harunokaze"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
          Bukan sekadar berangkat, tapi disiapkan. Persiapan karir resmi ke Jepang jalur SSW & TITP.
        </p>

        {/* Partnership & Legal Info (Critical for Credibility) */}
        <div className="pt-6 border-t border-white/10 space-y-2">
          <p className="text-[11px] sm:text-xs text-white/50 leading-relaxed">
            Harunokaze bekerja sama dengan <strong className="font-bold text-white">LPK Wiwitan Baru Sukabumi</strong>, terdaftar resmi di Kemenaker RI.
          </p>
          <p className="text-[10px] sm:text-xs text-white/40 leading-relaxed">
            No. Izin LPK: 9120009570071 &nbsp;|&nbsp; Surat Izin SO WBS: No. 2/5702/HK.03.01/XII/2023.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-white/30 pt-2">
          &copy; {currentYear} Harunokaze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
