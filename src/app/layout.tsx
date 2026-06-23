import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import MetaPixel from "@/components/sales/MetaPixel";
import AnnouncementBar from "@/components/sales/AnnouncementBar";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://landingpagehnz18jun.vercel.app"),
  title: "Harunokaze — Sesi Rekomendasi Jalur Karir Jepang",
  description:
    "Dapatkan roadmap yang jelas untuk memulai karier di Jepang, mulai dari persiapan, estimasi biaya, hingga rekomendasi jalur yang sesuai dengan profilmu. Hanya Rp79.000.",
  keywords: [
    "kerja di Jepang",
    "SSW",
    "TITP",
    "LPK Wiwitan",
    "Harunokaze",
    "pelatihan bahasa Jepang",
    "rekomendasi jalur Jepang",
  ],
  alternates: {
    canonical: "https://harunokaze.id",
  },
  openGraph: {
    title: "Harunokaze — Sesi Rekomendasi Jalur Karir Jepang",
    description:
      "Dapatkan roadmap yang jelas untuk memulai karier di Jepang, mulai dari persiapan, estimasi biaya, hingga rekomendasi jalur yang sesuai dengan profilmu. Hanya Rp79.000.",
    url: "https://harunokaze.id",
    siteName: "Harunokaze",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harunokaze — Sesi Rekomendasi Jalur Karir Jepang",
    description:
      "Dapatkan roadmap yang jelas untuk memulai karier di Jepang, mulai dari persiapan, estimasi biaya, hingga rekomendasi jalur yang sesuai dengan profilmu. Hanya Rp79.000.",
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
      <body className="min-h-full flex flex-col">
        <AnnouncementBar />
        <MetaPixel />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
