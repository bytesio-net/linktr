import { ButtonHTMLAttributes } from "react";

import { InstagramIcon } from "../Icons/InstagramIcon";
import { RouteButton } from "../RouteButton";

type InstagramRouteLinkProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const InstagramLink = ({ ...props }: InstagramRouteLinkProps) => {
  return (
    <RouteButton icon={InstagramIcon} className="bg-pink-500" {...props}>
      Instagram
    </RouteButton>
  );
};
