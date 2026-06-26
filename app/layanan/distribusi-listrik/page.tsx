import SectionHeading from "@/components/ui/SectionHeading";

export default function DistribusiListrik() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        badge="Distribusi Tenaga Listrik"
        title="Penyaluran tenaga listrik yang stabil dan terkoordinasi."
        description="Kami memastikan distribusi tegangan menengah dan rendah terkelola dengan baik, termasuk koordinasi teknis untuk jaringan terhubung."
        isMainHeading
      />

      <section className="mt-14 space-y-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Layanan Distribusi
          </h2>
          <ul className="mt-6 space-y-4 text-slate-600 list-disc pl-5">
            <li>Distribusi tegangan menengah (TM) dan tegangan rendah (TR).</li>
            <li>Pengelolaan beban untuk efisiensi konsumsi BBM.</li>
            <li>Koordinasi teknis dengan operator jaringan dan PLN.</li>
            <li>
              Pemasangan dan pemeliharaan panel distribusi, trafo, dan kabel.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Pendekatan Keandalan
          </h2>
          <p className="mt-4 text-slate-600">
            Fokus kami adalah memastikan distribusi listrik berjalan tanpa
            gangguan, dengan sistem manajemen beban dan pemantauan jaringan yang
            konsisten.
          </p>
        </div>
      </section>
    </main>
  );
}
