import { Link } from "@remix-run/react";
import { ButtonHTMLAttributes } from "react";
import { LinkTree } from "~/types/Link";

import { DefaultLink } from "./default";
import { FacebookLink } from "./facebook";
import { InstagramLink } from "./instagram";
import { ShopLink } from "./shop";

export type RouteLinkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

type LinksProps = {
  routes: LinkTree["routes"];
};

const routeLinkMap = {
  facebook: FacebookLink,
  instagram: InstagramLink,
  shop: ShopLink,
};

export const Links = ({ routes = {} }: LinksProps) => {
  const routeKeys = Object.keys(routes);

  return (
    <div className="w-full flex flex-col gap-6">
      {routeKeys.map((key) => {
        const RouteLink =
          routeLinkMap[key as keyof typeof routeLinkMap] ?? DefaultLink;
        return (
          <Link key={key} to={routes[key]?.route ?? ""}>
            <RouteLink {...routes[key as keyof typeof routes]} />
          </Link>
        );
      })}
    </div>
  );
};
