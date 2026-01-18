import { Building2, GraduationCap, Users2 } from "lucide-react";

export default function TargetAudience() {
  return (
    <section className="py-24 bg-white/60 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                <div className="bg-gray-100 dark:bg-slate-800 rounded-3xl p-8 relative flex flex-col gap-6">
                    {/* Mock Chat / Testimonial UI */}
                    <div className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 self-start max-w-xs">
                        <div className="text-sm text-gray-600 dark:text-gray-300">"Semenjak pakai Edula, rekap SPP jadi otomatis. Gak perlu lembur lagi!"</div>
                        <div className="mt-2 text-xs font-bold text-blue-600">— Bu Ani, Bendahara</div>
                    </div>
                     <div className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 self-end max-w-xs">
                        <div className="text-sm text-gray-600 dark:text-gray-300">"Cek nilai dan absen anak bisa langsung dari HP. Transparan banget."</div>
                        <div className="mt-2 text-xs font-bold text-blue-600">— Pak Budi, Wali Murid</div>
                    </div>
                     <div className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 self-start max-w-xs">
                        <div className="text-sm text-gray-600 dark:text-gray-300">"Input nilai rapor Kurikulum Merdeka ternyata gampang di sini."</div>
                        <div className="mt-2 text-xs font-bold text-blue-600">— Pak Anto, Guru</div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
                    Solusi untuk Semua Stakeholder
                </h2>
                
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center">
                                <Building2 size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Untuk Yayasan & Kepala Sekolah</h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Transparansi data keuangan dan akademik realtime untuk pengambilan keputusan yang cepat dan tepat.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center">
                                <GraduationCap size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Untuk Guru & Staff</h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Kurangi beban administrasi manual hingga 70%. Fokus kembali ke tugas mulia: Mendidik siswa.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center">
                                <Users2 size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Untuk Orang Tua & Siswa</h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Kemudahan pembayaran, pantau absensi, dan akses materi belajar dalam satu genggaman tangan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
