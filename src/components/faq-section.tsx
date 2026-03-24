import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an IT Systems Audit?",
    answer:
      "An IT Systems Audit is an examination of the management controls within an IT infrastructure. It evaluates whether your IT systems safeguard assets, maintain data integrity, and operate effectively to achieve organizational goals. AAA Technologies conducts comprehensive IT Systems Audits aligned with international standards.",
  },
  {
    question: "Why does my organization need a Cyber Security Audit?",
    answer:
      "A Cyber Security Audit provides management with an objective assessment of your organization's cyber security posture. It identifies vulnerabilities, evaluates existing controls, and provides actionable recommendations to protect against threats. With cyberattacks increasing in frequency and sophistication, regular audits are essential for any organization.",
  },
  {
    question: "Is AAA Technologies CERT-In empanelled?",
    answer:
      "Yes. AAA Technologies has been empanelled with CERT-In (Indian Computer Emergency Response Team) since 2005, making us one of India's most experienced and credentialed cyber security audit firms. This empanelment affirms our expertise and adherence to national cyber security standards.",
  },
  {
    question: "What certifications does AAA Technologies hold?",
    answer:
      "AAA Technologies is certified under ISO 9001:2015 (Quality Management) and ISO 27001:2013 (Information Security Management). We are also NSE and BSE Main Board listed — the first and only company in India listed exclusively for IT & Cyber Security Audit services.",
  },
  {
    question: "How can I contact AAA Technologies?",
    answer:
      "You can reach us by phone at 022-28573815 / 16, or by email at info@aaatechnologies.co.in. Our office is located at 278-280, F Wing, Solaris 1, Saki Vihar Road, Opp. L&T Gate No.6, Powai, Andheri East, Mumbai 400072, India.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-advance-secondary" aria-hidden="true">
              FAQ
            </span>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Answers to the most common questions about our IT audit, cyber
              security, and compliance services.
            </p>
          </div>

          {/* Right Content - FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-advance-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-pretty leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
