import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, MapPin } from "lucide-react";
import aaaLogo from "@/assets/aaa-logo.png";
import { useEffect, useRef } from "react";

const footerLinks = {
  Company: ["About Us", "Leadership", "Awards & Recognition", "Investor Relations", "Contact"],
  Services: [
    "IT Systems Audit",
    "Cyber Security Audit",
    "IT Security Audit",
    "IT Assurance & Compliance",
    "IT Governance",
    "IS Audit & Certification",
  ],
  Industries: [
    "Banking & Financial Services",
    "Government & Public Sector",
    "Healthcare & Pharmaceuticals",
    "Manufacturing & Industry",
    "Telecom & Media",
    "Retail & E-commerce",
    "IT & IT-Enabled Services",
    "Energy & Utilities",
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
    <footer className="bg-background border-t border-border" role="contentinfo" aria-label="Site footer">
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
            <form
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
              aria-label="Newsletter subscription"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="newsletter-email"
                  name="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-advance-secondary hover:bg-advance-secondary/90 text-white px-8"
              >
                Subscribe
              </Button>
            </form>
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
              <img
                src={aaaLogo}
                alt="AAA Technologies Limited"
                className="h-10 w-auto object-contain"
              />
              <p className="text-muted-foreground text-pretty">
                India's 1st and only listed company focused exclusively on
                Information Technology & Cyber Security Audit. CERT-In
                empanelled since 2005.
              </p>
              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-advance-primary" aria-hidden="true" />
                  <a
                    href="mailto:info@aaatechnologies.co.in"
                    className="hover:text-advance-primary transition-colors"
                  >
                    info@aaatechnologies.co.in
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-advance-primary" aria-hidden="true" />
                  <a
                    href="tel:02228573815"
                    className="hover:text-advance-primary transition-colors"
                  >
                    022-28573815 / 16
                  </a>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-advance-primary mt-0.5" aria-hidden="true" />
                  <div className="flex-1">
                    <address className="not-italic hover:text-advance-primary transition-colors">
                      278-280, F Wing, Solaris 1,<br />
                      Saki Vihar Road, Powai,<br />
                      Mumbai 400072, India
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
              © 2026 AAA Technologies Limited. All rights reserved.
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
