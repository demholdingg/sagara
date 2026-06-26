export default function Kontak() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-6">
        <p className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-white">
          Kontak
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Konsultasikan kebutuhan energi dan proyek Anda.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          Hubungi kami untuk diskusi teknis, penawaran proyek, atau permintaan
          informasi terkait layanan PLTD dan perdagangan besar.
        </p>
      </div>

      <section className="mt-14 rounded-3xl bg-white p-10 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">
                Alamat Kantor
              </h2>
              <p className="mt-3 text-slate-600">Jakarta Selatan, Indonesia</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Email</h2>
              <p className="mt-3 text-slate-600">info@sagarayasa.co.id</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Telepon</h2>
              <p className="mt-3 text-slate-600">+62 21 5555 1234</p>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900">
                Nama
              </label>
              <input
                type="text"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900">
                Email
              </label>
              <input
                type="email"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
                placeholder="Alamat email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900">
                Pesan
              </label>
              <textarea
                rows={5}
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
                placeholder="Tuliskan kebutuhan atau pertanyaan Anda"
              />
            </div>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
