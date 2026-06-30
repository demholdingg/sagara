import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <div className="space-y-8">
      <SectionHeading
        badge="Energi Diesel yang Andal"
        title="Energi yang Andal. Dikelola dengan Tanggung Jawab."
        description="PT. Sagara Yasa Ananta menyediakan solusi pembangunan, operasional, dan distribusi Pembangkit Listrik Tenaga Diesel (PLTD) yang efisien, terstandarisasi, dan berkelanjutan — untuk kebutuhan industri, daerah terpencil, dan infrastruktur nasional."
        isMainHeading
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button className="hover:bg-white hover:text-[#064e3b]" href="/tentang-kami">Tentang Kami</Button>
        <Button href="/proyek" variant="secondary">
          Pengalaman Proyek
        </Button>
      </div>
    </div>
  );
}
