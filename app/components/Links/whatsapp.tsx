import { RouteLinkProps } from ".";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import { RouteButton } from "../RouteButton";

type ShopRouteLinkProps = RouteLinkProps;

export const WhatsappLink = ({ label, ...props }: ShopRouteLinkProps) => {
  return (
    <RouteButton
      icon={WhatsappIcon}
      className="bg-[#25D366] hover:bg-[#21bc5a] text-white"
      {...props}
    >
      {label ?? "Shop"}
    </RouteButton>
  );
};
