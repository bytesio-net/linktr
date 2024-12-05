import { LinkTree } from "~/types/Link";

import { DefaultLink } from "./default";
import { FacebookLink } from "./facebook";
import { InstagramLink } from "./instagram";

type LinksProps = {
  routes: LinkTree["routes"];
};

const routeLinkMap = {
  facebook: FacebookLink,
  instagram: InstagramLink,
};

export const Links = ({ routes = {} }: LinksProps) => {
  const routeKeys = Object.keys(routes);

  const routeItems = routeKeys.map((key) => {
    const RouteLink =
      routeLinkMap[key as keyof typeof routeLinkMap] ?? DefaultLink;
    return <RouteLink key={key} {...routes[key as keyof typeof routes]} />;
  });

  return <div className="flex flex-col gap-2">{routeItems}</div>;
};
