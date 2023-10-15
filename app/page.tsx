import BenefitsSection from "@/components/benefitsSection";
import CreditsSection from "@/components/creditsSection";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import ShowcaseSection from "@/components/showcaseSection";

export default function Home() {
  return (
    <>
      <Header mini />

      <main>
        <HeroSection />
        <ShowcaseSection />
        <BenefitsSection />
        <CreditsSection />
      </main>
    </>
  );
}
