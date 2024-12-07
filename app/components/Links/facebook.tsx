import { RouteLinkProps } from ".";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { RouteButton } from "../RouteButton";

type FacebookRouteLinkProps = RouteLinkProps;

export const FacebookLink = ({ label, ...props }: FacebookRouteLinkProps) => {
  return (
    <RouteButton
      icon={FacebookIcon}
      className="bg-[#1877F2] hover:bg-[#1568d4] text-white"
      {...props}
    >
      {label ?? "Facebook"}
    </RouteButton>
  );
};
