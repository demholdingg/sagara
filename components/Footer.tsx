import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#043d2f] bg-[#064e3b] text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">PT. Sagara Yasa Ananta</p>
          <p className="text-sm text-slate-300">
            Solusi energi diesel yang andal, efisien, dan bertanggung jawab.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/tentang-kami" className="hover:text-white">
            Tentang Kami
          </Link>
          <Link href="/layanan" className="hover:text-white">
            Layanan
          </Link>
          <Link href="/proyek" className="hover:text-white">
            Proyek
          </Link>
          <Link href="/kontak" className="hover:text-white">
            Kontak
          </Link>
        </div>
      </div>
    </footer>
  );
}
