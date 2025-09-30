
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section fade-in-section">
            <div className="container">
                <h3 className="section-title">ENTRE EM CONTATO</h3>
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <form>
                            <input type="text" name="name" placeholder="Seu Nome" required />
                            <input type="email" name="email" placeholder="Seu E-mail" required />
                            <textarea name="message" placeholder="Sua Mensagem" rows={5} required></textarea>
                            <button type="submit" className="btn-outline">Enviar Mensagem</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>Informações de Contato</h4>
                        <p><i className="fas fa-map-marker-alt"></i> Rua Industrial, 123, São Paulo, SP</p>
                        <p><i className="fas fa-phone"></i> (11) 98765-4321</p>
                        <p><i className="fas fa-envelope"></i> contato@mysolucoes.com</p>
                        <div className="social-media">
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
