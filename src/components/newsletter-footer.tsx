import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const footerLinks = {
  Company: ["About Us", "Careers", "News & Updates", "Contact"],
  Services: [
    "Digital Experience & Design",
    "Enterprise Business Solutions",
    "Emerging Technologies",
    "Content & Digital Marketing",
    "Technology Advisory",
    "Cybersecurity & Risk Management",
  ],
  Solution: [
    "Smart Mobility & Logistics",
    "AI-Powered Security & Recognition",
    "Hospitality & Customer Experience",
    "Enterprise Workforce & Client Solutions",
    "Healthcare & Life SciencesD",
    "Education & EdTech",
    "Financial & Banking Solutions",
    "Geospatial & Location Intelligence",
  ],
};

export function NewsletterFooter() {
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
          const yPos = -(scrolled - elementTop) * 0.3;
          element.style.backgroundPosition = `center ${yPos}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section with Parallax */}
      <div
        ref={parallaxRef}
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/banner-7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-balance text-white">
                Join our newsletter to keep up to date with us!
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <div className="relative flex-1">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter your email"
                  className="pl-10"
                  type="email"
                />
              </div>
              <Button className="bg-advance-secondary hover:bg-advance-secondary/90 text-black px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Separator />

      {/* Footer Links */}
      <div className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-advance-primary">
                Advance IOT Technical Solutions LLC-SPC
              </div>
              <p className="text-muted-foreground text-pretty">
                Transforming businesses with innovative IoT solutions and expert
                consulting services.
              </p>
              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-advance-primary" />
                  <a 
                    href="mailto:info@advanceiot.com" 
                    className="hover:text-advance-primary transition-colors"
                  >
                    info@advanceiot.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-advance-primary" />
                  <a 
                    href="tel:+15551234567" 
                    className="hover:text-advance-primary transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-advance-primary mt-0.5" />
                  <div className="flex-1">
                    <address className="not-italic hover:text-advance-primary transition-colors">
                      123 Business District<br />
                      Tech City, TC 12345<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-semibold text-foreground">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-advance-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Copyright */}
      <div className="py-6 px-4 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Advance IOT Technical Solutions LLC-SPC. All rights
              reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-advance-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-advance-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-advance-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
