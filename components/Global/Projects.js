import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects_section">
      <div className="projects_container container">
        <div className="top">
          <h1>QUALITY WORK</h1>
          <h1>RECENTLY DONE PROJECT</h1>
        </div>
        <div className="bottom">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
