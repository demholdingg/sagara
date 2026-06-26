"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/proyek", label: "Proyek" },
  { href: "/tata-kelola", label: "Tata Kelola" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null);

  useLenis(({ progress }) => {
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${progress})`;
    }
  });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-[#064e3b]">
          PT. Sagara Yasa Ananta
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#064e3b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/kontak"
          className="rounded-full bg-[#064e3b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#043d2f]"
        >
          Konsultasi
        </Link>
      </div>
      {/* Scroll Progress Bar */}
      <div
        ref={progressRef}
        className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#064e3b] origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
