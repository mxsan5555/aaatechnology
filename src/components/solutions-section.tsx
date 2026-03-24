"use client";

import {
  ArrowRight,
  Landmark,
  Building2,
  Heart,
  Factory,
  Radio,
  ShoppingCart,
  Laptop,
  Zap,
} from "lucide-react";

const solutions = [
  {
    title: "Banking, Financial Services & Insurance",
    icon: Landmark,
    accent: "primary" as const,
    tag: "BFSI",
    bulletPoints: [
      "Core Banking IT Audit",
      "NBFC & Insurance Compliance Review",
      "Fraud Risk & Financial Systems Audit",
    ],
  },
  {
    title: "Government & Public Sector",
    icon: Building2,
    accent: "secondary" as const,
    tag: "Gov",
    bulletPoints: [
      "e-Governance IT Audit",
      "Public Sector Cyber Security Assessment",
      "Regulatory Compliance for PSUs",
    ],
  },
  {
    title: "Healthcare & Pharmaceuticals",
    icon: Heart,
    accent: "primary" as const,
    tag: "Healthcare",
    bulletPoints: [
      "Hospital IT Systems Audit",
      "Clinical Data Security & Compliance",
      "Pharma IT Governance Review",
    ],
  },
  {
    title: "Manufacturing & Industry",
    icon: Factory,
    accent: "secondary" as const,
    tag: "Manufacturing",
    bulletPoints: [
      "OT & SCADA Security Audit",
      "ERP Systems Audit",
      "Industrial Cyber Security Assessment",
    ],
  },
  {
    title: "Telecom & Media",
    icon: Radio,
    accent: "primary" as const,
    tag: "Telecom",
    bulletPoints: [
      "Network Infrastructure Security Audit",
      "Telecom Regulatory Compliance",
      "Data Privacy & Protection Review",
    ],
  },
  {
    title: "Retail & E-commerce",
    icon: ShoppingCart,
    accent: "secondary" as const,
    tag: "Retail",
    bulletPoints: [
      "PCI-DSS Compliance Audit",
      "E-commerce Platform Security Review",
      "Customer Data Protection Audit",
    ],
  },
  {
    title: "IT & IT-Enabled Services",
    icon: Laptop,
    accent: "primary" as const,
    tag: "IT/ITES",
    bulletPoints: [
      "ISO 27001 Implementation Audit",
      "SOC & ITES Security Assessment",
      "Third-Party Vendor Risk Review",
    ],
  },
  {
    title: "Energy & Utilities",
    icon: Zap,
    accent: "secondary" as const,
    tag: "Energy",
    bulletPoints: [
      "Critical Infrastructure Security Audit",
      "SCADA & ICS Cyber Security Review",
      "Energy Sector Compliance Assessment",
    ],
  },
];

const accentColor = {
  primary: "var(--aaa-primary)",
  secondary: "var(--aaa-secondary)",
};

export function SolutionsSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="py-20 px-4 bg-background"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest text-aaa-secondary"
            aria-hidden="true"
          >
            25+ Sectors
          </span>
          <h2
            id="industries-heading"
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized IT audit and cyber security solutions across 25+ industry
            sectors, tailored to each sector's unique regulatory and compliance
            requirements.
          </p>
        </div>

        {/* Cards grid */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0"
        >
          {solutions.map((solution) => (
            <li key={solution.title}>
              <a
                href="#"
                aria-label={`${solution.title} — IT audit and cyber security services`}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aaa-primary)] focus-visible:ring-offset-2 rounded-xl"
              >
                <article
                  className="relative h-full rounded-xl overflow-hidden
                    bg-white dark:bg-slate-900
                    border border-slate-200 dark:border-slate-700
                    transition-all duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:shadow-brand-md"
                >
                  {/* Top accent strip — visible on hover only */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300
                      bg-slate-200 dark:bg-slate-700 group-hover:h-1"
                    style={{}}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: accentColor[solution.accent] }}
                    aria-hidden="true"
                  />

                  <div className="p-6 flex flex-col h-full">
                    {/* Icon + tag row */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center
                          transition-colors duration-300"
                        style={{
                          background: `color-mix(in srgb, ${accentColor[solution.accent]} 12%, transparent)`,
                        }}
                        aria-hidden="true"
                      >
                        <solution.icon
                          className="h-5 w-5 transition-colors duration-300"
                          style={{ color: accentColor[solution.accent] }}
                          aria-hidden="true"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full
                          text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800"
                        aria-hidden="true"
                      >
                        {solution.tag}
                      </span>
                    </div>

                    {/* Title — dark text on white: >14:1 contrast ✓ WCAG AAA */}
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                      {solution.title}
                    </h3>

                    {/* Bullet list — slate-600 on white: ~6.9:1 ✓ WCAG AA */}
                    <ul role="list" className="space-y-1.5 flex-1">
                      {solution.bulletPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: accentColor[solution.accent] }}
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* CTA link */}
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-1">
                      <span
                        className="text-xs font-medium text-slate-400 dark:text-slate-500
                          group-hover:text-[var(--aaa-primary)] transition-colors duration-200"
                      >
                        View details
                      </span>
                      <ArrowRight
                        className="h-3 w-3 text-slate-400 dark:text-slate-500
                          group-hover:text-[var(--aaa-primary)] group-hover:translate-x-0.5
                          transition-all duration-200"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
