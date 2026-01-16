import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Check, Globe, Lock, Smartphone, Database, ScanBarcode, Printer, CreditCard, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";



export const metadata = {
  title: "Fitur Edula | Sistem Sekolah Terlengkap",
  description: "Jelajahi fitur lengkap Edula: PPDB Online, LMS, CBT, E-Raport, hingga Keuangan Sekolah.",
};

const featureList = [
    {
        title: "Administrasi & Akademik",
        desc: "Jantung operasional sekolah yang efisien.",
        items: [
            { name: "Penerimaan Siswa Baru (PPDB)", desc: "Formulir online, seleksi otomatis, dan pengumuman hasil." },
            { name: "Data Induk Siswa & Guru", desc: "Manajemen database terpusat dengan riwayat lengkap." },
            { name: "Manajemen Kelas & Jadwal", desc: "Pengaturan rombel dan jadwal pelajaran anti-bentrok." },
            { name: "E-Raport K13 & Merdeka", desc: "Cetak rapor otomatis sesuai format Diknas terbaru." }
        ]
    },
    {
        title: "Kegiatan Belajar Mengajar (KBM)",
        desc: "Transformasi kelas konvensional menjadi digital.",
        items: [
            { name: "Learning Management System", desc: "Upload materi, bagikan tugas, dan diskusi online." },
            { name: "Computer Based Test (CBT)", desc: "Ujian online aman dengan fitur acak soal dan anti-curang." },
            { name: "Absensi Digital", desc: "Presensi menggunakan QR Code, Wajah, atau Radius Lokasi." },
            { name: "Jurnal Mengajar Guru", desc: "Pencatatan aktivitas mengajar harian secara digital." }
        ]
    },
    {
        title: "Keuangan & Laporan",
        desc: "Transparansi dan kemudahan pembayaran.",
        items: [
            { name: "Tagihan SPP Otomatis", desc: "Notifikasi tagihan bulanan langsung ke WhatsApp orang tua." },
            { name: "Payment Gateway", desc: "Bayar SPP via Transfer Bank, QRIS, atau E-Wallet." },
            { name: "Laporan Tunggakan", desc: "Monitoring status pembayaran siswa secara realtime." },
            { name: "Penggajian Guru (Payroll)", desc: "Hitung otomatis gaji pokok dan tunjangan kehadiran." }
        ]
    }
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900">
        <section className="bg-sky-800 py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
                Fitur Lengkap Edula
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Dikembangkan dengan fokus pada kemudahan penggunaan untuk menjawab kebutuhan operasional sekolah sehari-hari.
                </p>
            </div>
        </section>

        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {featureList.map((category, idx) => (
                        <div key={idx}>
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-10">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                                <p className="text-gray-500 dark:text-gray-400 mt-2">{category.desc}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center mt-1">
                                                <Check size={16} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Tech Specs */}
        <section className="py-20 bg-gray-50 dark:bg-slate-800">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Keunggulan Teknologi</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                     <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                         <Globe className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                         <h3 className="font-bold">Cloud Based</h3>
                         <p className="text-sm text-gray-500 mt-2">Akses dari mana saja tanpa install server sendiri.</p>
                     </div>
                     <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                         <Lock className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                         <h3 className="font-bold">Aman & Terenkripsi</h3>
                         <p className="text-sm text-gray-500 mt-2">Data sekolah Anda adalah prioritas keamanan kami.</p>
                     </div>
                     <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                         <Smartphone className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                         <h3 className="font-bold">Mobile Friendly</h3>
                         <p className="text-sm text-gray-500 mt-2">Tampilan responsif di HP, Tablet, dan Laptop.</p>
                     </div>
                     <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                         <Database className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                         <h3 className="font-bold">Auto Backup</h3>
                         <p className="text-sm text-gray-500 mt-2">Data dicadangkan otomatis setiap hari.</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Paket Langganan</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Pilih paket yang sesuai dengan jenjang dan kebutuhan sekolah Anda.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* SMP Basic */}
                    <PricingCard 
                        title="SMP Basic" 
                        price="Rp 500.000" 
                        quota="100 Siswa" 
                        desc="Paket dasar untuk SMP dengan fitur esensial."
                        features={[
                            "Manajemen Data Siswa & Guru",
                            "E-Raport K13 & Kurikulum Merdeka",
                            "Cetak Kartu Pelajar",
                            "Laporan Keuangan Dasar",
                        ]}
                    />
                    {/* SMP Premium */}
                    <PricingCard 
                        title="SMP Premium" 
                        price="Rp 1.200.000" 
                        quota="300 Siswa" 
                        desc="Paket premium SMP dengan fitur lengkap & prioritas support." 
                        isPopular
                        features={[
                            "Semua Fitur Basic",
                            "Mobile App Siswa (Android/iOS)",
                            "Absensi RFID / Fingerprint",
                            "Notifikasi WhatsApp Gateway",
                            "Pembayaran Online (Virtual Account)",
                            "CBT / Ujian Online"
                        ]} 
                    />
                    {/* SMA Basic */}
                    <PricingCard 
                        title="SMA Basic" 
                        price="Rp 600.000" 
                        quota="100 Siswa" 
                        desc="Paket dasar untuk SMA/MA." 
                        features={[
                            "Manajemen Data Siswa & Guru",
                            "E-Raport K13 & Kurikulum Merdeka",
                            "Peminatan & Jurusan",
                            "Laporan Keuangan Dasar",
                        ]}
                    />
                     {/* SMA Premium */}
                    <PricingCard 
                        title="SMA Premium" 
                        price="Rp 1.500.000" 
                        quota="Semua Fitur" 
                        desc="Solusi lengkap untuk SMA besar dengan kebutuhan kompleks." 
                        isPopular
                        features={[
                            "Semua Fitur Basic",
                            "Mobile App Siswa (Android/iOS)",
                            "Absensi Wajah (Face Rec)",
                            "Notifikasi WhatsApp Ortu",
                            "Manajemen Alumni",
                            "Bank Soal & Tugas Online"
                        ]}
                    />
                    {/* SMK Basic */}
                    <PricingCard 
                        title="SMK Basic" 
                        price="Rp 750.000" 
                        quota="200 Siswa" 
                        desc="Paket dasar SMK dengan modul PKL dasar." 
                        features={[
                            "Manajemen Data Siswa & Guru",
                            "E-Raport & Transkrip Nilai",
                            "Data Dunia Usaha/Industri (DUDI)",
                            "Jurnal PKL",
                        ]}
                    />
                    {/* SMK Premium */}
                    <PricingCard 
                        title="SMK Premium" 
                        price="Rp 1.800.000" 
                        quota="Semua Fitur" 
                        desc="Full modul SMK termasuk Bursa Kerja & PKL lengkap." 
                        isPopular
                        features={[
                            "Semua Fitur Basic",
                            "Mobile App Siswa & Guru",
                            "Absensi Magang / PKL (GPS)",
                            "Bursa Kerja Khusus (BKK)",
                            "Ujian Berbasis Komputer (CBT)",
                            "Integrasi Mesin EDC Kantin"
                        ]}
                    />
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function PricingCard({ title, price, quota, desc, features = [], isPopular = false }: { title: string, price: string, quota: string, desc: string, features?: string[], isPopular?: boolean }) {
  return (
    <div className={`p-8 rounded-2xl border flex flex-col relative ${isPopular ? 'bg-white dark:bg-slate-800 border-red-200 dark:border-red-900 shadow-xl scale-105 z-10' : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700'}`}>
        {isPopular && (
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                Popular
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="flex items-baseline gap-1 my-4">
            <span className={`text-4xl font-extrabold ${isPopular ? 'text-red-600' : 'text-sky-600'}`}>{price}</span>
            <span className="text-gray-500">/bulan</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-6">
            <User size={16} className={isPopular ? "text-red-500" : "text-sky-500"} />
            <span>Kuota: {quota}</span>
        </div>
        <p className="text-gray-500 text-sm mb-6">{desc}</p>
        
        {/* Features List */}
        <div className="flex-grow mb-8 border-t border-gray-100 dark:border-gray-700 pt-6">
            <ul className="space-y-3">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${isPopular ? 'text-red-500' : 'text-sky-500'}`} />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        <button className={`w-full py-3 rounded-full font-bold transition-all ${isPopular ? 'bg-red-500 cursor-pointer hover:bg-red-600 text-white' : 'bg-sky-500 cursor-pointer hover:bg-sky-600 text-white'}`}>
            Pilih Paket
        </button>
    </div>
  );
}