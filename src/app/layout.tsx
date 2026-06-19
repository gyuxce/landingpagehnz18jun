import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harunokaze — Bukan Sekadar Berangkat, Tapi Disiapkan",
  description:
    "Persiapan karir ke Jepang lewat jalur resmi SSW & TITP. Bermitra dengan LPK resmi terdaftar Kemenaker RI. Mulai dari Sesi Rekomendasi Jalur Rp150.000.",
  keywords: [
    "kerja di Jepang",
    "SSW",
    "TITP",
    "LPK Wiwitan",
    "Harunokaze",
    "pelatihan bahasa Jepang",
  ],
  alternates: {
    canonical: "https://harunokaze.id",
  },
  openGraph: {
    title: "Harunokaze — Bukan Sekadar Berangkat, Tapi Disiapkan",
    description:
      "Persiapan karir ke Jepang lewat jalur resmi SSW & TITP. Bermitra dengan LPK resmi terdaftar Kemenaker RI. Mulai dari Sesi Rekomendasi Jalur Rp150.000.",
    url: "https://harunokaze.id",
    siteName: "Harunokaze",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harunokaze — Bukan Sekadar Berangkat, Tapi Disiapkan",
    description:
      "Persiapan karir ke Jepang lewat jalur resmi SSW & TITP. Bermitra dengan LPK resmi terdaftar Kemenaker RI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
