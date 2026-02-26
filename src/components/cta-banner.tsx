import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";

export function CTABanner() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const element = parallaxRef.current;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrolled;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Only apply parallax if element is in viewport
        if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
          const yPos = -(scrolled - elementTop) * 0.5;
          element.style.backgroundPosition = `center ${yPos}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="py-20 px-4 bg-advance-primary text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/banner-4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Build smart, learn fast, win big and stay in control of your AI
              with governance.
            </h2>
            <p className="text-lg text-white/90 text-pretty">
              Embark on a transformative journey with us as we guide you to
              unlock your inherent potential, paving the way for empowered
              success and sustainable growth.
            </p>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="ghost"
                className="text-white border-white hover:bg-white hover:text-advance-primary"
              >
                <Play className="h-4 w-4 mr-2" />
                Know More
              </Button>
              <Button className="bg-advance-secondary hover:bg-advance-secondary/90 text-black">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
