/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* AAA Technologies brand palette */
        "aaa-primary":   "var(--aaa-primary)",
        "aaa-secondary": "var(--aaa-secondary)",
        "aaa-tertiary":  "var(--aaa-tertiary)",
        "aaa-neutral":   "var(--aaa-neutral)",

        /* Legacy aliases */
        "advance-primary":   "var(--aaa-primary)",
        "advance-secondary": "var(--aaa-secondary)",
        "advance-neutral":   "var(--aaa-neutral)",
      },
      borderRadius: {
        none: "0",
        sm:   "0",
        DEFAULT: "0",
        md:   "0",
        lg:   "0",
        xl:   "0",
        "2xl":"0",
        "3xl":"0",
        full: "0",
      },
      boxShadow: {
        "brand-sm": "0 2px 8px 0 rgba(252, 43, 42, 0.12)",
        "brand-md": "0 4px 20px 0 rgba(252, 43, 42, 0.18)",
        "brand-lg": "0 8px 40px 0 rgba(252, 43, 42, 0.22)",
      },
      backgroundImage: {
        "brand-gradient":    "linear-gradient(135deg, #fc2b2a 0%, #008253 100%)",
        "brand-gradient-r":  "linear-gradient(135deg, #008253 0%, #fc2b2a 100%)",
        "brand-gradient-v":  "linear-gradient(180deg, #fc2b2a 0%, #008253 100%)",
      },
    },
  },
  plugins: [],
}
