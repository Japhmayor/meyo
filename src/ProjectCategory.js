import React from "react";

const ProjectCategory = ({ categories, filterCategory }) => {
  return (
    <div className="project-btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectCategory;
