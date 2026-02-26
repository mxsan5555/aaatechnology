import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const rotatingTexts = [
    "smart IOT",
    "AI & ML",
    "blockchain",
    "cloud solutions",
    "digital transformation",
    "emerging technologies"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 250); // Half of the animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Transform your business with{" "}
                <span className="relative inline-block">
                  <span 
                    className={`text-advance-primary underline decoration-advance-secondary decoration-4 transition-all duration-500 ease-in-out ${
                      isAnimating 
                        ? 'opacity-0 transform -translate-y-2 scale-95' 
                        : 'opacity-100 transform translate-y-0 scale-100'
                    }`}
                    style={{ display: 'inline-block', minWidth: '200px', textAlign: 'left' }}
                  >
                    {rotatingTexts[currentTextIndex]}
                  </span>
                </span>{" "}
                solutions
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
                Fast, reliable and innovative - turn your business into a
                connected ecosystem and streamline your operations with
                cutting-edge technology.
              </p>
            </div>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                placeholder="Enter work email"
                className="flex-1"
                type="email"
              />
              <Button className="bg-advance-primary hover:bg-advance-primary/90 text-white px-8">
                Get Started
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-advance-primary">
                  95.2%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client satisfaction rate
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-advance-primary">
                  ~500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects completed
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-advance-secondary text-advance-secondary"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9</span>
              <span className="text-muted-foreground">
                Average client rating
              </span>
            </div>
          </div>

          {/* Right Content - 3D Illustration Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-advance-primary/10 to-advance-secondary/10 flex items-center justify-center" 
                style={{
                  backgroundImage: "url('/banner-3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
