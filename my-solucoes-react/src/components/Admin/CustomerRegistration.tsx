import React from 'react';
import styles from './Admin.module.css'; // Import styles

const CustomerRegistration: React.FC = () => {
    return (
        <div>
            <h2>Cadastro de Clientes</h2>
            
            <div className={styles.card}> {/* Apply card style */}
                <h3>Informações do Cliente</h3>
                <form className={styles['customer-form']}> {/* Apply form style if exists, or create one */}
                    <div className={styles['form-group']}>
                        <label htmlFor="companyName">Nome da Empresa</label>
                        <input type="text" id="companyName" name="companyName" />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="contactPerson">Pessoa de Contato</label>
                        <input type="text" id="contactPerson" name="contactPerson" />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="phone">Telefone</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="address">Endereço</label>
                        <input type="text" id="address" name="address" />
                    </div>
                    <button type="submit" className={styles['btn-primary']}>Cadastrar Cliente</button>
                </form>
            </div>
        </div>
    );
};

export default CustomerRegistration;
