import { ThemeContext } from "../../App";
import { useContext, useEffect } from "react";
import { Header } from "../../components/header/header";
import MainContent from "../../components/mainContent/mainContent";
import AboutMe from "../../components/aboutMe/aboutMe";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../../components/card/card";
import { CardContainer, ContainerTechs, SpanTitulo, Tech } from "./styles";
import Footer from "../../components/footer/footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Repo } from "../../model/Repo";

export default function Homepage() {
  const { data } = useQuery("repos", () => {
    return axios
      .get("https://api.github.com/users/bernardoGelain/repos")
      .then((res) => res.data);
  });
  console.log(data);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    AOS.refreshHard();
  }, [theme]);
  return (
    <>
      <Header />
      <div data-aos="fade-up" data-aos-duration="3000">
        <MainContent />
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
      >
        <AboutMe />
      </div>
      <div data-aos="fade" data-aos-easing="ease-in-sine">
        <SpanTitulo>Projetos</SpanTitulo>
        <CardContainer>
          {data?.map((repo: Repo) => {
            return (
              <div
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
              >
                <Card repo={repo} />
              </div>
            );
          })}
        </CardContainer>
      </div>
      <ContainerTechs>
        <Tech src="/assets/js.png" />
        <Tech src="/assets/ts.png" />
        <Tech src="/assets/react.png" />
        <Tech src="/assets/redux.png" />
        {/*  <Tech src="/assets/next.png" /> */}
        <Tech src="/assets/sql.png" />
        <Tech src="/assets/php.png" />
        <Tech src="/assets/laravel.png" />
      </ContainerTechs>
      <Footer />
    </>
  );
}
