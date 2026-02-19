import { HTMLAttributes } from "react";

import { cn } from "../../lib/utils";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: {
    light: string;
    dark?: string;
  };
  alt: string;
}

export const BrandLogo = ({ ...props }: ImageProps) => {
  return (
    <div className="w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 border p-2 dark:border-secondary rounded">
      {props.src.light && (
        <img
          src={props.src.light}
          alt={props.alt}
          className={cn(
            "object-cover rounded",
            props.src.dark && "dark:hidden"
          )}
        />
      )}
      {props.src.dark && (
        <img
          src={props.src.dark}
          alt={props.alt}
          className="object-cover rounded hidden dark:block"
        />
      )}
    </div>
  );
};
