const stats = [
  { label: "Total Kapasitas Terpasang", value: "14.5 MW" },
  { label: "Proyek Selesai", value: "4" },
  { label: "Tahun Pengalaman", value: "1" },
];

export default function StatsBar() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stats.map((item) => (
        <div key={item.label} className="rounded-3xl bg-slate-100 p-5">
          <p className="text-3xl font-semibold text-[#064e3b]">{item.value}</p>
          <p className="mt-2 text-sm text-slate-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
