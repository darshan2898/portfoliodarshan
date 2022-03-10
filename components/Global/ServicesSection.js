import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
  return (
    <section className="services_section">
      <div className="services_container container">
        <div className="top">
          <h1>SERVICE OFFERS</h1>
          <p>The following set of services</p>
          <p>This are the services that i can provide at any time.</p>
        </div>
        <div className="bottom">
          <ServicesCard
            pic={"/images/htcs.png"}
            title={"PSD TO HTML"}
            info={
              "let's turn your Photo-Shop Document to Html Web page (Responsive)"
            }
          />
          <ServicesCard
            pic={"/images/uiux.png"}
            title={"UI/UX DESIGN"}
            info={
              "User Interfaces Designs to neat and easy to understand  Web documents."
            }
          />
          <ServicesCard
            pic={"/images/webdesign.png"}
            title={"DEVELOPMENT"}
            info={
              "Scalable Web Applications Development with Interactive Features. "
            }
          />
          <ServicesCard
            pic={"/images/seo.png"}
            title={"SEO OPTIMIZE"}
            info={
              "SEO stands for search engine optimization, Improve in organic search results."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
