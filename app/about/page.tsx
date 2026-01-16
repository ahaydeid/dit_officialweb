import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Award, Target, Users, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Tentang Kami | DIT Education",
  description: "Profil PT. Digital Integritas Teknologi, visi misi, dan tim di balik solusi teknologi masa depan.",
};

export default function About() {
  const teamMembers = [
    { name: "Ahadi", role: "Founder", image: "/ahadi.png" },
    { name: "Ahadi", role: "Back End Dev", image: null },
    { name: "Nama Tim #3", role: "Jabatan", image: null },
    { name: "Nama Tim #4", role: "Jabatan", image: null },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900">
        {/* Header Section */}
        <section className="bg-gray-50 dark:bg-slate-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              Tentang Kami
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Mengenal lebih dekat PT. Digital Integritas Teknologi, mitra transformasi digital Anda.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Visi & Misi
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <Target className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Visi</h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                        Menjadi standar sistem manajemen sekolah modern di Indonesia yang terjangkau, mudah digunakan, dan berdampak nyata.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <Award className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Misi</h3>
                      <ul className="mt-2 text-base text-gray-500 dark:text-gray-400 list-disc pl-5 space-y-1">
                        <li>Membantu sekolah beralih dari administrasi manual ke digital.</li>
                        <li>Menyediakan platform yang user-friendly untuk guru senior sekalipun.</li>
                        <li>Meningkatkan transparansi pendidikan bagi orang tua.</li>
                        <li>Menjamin keamanan data siswa dan sekolah.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                {/* Placeholder for Office/Team Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-80 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">Inovasi Tanpa Batas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-50 dark:bg-slate-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Nilai Inti Kami</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Integritas", desc: "Menjunjung tinggi kejujuran dan etika dalam setiap kerjasama.", icon: ShieldCheck },
                        { title: "Inovasi", desc: "Selalu beradaptasi dengan teknologi terbaru untuk solusi terbaik.", icon: Target },
                        { title: "Kolaborasi", desc: "Bekerja sama erat dengan klien untuk mencapai tujuan bersama.", icon: Users },
                    ].map((val, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <val.icon className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{val.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Team Section (Placeholder) */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Tim Kami</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="group">
                        <div className="aspect-square rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 overflow-hidden relative max-w-[200px]">
                            {member.image ? (
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500">
                                    <Users className="h-16 w-16"/>
                                </div>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
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
