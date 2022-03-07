import AboutSection from "../components/Global/AboutSection";
import Footer from "../components/Global/Footer";
import NavBar from "../components/Global/NavBar";
import Projects from "../components/Global/Projects";
import ServicesSection from "../components/Global/ServicesSection";
import Techs from "../components/Global/Techs";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="home_page">
      <Header />
      <AboutSection />
      <Techs />
      <ServicesSection />
      <Projects />
    </div>
  );
}
