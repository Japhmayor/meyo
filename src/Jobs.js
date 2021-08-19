import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import JobData from "./Data";

function Jobs() {
  const [jobs] = useState(JobData);
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>

      <a
        type="button"
        className="btn"
        href="https://medium.com/@mrbjm1994/my-resume-4053ade911a0"
      >
        Resume
      </a>
    </section>
  );
}

export default Jobs;
