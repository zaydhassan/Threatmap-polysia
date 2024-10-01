import React from 'react';
import './InfoPanel.css';


const InfoPanel = () => {
    return (
        <div className="info-panel">
            <div className="section">
                <h3>Top Targeted Countries</h3>
                <div className="red-line"></div>
                <ul>
                    <li><img src="mongolia.png" alt="Mongolia" /> Mongolia</li>
                    <li><img src="nepal.webp" alt="Nepal" /> Nepal</li>
                    <li><img src="georgia.png" alt="Georgia" /> Georgia</li>
                    <li><img src="angola.png" alt="Angola" /> Angola</li>
                </ul>
            </div>

            <div className="section">
                <h3>Top Targeted Industries</h3>
                <div className="red-line"></div>
                <ul>
                    <li><img src="education.png" alt="Education" />Education</li>
                    <li><img src="healthcare.png" alt="Healthcare" />Healthcare</li>
                    <li><img src="govt.png" alt="Government" />Government</li>
                </ul>
            </div>

            <div className="section">
                <h3>Top Malware Types</h3>
                <div className="red-line"></div>
                <ul>
                    <li><img src="botnet.png" alt="Botnet" />Botnet</li>
                    <li><img src="phishing.png" alt="Phishing" />Phishing</li>
                    <li><img src="mobile.png" alt="Mobile" />Mobile</li>
                </ul>
            </div>
            <div className="settings-icon">
                <i className="fas fa-cog"></i>
            </div>
        </div>
    );
};

export default InfoPanel;
