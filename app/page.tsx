import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import BenefitsTable from "@/components/BenefitsTable";
import PainPoints from "@/components/PainPoints";
import Testimonials from "@/components/Testimonials";
import MediaLogos from "@/components/MediaLogos";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <StatsBar />
        <HowItWorks />
        <BenefitsTable />
        <PainPoints />
        <Testimonials />
        <MediaLogos />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
