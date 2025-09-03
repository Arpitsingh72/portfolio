import React, { useState, useEffect, useRef } from 'react';
import FadeInSection from './FadeInSection';
import ProjectCard from './ProjectCard';



const Projects = () => (
    <FadeInSection id="projects">
        <h2 className="section-heading">Things I've Built</h2>
        <div className="projects-grid">
            <ProjectCard 
                title="Internal Dashboard" 
                description="An internal analytics dashboard to monitor team KPIs and track creator engagement, resulting improvement in reporting efficiency."
                tags={['React.js', 'Node.js', 'Data Viz']}
            />
            <ProjectCard 
                title="Typing Test Application" 
                description="A React-based app that calculates WPM and typing accuracy in real-time, featuring live keystroke tracking and performance analytics."
                tags={['React.js', 'State Management']}
                url = "https://github.com/Arpitsingh72/advance-typing-test"
            />
             <ProjectCard 
                title="Todo-List App" 
                description="This Todo App lets you add, edit, and delete tasks with due dates.
                 Tasks automatically move to Completed or Incomplete sections."
                tags={['React.js', 'State Management']}
               url = "https://github.com/Arpitsingh72/Advance-Todo-List"
            />
        </div>
    </FadeInSection>
);

export default Projects;