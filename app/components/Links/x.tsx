import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { XIcon } from "../Icons/XIcon";
import { RouteButton } from "../RouteButton";
import { CompactRouteButton } from "../RouteButton/compact";

type XLinkProps = RouteLinkProps;

export const XLink = ({ label, compact, ...props }: XLinkProps) => {
  if (compact) {
    return <CompactRouteButton icon={XIcon} {...props} />;
  }

  return (
    <RouteButton
      icon={XIcon}
      className={cn(
        "border border-primary bg-primary text-white dark:bg-secondary/10",
        !props.disabled && "hover:bg-primary/80 dark:hover:bg-primary/10 "
      )}
      {...props}
    >
      {label ?? "X"}
    </RouteButton>
  );
};
