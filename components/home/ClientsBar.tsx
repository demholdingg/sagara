import SectionHeading from "@/components/ui/SectionHeading";

const clients = [
  { name: "PLN", label: "PT PLN (Persero)" },
  { name: "Pertamina", label: "PT Pertamina (Persero)" },
  { name: "ESDM", label: "Kementerian ESDM" },
  { name: "Pelindo", label: "PT Pelabuhan Indonesia" },
  { name: "Antam", label: "PT Aneka Tambang Tbk" },
];

export default function ClientsBar() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Kepercayaan Mitra"
          title="Mitra Strategis & Klien"
          centered
          className="mb-12"
        />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale transition-all lg:gap-20">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center gap-2"
            >
              <div className="flex h-12 items-center justify-center grayscale transition group-hover:grayscale-0">
                <span className="text-xl font-black tracking-tighter text-slate-400 group-hover:text-[#064e3b]">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
