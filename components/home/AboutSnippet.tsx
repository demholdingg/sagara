import StatsBar from "./StatsBar";

export default function AboutSnippet() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/50">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
          Profil Perusahaan
        </p>
        <p className="text-slate-700">
          PT. Sagara Yasa Ananta adalah perusahaan nasional yang mengkhususkan
          diri dalam pembangunan dan pengelolaan PLTD. Kami beroperasi dengan
          standar teknis internasional, tata kelola transparan, dan komitmen
          penuh terhadap keselamatan kerja serta lingkungan.
        </p>

        {/* Memasukkan StatsBar di dalam box Profil */}
        <StatsBar />
      </div>
    </div>
  );
}
