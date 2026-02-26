import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Building2,
  Cpu,
  Megaphone,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import Link from "./Link";

const services = [
  {
    icon: Palette,
    title: "Digital Experience & Design",
    bullets: [
      "UI/UX Design & Prototyping",
      "Web & Application Development",
      "Mobile App Engineering",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Business Solutions",
    bullets: [
      "ERP & CRM Implementation",
      "Cloud Transformation & Migration",
      "Business Intelligence & Data Analytics",
    ],
  },
  {
    icon: Cpu,
    title: "Emerging Technologies",
    bullets: [
      "Blockchain & Web3 Solutions",
      "AI & Machine Learning Services",
      "IoT & Edge Computing",
    ],
  },
  {
    icon: Megaphone,
    title: "Content & Digital Marketing",
    bullets: [
      "Content Strategy & Creation",
      "Digital Marketing & Growth Solutions",
    ],
  },
  {
    icon: Users,
    title: "Technology Advisory",
    bullets: [
      "IT Consulting & Strategy",
      "Software Product Engineering",
      "Cloud-Native DevOps & Automation",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Risk Management",
    bullets: [
      "Managed Security Services (MSSP)",
      "Identity & Access Management (IAM)",
      "Risk & Compliance Advisory",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Our Expert Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Comprehensive IT consulting services tailored to transform your
            business with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/&/g, "and")}`}
              className="block group"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-black text-white h-full relative overflow-hidden">


                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  style={{
                    background: "linear-gradient(145deg, #00509d, #fdc500)",
                  }}
                />
                <CardContent className="p-12 space-y-6 flex flex-col h-full relative z-10">
                  <div className="flex justify-start">
                    <service.icon className="h-8 w-8 text-white stroke-1 transition-colors duration-300" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-advance-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-2">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex items-start gap-2 text-sm text-white/90 group-hover:text-white transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-advance-secondary mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <ArrowRight className="h-5 w-5 text-white stroke-1 group-hover:text-advance-secondary group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
