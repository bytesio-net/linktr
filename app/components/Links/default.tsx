import { ButtonHTMLAttributes } from "react";

import { InstagramIcon } from "../Icons/InstagramIcon";
import { RouteButton } from "../RouteButton";

type DefaultRouteLinkProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const DefaultLink = ({ ...props }: DefaultRouteLinkProps) => {
  return (
    <RouteButton icon={InstagramIcon} className="bg-pink-500" {...props}>
      Default
    </RouteButton>
  );
};
