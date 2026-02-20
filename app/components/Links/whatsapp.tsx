import { cn } from "~/lib/utils";

import { RouteLinkProps } from ".";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import { RouteButton } from "../RouteButton";
import { CompactRouteButton } from "../RouteButton/compact";

type WhatsappRouteLinkProps = RouteLinkProps;

export const WhatsappLink = ({
  label,
  compact,
  ...props
}: WhatsappRouteLinkProps) => {
  if (compact) {
    return <CompactRouteButton icon={WhatsappIcon} {...props} />;
  }

  return (
    <RouteButton
      icon={WhatsappIcon}
      className={cn(
        "bg-[#25D366] text-white",
        !props.disabled && "hover:bg-[#21bc5a]"
      )}
      {...props}
    >
      {label ?? "Whatsapp"}
    </RouteButton>
  );
};
