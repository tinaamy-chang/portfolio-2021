import { useState, useCallback, createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";

const fishTheme = {
  colors: {
    bgGradTop: "rgba(19,214,255,0.33)",
    bgGradBottom: "rgba(0,146,209,0.9)",
    mainBox: "rgba(0,143,190,0.1)",
    subBox: "rgba(51, 194, 204, 0.3)",
    helloBox: "rgba(68, 88, 218, 0.15)",
    helloHeader: "#77cfc2",
    mainHeader: "#2fa0d4",
    modeButton: "#78e2d9",
    navButton: "#85C8F4",
    hellotextShadow: "#9CCEF1",
    textShadow: "rgba(0,146,209,0.7)",
  },
  images: {
    profile: "/profile_fish.svg",
  },
  text: {
    modeButtonText: "👸🏻 humanfy",
  },
};

const humanTheme = {
  colors: {
    bgGradTop: "rgba(252,208,168,0.5)",
    bgGradBottom: "rgba(245,151,131,0.95)",
    mainBox: "rgba(255,140,116,0.15)",
    subBox: "rgba(255,245,165,0.27)",
    helloBox: "rgba(193, 68, 218, 0.18)",
    helloHeader: "#ffbe6b",
    mainHeader: "#ff9b86",
    modeButton: "#ffde7c",
    hellotextShadow: "#F3BDC5",
    textShadow: "rgba(245,151,131,0.7)",
  },
  images: {
    profile: "/profile_human.jpg",
  },
  text: {
    modeButtonText: "🎣 fishify",
  },
};

const DEFAULT_THEME = fishTheme;
const ALTERNATIVE_THEME = humanTheme;

const ThemeSetterContext = createContext({
  toggleTheme: () => {},
  text: DEFAULT_THEME.text.modeButtonText,
});

export const useThemeSetter = () => useContext(ThemeSetterContext);

const Theme = ({ children }) => {
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);

  const theme = isDefaultTheme ? DEFAULT_THEME : ALTERNATIVE_THEME;
  const text = theme.text.modeButtonText;

  const toggleTheme = useCallback(() => {
    setIsDefaultTheme((state) => !state);
  }, []);

  return (
    <ThemeSetterContext.Provider value={{ toggleTheme, text }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSetterContext.Provider>
  );
};

export default Theme;
