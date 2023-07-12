import { Repo } from "../../model/Repo";
import TagTech from "../tagTech/tagTech";
import {
  CardContainer,
  ContainerButtons,
  ImgCard,
  InfoContainer,
  ProjectDescription,
  Title,
} from "./styles";

type Props = {
  repo: Repo;
};
export default function Card({ repo }: Props) {
  return (
    <>
      <CardContainer
        onClick={() => {
          window.open(repo.html_url);
        }}
      >
        <ImgCard src="/assets/template.jpg" />
        <InfoContainer>
          <Title>{repo.name.toUpperCase()}</Title>
          <ContainerButtons>
            {repo && <TagTech url={repo.languages_url} />}
          </ContainerButtons>
          <ProjectDescription>{repo.description}</ProjectDescription>
        </InfoContainer>
      </CardContainer>
    </>
  );
}
