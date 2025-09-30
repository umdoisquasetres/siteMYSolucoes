import React from 'react';
import Link from 'next/link';
import styles from './Admin.module.css';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles['admin-container']}>
            <aside className={styles['admin-sidebar']}>
                <div className={styles['sidebar-header']}>
                    <h2>Admin Dashboard</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link href="/admin"><i className="fas fa-home"></i> Início</Link></li>
                        <li><Link href="/admin/content"><i className="fas fa-edit"></i> Gerenciar Conteúdo</Link></li>
                        <li><Link href="/admin/user-management"><i className="fas fa-users"></i> Gerenciamento de Usuários</Link></li>
                        <li><Link href="/admin/customer-registration"><i className="fas fa-user-plus"></i> Cadastro de Clientes</Link></li>
                        <li><Link href="/admin/nfse"><i className="fas fa-file-invoice"></i> Emissão de NFS-e</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className={styles['admin-content']}>
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;