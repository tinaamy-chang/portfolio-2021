import { useState, useCallback, createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";

const fishTheme = {
  colors: {
    bgGradTop: "rgba(19,214,255,0.38)",
    bgGradBottom: "rgba(23,142,205,.8)",
    mainBox: "rgba(36,189,215,0.15)",
    subBox: "rgba(122,235,191,0.2)",
    helloHeader: "#77cfc2",
    mainHeader: "#55a4d9",
    subHeader: "#5590c7",
    modeButton: "#94dfc8",
    navButton: "#85C8F4",
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
    helloHeader: "#ffbe6b",
    mainHeader: "#ff9b86",
    subHeader: "#b97768",
    modeButton: "#ffd17c",
    navButton: "#fbca6e",
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
