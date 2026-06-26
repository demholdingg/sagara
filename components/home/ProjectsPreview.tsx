"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuredProjects = [
  {
    name: "PLTD Kepulauan Riau",
    location: "Kepulauan Riau",
    capacity: "2 MW",
    status: "Aktif",
  },
  {
    name: "PLTD Kab. Nunukan",
    location: "Kalimantan Utara",
    capacity: "1.5 MW",
    status: "Selesai",
  },
  {
    name: "O&M PLTD Industri",
    location: "Jawa Barat",
    capacity: "3 MW",
    status: "Aktif",
  },
];

export default function ProjectsPreview() {
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
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          badge="Portofolio Terkini"
          title="Proyek andalan kami"
        />
        <Link
          href="/proyek"
          className="text-sm font-semibold text-slate-900 transition hover:text-slate-700"
        >
          Lihat semua proyek →
        </Link>
      </div>
      <div ref={containerRef} className="mt-8 grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <div
            key={project.name}
            className="project-card group cursor-pointer rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#064e3b]/30"
            onMouseEnter={(e) => {
              const card = e.currentTarget;
              gsap.to(card, {
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                duration: 0.4,
                ease: "power2.out",
              });
              gsap.to(card.querySelector(".project-img-inner"), {
                scale: 1.1,
                rotate: 1,
                duration: 0.6,
                ease: "power2.out",
              });
              gsap.to(card.querySelector(".project-title"), {
                x: 4,
                color: "#064e3b",
                duration: 0.3,
              });
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              gsap.to(card, {
                y: 0,
                boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                duration: 0.4,
                ease: "power2.inOut",
              });
              gsap.to(card.querySelector(".project-img-inner"), {
                scale: 1,
                rotate: 0,
                duration: 0.6,
                ease: "power2.inOut",
              });
              gsap.to(card.querySelector(".project-title"), {
                x: 0,
                color: "#020617",
                duration: 0.3,
              });
            }}
          >
            <div className="mb-4 h-44 overflow-hidden rounded-3xl bg-slate-200">
              <div className="project-img-inner h-full w-full bg-slate-300 transition-transform duration-700" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
              {project.status}
            </p>
            <h3 className="project-title mt-3 text-xl font-semibold text-slate-950 transition-all duration-300">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {project.location} • {project.capacity}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
