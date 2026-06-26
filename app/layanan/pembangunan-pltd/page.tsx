import SectionHeading from "@/components/ui/SectionHeading";

export default function PembangunanPltd() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        badge="Pembangunan PLTD"
        title="Pembangunan unit PLTD yang efisien dan terstandarisasi."
        description="Kami mengelola seluruh siklus pembangunan unit PLTD, mulai dari studi kelayakan teknis hingga commissioning dan serah terima operasional."
        isMainHeading
      />

      <section className="mt-14 space-y-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Cakupan Teknis
          </h2>
          <ul className="mt-6 space-y-4 text-slate-600 list-disc pl-5">
            <li>
              Rentang kapasitas: <strong>500 kW hingga 10 MW</strong> per unit
              (atau sesuai kebutuhan proyek).
            </li>
            <li>
              Mode operasi: <em>Isolated grid</em> (stand-alone) dan{" "}
              <em>grid-connected</em> (paralel PLN).
            </li>
            <li>
              Merek engine yang dikerjakan: Caterpillar, MAN, Wärtsilä, Cummins,
              Mitsubishi (sesuai spesifikasi klien).
            </li>
            <li>Sistem bahan bakar: Solar/HSD, sesuai standar Pertamina.</li>
            <li>
              Standar konstruksi mengacu pada: PUIL 2011, SNI ketenagalistrikan,
              dan regulasi Kementerian ESDM.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Tahapan Proyek
          </h2>
          <ol className="mt-6 space-y-4 text-slate-600 list-decimal pl-5">
            <li>Studi Kelayakan & Perencanaan Teknis</li>
            <li>Pengadaan Peralatan & Material</li>
            <li>Konstruksi Sipil & Instalasi M/E</li>
            <li>Pengujian (Testing & Commissioning)</li>
            <li>Serah Terima & Dukungan Pasca-Konstruksi</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
