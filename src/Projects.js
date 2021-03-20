import { useState } from "react";
import ProjectData from "./ProjectData";
import Project from "./Project";
import ProjectCategory from "./ProjectCategory";
const allCategories = [
  "all",
  ...new Set(ProjectData.map((data) => data.category)),
];

function Projects() {
  const [projectInfo, setProjectInfo] = useState(ProjectData);
  const [categories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setProjectInfo(ProjectData);
      return;
    }
    const newdata = ProjectData.filter((data) => data.category === category);
    setProjectInfo(newdata);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <ProjectCategory
          categories={categories}
          filterCategory={filterCategory}
        />
        <Project projectInfo={projectInfo} />
      </section>
    </main>
  );
}

export default Projects;
