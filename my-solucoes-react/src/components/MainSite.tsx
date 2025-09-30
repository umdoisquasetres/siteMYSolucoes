import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';

const MainSite: React.FC = () => {
  useScrollAnimation();

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], main[id]');
    const navLinks = document.querySelectorAll('.navigation a');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < (sections[index] as HTMLElement).offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        const activeLink = document.querySelector(`.navigation a[href="#${sections[index].id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    return () => window.removeEventListener('scroll', changeLinkState);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainSite;
