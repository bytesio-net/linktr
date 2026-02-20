type RouteLink = {
  route: string;
  label: string;
  disabled?: boolean;
};

export type LinkTree = {
  icon: {
    light: string;
    dark?: string;
  };
  title: string;
  username?: string;
  announcements?: string;
  share?: {
    label: boolean;
    description?: string;
    url?: string;
  };
  layout?: {
    compact?: boolean;
  };
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
