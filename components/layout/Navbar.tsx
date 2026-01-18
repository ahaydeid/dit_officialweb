"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { Menu, X } from "lucide-react"; // Removed BookOpenCheck

import { usePathname } from "next/navigation"; 
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ 
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Fitur", href: "/features" },
    { name: "Studi Kasus", href: "/portfolio" },
    { name: "Tentang", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <nav className="bg-white/90 dark:bg-slate-900/90 sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-md">
                 <Image 
                    src="/logo.jpg" 
                    alt="Logo DIT" 
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="flex flex-col justify-center">
                  <span className={`font-extrabold text-xl tracking-tighter text-sky-900 dark:text-white group-hover:text-sky-600 transition-colors leading-none ${fredoka.className}`}>Edula</span>
                  <span className="hidden lg:block text-[10px] tracking-widest text-sky-900 font-bold leading-none mt-0.5">by <span className="text-red-500">DIT</span>Education</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-medium font-medium transition-colors py-2 ${
                    isActive 
                      ? "text-sky-600 dark:text-sky-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-600 after:rounded-full"
                      : "text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
               <Link href="/contact" className="px-5 py-2 text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-full transition-shadow">
                    Demo Gratis
               </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-sky-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800 absolute w-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                {item.name}
              </Link>
            ))}
             <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                 <Link href="/login" className="w-full text-center px-4 py-3 rounded-lg text-gray-700 bg-gray-50 hover:bg-gray-100 font-bold">
                    Masuk
                 </Link>
                 <Link href="/demo" className="w-full text-center px-4 py-3 rounded-lg text-white bg-sky-600 hover:bg-sky-700 font-bold shadow-lg shadow-sky-600/20">
                    Minta Demo
                 </Link>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
}
