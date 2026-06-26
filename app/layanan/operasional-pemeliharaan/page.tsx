import SectionHeading from "@/components/ui/SectionHeading";

export default function OperasionalPemeliharaan() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        badge="Operasional & Pemeliharaan"
        title="Pengelolaan PLTD 24/7 untuk stabilitas operasi jangka panjang."
        description="Layanan full O&M kami mencakup pemantauan mesin, pemeliharaan preventif, respons korektif, dan pelaporan kinerja berkala."
        isMainHeading
      />

      <section className="mt-14 space-y-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Lingkup Layanan
          </h2>
          <ul className="mt-6 space-y-4 text-slate-600 list-disc pl-5">
            <li>
              Pemeliharaan preventif harian, mingguan, bulanan, dan tahunan.
            </li>
            <li>
              Pemantauan parameter mesin seperti suhu, tekanan oli, dan konsumsi
              bahan bakar.
            </li>
            <li>Penanganan gangguan dan perbaikan darurat.</li>
            <li>Pengelolaan suku cadang dan stok oli/filter.</li>
            <li>Pelaporan operasional bulanan kepada klien.</li>
            <li>Kepatuhan K3 berdasarkan ISO 45001.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">SLA Tipikal</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
              <p className="text-xl font-semibold text-slate-950">
                Uptime Target
              </p>
              <p className="mt-3 text-3xl font-bold text-[#064e3b]">≥ 95%</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
              <p className="text-xl font-semibold text-slate-950">
                Waktu Respons
              </p>
              <p className="mt-3 text-lg font-medium text-slate-700">
                ≤ 2 jam untuk lokasi terjangkau
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
