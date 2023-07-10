import { useContext } from "react";
import { Sun, Moon } from "phosphor-react";

import {
  ButtonDarkLight,
  HeaderButtonsContainer,
  HeaderContainer,
  NomeLogo,
} from "./styles";

import { ThemeContext } from "../../App";

export function Header() {
  const { toogleTheme, theme } = useContext(ThemeContext);

  function handleToogleTheme() {
    toogleTheme();
  }
  function toTheTop() {
    window.scroll(0, 0);
  }
  return (
    <HeaderContainer>
      <div className="containerHeader">
        <NomeLogo onClick={() => toTheTop()}>GELAIN</NomeLogo>
        <HeaderButtonsContainer>
          <div className="separatorButton">
            <ButtonDarkLight onClick={handleToogleTheme}>
              {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
            </ButtonDarkLight>
          </div>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
