import { RouteLinkProps } from ".";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { RouteButton } from "../RouteButton";

type InstagramRouteLinkProps = RouteLinkProps;

export const InstagramLink = ({ label, ...props }: InstagramRouteLinkProps) => {
  return (
    <RouteButton
      icon={InstagramIcon}
      className="bg-[#C13584] hover:bg-[#E1306C] text-white"
      {...props}
    >
      {label ?? "Instagram"}
    </RouteButton>
  );
};
