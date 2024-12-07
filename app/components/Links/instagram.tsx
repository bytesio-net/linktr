import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { RouteButton } from "../RouteButton";

type InstagramRouteLinkProps = RouteLinkProps;

export const InstagramLink = ({ label, ...props }: InstagramRouteLinkProps) => {
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
