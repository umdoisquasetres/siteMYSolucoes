import React from 'react';

const Nfse: React.FC = () => {
    return (
        <div>
            <h2>Emissão de NFS-e</h2>
            
            <div className="card">
                <h3>Gerar Nova Nota Fiscal de Serviço Eletrônica</h3>
                <form className="nfse-form">
                    <div className="form-group">
                        <label htmlFor="customer">Cliente</label>
                        <select id="customer" name="customer">
                            <option>Selecione um cliente</option>
                            {/* Popular com clientes cadastrados */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="service">Serviço Prestado</label>
                        <textarea id="service" name="service" rows={5}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="value">Valor</label>
                        <input type="number" id="value" name="value" />
                    </div>
                    <button type="submit" className="btn-primary">Emitir NFS-e</button>
                </form>
            </div>

            <div className="card">
                <h3>Histórico de Emissões</h3>
                <table className="emissions-table">
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
