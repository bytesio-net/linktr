import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { XIcon } from "../Icons/XIcon";
import { RouteButton } from "../RouteButton";

type XLinkProps = RouteLinkProps;

export const XLink = ({ label, ...props }: XLinkProps) => {
  return (
    <RouteButton
      icon={XIcon}
      className={cn(
        "border border-primary bg-primary text-white ",
        props.disabled &&
          "hover:bg-primary/80  dark:hover:bg-primary/10 dark:bg-secondary/10"
      )}
      {...props}
    >
      {label ?? "Threads"}
    </RouteButton>
  );
};
