import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import PortfolioGallery from "@/components/PortfolioGallery";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import PlatformLinks from "@/components/PlatformLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsStrip />
      <PortfolioGallery />
      <About />
      <Certifications />
      <PlatformLinks />
      <Footer />
    </main>
  );
}
