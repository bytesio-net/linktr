import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { ShopIcon } from "../Icons/ShopIcon";
import { RouteButton } from "../RouteButton";
import { CompactRouteButton } from "../RouteButton/compact";

type ShopRouteLinkProps = RouteLinkProps;

export const ShopLink = ({ label, compact, ...props }: ShopRouteLinkProps) => {
  if (compact) {
    return <CompactRouteButton icon={ShopIcon} {...props} />;
  }

  return (
    <RouteButton
      icon={ShopIcon}
      className={cn(
        "border border-primary bg-primary text-white dark:bg-secondary/10",
        !props.disabled && "hover:bg-primary/80  dark:hover:bg-primary/10"
      )}
      {...props}
    >
      {label ?? "Shop"}
    </RouteButton>
  );
};
