import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
      a4: "21cm",

      "max-sm": { max: "640px" },
      "max-md": { max: "768px" },
      "max-lg": { max: "1024px" },
      "max-xl": { max: "1280px" },
      "max-2xl": { max: "1536px" },

      "max-a4": { max: "21cm" },
      "screen-max-a4": { raw: "only screen and (max-width: 21cm)" },
    },
    fontWeight: {
      thin: 100,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
        "sans-system": [...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "2xs": ["0.625rem", "0.875rem"],
      },
      width: {
        a4: "21cm",
      },
      height: {
        a4: "29.7cm",
      },
      maxWidth: {
        a4: "21cm",
      },
      minHeight: {
        a4: "29.7cm",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "80ch",
          },
        },
      },
    },
    colors: {
      border: "hsl(var(--border) / <alpha-value>)",
      // input: "hsl(var(--input) / <alpha-value>)",
      ring: "hsl(var(--ring) / <alpha-value>)",
      background: "hsl(var(--background) / <alpha-value>)",
      foreground: "hsl(var(--foreground) / <alpha-value>)",
      link: "hsl(var(--link) / <alpha-value>)",
      primary: {
        DEFAULT: "hsl(var(--primary) / <alpha-value>)",
        foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        highlight: "hsl(var(--primary-highlight) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
        foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        highlight: "hsl(var(--secondary-highlight) / <alpha-value>)",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
        foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
      },
      // muted: {
      //   DEFAULT: "hsl(var(--muted) / <alpha-value>)",
      //   foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
      // },
      accent: {
        DEFAULT: "hsl(var(--accent) / <alpha-value>)",
        foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        highlight: "hsl(var(--accent-highlight) / <alpha-value>)",
      },
      // popover: {
      //   DEFAULT: "hsl(var(--popover) / <alpha-value>)",
      //   foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
      // },
      card: {
        DEFAULT: "hsl(var(--card) / <alpha-value>)",
        foreground: "hsl(var(--card-foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
