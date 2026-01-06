import React from "react";

import "./Postgraduate.css";

const Postgraduate= () => {
  return (
    <div className="programs-container">
      <span className="badge">Academic Excellence</span>

      <h1>
        Postgraduate <span>Programs</span>
      </h1>

      <p className="subtitle">
        Explore our advanced academic offerings designed for higher education
        and specialization.
      </p>

      <div className="program-card">
        <div>
          <h3>M.tech(Master of Technology)</h3>
          <p>
            M.Tech (Master of Technology) program focusing on advanced technical
            skills and research.
          </p>
        </div>
        <button>View More →</button>
      </div>

      <div className="program-card">
        <div>
          <h3>M.sc(Master of Science)</h3>
          <p>
            A research-intensive two-year degree offered in the fundamental sciences: Physics,
             Chemistry, and Mathematics.
          </p>
        </div>
        <button>View More →</button>
      </div>

      <div className="program-card">
        <div>
          <h3>M.A(Master of Arts)</h3>
          <p>
            A two-year interdisciplinary program offered by the Humanities 
            department in Development Studies, Economics, and English.
          </p>
        </div>
        <button>View More →</button>
      </div>

      <div className="program-card">
        <div>
          <h3>MBA(Master of Buiseness Admnistration)</h3>
          <p>
            A high-ranking two-year management program structured across seven
             quarters with an emphasis on analytical and technical leadership.
          </p>
        </div>
        <button>View More →</button>
      </div>
    </div>
  );
};

export default Postgraduate;