import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { RouteButton } from "../RouteButton";

type DefaultRouteLinkProps = RouteLinkProps;

export const DefaultLink = ({
  label,
  compact,
  ...props
}: DefaultRouteLinkProps) => {
  if (compact) {
    return null;
  }

  return (
    <RouteButton
      className={cn(
        "bg-background text-primary/50"
        // !props.disabled && "hover:text-primary/80"
      )}
      {...props}
    >
      {label ?? "click"}
    </RouteButton>
  );
};
