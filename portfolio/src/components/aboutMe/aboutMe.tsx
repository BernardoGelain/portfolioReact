import {
  AboutMeDescription,
  AboutMeTitle,
  Bar,
  ContainerAbout,
  ContainerDescription,
} from "./styles";

export default function AboutMe() {
  return (
    <>
      <ContainerAbout>
        <AboutMeTitle>Sobre Mim</AboutMeTitle>
        <ContainerDescription>
          <Bar />
          <AboutMeDescription>
            Com mais de 2 anos de experiência como desenvolvedor React, possuo
            um amplo conhecimento e domínio dessa tecnologia. Utilizando
            TypeScript, sou capaz de criar aplicações web robustas e eficientes.
            Além disso, tenho expertise no uso de ferramentas complementares,
            como Styled Components e Next.js, para aprimorar a qualidade e a
            funcionalidade dos projetos. Minha trajetória profissional
            consolidou minhas habilidades em React, permitindo-me criar
            interfaces responsivas e interativas que proporcionam uma excelente
            experiência do usuário. Tenho um histórico comprovado de entrega de
            projetos de alta qualidade, cumprindo prazos e alcançando os
            objetivos estabelecidos.
          </AboutMeDescription>
        </ContainerDescription>
      </ContainerAbout>
    </>
  );
}
