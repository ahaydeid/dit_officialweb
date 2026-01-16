import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-sky-600 dark:bg-sky-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Siap digitalisasikan sekolah Anda?</span>
          <span className="block text-blue-100">Bergabunglah dengan ekosistem Edula.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-3">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Mulai Sekarang
            </Link>
          </div>
          <div className="inline-flex rounded-md shadow ml-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-700 hover:bg-sky-800"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
