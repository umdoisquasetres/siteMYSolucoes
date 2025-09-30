
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section fade-in-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h3 className="section-title">SOBRE NÓS</h3>
                        <h2>Inovação e Experiência em Automação</h2>
                        <p>Com mais de uma década de experiência, a M.Y. Soluções é líder no fornecimento de soluções de automação industrial. Nossa equipe de especialistas é apaixonada por tecnologia e dedicada a entregar resultados que superam as expectativas.</p>
                        <p>Nossa missão é impulsionar a produtividade e a segurança dos nossos clientes através de sistemas de controle robustos e inteligentes.</p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Equipe da M.Y. Soluções" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
