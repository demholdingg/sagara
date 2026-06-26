"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const items = [
  {
    title: "Pembangunan PLTD",
    description:
      "Kami mengelola seluruh siklus pembangunan unit PLTD dari studi kelayakan hingga serah terima.",
    href: "/layanan/pembangunan-pltd",
  },
  {
    title: "Operasional & Pemeliharaan",
    description:
      "Tim teknisi terlatih siap mendukung operasi PLTD 24/7 dengan standar K3 dan pelaporan berkala.",
    href: "/layanan/operasional-pemeliharaan",
  },
  {
    title: "Distribusi Tenaga Listrik",
    description:
      "Solusi penyaluran daya stabil dengan manajemen tegangan dan koordinasi jaringan distribusi.",
    href: "/layanan/distribusi-listrik",
  },
  {
    title: "Perdagangan Besar",
    description:
      "Pengadaan material elektrikal, suku cadang mesin diesel, dan peralatan K3 untuk kebutuhan proyek.",
    href: "/layanan/perdagangan-besar",
  },
];

export default function Layanan() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(containerRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        badge="Layanan"
        title="Solusi layanan ketenagalistrikan yang andal dan profesional."
        description="Halaman layanan kami memperlihatkan area keahlian utama dalam pembangunan PLTD, operasional & pemeliharaan, distribusi tenaga listrik dan perdagangan besar."
        isMainHeading
      />

      <div ref={containerRef} className="mt-16 grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#064e3b] hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-slate-950">
              {item.title}
            </h2>
            <p className="mt-4 text-slate-600">{item.description}</p>
            <div className="mt-6">
              <Button
                variant="ghost"
                size="sm"
                className="px-0 hover:bg-transparent group-hover:text-[#064e3b]"
              >
                Detail layanan →
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
