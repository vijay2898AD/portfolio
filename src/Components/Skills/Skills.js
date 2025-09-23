import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import './Skills.css';

export default function Skills() {
    return (
        <div className="skills-section">
            <h1>MY <span className="highlight">SKILLS</span></h1>
            <div className="skills-grid">
                <div className="skill-card"><FaReact /> React.js</div>
                <div className="skill-card"><FaNodeJs /> Node.js</div>
                <div className="skill-card"><FaDatabase /> MongoDB</div>
                <div className="skill-card"><FaHtml5 /> HTML5</div>
                <div className="skill-card"><FaCss3Alt /> CSS3</div>
                <div className="skill-card"><FaJsSquare /> JavaScript</div>
            </div>
        </div>
    );
}
