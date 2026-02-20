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
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<IThemeContextState | undefined>(undefined);

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(APP_THEME_KEY);
    if (stored === Theme.light || stored === Theme.dark) return stored;
  } catch {
    // localStorage unavailable (private browsing, some mobile browsers)
  }
  return null;
}

function getSystemTheme(): Theme {
  try {
    return window.matchMedia(mediaQueryDarkMode).matches
      ? Theme.dark
      : Theme.light;
  } catch {
    return Theme.light;
  }
}

function applyThemeToDOM(theme: Theme) {
  const cl = document.documentElement.classList;
  cl.remove(Theme.light, Theme.dark);
  cl.add(theme);
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Initialize theme — read what PreventFlashTheme already applied to avoid flash
  useEffect(() => {
    const initialTheme = getStoredTheme() || getSystemTheme();
    applyThemeToDOM(initialTheme);
    setTheme(initialTheme);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mq = window.matchMedia(mediaQueryDarkMode);
    const handler = (e: MediaQueryListEvent) => {
      // Only follow system changes if user hasn't explicitly chosen a theme
      if (!getStoredTheme()) {
        const newTheme = e.matches ? Theme.dark : Theme.light;
        applyThemeToDOM(newTheme);
        setTheme(newTheme);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const updateTheme = (newTheme: Theme) => {
    applyThemeToDOM(newTheme);
    try {
      localStorage.setItem(APP_THEME_KEY, newTheme);
    } catch {
      // localStorage unavailable
    }
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
        var storageKey = '${APP_THEME_KEY}';
        var theme = localStorage.getItem(storageKey);
        if (theme !== '${Theme.light}' && theme !== '${Theme.dark}') {
          theme = window.matchMedia('${mediaQueryDarkMode}').matches ? '${Theme.dark}' : '${Theme.light}';
        }
        document.documentElement.classList.remove('${Theme.light}', '${Theme.dark}');
        document.documentElement.classList.add(theme);
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: clientThemeScript }} />;
};
