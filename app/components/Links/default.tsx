import { RouteLinkProps } from ".";
import { RouteButton } from "../RouteButton";

type DefaultRouteLinkProps = RouteLinkProps;

export const DefaultLink = ({ label, ...props }: DefaultRouteLinkProps) => {
  return (
    <RouteButton
      className="bg-background text-primary/50 hover:text-primary/80 "
      {...props}
    >
      {label ?? "click"}
    </RouteButton>
  );
};
