"use client";

import {
  MonitorCheck,
  ShieldCheck,
  Lock,
  ClipboardCheck,
  BarChart3,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: MonitorCheck,
    number: "01",
    accent: "primary" as const,
    title: "IT Systems Audit",
    description: "Examination of management controls within IT infrastructure.",
    bullets: [
      "Management Controls Assessment",
      "IT Infrastructure Review",
      "System Reliability & Integrity Audit",
    ],
    href: "/services/it-systems-audit",
  },
  {
    icon: ShieldCheck,
    number: "02",
    accent: "secondary" as const,
    title: "Cyber Security Audit",
    description: "Objective assessment of your organization's cyber security posture.",
    bullets: [
      "Cyber Security Posture Assessment",
      "Vulnerability & Threat Analysis",
      "Security Controls Evaluation",
    ],
    href: "/services/cyber-security-audit",
  },
  {
    icon: Lock,
    number: "03",
    accent: "primary" as const,
    title: "IT Security Audit",
    description: "Comprehensive audit on the level of information security.",
    bullets: [
      "Information Security Level Audit",
      "Access Control & Data Protection Review",
      "Security Policy & Procedure Assessment",
    ],
    href: "/services/it-security-audit",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    accent: "secondary" as const,
    title: "IT Assurance & Compliance",
    description: "Assuring smooth IT procedures and fulfilling compliance requirements.",
    bullets: [
      "IT Compliance Verification",
      "Regulatory Framework Adherence",
      "Process Assurance & Risk Mitigation",
    ],
    href: "/services/it-assurance-compliance",
  },
  {
    icon: BarChart3,
    number: "05",
    accent: "primary" as const,
    title: "IT Governance",
    description: "Emphasizes IT systems, risk management, and performance.",
    bullets: [
      "IT Risk Management Frameworks",
      "Performance & Control Assessment",
      "Board-Level IT Governance Advisory",
    ],
    href: "/services/it-governance",
  },
  {
    icon: BadgeCheck,
    number: "06",
    accent: "secondary" as const,
    title: "IS Audit & Certification",
    description: "Empanelled audits aligned to national and international standards.",
    bullets: [
      "CERT-In Empanelled Audits",
      "ISO 27001 Compliance Audits",
      "Information Systems Audit (ISA)",
    ],
    href: "/services/is-audit-certification",
  },
];

const accentColor = {
  primary: "var(--aaa-primary)",
  secondary: "var(--aaa-secondary)",
};

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 px-4 bg-slate-50 dark:bg-slate-950"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest text-aaa-primary"
            aria-hidden="true"
          >
            What We Do
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Our Expert Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive IT audit and cyber security services delivered by
            India's most trusted independent auditing firm with 22+ years of
            experience.
          </p>
        </div>

        {/* Cards grid — role="list" satisfies WCAG 1.3.1 for styled lists */}
        <ul
          role="list"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0"
        >
          {services.map((service) => (
            <li key={service.number}>
              <a
                href={service.href}
                aria-label={`${service.title} — ${service.description}`}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aaa-primary)] focus-visible:ring-offset-2 rounded-xl"
              >
                <article
                  className="relative h-full rounded-xl overflow-hidden bg-slate-900 dark:bg-slate-800
                    border border-slate-800 dark:border-slate-700
                    transition-all duration-300 ease-out
                    group-hover:-translate-y-1 group-hover:shadow-2xl"
                  style={{ borderTop: `3px solid ${accentColor[service.accent]}` }}
                >
                  {/* Hover gradient overlay — decorative only */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, #fc2b2a 0%, #008253 100%)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 p-7 flex flex-col h-full">
                    {/* Icon + card number */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10"
                        aria-hidden="true"
                      >
                        <service.icon className="h-5 w-5 text-white" aria-hidden="true" strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-5xl font-black text-white/5 select-none leading-none"
                        aria-hidden="true"
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    {/* Short description for SEO + context */}
                    <p className="text-xs text-white/50 group-hover:text-white/70 mb-4 transition-colors">
                      {service.description}
                    </p>

                    {/* Bullet list */}
                    <ul role="list" className="space-y-2 flex-1">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-white/70 group-hover:text-white/90 transition-colors"
                        >
                          <span
                            className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: accentColor[service.accent] }}
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Learn more — visually clear CTA */}
                    <div className="mt-6 flex items-center justify-end gap-1">
                      <span className="text-xs font-medium text-white/40 group-hover:text-white transition-colors">
                        Learn more
                      </span>
                      <ArrowRight
                        className="h-3.5 w-3.5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
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
