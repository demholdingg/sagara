import Link from "next/link";

const services = [
  {
    title: "Pembangunan PLTD",
    description:
      "Perencanaan teknis, pengadaan, konstruksi, dan commissioning untuk solusi listrik yang andal.",
    href: "/layanan/pembangunan-pltd",
  },
  {
    title: "Operasional & Pemeliharaan",
    description:
      "O&M 24/7 dengan pemeliharaan preventif dan respons cepat untuk kinerja stabil.",
    href: "/layanan/operasional-pemeliharaan",
  },
  {
    title: "Distribusi Tenaga Listrik",
    description:
      "Pengelolaan beban dan distribusi tegangan TM/TR untuk penyaluran listrik yang aman.",
    href: "/layanan/distribusi-listrik",
  },
  {
    title: "Perdagangan Besar",
    description:
      "Pengadaan material elektrikal, suku cadang mesin diesel, dan kebutuhan operasional.",
    href: "/layanan/perdagangan-besar",
  },
];

export default function ServicesHighlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#064e3b] hover:shadow-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
              Layanan Utama
            </p>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {service.description}
            </p>
            <span className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition group-hover:text-slate-700">
              Pelajari lebih lanjut →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
