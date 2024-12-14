import { MoonIcon, SunIcon } from "lucide-react";
import { Theme, useTheme } from "~/contexts/Theme";

export const ToggleTheme = ({ children }: { children?: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();

  const reverseThemeIcon = {
    [Theme.system]: <SunIcon />,
    [Theme.dark]: <SunIcon />,
    [Theme.light]: <MoonIcon />,
  }[theme];

  return (
    <button
      className="p-3 bg-accent/50 rounded border"
      onClick={() => {
        setTheme(
          theme === Theme.system || theme === Theme.dark
            ? Theme.light
            : Theme.dark
        );
      }}
    >
      {reverseThemeIcon}
      {children}
    </button>
  );
};
