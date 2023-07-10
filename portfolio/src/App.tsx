import { createContext, useState } from "react";
import Routes from "./routes/routes";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/theme/light";
import { darkTheme } from "./styles/theme/dark";

type Themes = "light" | "dark" | undefined;

interface ThemeContextType {
  theme: Themes;
  toogleTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextType);
function App() {
  const [theme, setTheme] = useState<Themes>(() => {
    const storageValue = localStorage.getItem("GELAIN-THEME:theme-1.0.0");

    if (storageValue == "light") {
      return "light";
    } else if (storageValue == "dark" || !storageValue) {
      return "dark";
    }
  });

  function toogleTheme() {
    const themeNow = theme === "light" ? "dark" : "light";

    setTheme(themeNow);

    localStorage.setItem("GELAIN-THEME:theme-1.0.0", JSON.stringify(themeNow));
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
          <GlobalStyle />
          <Routes />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
