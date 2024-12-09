import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { config } from "./config";
import { PreventFlashTheme, ThemeProvider } from "./contexts/Theme";
import "./tailwind.css";

export const meta: MetaFunction = () => {
  return [
    {
      title: config.title,
    },
    ...Object.entries(config.meta).map(([key, value]) => ({
      property: key,
      content: value,
    })),
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/app/linktr/static/favicon.png",
    type: "image/png",
    sizes: "64x64",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <PreventFlashTheme />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="max-w-lg mx-auto h-screen px-4">{children}</div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
