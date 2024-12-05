import { Config } from "~/types/Config";

export const config = {
  icon: {
    light: "/static/logo-light.png",
    dark: "/static/logo-dark.png",
  },
  title: "Select | ConceptLab",
  meta: {
    title: "Linktr - Select | ConceptLab",
    description:
      "Select | ConceptLab - We offer a curated selection of Korean and Japanese-inspired styles in Hong Kong, redefining modern fashion with simplicity, elegance, and creativity. This concept-driven project connects global style with local artistry.",
    "og:title": "Select | ConceptLab",
    "og:description":
      "We offer a curated selection of Korean and Japanese-inspired styles in Hong Kong, redefining modern fashion with simplicity, elegance, and creativity. This concept-driven project connects global style with local artistry.",
    "og:image": "/static/logo-light.png",
    "og:image:alt": "Select | ConceptLab",
    "og:image:width": "1280",
    "og:image:height": "1280",
    "og:url": "https://select.conceptlab.hk/linktr",
    "og:locale": "en_HK",
    "og:site_name": "Select | ConceptLab",
    "og:type": "website",

    "twitter:card": "summary_large_image",
    "twitter:title": "Select | ConceptLab",
    "twitter:description":
      "We offer a curated selection of Korean and Japanese-inspired styles in Hong Kong, redefining modern fashion with simplicity, elegance, and creativity. This concept-driven project connects global style with local artistry.",
    "twitter:image": "/static/logo-light.png",
    "twitter:image:alt": "Select | ConceptLab",
    "twitter:url": "https://select.conceptlab.hk/linktr",
  },
  routes: {
    facebook: {
      route: "https://facebook.com/select.conceptlab.hk",
      label: "Facebook",
    },
    instagram: {
      route: "https://instagram.com/select.conceptlab.hk",
      label: "Instagram",
    },
    shop: {
      route: "https://select.conceptlab.hk",
      label: "Shop",
    },
  },
} as Config;
