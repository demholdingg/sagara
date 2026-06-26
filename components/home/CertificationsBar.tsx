import SectionHeading from "@/components/ui/SectionHeading";

const certifications = [
  { name: "ISO 14001", label: "Sistem Manajemen Lingkungan" },
  { name: "ISO 45001", label: "Sistem Manajemen K3" },
  { name: "SMR3 Certified", label: "Sistem Manajemen Risiko" },
  { name: "IUPTL", label: "Izin Usaha Ketenagalistrikan (ESDM)" },
];

export default function CertificationsBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Kepatuhan & Standar"
          title="Sertifikasi & Legalitas"
          centered
          className="mb-16"
        />
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-50 text-[#064e3b] shadow-inner transition group-hover:bg-slate-100 group-hover:scale-105">
                {/* Placeholder Logo */}
                <div className="p-4 text-center">
                  <p className="text-[10px] font-bold uppercase leading-none opacity-40">
                    Logo
                  </p>
                  <p className="mt-1 text-xs font-black">
                    {cert.name.split(" ")[0]}
                  </p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-950">{cert.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {cert.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
