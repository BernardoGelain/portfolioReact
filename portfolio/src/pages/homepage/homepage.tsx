import { ThemeContext } from "../../App";
import { useContext, useEffect } from "react";
import { Header } from "../../components/header/header";
import MainContent from "../../components/mainContent/mainContent";
import AboutMe from "../../components/aboutMe/aboutMe";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
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
        ata-aos-duration="3000"
        data-aos-easing="ease-in-sine"
      >
        <AboutMe />
      </div>
    </>
  );
}
