import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { ThreadsIcon } from "../Icons/ThreadsIcon";
import { RouteButton } from "../RouteButton";

type ThreadsLinkProps = RouteLinkProps;

export const ThreadsLink = ({ label, ...props }: ThreadsLinkProps) => {
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
