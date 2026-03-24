"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import aaaLogo from "@/assets/aaa-logo.png";

// ─── Nav data ────────────────────────────────────────────────────────────────

const servicesData = [
  {
    title: "IT Systems Audit",
    items: [
      "Management Controls Assessment",
      "IT Infrastructure Review",
      "System Reliability & Integrity Audit",
    ],
  },
  {
    title: "Cyber Security Audit",
    items: [
      "Cyber Security Posture Assessment",
      "Vulnerability & Threat Analysis",
      "Security Controls Evaluation",
    ],
  },
  {
    title: "IT Security Audit",
    items: [
      "Information Security Level Audit",
      "Access Control & Data Protection Review",
      "Security Policy & Procedure Assessment",
    ],
  },
  {
    title: "IT Assurance & Compliance",
    items: [
      "IT Compliance Verification",
      "Regulatory Framework Adherence",
      "Process Assurance & Risk Mitigation",
    ],
  },
  {
    title: "IT Governance",
    items: [
      "IT Risk Management",
      "Performance & Control Frameworks",
      "Board-Level IT Governance Advisory",
    ],
  },
  {
    title: "IS Audit & Certification",
    items: [
      "CERT-In Empanelled Audits",
      "ISO 27001 Compliance Audits",
      "Information Systems Audit (ISA)",
    ],
  },
];

const industriesData = [
  {
    title: "Banking, Financial Services & Insurance",
    items: [
      "Core Banking IT Audit",
      "NBFC & Insurance Compliance Review",
      "Fraud Risk & Financial Systems Audit",
    ],
  },
  {
    title: "Government & Public Sector",
    items: [
      "e-Governance IT Audit",
      "Public Sector Cyber Security Assessment",
      "Regulatory Compliance for PSUs",
    ],
  },
  {
    title: "Healthcare & Pharmaceuticals",
    items: [
      "Hospital IT Systems Audit",
      "Clinical Data Security & Compliance",
      "Pharma IT Governance Review",
    ],
  },
  {
    title: "Manufacturing & Industry",
    items: [
      "OT & SCADA Security Audit",
      "ERP Systems Audit",
      "Industrial Cyber Security Assessment",
    ],
  },
  {
    title: "Telecom & Media",
    items: [
      "Network Infrastructure Security Audit",
      "Telecom Regulatory Compliance",
      "Data Privacy & Protection Review",
    ],
  },
  {
    title: "Retail & E-commerce",
    items: [
      "PCI-DSS Compliance Audit",
      "E-commerce Platform Security Review",
      "Customer Data Protection Audit",
    ],
  },
  {
    title: "IT & IT-Enabled Services",
    items: [
      "ISO 27001 Implementation Audit",
      "SOC & ITES Security Assessment",
      "Third-Party Vendor Risk Review",
    ],
  },
  {
    title: "Energy & Utilities",
    items: [
      "Critical Infrastructure Security Audit",
      "SCADA & ICS Cyber Security Review",
      "Energy Sector Compliance Assessment",
    ],
  },
];

// ─── Shared class tokens ──────────────────────────────────────────────────────

// bg-gray-100 gives a light neutral grey that keeps the logo legible in all modes
const HEADER_BG   = "bg-gray-100 dark:bg-gray-100";
const HEADER_TEXT = "text-slate-700 dark:text-slate-800";
const NAV_HOVER   = "hover:text-red-800 dark:hover:text-red-700 focus-visible:text-red-800";

export function Header() {
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef    = useRef<HTMLDivElement>(null);
  const hoverTimeout   = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close mobile menu + dropdowns on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openDropdown  = (key: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveDropdown(key);
  };
  const closeDropdown = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const toggleDropdown = (key: string) =>
    setActiveDropdown(activeDropdown === key ? null : key);

  const toggleMobileKey = (key: string) =>
    setActiveDropdown(activeDropdown === key ? null : key);

  return (
    <header
      className={`${HEADER_BG} border-b border-slate-200 dark:border-slate-300 shadow-sm sticky top-0 z-50`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <a
            href="#main-content"
            aria-label="AAA Technologies Limited — return to top"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 rounded"
          >
            <img
              src={aaaLogo}
              alt="AAA Technologies Limited"
              className="h-11 w-auto object-contain"
              width={160}
              height={44}
            />
          </a>

          {/* ── Desktop navigation ───────────────────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-1"
            ref={dropdownRef}
            aria-label="Main navigation"
          >
            <a
              href="#main-content"
              aria-current="page"
              className={`px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
            >
              Home
            </a>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("services")}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("services")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
                aria-expanded={activeDropdown === "services"}
                aria-controls="services-dropdown"
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Industries */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("industries")}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("industries")}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
                aria-expanded={activeDropdown === "industries"}
                aria-controls="industries-dropdown"
                aria-haspopup="true"
              >
                Industries
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <a
              href="#about"
              className={`px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
            >
              About
            </a>
            <a
              href="#blog"
              className={`px-3 py-2 text-sm font-medium rounded ${HEADER_TEXT} ${NAV_HOVER} transition-colors`}
            >
              Blog
            </a>
          </nav>

          {/* ── Desktop actions ───────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button className="bg-advance-primary hover:bg-advance-primary/90 text-white">
              Contact Us
            </Button>
          </div>

          {/* ── Mobile toggle ─────────────────────────────────────────────── */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className={`p-2 rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center`}
            >
              {isMenuOpen
                ? <X    className="h-6 w-6" aria-hidden="true" />
                : <Menu className="h-6 w-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile navigation panel ──────────────────────────────────────── */}
        {isMenuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="lg:hidden border-t border-slate-200 dark:border-slate-300 py-4"
          >
            <ul role="list" className="flex flex-col gap-1">

              <li>
                <a
                  href="#main-content"
                  aria-current="page"
                  className={`block px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>

              {/* Mobile — Services accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleMobileKey("mob-services")}
                  aria-expanded={activeDropdown === "mob-services"}
                  aria-controls="mob-services-panel"
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors min-h-[44px]`}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mob-services" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === "mob-services" && (
                  <ul
                    id="mob-services-panel"
                    role="list"
                    className="mt-1 ml-3 border-l-2 border-slate-200 dark:border-slate-300 pl-4 space-y-3 pb-2"
                  >
                    {servicesData.map((service) => (
                      <li key={service.title}>
                        <p className="text-xs font-semibold text-red-700 dark:text-red-700 uppercase tracking-wide mb-1">
                          {service.title}
                        </p>
                        <ul role="list" className="space-y-0.5">
                          {service.items.map((item) => (
                            <li key={item}>
                              <a
                                href="#services"
                                className={`block py-1 text-xs ${HEADER_TEXT} hover:text-red-800 dark:hover:text-red-700 transition-colors`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Mobile — Industries accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => toggleMobileKey("mob-industries")}
                  aria-expanded={activeDropdown === "mob-industries"}
                  aria-controls="mob-industries-panel"
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors min-h-[44px]`}
                >
                  Industries
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "mob-industries" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === "mob-industries" && (
                  <ul
                    id="mob-industries-panel"
                    role="list"
                    className="mt-1 ml-3 border-l-2 border-slate-200 dark:border-slate-300 pl-4 space-y-3 pb-2 max-h-64 overflow-y-auto"
                  >
                    {industriesData.map((industry) => (
                      <li key={industry.title}>
                        <p className="text-xs font-semibold text-green-800 dark:text-green-700 uppercase tracking-wide mb-1">
                          {industry.title}
                        </p>
                        <ul role="list" className="space-y-0.5">
                          {industry.items.map((item) => (
                            <li key={item}>
                              <a
                                href="#industries"
                                className={`block py-1 text-xs ${HEADER_TEXT} hover:text-red-800 dark:hover:text-red-700 transition-colors`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="#about"
                  className={`block px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className={`block px-3 py-2.5 text-sm font-medium rounded ${HEADER_TEXT} hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
              </li>

              <li className="pt-2">
                <Button
                  className="bg-advance-primary hover:bg-advance-primary/90 text-white w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </li>

            </ul>
          </nav>
        )}
      </div>

      {/* ── Services mega-dropdown ─────────────────────────────────────────── */}
      {activeDropdown === "services" && (
        <div
          id="services-dropdown"
          role="region"
          aria-label="Services menu"
          className="absolute left-0 w-full bg-white border-b border-slate-200 shadow-lg z-[60]"
          onMouseEnter={() => openDropdown("services")}
          onMouseLeave={closeDropdown}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
              {servicesData.map((service) => (
                <div key={service.title} className="space-y-2">
                  <h4 className="text-sm font-semibold text-red-700">
                    {service.title}
                  </h4>
                  <ul className="space-y-1" role="list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#services"
                          className="text-sm text-slate-600 hover:text-red-700 transition-colors block py-0.5"
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

      {/* ── Industries mega-dropdown ───────────────────────────────────────── */}
      {activeDropdown === "industries" && (
        <div
          id="industries-dropdown"
          role="region"
          aria-label="Industries menu"
          className="absolute left-0 w-full bg-white border-b border-slate-200 shadow-lg z-[60]"
          onMouseEnter={() => openDropdown("industries")}
          onMouseLeave={closeDropdown}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
              {industriesData.map((industry) => (
                <div key={industry.title} className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-800">
                    {industry.title}
                  </h4>
                  <ul className="space-y-1" role="list">
                    {industry.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#industries"
                          className="text-sm text-slate-600 hover:text-red-700 transition-colors block py-0.5"
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
