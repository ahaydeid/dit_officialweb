import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EdulaFeatures from "@/components/sections/EdulaFeatures";
import TargetAudience from "@/components/sections/TargetAudience";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TargetAudience />
        <EdulaFeatures />
        
        {/* Simple Social Proof Section */}
        <section className="py-12 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-gray-800">
             <div className="max-w-7xl mx-auto px-4 text-center">
                 <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Dipercaya oleh institusi pendidikan terdepan</p>
                 <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                     {/* Placeholder Logos */}
                     <span className="text-2xl font-bold text-gray-400">SMA Harapan</span>
                     <span className="text-2xl font-bold text-gray-400">SMK Teknologi</span>
                     <span className="text-2xl font-bold text-gray-400">Yayasan Al-Ikhlas</span>
                     <span className="text-2xl font-bold text-gray-400">Boarding School ID</span>
                 </div>
             </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
