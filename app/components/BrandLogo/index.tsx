import { HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const Image = ({ ...props }: ImageProps) => {
  return (
    <div className="border border-gray-200 rounded-lg">
      <img
        src={props.src}
        alt={props.alt ?? ""}
        className="w-full h-full object-contain"
      />
    </div>
  );
};
