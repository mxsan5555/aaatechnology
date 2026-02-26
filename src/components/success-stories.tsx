import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    metric: "8X",
    metricLabel: "Increase in operational efficiency",
    quote:
      "We needed a modern, high-performing IoT solution, and the Advance IOT team delivered beyond expectations. Their expertise helped us increase operational efficiency by 800% in just two weeks. Highly recommend!",
    author: "David Callahan",
    role: "Operations Director, TechCorp",
    avatar: "./public/professional-man.png",
    size: "large", // Added size property for grid layout
  },
  {
    metric: "2X",
    metricLabel: "Increase in data processing speed",
    quote:
      "From planning to implementation, every detail was meticulously handled. The team's expertise helped us achieve faster data processing, and the results have been phenomenal!",
    author: "Sarah Mitchell",
    role: "CTO, DataFlow Solutions",
    avatar: "./public/professional-woman-diverse.png",
    size: "medium", // Added size property for grid layout
  },
  {
    metric: "95%",
    metricLabel: "Reduction in system downtime",
    quote:
      "Their innovative approach took our infrastructure to the next level. The team fully understands enterprise needs and delivered a solution that reduced our system downtime significantly.",
    author: "Tom Becker",
    role: "IT Director, Enterprise Plus",
    avatar: "./public/professional-man-glasses.png",
    size: "medium", // Added size property for grid layout
  },
  {
    metric: "3X",
    metricLabel: "Faster deployment cycles",
    quote:
      "The team nailed our MVP design with a fast turnaround and incredible attention to detail. The final solution felt polished and professional, exceeding our expectations.",
    author: "Lisa Chen",
    role: "Product Manager, InnovateTech",
    avatar: "./public/professional-asian-woman.png",
    size: "dark", // Added size property for dark themed card
  },
];

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Results that speak volumes
          </h2>
          <p className="text-advance-secondary text-lg font-medium">
            Read success stories
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find out how our satisfied clients are achieving remarkable results
            with our solutions.
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
                  <Quote className="h-6 w-6 text-advance-secondary" />
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
                  <Quote className="h-5 w-5 text-advance-secondary flex-shrink-0" />
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
