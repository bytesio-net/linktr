import { ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface RouteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
  disabled?: boolean;
}

export const RouteButton = ({
  icon: Icon,
  className,
  children,
  disabled = false,
  ...props
}: RouteButtonProps) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-2",
        "transition-colors duration-300",
        "w-full px-4 py-3 rounded-sm",
        // "hover:scale-105",
        className,
        disabled && "opacity-20 cursor-not-allowed"
      )}
      {...props}
    >
      {Icon && <Icon className="w-7 h-7" />}
      {children}
    </button>
  );
};
