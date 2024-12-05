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
  system = "system",
}

export const themes = Object.values(Theme);

const APP_THEME_KEY = "app-theme";
const mediaQueryDarkMode = "(prefers-color-scheme: dark)";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface IThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: IThemeContextState = {
  theme: Theme.system,
  setTheme: () => {
    throw new Error("setTheme function must be initialized");
  },
};

const ThemeContext = createContext<IThemeContextState>(initialState);

export const ThemeProvider = ({
  children,
  defaultTheme = Theme.system,
  storageKey = APP_THEME_KEY,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme; // Ensure SSR safety
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === Theme.system) {
      const systemTheme = window.matchMedia(mediaQueryDarkMode).matches
        ? Theme.dark
        : Theme.light;
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const setThemeAndStore = (newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeAndStore }}>
      {children}
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

const clientThemeInitialThemeCode = String.raw`
    (function() {
      try {
        const storageKey = '${APP_THEME_KEY}';
        const theme = localStorage.getItem(storageKey) || '${Theme.system}';
        const systemTheme = window.matchMedia('${mediaQueryDarkMode}').matches ? '${Theme.dark}' : '${Theme.light}';
        const appliedTheme = theme === '${Theme.system}' ? systemTheme : theme;
        document.documentElement.classList.add(appliedTheme);
      } catch (e) {
        console.error('Error applying theme:', e);
      }
    })();
`;

type PreventFlashThemeProps = {
  nonce?: string;
};

export const PreventFlashTheme = ({ nonce }: PreventFlashThemeProps) => {
  const { theme } = useTheme();

  const metaColorScheme = {
    [Theme.light]: "light dark",
    [Theme.dark]: "dark light",
    [Theme.system]: "light dark",
  }[theme];
  return (
    <>
      <meta name="color-scheme" content={metaColorScheme} />
      <script
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: clientThemeInitialThemeCode }}
        suppressHydrationWarning
      />
    </>
  );
};
