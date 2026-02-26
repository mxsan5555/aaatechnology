import { HeaderUtilityBar } from "../components/header-utility-bar";
import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { CTABanner } from "../components/cta-banner";
import { SolutionsSection } from "../components/solutions-section";
import { SuccessStories } from "../components/success-stories";
import { FAQSection } from "../components/faq-section";
import { NewsletterFooter } from "../components/newsletter-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeaderUtilityBar />
      <Header />
      <HeroSection />
      <ServicesSection />
      <CTABanner />
      <SolutionsSection />
      <SuccessStories />
      <FAQSection />
      <NewsletterFooter />
    </main>
  );
}