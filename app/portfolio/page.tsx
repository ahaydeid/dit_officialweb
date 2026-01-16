import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Corrected import

export const metadata = {
  title: "Portofolio | DIT Education",
  description: "Hasil karya dan proyek yang telah kami selesaikan.",
};

export default function PortfolioPage() {
    // Placeholder projects - Focused on EdTech
    const projects = [
        { title: "SMK Negeri 1 Jakarta", cat: "Implementasi Edula", desc: "Digitalisasi administrasi sekolah untuk 2000+ siswa dan 150 guru." },
        { title: "Yayasan Al-Azhar (Cabang)", cat: "Full System", desc: "Integrasi sistem keuangan dan akademik antar 5 unit sekolah." },
        { title: "SDIT Nurul Fikri", cat: "Smart School", desc: "Penerapan absensi wajah dan notifikasi WhatsApp realtime." },
        { title: "SMP Bintang Cendekia", cat: "CBT & LMS", desc: "Pelaksanaan ujian akhir semester berbasis komputer sepenuhnya." },
        { title: "Boarding School Insan Madani", cat: "Cashless System", desc: "Sistem uang jajan santri menggunakan kartu RFID terintegrasi." },
        { title: "TK/PAUD Ceria", cat: "E-Report", desc: "Laporan perkembangan anak harian digital kepada orang tua." },
    ];

    return (
        <>
            <Navbar />
            <main className="bg-white dark:bg-slate-900 min-h-screen">
                 <section className="py-20 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-4">Portofolio</h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400">Bukti nyata dedikasi kami dalam menghadirkan solusi berkualitas.</p>
                    </div>
                 </section>

                 <section className="py-20">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {projects.map((project, idx) => (
                                 <div key={idx} className="group relative bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                     <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                                         <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/10 transition-colors"></div>
                                         <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-sm">
                                             [Project Preview]
                                         </div>
                                     </div>
                                     <div className="p-6">
                                         <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">{project.cat}</div>
                                         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 transition-colors">
                                             {project.title}
                                         </h3>
                                         <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                             {project.desc}
                                         </p>
                                         <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-sky-600">
                                             Lihat Detail <ArrowUpRight className="ml-1 w-4 h-4" />
                                         </Link>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                 </section>
            </main>
            <Footer />
        </>
    );
}
