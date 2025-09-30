import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const targetId = e.currentTarget.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        setMenuActive(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    <h1>M.Y. SOLUÇÕES</h1>
                    <p>PLC PROGRAMMING & AUTOMAÇÃO</p>
                </div>
                <nav className={`navigation ${menuActive ? 'active' : ''}`}>
                    <a href="#home" className="active" onClick={handleLinkClick}>Home</a>
                    <a href="#about" onClick={handleLinkClick}>Sobre Nós</a>
                    <a href="#services" onClick={handleLinkClick}>Serviços</a>
                    <a href="#testimonials" onClick={handleLinkClick}>Depoimentos</a>
                    <a href="#contact" onClick={handleLinkClick}>Contato</a>
                </nav>
                <button className="menu-toggle" onClick={handleMenuToggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;