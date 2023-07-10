import TagTech from "../tagTech/tagTech";
import {
  CardContainer,
  ContainerButtons,
  ImgCard,
  InfoContainer,
  ProjectDescription,
  Title,
} from "./styles";

export default function Card() {
  return (
    <>
      <CardContainer>
        <ImgCard src="/assets/template.jpg" />
        <InfoContainer>
          <Title>Projeto</Title>
          <ContainerButtons>
            <TagTech />
          </ContainerButtons>
          <ProjectDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            id vitae assumenda mollitia? Fugit repellendus rerum molestias!
            Error, aut! Quibusdam a voluptatum at earum similique illo non illum
            laudantium voluptates.
          </ProjectDescription>
        </InfoContainer>
      </CardContainer>
    </>
  );
}
