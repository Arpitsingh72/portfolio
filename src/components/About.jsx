import React from 'react';
import FadeInSection from './FadeInSection';
import ProfileImage from '../assests/ProfileImage.jpg'

const About = () => (
    <FadeInSection id="about">
        <h2 className="section-heading">About Me</h2>
        <div className="about-grid">
            <div className="about-text">
                <p>As a Software Developer, I've worked on challenging projects that have honed my skills in both front-end and back-end development. I thrive on enhancing UI/UX, implementing robust security features, and optimizing application performance.</p>
                <p>My background as a Software Tester provided me with a keen eye for detail and a deep understanding of the software development lifecycle, which I now leverage to build high-quality, bug-free applications from the ground up.</p>
                <p>Here are a few technologies I've been working with recently:</p>
                <ul className="skills-list">
                   <li><span className="accent-color">▹</span>JavaScript (ES6+)</li>
                   <li><span className="accent-color">▹</span>React.js, Next.js & Node.js</li>
                   <li><span className="accent-color">▹</span>Redux</li>
                   <li><span className="accent-color">▹</span>MongoDB</li>
                   <li><span className="accent-color">▹</span>REST APIs</li>
               </ul>
            </div>
            <div className="about-image-container">
                <div className="image-wrapper">
                    <div className="profile-image"><img src={ProfileImage}/></div>
                    <div className="image-overlay"></div>
                    <div className="image-border"></div>
                </div>
            </div>
        </div>
    </FadeInSection>
);

export default About;
