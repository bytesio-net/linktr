import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { ShopIcon } from "../Icons/ShopIcon";
import { RouteButton } from "../RouteButton";

type ShopRouteLinkProps = RouteLinkProps;

export const ShopLink = ({ label, ...props }: ShopRouteLinkProps) => {
  return (
    <RouteButton
      icon={ShopIcon}
      className={cn(
        "border border-primary bg-primary text-white ",
        !props.disabled &&
          "hover:bg-primary/80  dark:hover:bg-primary/10 dark:bg-secondary/10"
      )}
      {...props}
    >
      {label ?? "Shop"}
    </RouteButton>
  );
};
