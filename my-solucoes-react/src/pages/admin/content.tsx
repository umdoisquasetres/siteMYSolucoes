import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import styles from '../../components/Admin/Admin.module.css'; // Import styles

interface AboutContent {
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageUrl: string;
}

interface ContentData {
    about: AboutContent;
}

const ContentManagementPage = () => {
    const [data, setData] = useState<ContentData | null>(null);
    const [about, setAbout] = useState<AboutContent | null>(null);

    useEffect(() => {
        fetch('/api/content')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setAbout(data.about);
            });
    }, []);

    const handleAboutChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!about) return;
        const { name, value } = e.target;
        if (name === 'paragraphs') {
            setAbout({ ...about, paragraphs: value.split('\n') });
        } else {
            setAbout({ ...about, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!about) return;
        const newData = { ...data, about };
        fetch('/api/content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
        .then(res => res.json())
        .then(result => {
            alert(result.message);
        });
    };

    if (!about) {
        return <AdminLayout><div>Loading...</div></AdminLayout>;
    }

    return (
        <AdminLayout>
            <div className={styles.card}> {/* Wrap content in a card */}
                <h2>Gerenciar Conteúdo da Seção "Sobre"</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles['form-group']}> {/* Use styles for form-group */}
                        <label htmlFor="title">Título</label>
                        <input type="text" id="title" name="title" value={about.title} onChange={handleAboutChange} />
                    </div>
                    <div className={styles['form-group']}> {/* Use styles for form-group */}
                        <label htmlFor="subtitle">Subtítulo</label>
                        <input type="text" id="subtitle" name="subtitle" value={about.subtitle} onChange={handleAboutChange} />
                    </div>
                    <div className={styles['form-group']}> {/* Use styles for form-group */}
                        <label htmlFor="paragraphs">Parágrafos (um por linha)</label>
                        <textarea id="paragraphs" name="paragraphs" rows={5} value={about.paragraphs.join('\n')} onChange={handleAboutChange}></textarea>
                    </div>
                    <div className={styles['form-group']}> {/* Use styles for form-group */}
                        <label htmlFor="imageUrl">URL da Imagem</label>
                        <input type="text" id="imageUrl" name="imageUrl" value={about.imageUrl} onChange={handleAboutChange} />
                    </div>
                    <button type="submit" className={styles['btn-primary']}>Salvar Alterações</button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default ContentManagementPage;
