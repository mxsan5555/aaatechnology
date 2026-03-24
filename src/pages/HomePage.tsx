import { HeaderUtilityBar } from "../components/header-utility-bar";
import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { CTABanner } from "../components/cta-banner";
import { SolutionsSection } from "../components/solutions-section";
import { SuccessStories } from "../components/success-stories";
import { FAQSection } from "../components/faq-section";
import { NewsletterFooter } from "../components/newsletter-footer";
import { BackToTop } from "../components/back-to-top";

export default function HomePage() {
  return (
    <>
      {/* WCAG 2.4.1 — Skip navigation link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <HeaderUtilityBar />
      <Header />

      <main id="main-content" tabIndex={-1} className="min-h-screen outline-none">
        <HeroSection />
        <ServicesSection />
        <CTABanner />
        <SolutionsSection />
        <SuccessStories />
        <FAQSection />
      </main>

      <NewsletterFooter />
      <BackToTop />
    </>
  );
}
