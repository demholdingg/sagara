import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#064e3b]">404</h1>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
          Halaman Tidak Ditemukan
        </h2>

        {/* Description */}
        <p className="mb-12 text-lg text-slate-600">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Silakan kembali ke halaman utama atau jelajahi menu lainnya.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button variant="primary" className="w-full sm:w-auto">
              Kembali ke Beranda
            </Button>
          </Link>

          <Link href="/layanan">
            <Button variant="secondary" className="w-full sm:w-auto">
              Jelajahi Layanan
            </Button>
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 pt-12 text-slate-300">
          <svg
            className="mx-auto h-32 w-32 opacity-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
