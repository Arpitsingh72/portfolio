

import React, { useState, useEffect, useRef } from 'react';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="header-nav container">
                <a href="#home" className="logo">AS</a>
                <div className="desktop-menu">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                </div>
                {/* <a href="mailto:arpitsingh888167@gmail.com" className="contact-button">Contact</a> */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </nav>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="mailto:arpitsingh888167@gmail.com" className="contact-link-mobile">Contact</a>
            </div>
        </header>
    );
};

export default Header;