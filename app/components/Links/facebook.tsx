import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { RouteButton } from "../RouteButton";

type FacebookRouteLinkProps = RouteLinkProps;

export const FacebookLink = ({ label, ...props }: FacebookRouteLinkProps) => {
  return (
    <RouteButton
      icon={FacebookIcon}
      className={cn(
        "bg-[#1877F2] text-white",
        !props.disabled && "hover:bg-[#1568d4]"
      )}
      {...props}
    >
      {label ?? "Facebook"}
    </RouteButton>
  );
};
