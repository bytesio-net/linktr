import { ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface RouteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
}

export const RouteButton = ({
  icon: Icon,
  className,
  children,
  ...props
}: RouteButtonProps) => {
  return (
    <button className={cn("flex items-center gap-2", className)} {...props}>
      <Icon />
      {children}
    </button>
  );
};
