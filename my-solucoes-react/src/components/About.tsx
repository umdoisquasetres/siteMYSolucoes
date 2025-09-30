
import React, { useState, useEffect } from 'react';

interface AboutContent {
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageUrl: string;
}

const About: React.FC = () => {
    const [content, setContent] = useState<AboutContent | null>(null);

    useEffect(() => {
        console.log('About useEffect running');
        fetch('/api/content')
            .then(res => {
                console.log('Fetch response status:', res.status);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                if (data && data.about) {
                    setContent(data.about);
                    console.log('Content set:', data.about);
                } else {
                    console.log('Data or data.about is missing:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching content:', error);
            });
    }, []);

    if (!content) {
        return <div>Loading...</div>;
    }

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>{content.subtitle}</h2>
                        {content.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="about-image">
                        <img src={content.imageUrl} alt="Equipe da M.Y. Soluções" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
