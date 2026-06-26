import HeroSection from "@/components/home/HeroSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import CertificationsBar from "@/components/home/CertificationsBar";
import ClientsBar from "@/components/home/ClientsBar";
import ProjectsPreview from "@/components/home/ProjectsPreview";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero & About Section Wrapper */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <HeroSection />
            <AboutSnippet />
          </div>
        </div>
      </section>

      <ServicesHighlight />
      <CertificationsBar />
      <ClientsBar />
      <ProjectsPreview />
    </main>
  );
}
