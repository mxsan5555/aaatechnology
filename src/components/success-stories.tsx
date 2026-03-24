import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    metric: "22+",
    metricLabel: "Years of independent IT audit expertise",
    quote:
      "AAA Technologies has been our trusted IT audit partner for years. Their CERT-In empanelled team brings unmatched depth in cyber security auditing. Their assessments have helped us significantly strengthen our information security posture.",
    author: "Anjay Agarwal",
    role: "Chairman & Managing Director, AAA Technologies Limited",
    avatar: "",
    size: "large",
  },
  {
    metric: "25+",
    metricLabel: "Industry sectors served across India",
    quote:
      "Their structured IT governance framework and compliance advisory helped us align with regulatory requirements seamlessly. The team's knowledge of industry-specific compliance is exceptional.",
    author: "Senior IT Head",
    role: "Leading Public Sector Bank, Mumbai",
    avatar: "",
    size: "medium",
  },
  {
    metric: "1000+",
    metricLabel: "Cumulative man-years of audit experience",
    quote:
      "The cyber security audit conducted by AAA Technologies uncovered critical vulnerabilities we had overlooked. Their detailed reporting and remediation roadmap gave us the clarity we needed.",
    author: "CISO",
    role: "Major Healthcare Enterprise, India",
    avatar: "",
    size: "medium",
  },
  {
    metric: "NSE & BSE",
    metricLabel: "Listed — India's only listed IT audit firm",
    quote:
      "AAA Technologies is a pioneer in the IT audit space. Being the first and only listed company exclusively focused on IT & Cyber Security Audit speaks volumes about their credibility and institutional trust.",
    author: "IT Governance Expert",
    role: "Fortune 500 Manufacturing Company",
    avatar: "",
    size: "dark",
  },
];

export function SuccessStories() {
  return (
    <section id="success-stories" aria-labelledby="stories-heading" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-advance-secondary" aria-hidden="true">
            Client success stories
          </span>
          <h2 id="stories-heading" className="text-3xl md:text-4xl font-bold text-balance">
            Trusted by enterprises across India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how organizations across banking, healthcare, manufacturing, and
            government sectors strengthen their IT security with AAA Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left column - Single large card */}
          <Card className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 border-border">
            <CardContent className="p-8 space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-advance-primary">
                    {testimonials[0].metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[0].metricLabel}
                  </div>
                </div>

                <div className="space-y-4">
                  <Quote className="h-6 w-6 text-advance-secondary" aria-hidden="true" />
                  <blockquote className="text-muted-foreground text-pretty leading-relaxed">
                    "{testimonials[0].quote}"
                  </blockquote>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={testimonials[0].avatar || "/placeholder.svg"}
                    alt={testimonials[0].author}
                  />
                  <AvatarFallback>
                    {testimonials[0].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonials[0].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[0].role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right column - Two rows */}
          <div className="space-y-6">
            {/* First row - Full width card */}
            <Card className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-advance-primary">
                      {testimonials[1].metric}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[1].metricLabel}
                    </div>
                  </div>
                  <Quote className="h-5 w-5 text-advance-secondary flex-shrink-0" aria-hidden="true" />
                </div>

                <blockquote className="text-muted-foreground text-pretty leading-relaxed text-sm">
                  "{testimonials[1].quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={testimonials[1].avatar || "/placeholder.svg"}
                      alt={testimonials[1].author}
                    />
                    <AvatarFallback className="text-xs">
                      {testimonials[1].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {testimonials[1].author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonials[1].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second row - Two columns with cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Left card in second row */}
              <Card className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-4">
                    <Quote className="h-5 w-5 text-advance-secondary" />
                    <blockquote className="text-muted-foreground text-pretty leading-relaxed text-sm">
                      "{testimonials[2].quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={testimonials[2].avatar || "/placeholder.svg"}
                        alt={testimonials[2].author}
                      />
                      <AvatarFallback className="text-xs">
                        {testimonials[2].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {testimonials[2].author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonials[2].role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right card in second row - Dark themed */}
              <Card className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 bg-foreground text-background border-foreground">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-4">
                    <Quote className="h-5 w-5 text-advance-secondary" />
                    <blockquote className="text-background/80 text-pretty leading-relaxed text-sm">
                      "{testimonials[3].quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={testimonials[3].avatar || "/placeholder.svg"}
                        alt={testimonials[3].author}
                      />
                      <AvatarFallback className="text-xs bg-background text-foreground">
                        {testimonials[3].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-background text-sm">
                        {testimonials[3].author}
                      </div>
                      <div className="text-xs text-background/60">
                        {testimonials[3].role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
