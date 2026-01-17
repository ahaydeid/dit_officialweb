import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">PT. Digital Integritas Teknologi</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Solusi teknologi terintegrasi untuk masa depan pendidikan dan bisnis Anda.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/features" className="hover:text-blue-600">Sistem Manajemen Sekolah</Link></li>
              <li><Link href="/features" className="hover:text-blue-600">Learning Management System</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Daftar Demo</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Login Administrator</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legalitas</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>NIB: -</li>
              <li>SK Kemenkumham: -</li>
              <li>NPWP: -</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Email: info@ditedu.co.id</li>
              <li>WhatsApp: +62 838-9149-5814</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PT. Digital Integritas Teknologi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
