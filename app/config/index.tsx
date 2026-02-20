import { Config } from "~/types/Config";

export const config = {
  icon: {
    light: "/app/linktr/static/logo-light.jpg",
    dark: "/app/linktr/static/logo-dark.jpg",
  },
  // background: {
  //   light: "/app/linktr/static/background-light.png",
  //   dark: "/app/linktr/static/background-dark.png",
  // },
  title: "Linktr - dai0wong",
  description: "Illustrator || Animator",
  username: "@dai0wong",
  // announcements: "Hello World, \n\nThis is a test announcement",
  meta: {
    description: "Bytesio.net open source linktree",
    "og:title": "Linktr - dai0wong 大黃 | 香港插畫家",
    "og:description": "Illustrator || Animator",
    "og:image": "https://dai0wong.bytesio.net/app/linktr/static/logo-light.jpg",
    "og:image:alt": "dai0wong 大黃",
    "og:image:width": "871",
    "og:image:height": "871",
    "og:url": "https://dai0wong.bytesio.net/",
    "og:locale": "zh_HK",
    "og:site_name": "Linktr - dai0wong 大黃 | 香港插畫家",
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": "Linktr - Bytesio.net",
    "twitter:description": "Illustrator || Animator",
    "twitter:image":
      "https://dai0wong.bytesio.net/app/linktr/static/logo-light.jpg",
    "twitter:image:alt": "dai0wong 大黃",
    "twitter:url": "https://dai0wong.bytesio.net/",
    keywords:
      "Linktr, dai0wong, daiwong, 大黃, 大王, 大黃 link, Illustrator, Animator, Adobe, 香港插畫家, 香港本土, 香港本土插畫家, 香港動畫, 香港, HK",
  },
  share: {
    label: true,
  },
  layout: {
    compact: true,
  },
  routes: {
    instagram: {
      route: "https://www.instagram.com/dai0wong/",
      label: "Instagram",
    },
    threads: {
      route: "https://threads.net/dai0wong",
      label: "@dai0wong",
    },
    x: {
      route: "https://x.com/dai_w169",
      label: "X",
      // disabled: true,
    },
  },
} as Config;
