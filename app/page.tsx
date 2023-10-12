import BenefitsSection from "@/components/benefitsSection";
import CreditsSection from "@/components/creditsSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import ShowcaseSection from "@/components/showcaseSection";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <HeroSection />
      {/* showcase scction - has animated background, niceee*/}
      <ShowcaseSection />
      {/* benefits section */}
      <BenefitsSection />
      {/* credits section */}
      <CreditsSection />
      <Footer />
    </main>
  );
}
