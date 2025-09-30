import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import './Admin.css';

const Admin: React.FC = () => {
    return (
        <div className="admin-container">
            <aside className="admin-sidebar">
                <nav>
                    <ul>
                        <li><Link to="/admin">Início</Link></li>
                        <li><Link to="user-management">Gerenciamento de Usuários</Link></li>
                        <li><Link to="customer-registration">Cadastro de Clientes</Link></li>
                        <li><Link to="nfse">Emissão de NFS-e</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="admin-content">
                <Outlet />
            </main>
        </div>
    );
};

export default Admin;
