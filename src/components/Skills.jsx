import React, { useState, useEffect, useRef } from 'react';
import FadeInSection from './FadeInSection';



const Skills = () => (
    <FadeInSection id="skills">
        <h2 className="section-heading" style={{ textAlign: 'center' }}>My Technical Skills</h2>
        <div className="skills-grid">
            <div className="skill-category">
                <h3>Frontend</h3>
                <p>React, JavaScript, Next.js, HTML5, CSS3, SCSS</p>
            </div>
            <div className="skill-category">
                <h3>Backend</h3>
                <p>Node.js, REST API</p>
            </div>
            <div className="skill-category">
                <h3>Databases</h3>
                <p>MongoDB</p>
            </div>
            <div className="skill-category">
                <h3>Developer Tools</h3>
                <p>Git, VS Code, Postman, Jira, Cursor</p>
            </div>
        </div>
    </FadeInSection>
);

export default Skills;