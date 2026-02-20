import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { RouteButton } from "../RouteButton";
import { CompactRouteButton } from "../RouteButton/compact";

type InstagramRouteLinkProps = RouteLinkProps;

export const InstagramLink = ({
  label,
  compact,
  ...props
}: InstagramRouteLinkProps) => {
  if (compact) {
    return <CompactRouteButton icon={InstagramIcon} {...props} />;
  }

  return (
    <RouteButton
      icon={InstagramIcon}
      className={cn(
        "bg-[#C13584] text-white",
        !props.disabled && "hover:bg-[#E1306C]"
      )}
      {...props}
    >
      {label ?? "Instagram"}
    </RouteButton>
  );
};
