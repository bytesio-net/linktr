import { ButtonHTMLAttributes } from "react";

import { FacebookIcon } from "../Icons/FacebookIcon";
import { RouteButton } from "../RouteButton";

type FacebookRouteLinkProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const FacebookLink = ({ ...props }: FacebookRouteLinkProps) => {
  return (
    <RouteButton icon={FacebookIcon} className="bg-blue-500" {...props}>
      Facebook
    </RouteButton>
  );
};
