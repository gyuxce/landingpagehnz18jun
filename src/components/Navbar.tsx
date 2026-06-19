"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Alur Program", href: "#alur" },
    { name: "Bidang Kerja", href: "#bidang" },
    { name: "Alumni", href: "#alumni" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 flex items-center ${
        scrolled
          ? "bg-white shadow-sm border-b border-brand-navy/5"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo-harunokaze.png"
              alt="Logo Harunokaze"
              width={48}
              height={48}
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="font-heading text-lg font-bold tracking-wide text-brand-navy">
              Harunokaze
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-navy/80 hover:text-brand-red transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/message/DWVTJESHI2RQC1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-brand-red hover:bg-brand-red-light text-white text-sm font-semibold rounded-button shadow-sm hover:shadow-md transition-all duration-200"
            >
              Chat Admin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-navy hover:text-brand-red transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 top-[72px] bg-white border-b border-brand-navy/10 transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-brand-navy/90 hover:text-brand-red py-2 border-b border-brand-navy/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/message/DWVTJESHI2RQC1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 py-3 rounded-button bg-brand-red hover:bg-brand-red-light text-white text-center text-sm font-bold block shadow-sm"
          >
            Chat Admin
          </a>
        </div>
      </div>
    </nav>
  );
}
