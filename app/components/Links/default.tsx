import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { RouteButton } from "../RouteButton";

type DefaultRouteLinkProps = RouteLinkProps;

export const DefaultLink = ({ label, ...props }: DefaultRouteLinkProps) => {
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
