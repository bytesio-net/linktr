import { Config } from "~/types/Config";

export const config = {
  icon: {
    light: "/app/linktr/static/logo-light.png",
    dark: "/app/linktr/static/logo-dark.png",
  },
  title: "Select | ConceptLab",
  announcements:
    "現時網站正進行beta測試如需落單, 請到Instagram/Whatsapp落單,不便之處敬請見諒🙇🏻‍♀️ \nThe website is currently undergoing beta testing. If you need to place an order, please do so via Instagram/WhatsApp. We apologize for any inconvenience caused🙇🏻‍♀️",

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
    shop: {
      route: "https://select.conceptlab.hk",
      label: "Shop",
    },
    instagram: {
      route: "https://instagram.com/select.conceptlab.hk",
      label: "Instagram",
    },
    facebook: {
      route: "https://facebook.com/select.conceptlab.hk",
      label: "Facebook",
    },
  },
} as Config;
