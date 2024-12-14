import { MoonIcon, SunIcon } from "lucide-react";
import { Theme, useTheme } from "~/contexts/Theme";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  if (theme === null) return null; // Avoid rendering until the theme is ready

  const handleToggle = () => {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  };

  const CurrentIcon = theme === Theme.dark ? SunIcon : MoonIcon;

  return (
    <button
      className="p-3 bg-accent/50 rounded border"
      onClick={handleToggle}
      aria-label="Toggle theme"
    >
      <CurrentIcon />
    </button>
  );
};
