import { 
  Users, 
  CreditCard, 
  BookOpen, 
  FileCheck, 
  QrCode, 
  School
} from "lucide-react";

const features = [
  {
    title: "Manajemen Kesiswaan",
    desc: "Database siswa lenkap, mutasi, poin pelanggaran, hingga konseling BK tercatat rapi.",
    icon: Users,
    color: "text-white bg-red-500 dark:bg-slate-700 dark:text-slate-300",
  },
  {
    title: "Tagihan & Keuangan",
    desc: "Kirim tagihan SPP otomatis via WhatsApp, terima pembayaran online, dan laporan keuangan realtime.",
    icon: CreditCard,
    color: "text-white bg-red-500 dark:bg-slate-700 dark:text-slate-300",
  },
  {
    title: "Akademik & LMS",
    desc: "Jadwal pelajaran, E-Learning, Tugas Online, dan Bank Soal dalam satu platform.",
    icon: BookOpen,
    color: "text-white bg-red-500 dark:bg-slate-700 dark:text-slate-300",
  },
  {
    title: "E-Raport Kurikulum Merdeka",
    desc: "Generate rapor otomatis sesuai standar Diknas terbaru (K13 & Kurikulum Merdeka).",
    icon: FileCheck,
    color: "text-white bg-red-500 dark:bg-slate-700 dark:text-slate-300",
  },
  {
    title: "Absensi Pintar",
    desc: "Presensi Siswa & Guru menggunakan Scan QR, Kartu RFID, atau Wajah (Biometrik).",
    icon: QrCode,
    color: "text-white bg-red-500 dark:bg-slate-700 dark:text-slate-300",
  },
  {
    title: "Portal Yayasan",
    desc: "Dashboard eksekutif untuk Yayasan memantau perkembangan sekolah dari mana saja.",
    icon: School,
    color: "text-white bg-red-500 dark:bg-slate-700 dark:text-slate-300",
  }
];

export default function EdulaFeatures() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-red-600 dark:text-red-400 tracking-wider uppercase mb-2">Fitur Lengkap</h2>
          <p className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Satu Aplikasi, Solusi Menyeluruh
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Edula dirancang khusus untuk menangani kompleksitas administrasi sekolah modern.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
