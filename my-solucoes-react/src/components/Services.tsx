
import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="services-section fade-in-section">
            <div className="container services-layout">
                <div className="services-title-column">
                    <h2>SOLUTIONS</h2>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <h4>Programação de PLC</h4>
                        <p>Desenvolvimento de lógicas de controle para os principais fabricantes de PLCs do mercado.</p>
                        <div className="card-decorator"></div>
                    </div>
                    <div className="service-card">
                        <h4>Sistemas SCADA</h4>
                        <p>Implementação de sistemas de supervisão e aquisição de dados para monitoramento em tempo real.</p>
                        <div className="card-decorator"></div>
                    </div>
                    <div className="service-card">
                        <h4>Integração de IHM</h4>
                        <p>Criação de interfaces homem-máquina intuitivas para facilitar a operação de equipamentos.</p>
                        <div className="card-decorator"></div>
                    </div>
                    <div className="service-card">
                        <h4>Redes Industriais</h4>
                        <p>Projetos e configuração de redes de comunicação para garantir a conectividade dos seus sistemas.</p>
                        <div className="card-decorator"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
