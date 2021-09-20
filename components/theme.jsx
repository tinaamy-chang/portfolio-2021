import { useState, useCallback, createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";

const fishTheme = {
  colors: {
    bgGradTop: "rgba(161,253,255,0.31)",
    bgGradBottom: "rgba(59,124,227,0.58)",
    mainBox: "rgba(29,166,215,0.14)",
    subBox: "rgba(130,242,147,0.14)",
    helloHeader: "#76B2EB",
    mainHeader: "#2b98ff",
    subHeader: "#5590c7",
    modeButton: "#76B2EB",
    navButton: "#85C8F4",
  },
  images: {
    profile: "/profile_fish.svg",
  },
  text: {
    modeButtonText: "Human Mode",
  },
};

const humanTheme = {
  colors: {
    bgGradTop: "rgba(252,208,168,0.42)",
    bgGradBottom: "rgba(245,151,131,0.53)",
    mainBox: "rgba(192,105,87,0.15)",
    subBox: "rgba(255,245,165,0.27)",
    helloHeader: "#F59C87",
    mainHeader: "#ED8269",
    subHeader: "#b97768",
    modeButton: "#F9B697",
    navButton: "#FBA996",
  },
  images: {
    profile: "/profile_human.jpg",
  },
  text: {
    modeButtonText: "Fish Mode",
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
