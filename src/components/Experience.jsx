import React, { useState, useEffect, useRef } from 'react';
import FadeInSection from './FadeInSection';


const Experience = () => (
    <FadeInSection id="experience">
        <h2 className="section-heading">Where I've Worked</h2>
        <div className="experience-container">
            <div className="job">
                <div className="job-header">
                    <h3>Associate Software Developer</h3>
                    <p>May 2025 - Present</p>
                </div>
                <div className="job-details">
                    <h4>Cosmofeed</h4>
                    <ul>
                        <li><span className="accent-color">▹</span>I engineered and deployed critical internal dashboard features using a full-stack approach with React.js, Node.js, and MongoDB. A key achievement was implementing a robust Role-Based Access Control (RBAC) system from the ground up, which completely eliminated unauthorized access incidents across multiple modules and significantly enhanced internal data security.</li>
                        <li><span className="accent-color">▹</span>I specialized in elevating user experience by architecting reusable, modular UI components and integrating interactive modals for high-traffic pages. This focus on component-based architecture and performance tuning led to a reduction in page load times and a faster UI response, directly improving user engagement and operational efficiency for internal teams.</li>
                        <li><span className="accent-color">▹</span>Decreased page load times by 35% through UI/UX bug fixes and implementing responsive designs with React & Next.js.</li>
                    </ul>
                </div>
            </div>
            <div className="job">
                <div className="job-header">
                    <h3>Software Tester</h3>
                    <p>Aug 2024 - May 2025</p>
                </div>
                <div className="job-details">
                    <h4>Cosmofeed</h4>
                    <ul>
                        <li><span className="accent-color">▹</span>In my quality assurance role, I executed rigorous manual testing across both web and mobile platforms, identifying and documenting critical bugs that improved production stability.</li>
                       <li><span className="accent-color">▹</span>I was responsible for the end-to-end validation of business-critical modules, including user authentication (login/signup) and payment systems. My work ensured functional accuracy, security, and responsive design integrity across a wide range of devices and browsers, guaranteeing a consistent and reliable user experience.</li>
                        <li><span className="accent-color">▹</span>Increased overall test coverage by mentoring junior testers on best practices for bug reporting and regression testing.</li>
                    </ul>
                </div>
            </div>
        </div>
    </FadeInSection>
);

export default Experience;