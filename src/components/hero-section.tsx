"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const heroImages = [
  { src: hero1, alt: "IT audit professional reviewing management controls" },
  { src: hero2, alt: "Cyber security expert analysing threat data" },
  { src: hero3, alt: "IT governance team reviewing compliance frameworks" },
  { src: hero4, alt: "Digital information security infrastructure" },
  { src: hero5, alt: "Information systems audit in progress" },
];

const rotatingTexts = [
  "IT Systems Audit",
  "Cyber Security",
  "IT Governance",
  "IT Assurance",
  "IS Audit",
  "Compliance",
];

const SLIDE_INTERVAL  = 5000; // ms between slides
const FADE_DURATION   = 1000; // ms — keep in sync with CSS transition below
const TEXT_INTERVAL   = 3000;

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText,  setCurrentText]  = useState(0);
  const [textOut,      setTextOut]       = useState(false);

  // Detect user's motion preference
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── Image crossfade timer ────────────────────────────────────────────────
  const imageTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (prefersReduced) return; // skip animation for reduced-motion users
    imageTimer.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
    return () => { if (imageTimer.current) clearInterval(imageTimer.current); };
  }, [prefersReduced]);

  // ── Rotating headline text ───────────────────────────────────────────────
  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => {
      setTextOut(true);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        setTextOut(false);
      }, 250);
    }, TEXT_INTERVAL);
    return () => clearInterval(id);
  }, [prefersReduced]);

  // Manual dot navigation
  const goToSlide = (index: number) => {
    setCurrentImage(index);
    // Reset timer on manual nav
    if (imageTimer.current) clearInterval(imageTimer.current);
    if (!prefersReduced) {
      imageTimer.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, SLIDE_INTERVAL);
    }
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-background py-10 sm:py-14 lg:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 items-stretch">

          {/* ── Left: text content ──────────────────────────────────────── */}
          <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">

            {/* Headline */}
            <div className="space-y-5">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
              >
                India's leading independent{" "}
                <span
                  aria-live="polite"
                  aria-atomic="true"
                  className="inline-block"
                >
                  <span
                    className={`text-advance-primary underline decoration-advance-secondary decoration-4
                      inline-block transition-all duration-500 ease-in-out
                      ${textOut
                        ? "opacity-0 -translate-y-2 scale-95"
                        : "opacity-100 translate-y-0 scale-100"
                      }`}
                    style={{ minWidth: "clamp(160px, 30vw, 260px)" }}
                  >
                    {rotatingTexts[currentText]}
                  </span>
                </span>{" "}
                firm
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                India's 1st and only listed company focused exclusively on
                Information Technology &amp; Cyber Security Audit. Over 22 years
                of independent auditing, assurance, and governance expertise
                across 25+ industry sectors.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <label htmlFor="hero-email" className="sr-only">Email address</label>
              <Input
                id="hero-email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                className="flex-1 min-h-[44px]"
              />
              <Button
                className="bg-advance-primary hover:bg-advance-primary/90 text-white px-6 min-h-[44px] whitespace-nowrap"
              >
                Request an Audit
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 pt-2">
              {[
                { value: "22+",   label: "Years of expertise" },
                { value: "1000+", label: "Man-years of experience" },
                { value: "25+",   label: "Industry sectors" },
                { value: "2005",  label: "CERT-In empanelled since" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-advance-primary">{value}</div>
                  <div className="text-xs text-muted-foreground leading-snug mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Certifications bar */}
            <div
              className="flex items-center gap-2 flex-wrap"
              aria-label="Certifications and credentials"
            >
              <div className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-advance-secondary text-advance-secondary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                CERT-In Empanelled · ISO 9001:2015 · ISO 27001:2013 · NSE &amp; BSE Listed
              </span>
            </div>
          </div>

          {/* ── Right: crossfade image carousel ─────────────────────────── */}
          <div className="relative order-1 lg:order-2 h-64 sm:h-96 lg:h-auto min-h-0 lg:min-h-[580px] overflow-hidden">

            {/* Images stacked — CSS opacity crossfade */}
            {heroImages.map((img, index) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={1170}
                height={780}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: index === currentImage ? 1 : 0,
                  transition: prefersReduced
                    ? "none"
                    : `opacity ${FADE_DURATION}ms ease-in-out`,
                  willChange: "opacity",
                }}
                aria-hidden={index !== currentImage}
              />
            ))}

            {/* Subtle dark gradient so dots are legible */}
            <div
              className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {/* Dot indicators */}
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2"
              role="group"
              aria-label="Slide navigation"
            >
              {heroImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show slide ${index + 1}: ${img.alt}`}
                  aria-pressed={index === currentImage}
                  className={`w-2 h-2 transition-all duration-300 focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1
                    ${index === currentImage
                      ? "bg-white w-5"
                      : "bg-white/50 hover:bg-white/80"
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
