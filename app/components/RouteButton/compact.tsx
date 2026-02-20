import { ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface CompactRouteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
  disabled?: boolean;
}

export const CompactRouteButton = ({
  icon: Icon,
  disabled = false,
  ...props
}: CompactRouteButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full p-2.5 border bg-background hover:bg-foreground/5 transition-colors duration-200",
        disabled && "opacity-20 cursor-not-allowed bg-background"
      )}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-7 h-7 md:w-5 md:h-5" />}
    </button>
  );
};
