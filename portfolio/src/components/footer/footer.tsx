import {
  ContainerSocials,
  FooterContainer,
  LastPhrase,
  SocialImg,
  TextFooterSocial,
} from "./styles";
import { ThemeContext } from "../../App";
import { useContext } from "react";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const imgLinkedin =
    theme == "light" ? "/assets/linkedin.png" : "/assets/linkedinDark.png";
  const imgGithub =
    theme == "light" ? "/assets/github.png" : "/assets/githubDark.png";
  return (
    <>
      <FooterContainer>
        <ContainerSocials>
          <div>
            <SocialImg src={imgLinkedin} />
            <TextFooterSocial>
              linkedin.com/in/bernardogelaindariva/
            </TextFooterSocial>
          </div>
          <div>
            <SocialImg src={imgGithub} />
            <TextFooterSocial>github.com/BernardoGelain</TextFooterSocial>
          </div>
        </ContainerSocials>
        <LastPhrase>"Veritax lux mea."</LastPhrase>
      </FooterContainer>
    </>
  );
}
