import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Typewriter from "@/components/ui/Typewriter";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ 
  subsets: ["latin"],
  // No weight needed for variable fonts
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-sky-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center py-5">
              
            </div>
            
            <h1 className="font-plus-jakarta font-extrabold text-sky-900 dark:text-white mb-6">
              <span className="block text-2xl sm:text-3xl tracking-wide mb-3">
                <span className={`${fredoka.className} font-bold`}>Edula</span>
              </span>
              <span className="block text-3xl text-sky-900 dark:text-white sm:text-4xl md:text-5xl tracking-tight leading-[1.15]">
                <Typewriter 
                  text="Pengelolaan Sekolah"
                  className="block"
                  speed={70}
                  loop={false}
                  cursor={false} 
                />
                <Typewriter 
                  text="Lebih Efisien & Modern" 
                  className="block"
                  speed={70}
                  delay={1500}
                  loop={false}
                />
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Guru fokus mengajar, urusan administrasi berulang Edula yang bantu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="/contact"
                className="inline-flex w-1/2 sm:w-auto items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-sky-600 hover:bg-sky-700 transition-all hover:scale-105 mx-auto sm:mx-0"
              >
                Coba Demo Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>Bantuan Full Setup & Training</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span>Support 24/7 via WhatsApp</span>
                </div>
            </div>
          </div>
          
          {/* Right Column: Static 2-Row Layout */}
          <div className="mt-16 lg:mt-0 lg:col-span-6 relative hidden lg:flex justify-center items-center h-[450px]">
             <div className="flex flex-col items-center gap-6 select-none">
                 {/* Top Row: EDU */}
                 <div className="flex items-center gap-6">
                     {/* E - Sky 700 */}
                     <div className="w-24 h-32 sm:w-32 sm:h-40 bg-sky-700 rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-6 hover:scale-105 transition-transform duration-300 animate-float">
                        <span className="text-white font-black text-6xl sm:text-7xl">E</span>
                     </div>
                     {/* D - Sky 500 */}
                     <div className="w-24 h-32 sm:w-32 sm:h-40 bg-sky-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 mt-8 hover:scale-105 transition-transform duration-300 animate-float-delayed">
                        <span className="text-white font-black text-6xl sm:text-7xl">D</span>
                     </div>
                     {/* U - Red 500 */}
                     <div className="w-24 h-32 sm:w-32 sm:h-40 bg-red-500 rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-3 hover:scale-105 transition-transform duration-300 animate-float">
                        <span className="text-white font-black text-6xl sm:text-7xl">U</span>
                     </div>
                 </div>

                 {/* Bottom Row: LA */}
                 <div className="flex items-center gap-6">
                     {/* L - Sky 600 */}
                     <div className="w-24 h-32 sm:w-32 sm:h-40 bg-sky-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 hover:scale-105 transition-transform duration-300 animate-float-delayed">
                        <span className="text-white font-black text-6xl sm:text-7xl">L</span>
                     </div>
                      {/* A - Red 600 */}
                     <div className="w-24 h-32 sm:w-32 sm:h-40 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-2 mt-4 hover:scale-105 transition-transform duration-300 animate-float">
                        <span className="text-white font-black text-6xl sm:text-7xl">A</span>
                     </div>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
