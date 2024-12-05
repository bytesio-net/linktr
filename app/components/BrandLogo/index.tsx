import { HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: {
    light: string;
    dark?: string;
  };
  alt: string;
}

export const BrandLogo = ({ ...props }: ImageProps) => {
  return (
    <div className="w-full h-full border p-2 dark:border-secondary rounded">
      {props.src.light && (
        <img
          src={props.src.light}
          alt={props.alt}
          className="object-cover rounded dark:hidden"
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
