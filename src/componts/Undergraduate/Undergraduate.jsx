import React from 'react'

import "./Undergraduate.css";
import { useNavigate } from 'react-router-dom';

const Undergraduate = () => {
  const navigate=useNavigate();
  return (
    <div className="programs-container">
      <span className="badge">Academic Excellence</span>

      <h1>
        Undergraduate <span>Programs</span>
      </h1>

      <p className="subtitle">
        Explore our world-class academic offerings designed to shape the
        future leaders of technology and science.
      </p>

      <div className="program-card">
        <div>
          <h3>B.Tech (Bachelor of Technology)</h3>
          <p>
            A four-year undergraduate engineering program designed to foster
            innovation and technical expertise.
          </p>
        </div>
        <button onClick={()=>navigate('/btech')}>View More →</button>
      </div>

      <div className="program-card">
        <div>
          <h3>B.Sc (Bachelor of Science)</h3>
          <p>
            A comprehensive 3-year program focusing on pure and applied
            sciences.
          </p>
        </div>
        <button>View More →</button>
      </div>

<div className="program-card">
        <div>
          <h3>Dual degree(B.tech+M.tech)</h3>
          <p>
            An integrated 5-year 
            program offering both Bachelor's and Master's degrees in technology.
          </p>
        </div>
        <button>View More →</button>
      </div>
      

    </div>
  );
};

export default Undergraduate;