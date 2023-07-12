import { ArrowDown } from "phosphor-react";
import { ThemeContext } from "../../App";
import {
  ArrowContainer,
  Coder,
  ContactButton,
  MainContainer,
  Nome,
  SpanContainer,
} from "./styles";
import { useContext } from "react";

export default function MainContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <MainContainer>
        <SpanContainer>
          <span>Web Developer</span>
          <Nome>Bernardo Gelain Dariva</Nome>
          <span className="description">
            Sou um desenvolvedor altamente dedicado e comprometido em criar
            soluções inovadoras. Minha abordagem focada, combinada com
            excelentes habilidades de resolução de problemas, permitem-me
            enfrentar desafios complexos com confiança. Além disso, minha
            capacidade de trabalho em equipe e comunicação eficaz tornam-me um
            colaborador valioso em qualquer projeto.
          </span>
          <ContactButton
            onClick={() => window.open("https://wa.me/555499728862")}
          >
            Contato
          </ContactButton>
        </SpanContainer>
        <Coder
          src={
            theme === "light" ? "./assets/coderLight.svg" : "./assets/coder.svg"
          }
        />
      </MainContainer>
      <ArrowContainer>
        <ArrowDown color={theme === `light` ? `#000` : `#FFFF`} size={32} />
      </ArrowContainer>
    </>
  );
}
