import type { Config } from "tailwindcss";

import { BREAKPOINT } from "./app/constants/screen";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: `${BREAKPOINT.XS_MIN}`,
      sm: `${BREAKPOINT.SM_MIN}px`,
      md: `${BREAKPOINT.MD_MIN}px`,
      lg: `${BREAKPOINT.LG_MIN}px`,
      xsOnly: {
        min: `${BREAKPOINT.XS_MIN}`,
        max: `${BREAKPOINT.SM_MIN - 1}px`,
      },
      smOnly: {
        min: `${BREAKPOINT.SM_MIN}`,
        max: `${BREAKPOINT.MD_MIN - 1}px`,
      },
      mdOnly: {
        min: `${BREAKPOINT.MD_MIN}`,
        max: `${BREAKPOINT.LG_MIN - 1}px`,
      },
      xsOrSm: {
        min: `${BREAKPOINT.XS_MIN}`,
        max: `${BREAKPOINT.MD_MIN - 1}px`,
      },
      smOrMd: {
        min: `${BREAKPOINT.SM_MIN}`,
        max: `${BREAKPOINT.LG_MIN - 1}px`,
      },
      xsToMd: {
        min: `${BREAKPOINT.XS_MIN}`,
        max: `${BREAKPOINT.LG_MIN - 1}px`,
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        warning: {
          "25": "hsl(var(--warning-25))",
          "100": "hsl(var(--warning-100))",
          "200": "hsl(var(--warning-200))",
          "300": "hsl(var(--warning-300))",
          "400": "hsl(var(--warning-400))",
          "500": "hsl(var(--warning-500))",
          "600": "hsl(var(--warning-600))",
          "700": "hsl(var(--warning-700))",
          "800": "hsl(var(--warning-800))",
          "900": "hsl(var(--warning-900))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
