import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutBrief() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
             {/* Placeholder Image/Visual */}
             <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
                    <div>
                        <div className="text-4xl font-bold mb-2">PT. DIT</div>
                        <div className="text-lg opacity-90">Experience & Innovation</div>
                    </div>
                </div>
             </div>
             
             {/* Floating Stats Card */}
             <div className="absolute -bottom-8 -right-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-50 dark:border-gray-700 max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Proyek Terselesaikan</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">100+</div>
                    </div>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-6 order-1 lg:order-2 mb-12 lg:mb-0">
            <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Tentang Kami</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Partner Teknologi Terpercaya untuk Masa Depan
            </h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              PT. Digital Integritas Teknologi (DIT) adalah perusahaan teknologi yang berdedikasi untuk menghadirkan solusi digital komprehensif. Kami memadukan keahlian teknis dengan pemahaman bisnis yang mendalam.
            </p>
            
            <div className="mt-8 space-y-4">
                {[
                    "Tim ahli berpengalaman di bidang Software & IoT",
                    "Pendekatan 'Solutions-First' untuk setiap masalah",
                    "Dukungan teknis responsif dan handal",
                    "Berfokus pada keamanan dan skalabilitas"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
              >
                Pelajari Profil Perusahaan
                <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
