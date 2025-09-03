import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null); // Using a more descriptive ref name

    useEffect(() => {
        const currentElement = sectionRef.current;

        // The Intersection Observer API allows us to know when an element enters the screen.
        const observer = new IntersectionObserver(
            ([entry]) => { // We only care about the first entry
                // If the element is intersecting (on screen)
                if (entry.isIntersecting) {
                    setIsVisible(true); // Make it visible
                    // Stop observing the element once it's visible to improve performance.
                    if (currentElement) {
                        observer.unobserve(currentElement);
                    }
                }
            },
            {
                // Start the animation when 15% of the section is visible
                threshold: 0.15,
            }
        );

        // Start observing the section element if it exists in the DOM.
        if (currentElement) {
            observer.observe(currentElement);
        }

        // This is a cleanup function that runs when the component is removed from the screen.
        // It's good practice to stop observing to prevent memory leaks.
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []); // The empty dependency array ensures this code runs only once.

    return (
        <section
            id={id}
            ref={sectionRef} // Attach the ref to this section
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </section>
    );
};

export default FadeInSection;