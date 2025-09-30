import React from 'react';
import styles from './Admin.module.css'; // Import styles

const Nfse: React.FC = () => {
    return (
        <div>
            <h2>Emissão de NFS-e</h2>
            
            <div className={styles.card}> {/* Apply card style */}
                <h3>Gerar Nova Nota Fiscal de Serviço Eletrônica</h3>
                <form className={styles['nfse-form']}> {/* Apply form style if exists, or create one */}
                    <div className={styles['form-group']}>
                        <label htmlFor="customer">Cliente</label>
                        <select id="customer" name="customer">
                            <option>Selecione um cliente</option>
                            {/* Popular com clientes cadastrados */}
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="service">Serviço Prestado</label>
                        <textarea id="service" name="service" rows={5}></textarea>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="value">Valor</label>
                        <input type="number" id="value" name="value" />
                    </div>
                    <button type="submit" className={styles['btn-primary']}>Emitir NFS-e</button>
                </form>
            </div>

            <div className={styles.card}> {/* Apply card style */}
                <h3>Histórico de Emissões</h3>
                <table className={styles['emissions-table']}> {/* Apply table style */}
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Data</th>
                            <th>Valor</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Popular com histórico de emissões */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Nfse;
