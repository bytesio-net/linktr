import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import { RouteButton } from "../RouteButton";

type ShopRouteLinkProps = RouteLinkProps;

export const WhatsappLink = ({ label, ...props }: ShopRouteLinkProps) => {
  return (
    <RouteButton
      icon={WhatsappIcon}
      className={cn(
        "bg-[#25D366] text-white",
        !props.disabled && "hover:bg-[#21bc5a]"
      )}
      {...props}
    >
      {label ?? "Shop"}
    </RouteButton>
  );
};
