import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Edula - Ekosistem Sekolah Digital Terpadu",
    template: "%s | Edula",
  },
  description: "Edula adalah platform manajemen sekolah lengkap (LMS, Absensi, E-Raport, Keuangan) dari PT. Digital Integritas Teknologi. Solusi cerdas untuk sekolah modern.",
  keywords: ["Aplikasi Sekolah", "Sistem Informasi Sekolah", "LMS", "E-Raport", "Absensi Online", "Edutech Indonesia", "Manajemen Sekolah"],
  authors: [{ name: "PT. Digital Integritas Teknologi" }],
  creator: "PT. Digital Integritas Teknologi",
  metadataBase: new URL('https://edula.id'), // Placeholder
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://edula.id",
    title: "Edula - Transformasi Sekolah Anda",
    description: "Satu aplikasi untuk semua kebutuhan sekolah. Akademik, Keuangan, dan Kesiswaan dalam satu genggaman.",
    siteName: "Edula",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Logo Edula",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edula - Ekosistem Sekolah Digital",
    description: "Solusi manajemen sekolah modern untuk era digital.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <AnimatedBackground />
        <div className="animate-entrance relative z-10">
          {children}
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
