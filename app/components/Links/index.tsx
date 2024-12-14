import { Link } from "@remix-run/react";
import { ButtonHTMLAttributes } from "react";
import { LinkTree } from "~/types/Link";

import { DefaultLink } from "./default";
import { FacebookLink } from "./facebook";
import { InstagramLink } from "./instagram";
import { ShopLink } from "./shop";
import { ThreadsLink } from "./threads";
import { WhatsappLink } from "./whatsapp";
import { XLink } from "./x";

export type RouteLinkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

type LinksProps = {
  routes: LinkTree["routes"];
};

const routeLinkMap = {
  threads: ThreadsLink,
  x: XLink,
  facebook: FacebookLink,
  instagram: InstagramLink,
  shop: ShopLink,
  whatsapp: WhatsappLink,
};

export const Links = ({ routes = {} }: LinksProps) => {
  const routeKeys = Object.keys(routes);

  return (
    <div className="w-full flex flex-col gap-6">
      {routeKeys.map((key) => {
        const RouteLink =
          routeLinkMap[key as keyof typeof routeLinkMap] ?? DefaultLink;
        return routes[key]?.route && !routes[key]?.disabled ? (
          <Link
            key={key}
            to={routes[key]?.route ?? ""}
            target="_blank"
            rel="noreferrer"
          >
            <RouteLink {...routes[key as keyof typeof routes]} />
          </Link>
        ) : (
          <RouteLink key={key} {...routes[key as keyof typeof routes]} />
        );
      })}
    </div>
  );
};
