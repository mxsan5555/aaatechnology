"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import logo from '../assets/advance-iot-logo.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to prevent flickering
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const servicesData = [
    {
      title: "Digital Experience & Design",
      items: [
        "UI/UX Design & Prototyping",
        "Web & Application Development",
        "Mobile App Engineering",
      ],
    },
    {
      title: "Enterprise Business Solutions",
      items: [
        "ERP & CRM Implementation",
        "Cloud Transformation & Migration",
        "Business Intelligence & Data Analytics",
      ],
    },
    {
      title: "Emerging Technologies",
      items: [
        "Blockchain & Web3 Solutions",
        "AI & Machine Learning Services",
        "IoT & Edge Computing",
      ],
    },
    {
      title: "Content & Digital Marketing",
      items: [
        "Content Strategy & Creation",
        "Digital Marketing & Growth Solutions",
      ],
    },
    {
      title: "Technology Advisory",
      items: [
        "IT Consulting & Strategy",
        "Software Product Engineering",
        "Cloud-Native DevOps & Automation",
      ],
    },
    {
      title: "Cybersecurity & Risk Management",
      items: [
        "Managed Security Services (MSSP)",
        "Identity & Access Management (IAM)",
        "Risk & Compliance Advisory",
      ],
    },
  ];

  const solutionsData = [
    {
      title: "Smart Mobility & Logistics",
      items: [
        "Fleet & Asset Management Platform",
        "Connected Vehicle & Telematics Solutions",
        "Logistics & Supply Chain Optimization",
      ],
    },
    {
      title: "AI-Powered Security & Recognition",
      items: [
        "Facial Recognition & Biometric Authentication",
        "Smart Surveillance & Video Analytics",
      ],
    },
    {
      title: "Hospitality & Customer Experience",
      items: [
        "Hotel & Hospitality Management System (HMS)",
        "Smart Guest Experience Solutions",
      ],
    },
    {
      title: "Enterprise Workforce & Client Solutions",
      items: [
        "Human Capital Management (HCM) Systems",
        "Customer Experience & CRM Platforms",
        "ERP Extensions for HR, Finance & Operations",
      ],
    },
    {
      title: "Healthcare & Life Sciences",
      items: [
        "Hospital Information Management System (HIMS)",
        "Telemedicine & Remote Patient Monitoring",
        "Healthcare Compliance & Data Security",
      ],
    },
    {
      title: "Education & EdTech",
      items: [
        "Smart Campus & University Management",
        "Virtual Learning & Assessment Platforms",
      ],
    },
    {
      title: "Financial & Banking Solutions",
      items: [
        "Loan Origination & Automation System",
        "Digital Banking & FinTech Platforms",
        "Fraud Detection & Risk Management",
      ],
    },
    {
      title: "Geospatial & Location Intelligence",
      items: ["GIS & Spatial Analytics", "GPS & Asset Tracking Solutions"],
    },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-advance-primary">
              <a href="#home"> <img src={logo} alt="Advance IOT Technical Solutions LLC-SPC" /> </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            ref={dropdownRef}
          >
            <a
              href="#home"
              className="text-foreground hover:text-advance-primary transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center gap-1 text-foreground hover:text-advance-primary transition-colors cursor-pointer"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("solutions")}
                className="flex items-center gap-1 text-foreground hover:text-advance-primary transition-colors cursor-pointer"
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <a
              href="#about"
              className="text-foreground hover:text-advance-primary transition-colors"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-foreground hover:text-advance-primary transition-colors"
            >
              Blog
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-advance-primary hover:bg-advance-primary/90 text-white">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-advance-primary transition-colors"
              >
                Home
              </a>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "mobile-services"
                        ? null
                        : "mobile-services"
                    )
                  }
                  className="flex items-center justify-between w-full text-foreground hover:text-advance-primary transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-services" && (
                  <div className="mt-2 ml-4 space-y-3">
                    {servicesData.map((service, index) => (
                      <div key={index}>
                        <h5 className="font-medium text-advance-primary text-sm">
                          {service.title}
                        </h5>
                        <ul className="mt-1 space-y-1">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-xs text-muted-foreground hover:text-advance-primary transition-colors block py-1 ml-2"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Solutions */}
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "mobile-solutions"
                        ? null
                        : "mobile-solutions"
                    )
                  }
                  className="flex items-center justify-between w-full text-foreground hover:text-advance-primary transition-colors"
                >
                  Solutions
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-solutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-solutions" && (
                  <div className="mt-2 ml-4 space-y-3 max-h-64 overflow-y-auto">
                    {solutionsData.map((solution, index) => (
                      <div key={index}>
                        <h5 className="font-medium text-advance-primary text-sm">
                          {solution.title}
                        </h5>
                        <ul className="mt-1 space-y-1">
                          {solution.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href="#"
                                className="text-xs text-muted-foreground hover:text-advance-primary transition-colors block py-1 ml-2"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#products"
                className="text-foreground hover:text-advance-primary transition-colors"
              >
                Products
              </a>
              <a
                href="#blog"
                className="text-foreground hover:text-advance-primary transition-colors"
              >
                Blog
              </a>
              <Button className="bg-advance-primary hover:bg-advance-primary/90 text-white w-full">
                Book a Demo
              </Button>
            </div>
          </nav>
        )}
      </div>

      {/* Services Dropdown */}
      {activeDropdown === "services" && (
        <div
          className="absolute left-0 w-full bg-background border-b border-border shadow-lg z-[60]"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {servicesData.map((service, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-advance-primary text-base">
                    {service.title}
                  </h4>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-advance-primary transition-colors block py-1"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Solutions Dropdown */}
      {activeDropdown === "solutions" && (
        <div
          className="absolute left-0 w-full bg-background border-b border-border shadow-lg z-[60]"
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {solutionsData.map((solution, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-advance-primary text-base">
                    {solution.title}
                  </h4>
                  <ul className="space-y-2">
                    {solution.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-advance-primary transition-colors block py-1"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
