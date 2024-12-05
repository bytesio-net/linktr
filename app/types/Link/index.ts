type RouteLink = {
  route: string;
  label: string;
};

export type LinkTree = {
  icon: string;

  routes: {
    X?: RouteLink;
    facebook?: RouteLink;
    instagram?: RouteLink;
    threads?: RouteLink;
    whatsapp?: RouteLink;
    shop?: RouteLink;
    [key: string]: RouteLink | undefined;
  };
};
