import SectionHeading from "@/components/ui/SectionHeading";

export default function TataKelola() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        badge="Tata Kelola"
        title="Good Corporate Governance dan K3 dalam setiap operasi."
        description="PT. Sagara Yasa Ananta menerapkan GCG yang kuat dan sistem K3 bersertifikat untuk memastikan operasi berlangsung aman, transparan, dan bertanggung jawab."
        isMainHeading
      />

      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Tata Kelola Perusahaan
          </h2>
          <p className="mt-4 text-slate-600">
            Kami mengelola prosedur operasional dan pengadaan melalui sistem
            yang terdokumentasi, dapat diaudit, dan menjunjung akuntabilitas.
          </p>
          <ul className="mt-6 space-y-3 text-slate-600 list-disc pl-5">
            <li>Transparansi pelaporan.</li>
            <li>Akuntabilitas manajemen.</li>
            <li>Pengendalian internal terstruktur.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Keselamatan & Kesehatan Kerja
          </h2>
          <p className="mt-4 text-slate-600">
            Sistem manajemen K3 kami tersertifikasi ISO 45001, dengan fokus pada
            pelatihan, inspeksi rutin, dan pelaporan insiden.
          </p>
          <ul className="mt-6 space-y-3 text-slate-600 list-disc pl-5">
            <li>
              Program pelatihan K3 wajib bagi seluruh teknisi lapangan secara
              berkala.
            </li>
            <li>Inspeksi keselamatan rutin di area pembangkit.</li>
            <li>
              Prosedur Kerja Aman (JSA — Job Safety Analysis) untuk setiap
              pekerjaan berisiko tinggi.
            </li>
            <li>APD standar operasional.</li>
            <li className="font-semibold text-[#064e3b]">
              Target: Zero Accident dalam setiap proyek.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Tanggung Jawab Lingkungan
          </h2>
          <p className="mt-4 text-slate-600">
            Kami berkomitmen meminimalkan dampak melalui sistem manajemen
            lingkungan <strong>ISO 14001</strong>:
          </p>
          <ul className="mt-6 space-y-3 text-slate-600 list-disc pl-5">
            <li>Pengelolaan emisi mesin sesuai baku mutu lingkungan KLHK.</li>
            <li>
              Penanganan dan pembuangan limbah B3 (oli bekas, filter) sesuai
              regulasi.
            </li>
            <li>
              Efisiensi konsumsi bahan bakar melalui optimasi beban operasional.
            </li>
            <li>
              Pemantauan kualitas udara dan kebisingan di sekitar area
              pembangkit.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Perizinan & Regulasi
          </h2>
          <p className="mt-4 text-slate-600">
            Seluruh kegiatan usaha dilakukan dalam kerangka hukum dan perizinan
            yang lengkap:
          </p>
          <ul className="mt-6 space-y-3 text-slate-600 list-disc pl-5">
            <li>
              <strong>IUPTL</strong> (Izin Usaha Penyediaan Tenaga Listrik) —
              Kementerian ESDM RI.
            </li>
            <li>
              <strong>SBUJK Ketenagalistrikan</strong> — Sertifikat Badan Usaha
              Jasa Konstruksi.
            </li>
            <li>NIB (Nomor Induk Berusaha) yang aktif dan terdaftar di OSS.</li>
            <li>Akta Pendirian & Perubahan yang telah disahkan Kemenkumham.</li>
            <li>NPWP Perusahaan aktif dan patuh pajak.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
