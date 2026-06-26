import SectionHeading from "@/components/ui/SectionHeading";

export default function PerdaganganBesar() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        badge="Perdagangan Besar"
        title="Pengadaan material dan peralatan untuk proyek ketenagalistrikan."
        description="Layanan perdagangan besar kami mendukung kebutuhan listrik industri dengan pasokan material elektrikal, suku cadang, dan peralatan K3."
        isMainHeading
      />

      <section className="mt-14 space-y-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Layanan Pengadaan
          </h2>
          <ul className="mt-6 space-y-4 text-slate-600 list-disc pl-5">
            <li>Material elektrikal dan komponen distribusi.</li>
            <li>Suku cadang mesin diesel untuk genset dan sistem PLTD.</li>
            <li>Peralatan K3 dan perlengkapan operasional lapangan.</li>
            <li>
              Pengadaan profesional dengan kontrol mutu dan pelacakan
              inventaris.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">
            Keunggulan Kami
          </h2>
          <p className="mt-4 text-slate-600">
            Kami menghadirkan solusi bahan baku dan komponen yang tepat waktu,
            akuntabel, dan sesuai dengan kebutuhan operasional proyek
            ketenagalistrikan.
          </p>
        </div>
      </section>
    </main>
  );
}
