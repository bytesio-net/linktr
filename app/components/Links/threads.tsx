import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { ThreadsIcon } from "../Icons/ThreadsIcon";
import { RouteButton } from "../RouteButton";
import { CompactRouteButton } from "../RouteButton/compact";

type ThreadsLinkProps = RouteLinkProps;

export const ThreadsLink = ({ label, compact, ...props }: ThreadsLinkProps) => {
  if (compact) {
    return <CompactRouteButton icon={ThreadsIcon} {...props} />;
  }

  return (
    <RouteButton
      icon={ThreadsIcon}
      className={cn(
        "border border-primary bg-primary text-white dark:bg-secondary/10",
        !props.disabled && "hover:bg-primary/80 dark:hover:bg-primary/10",
        "rounded-lg"
      )}
      {...props}
    >
      {label ?? "Threads"}
    </RouteButton>
  );
};
