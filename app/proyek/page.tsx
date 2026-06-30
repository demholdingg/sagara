"use client";

import { useState, useRef } from "react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    name: "PLTD Airupas",
    location: "Kalimantan Barat",
    capacity: "6 MW",
    category: "Pembangunan",
    year: "2026",
    status: "Aktif",
    description: "Pembangkit terkelola untuk kebutuhan kelistrikan regional.",
  },
  {
    name: "PLTD Badau",
    location: "Kalimantan Barat",
    capacity: "4 MW",
    category: "Pembangunan",
    year: "2026",
    status: "Aktif",
    description: "Proyek penguatan pasokan listrik di wilayah terpencil.",
  },
  {
    name: "PLTD Balai Karangan",
    location: "Pontianak Kalimantan Barat",
    capacity: "3 MW",
    category: "Pembangunan",
    year: "2026",
    status: "Aktif",
    description: "Pengelolaan operasional listrik wilayah balai karangan.",
  },
  {
    name: "PLTD Semitau",
    location: "Kapuas Hulu Kalimantan Barat",
    capacity: "1.5 MW",
    category: "Pembangunan",
    year: "2026",
    status: "Aktif",
    description: "Pengelolaan operasional listrik wilayah semitau.",
  },
];

const categories = ["Semua", "Pembangunan", "O&M", "Distribusi"];
const statuses = ["Semua", "Aktif", "Selesai"];

export default function Proyek() {
  const [filterCategory, setFilterCategory] = useState("Semua");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((p) => {
    const matchCat =
      filterCategory === "Semua" || p.category === filterCategory;
    const matchStat = filterStatus === "Semua" || p.status === filterStatus;
    return matchCat && matchStat;
  });

  useGSAP(
    () => {
      if (!gridRef.current) return;
      gsap.from(gridRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: gridRef, dependencies: [filteredProjects] },
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeading
        badge="Proyek"
        title="Portofolio Proyek & Rekam Jejak."
        description="Rekam jejak proyek pembangunan, operasional, dan distribusi listrik kami menggambarkan keandalan, efisiensi, dan komitmen kami terhadap tata kelola energi yang bertanggung jawab."
        isMainHeading
      />

      <section className="mt-12 space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Filter Kategori
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={filterCategory === cat ? "primary" : "ghost"}
                  onClick={() => setFilterCategory(cat)}
                  className={filterCategory !== cat ? "bg-slate-100" : ""}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Status
            </p>
            <div className="flex flex-wrap gap-2">
              {statuses.map((stat) => (
                <Button
                  key={stat}
                  size="sm"
                  variant={filterStatus === stat ? "navy" : "ghost"}
                  onClick={() => setFilterStatus(stat)}
                  className={filterStatus !== stat ? "bg-slate-100" : ""}
                >
                  {stat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={gridRef} className="mt-10 grid gap-6 lg:grid-cols-3">
        {filteredProjects.map((project) => (
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
              gsap.to(card.querySelector(".project-desc"), {
                opacity: 1,
                y: -2,
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
              gsap.to(card.querySelector(".project-desc"), {
                opacity: 0.7,
                y: 0,
                duration: 0.3,
              });
            }}
          >
            <div className="mb-5 h-48 overflow-hidden rounded-2xl bg-slate-100">
              <div className="project-img-inner h-full w-full bg-slate-200 transition-transform duration-700" />
            </div>
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="text-[#064e3b] border-[#064e3b] tracking-[0.2em]"
              >
                {project.category}
              </Badge>
              <p className="text-xs font-medium text-slate-500">
                {project.year}
              </p>
            </div>
            <h3 className="project-title mt-3 text-xl font-semibold text-slate-950 transition-all duration-300">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {project.location} • {project.capacity}
            </p>
            <p className="project-desc mt-4 text-sm leading-relaxed text-slate-700 opacity-70 transition-all">
              {project.description}
            </p>
            <Badge
              variant={project.status === "Aktif" ? "accent" : "gray"}
              className="mt-6"
            >
              {project.status}
            </Badge>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-500">
              Tidak ada proyek yang sesuai dengan filter yang dipilih.
            </p>
          </div>
        )}
      </div>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-950">
          Sebaran Proyek
        </h2>
        <p className="mt-3 text-slate-600">
          Peta sebaran proyek menunjukkan cakupan layanan kami di berbagai
          wilayah Indonesia.
        </p>
        <div className="mt-8 h-72 rounded-3xl bg-slate-200" />
      </section>
    </main>
  );
}
