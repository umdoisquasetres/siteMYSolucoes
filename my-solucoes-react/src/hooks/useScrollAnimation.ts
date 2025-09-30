
import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const fadeInSections = document.querySelectorAll('.fade-in-section');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeInSections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            fadeInSections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);
};

export default useScrollAnimation;
