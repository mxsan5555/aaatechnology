import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Truck,
  Shield,
  Hotel,
  Users,
  Heart,
  GraduationCap,
  CreditCard,
  MapPin,
} from "lucide-react";

const solutions = [
  {
    title: "Smart Mobility & Logistics",
    icon: Truck,
    bulletPoints: [
      "Fleet & Asset Management Platform",
      "Connected Vehicle & Telematics Solutions",
      "Logistics & Supply Chain Optimization",
    ],
  },
  {
    title: "AI-Powered Security & Recognition",
    icon: Shield,
    bulletPoints: [
      "Facial Recognition & Access Control",
      "Intelligent Video Analytics",
      "Threat Detection & Response Systems",
    ],
  },
  {
    title: "Hospitality & Customer Experience",
    icon: Hotel,
    bulletPoints: [
      "Smart Hotel Management Systems",
      "Guest Experience Optimization",
      "Automated Service Solutions",
    ],
  },
  {
    title: "Enterprise Workforce & Client Solutions",
    icon: Users,
    bulletPoints: [
      "Employee Productivity Analytics",
      "Client Relationship Management",
      "Workforce Optimization Tools",
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    icon: Heart,
    bulletPoints: [
      "Patient Monitoring Systems",
      "Medical Device Integration",
      "Healthcare Data Analytics",
    ],
  },
  {
    title: "Education & EdTech",
    icon: GraduationCap,
    bulletPoints: [
      "Smart Classroom Solutions",
      "Student Performance Analytics",
      "Educational Resource Management",
    ],
  },
  {
    title: "Financial & Banking Solutions",
    icon: CreditCard,
    bulletPoints: [
      "Digital Payment Systems",
      "Risk Management Analytics",
      "Customer Financial Insights",
    ],
  },
  {
    title: "Geospatial & Location Intelligence",
    icon: MapPin,
    bulletPoints: [
      "Location-Based Analytics",
      "Geographic Information Systems",
      "Spatial Data Visualization",
    ],
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Our Comprehensive Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            End-to-end solutions designed to accelerate your digital
            transformation and drive business innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <a key={index} href="#" className="group block">
              <Card className="relative overflow-hidden transition-all duration-500 border-border cursor-pointer h-full min-h-[280px] hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-advance-primary" />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                  style={{
                    background:
                      "linear-gradient(145deg, #00509d 0%, #fdc500 100%)",
                  }}
                />

                <CardContent className="relative z-30 p-12 flex flex-col h-full">
                  <div className="flex justify-start mb-6">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <solution.icon
                        className="h-6 w-6 text-white stroke-1"
                        strokeWidth={1}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white group-hover:text-advance-secondary transition-colors duration-300 text-balance leading-tight">
                      {solution.title}
                    </h3>
                  </div>

                  <div className="flex-1 mb-6">
                    <ul className="space-y-2 text-sm text-gray-300">
                      {solution.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-white mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-pretty">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end w-full">
                    <ArrowRight className="h-5 w-5 text-white group-hover:text-advance-secondary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
