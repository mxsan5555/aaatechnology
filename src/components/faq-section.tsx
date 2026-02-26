import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team 24/7 through multiple channels: email at support@advanceiot.com, phone at +1 (555) 123-4567, or through our live chat feature on the website. Our dedicated support team typically responds within 2 hours during business hours.",
  },
  {
    question: "What IoT services do you offer?",
    answer:
      "We provide a comprehensive range of IoT services, including device connectivity solutions, data analytics platforms, cloud infrastructure setup, security implementation, custom application development, and ongoing maintenance and support for IoT ecosystems.",
  },
  {
    question: "How secure are your IoT solutions?",
    answer:
      "Security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, secure device authentication, regular security audits, compliance with industry standards (ISO 27001, SOC 2), and continuous monitoring for threats and vulnerabilities.",
  },
  {
    question: "What types of industries do you support?",
    answer:
      "We serve diverse industries including manufacturing, healthcare, agriculture, smart cities, retail, logistics, energy, and automotive. Our solutions are customizable to meet specific industry requirements and regulatory compliance needs.",
  },
  {
    question: "Can your solutions integrate with existing systems?",
    answer:
      "Our IoT solutions are designed with integration in mind. We support APIs, standard protocols, and can work with legacy systems. Our team conducts thorough compatibility assessments and provides seamless integration services to ensure minimal disruption to your existing operations.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-sm text-advance-secondary font-medium">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              We compiled a list of answers to address your most pressing
              questions regarding our IoT consulting services and solutions.
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
