import type { Config } from "tailwindcss";
import { BREAKPOINT } from "~/constants/screen";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: `${BREAKPOINT.XS_MIN}`, //Phone
      sm: `${BREAKPOINT.SM_MIN}px`, //Tablet-sm
      md: `${BREAKPOINT.MD_MIN}px`, //Tablet-l
      lg: `${BREAKPOINT.LG_MIN}px`, //Desktop
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
    },
  },
  plugins: [],
} satisfies Config;
