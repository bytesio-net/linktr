import { Config } from "~/types/Config";

export const config = {
  icon: {
    light: "/app/linktr/static/logo-light.png",
    dark: "/app/linktr/static/logo-dark.png",
  },
  background: {
    light: "/app/linktr/static/background-light.png",
    dark: "/app/linktr/static/background-dark.png",
  },
  title: "Linktr - BytesIO.net",
  description: "Bytesio.net open source linktree",
  username: "@bytesio.net",
  announcements: "Hello World, \n\nThis is a test announcement",
  meta: {
    description: "Bytesio.net open source linktree",
    "og:title": "Linktr - Bytesio.net",
    "og:description": "Bytesio.net open source linktree",
    "og:image":
      "https://demo-linktr.bytesio.net/app/linktr/static/logo-light.png",
    "og:image:alt": "Bytesio.net",
    "og:image:width": "1280",
    "og:image:height": "1280",
    "og:url": "https://demo-linktr.bytesio.net/",
    "og:locale": "en_HK",
    "og:site_name": "Linktr - Bytesio.net",
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": "Linktr - Bytesio.net",
    "twitter:description": "Bytesio.net open source linktree",
    "twitter:image":
      "https://demo-linktr.bytesio.net/app/linktr/static/logo-light.png",
    "twitter:image:alt": "Bytesio.net",
    "twitter:url": "https://demo-linktr.bytesio.net/",
    keywords:
      "Linktr, Bytesio.net, Bytesio, linktree, open source, open source linktree, open source linktree, self-host, linktrr own by yourself",
  },
  share: {
    label: true,
  },
  routes: {
    shop: {
      route: "https://instagram.com/select.conceptlab.hk",
      label: "Shop",
    },
    instagram: {
      route: "https://instagram.com/",
      label: "Instagram",
    },
    facebook: {
      route: "https://facebook.com/",
      label: "facebook",
    },
    threads: {
      route: "https://threads.net/",
      label: "@username",
      disabled: true,
    },
    x: {
      route: "https://x.com/",
      label: "X",
      disabled: true,
    },
    whatsapp: {
      route: "https://wa.me/",
      label: "Whatsapp",
      disabled: true,
    },
    repo: {
      route: "https://github.com/bytesio-net/linktr",
      label: "powered by bytesio.net (linktr)",
    },
  },
  thirdParty: {
    ga4: {
      id: "G-G3ZW2G80MV",
    },
  },
} as Config;
