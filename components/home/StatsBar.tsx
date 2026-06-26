const stats = [
  { label: "Total Kapasitas Terpasang", value: "120 MW" },
  { label: "Proyek Selesai", value: "42+" },
  { label: "Provinsi Terjangkau", value: "12" },
  { label: "Tahun Pengalaman", value: "15" },
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
