import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export enum Theme {
  light = "light",
  dark = "dark",
}

const APP_THEME_KEY = "app-theme";
const mediaQueryDarkMode = "(prefers-color-scheme: dark)";

interface ThemeProviderProps {
  children: ReactNode;
}

interface IThemeContextState {
  theme: Theme | null; // Initially null to prevent hydration mismatch
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<IThemeContextState | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem(APP_THEME_KEY) as Theme | null;
    const systemTheme = window.matchMedia(mediaQueryDarkMode).matches
      ? Theme.dark
      : Theme.light;
    const initialTheme = storedTheme || systemTheme;

    document.documentElement.classList.remove(Theme.light, Theme.dark);
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);
  }, []);

  const updateTheme = (newTheme: Theme) => {
    document.documentElement.classList.remove(Theme.light, Theme.dark);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem(APP_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {theme !== null && children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContextState => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const PreventFlashTheme = () => {
  const clientThemeScript = `
    (function() {
      try {
        const storageKey = '${APP_THEME_KEY}';
        const theme = localStorage.getItem(storageKey) || 
                      (window.matchMedia('${mediaQueryDarkMode}').matches ? '${Theme.dark}' : '${Theme.light}');
        document.documentElement.classList.add(theme);
      } catch (e) {
        console.error('Error applying theme:', e);
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: clientThemeScript }} />;
};
