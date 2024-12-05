import { RouteLinkProps } from ".";
import { RouteButton } from "../RouteButton";

type DefaultRouteLinkProps = RouteLinkProps;

export const DefaultLink = ({ label, ...props }: DefaultRouteLinkProps) => {
  return (
    <RouteButton className="bg-background " {...props}>
      {label ?? "click"}
    </RouteButton>
  );
};
