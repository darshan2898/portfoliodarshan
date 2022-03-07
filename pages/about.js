import AboutSection from "../components/Global/AboutSection";
import SecondHeader from "../components/Global/SecondHeader";
import ServicesSection from "../components/Global/ServicesSection";
import Techs from "../components/Global/Techs";

const about = () => {
  return (
    <div>
      <SecondHeader />
      <AboutSection />
      <Techs />
      <ServicesSection />
    </div>
  );
};

export default about;
