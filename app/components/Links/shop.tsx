import { RouteLinkProps } from ".";
import { ShopIcon } from "../Icons/ShopIcon";
import { RouteButton } from "../RouteButton";

type ShopRouteLinkProps = RouteLinkProps;

export const ShopLink = ({ label, ...props }: ShopRouteLinkProps) => {
  return (
    <RouteButton
      icon={ShopIcon}
      className="border border-primary dark:hover:bg-primary/10"
      {...props}
    >
      {label ?? "Shop"}
    </RouteButton>
  );
};
