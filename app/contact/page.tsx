import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Kontak | DIT Education",
  description: "Hubungi kami untuk konsultasi proyek atau informasi lebih lanjut.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-900 min-h-screen">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                 {/* Contact Info */}
                 <div>
                     <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Hubungi Kami</h1>
                     <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
                         Punya ide proyek? Atau ingin tahu lebih banyak tentang DIT Education? Tim kami siap membantu Anda.
                     </p>

                     <div className="space-y-8">
                         <div className="flex items-start">
                             <div className="flex-shrink-0">
                                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-500 text-white dark:bg-blue-900/30 dark:text-blue-400">
                                     <MapPin className="w-6 h-6" />
                                 </div>
                             </div>
                             <div className="ml-4">
                                 <h3 className="text-lg font-medium text-gray-900 dark:text-white">Alamat Kantor</h3>
                                 <p className="mt-1 text-gray-500 dark:text-gray-400">
                                     Jl. Baru Sentiong - Balaraja<br />
                                     Tangerang, Banten 15610<br />
                                     Indonesia
                                 </p>
                             </div>
                         </div>
                         <div className="flex items-start">
                             <div className="flex-shrink-0">
                                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-500 text-white dark:bg-blue-900/30 dark:text-blue-400">
                                     <Phone className="w-6 h-6" />
                                 </div>
                             </div>
                             <div className="ml-4">
                                 <h3 className="text-lg font-medium text-gray-900 dark:text-white">Telepon / WhatsApp</h3>
                                 <p className="mt-1 text-gray-500 dark:text-gray-400">
                                     +62 838-9149-5814
                                 </p>
                             </div>
                         </div>
                         <div className="flex items-start">
                             <div className="flex-shrink-0">
                                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-500 text-white dark:bg-blue-900/30 dark:text-blue-400">
                                     <Mail className="w-6 h-6" />
                                 </div>
                             </div>
                             <div className="ml-4">
                                 <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                                 <p className="mt-1 text-gray-500 dark:text-gray-400">
                                     info@ditedu.co.id
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Contact Form */}
                 <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-sm border border-gray-100 dark:border-gray-700">
                     <form className="space-y-6">
                         <div>
                             <label htmlFor="name" className="block font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</label>
                             <input type="text" id="name" className="mt-1 block w-full rounded-full border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-slate-700 py-3 px-4" placeholder="Masukkan nama Anda" />
                         </div>
                         <div>
                             <label htmlFor="email" className="block font-medium text-gray-700 dark:text-gray-300">Email address</label>
                             <input type="email" id="email" className="mt-1 block w-full rounded-full border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-slate-700 py-3 px-4" placeholder="nama@perusahaan.com" />
                         </div>
                         <div>
                             <label htmlFor="subject" className="block font-medium text-gray-700 dark:text-gray-300">Subjek</label>
                             <select id="subject" className="mt-1 text-sm block w-full rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 py-3 px-4">
                                 <option>Konsultasi Proyek</option>
                                 <option>Demo DIT Education</option>
                                 <option>Kerjasama</option> focus:bo
                                 <option>Lainnya</option>
                             </select>
                         </div>
                         <div>
                             <label htmlFor="message" className="block font-medium text-gray-700 dark:text-gray-300">Pesan</label>
                             <textarea id="message" rows={4} className="mt-1 block w-full rounded-sm border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-slate-700 py-3 px-4" placeholder="Ceritakan kebutuhan Anda..."></textarea>
                         </div>
                         <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full hover:shadow-sm text-sm font-medium text-white bg-sky-600 cursor-pointer hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            <Send className="w-4 h-4 mr-2" />
                            Kirim Pesan
                         </button>
                     </form>
                 </div>
             </div>
         </div>
      </main>
      <Footer />
    </>
  );
}
