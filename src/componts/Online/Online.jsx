import React from "react";

import "./Online.css";

const Online= () => {
  return (
    <div className="programs-container">
      <span className="badge">Academic Excellence</span>

      <h1>
        Online<span>Programs</span>
      </h1>

      <p className="subtitle">
        Explore our advanced academic offerings designed for higher education
        and specialization.
      </p>

      <div className="program-card">
        <div>
          <h3>BS in Data Science and Applications</h3>
          <p>
            A 4-year flexible program with multiple exit points
             (Foundational Certificate, Diploma, BSc, or BS).
          </p>
        </div>
        <button>View More →</button>
      </div>

      <div className="program-card">
        <div>
          <h3>BS in Electronic Systems:</h3>
          <p>
            A 4-year program focused on the electronics
             and embedded systems industry.
          </p>
        </div>
        <button>View More →</button>
      </div>

      <div className="program-card">
        <div>
          <h3>M.Tech / PG Diploma (Web-Enabled)</h3>
          <p>
            Designed for working professionals in areas like AI,
             Automotive Technology, and Information Security.
          </p>
        </div>
        <button>View More →</button>
      </div>

      
    </div>
  );
};

export default Online;