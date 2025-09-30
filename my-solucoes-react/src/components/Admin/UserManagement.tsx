import React, { useState } from 'react';
import styles from './Admin.module.css'; // Import styles

interface User {
    id: number;
    name: string;
    email: string;
    role: 'Admin' | 'User';
}

const UserManagement: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
        { id: 2, name: 'Regular User', email: 'user@example.com', role: 'User' },
    ]);

    const handleRemoveUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h2>Gerenciamento de Usuários</h2>
            
            <div className={styles.card}> {/* Apply card style */}
                <h3>Adicionar Novo Usuário</h3>
                <form className={styles['user-form']}> {/* Apply form style if exists, or create one */}
                    <div className={styles['form-group']}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="role">Função</label>
                        <select id="role" name="role">
                            <option value="User">Usuário</option>
                            <option value="Admin">Administrador</option>
                        </select>
                    </div>
                    <button type="submit" className={styles['btn-primary']}>Adicionar Usuário</button>
                </form>
            </div>

            <div className={styles.card}> {/* Apply card style */}
                <h3>Usuários Existentes</h3>
                <table className={styles['users-table']}> {/* Apply table style */}
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Função</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handleRemoveUser(user.id)} className={styles['btn-danger']}>Remover</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
