import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Recent Daily Attacks</h3>
      <div className="attack-graph">
        {/* chart or image here */}
        <img src="path-to-graph.png" alt="Attack Graph" />
      </div>
      <h3>Real-Time Attacks</h3>
      <div className="real-time-attacks">
        {/* Placeholder for real-time attack logs */}
        <div className="attack">10:50:33 Canada ➡ Canada</div>
        <div className="attack">10:50:32 Canada ➡ Canada</div>
        <div className="attack">10:50:31 Canada ➡ USA</div>
      </div>
    </div>
  );
};

export default Sidebar;
