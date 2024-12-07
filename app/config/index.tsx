import { Config } from "~/types/Config";

export const config = {
  icon: {
    light: "/app/linktr/static/logo-light.png",
    dark: "/app/linktr/static/logo-dark.png",
  },
  title: "Linktr - Select | ConceptLab",
  username: "@select.conceptlab.hk",
  announcements:
    "現時Shop網站正進行beta測試如需落單, 請到Instagram/Whatsapp落單,不便之處敬請見諒🙇🏻‍♀️ \nThe Shop Page is currently undergoing beta testing. If you need to place an order, please do so via Instagram/WhatsApp. We apologize for any inconvenience caused🙇🏻‍♀️",

  meta: {
    description:
      "Select | ConceptLab - We offer a curated selection of Korean and Japanese-inspired styles in Hong Kong, redefining modern fashion with simplicity, elegance, and creativity. This concept-driven project connects global style with local artistry.",
    "og:title": "Linktr - Select | ConceptLab",
    "og:description":
      "We offer a curated selection of Korean and Japanese-inspired styles in Hong Kong, redefining modern fashion with simplicity, elegance, and creativity. This concept-driven project connects global style with local artistry.",
    "og:image": "https://select.conceptlab.hk/app/linktr/static/logo-light.png",
    "og:image:alt": "Select | ConceptLab",
    "og:image:width": "1280",
    "og:image:height": "1280",
    "og:url": "https://select.conceptlab.hk/linktr",
    "og:locale": "en_HK",
    "og:site_name": "Select | ConceptLab",
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": "Linktr - Select | ConceptLab",
    "twitter:description":
      "We offer a curated selection of Korean and Japanese-inspired styles in Hong Kong, redefining modern fashion with simplicity, elegance, and creativity. This concept-driven project connects global style with local artistry.",
    "twitter:image": "/static/logo-light.png",
    "twitter:image:alt": "Select | ConceptLab",
    "twitter:url": "https://select.conceptlab.hk/linktr",
    keywords:
      "Select, ConceptLab, Korean Fashion, Japanese Fashion, Hong Kong Fashion, Global Style, Local Artistry select.conceptlab.hk, conceptlab, conceptlab.hk, select.conceptlab, Lifestyle, Style, Fashion, MK, Mk style, y2k, 香港, 韓國, 日本, 時裝, 文青, 文青風, 日系, 韓風, 韓系, 香港時裝, 韓國時裝, 日本時裝, 香港時尚, 韓國服飾,日本服飾, 香港風格, 概念時尚, 本地文化, 本土文化, 香港時尚, 韓國時尚, 精選時尚, 流行文化, 香港流行, 今期潮流, 今期流行, 潮流文化, 韓國流行, 日本流行, 服裝, 服裝店, 免運費, 香港, 韩国, 日本, 时装, 文青, 文青风, 日系, 韩风, 韩系, 香港时装, 韩国时装, 日本时装, 香港时尚, 韩国服饰, 日本服饰, 香港风格, 概念时尚, 本地文化, 本土文化, 香港时尚, 韩国时尚, 精选时尚, 流行文化, 香港流行, 今期潮流, 今期流行, 潮流文化, 韩国流行, 日本流行, 服装, 服装店, 免运费",
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
      label: "facebook",
    },
    whatsapp: {
      route: "https://wa.me/85212345678",
      label: "Whatsapp",
      disabled: true,
    },
    tnc: {
      route: "https://select.conceptlab.hk/tnc",
      label: "Terms & Conditions",
    },
  },
} as Config;
