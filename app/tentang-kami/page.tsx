import SectionHeading from "@/components/ui/SectionHeading";

export default function TentangKami() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        badge="Tentang Kami"
        title="Menjadi Mitra Ketahanan Listrik yang Andal dan Bertanggung Jawab."
        description="PT. Sagara Yasa Ananta adalah perusahaan nasional yang bergerak di bidang
                    pembangunan dan operasional Pembangkit Listrik Tenaga Diesel (PLTD),
                    pembangkitan serta distribusi tenaga listrik, dan perdagangan besar berbagai jenis
                    barang. Perusahaan hadir untuk menjawab kebutuhan energi yang andal, efisien,
                    dan berkelanjutan, khususnya di wilayah dengan keterbatasan infrastruktur
                    kelistrikan.

                    Dengan pendekatan profesional, kepatuhan terhadap regulasi, dan orientasi pada
                    keberlangsungan jangka panjang, PT. Sagara Yasa Ananta memposisikan diri
                    sebagai mitra strategis bagi pemerintah, BUMN, maupun sektor swasta."
        isMainHeading
      />

      <section className="mt-16 grid gap-10 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Visi</h2>
          <p className="mt-4 text-slate-600">
            Menjadi perusahaan nasional yang unggul di bidang energi dan
            perdagangan melalui penyediaan solusi ketenagalistrikan yang andal,
            efisien, dan berkelanjutan. Berperan aktif dalam mendukung
            pembangunan infrastruktur energi nasional serta pertumbuhan ekonomi
            jangka panjang Indonesia.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Misi</h2>
          <ul className="mt-4 space-y-3 text-slate-600 list-disc pl-5">
            <li>
              Menyediakan layanan pembangunan dan operasional Pembangkit Listrik
              Tenaga Diesel (PLTD) yang memenuhi standar teknis, keselamatan,
              dan lingkungan secara konsisten.
            </li>
            <li>
              Menghasilkan serta mendistribusikan tenaga listrik secara efisien,
              stabil, dan berkelanjutan untuk mendukung aktivitas industri,
              komersial, dan sosial.
            </li>
            <li>
              Menjalankan kegiatan perdagangan besar secara profesional,
              transparan, dan kompetitif guna memberikan nilai tambah bagi mitra
              usaha.
            </li>
            <li>
              Membangun kemitraan strategis jangka panjang dengan mengedepankan
              integritas, profesionalisme, dan keunggulan operasional.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">
            Nilai Perusahaan
          </h2>
          <dl className="mt-4 space-y-4 text-slate-600">
            <div>
              <dt className="font-semibold text-slate-900">Integritas</dt>
              <dd>
                PT. Sagara Yasa Ananta menjalankan seluruh kegiatan usaha secara
                jujur, transparan, dan patuh terhadap peraturan yang berlaku.
                Integritas menjadi dasar dalam setiap pengambilan keputusan
                serta dalam membangun kepercayaan dengan klien, mitra, dan
                pemangku kepentingan.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">
                Keandalan Operasional
              </dt>
              <dd>
                Perusahaan berkomitmen menjaga kontinuitas operasional dan
                keandalan sistem kelistrikan melalui perencanaan yang matang,
                pengelolaan risiko yang terukur, serta pemeliharaan yang
                konsisten. Keandalan menjadi kunci dalam menjamin kualitas
                layanan dan keberlangsungan proyek.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Profesionalisme</dt>
              <dd>
                Setiap aktivitas perusahaan dijalankan oleh sumber daya manusia
                yang kompeten, disiplin, dan bertanggung jawab. Profesionalisme
                tercermin dalam standar kerja, komunikasi, serta komitmen
                terhadap kualitas dan hasil yang dapat dipertanggungjawabkan.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Keberlanjutan</dt>
              <dd>
                PT. Sagara Yasa Ananta mengedepankan pertumbuhan usaha jangka
                panjang dengan memperhatikan aspek lingkungan, keselamatan, dan
                efisiensi sumber daya. Nilai ini menjadi landasan dalam
                menciptakan keseimbangan antara kinerja bisnis dan tanggung
                jawab sosial.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
