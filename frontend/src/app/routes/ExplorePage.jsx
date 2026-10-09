import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchContent } from '../utils/api';

const ExplorePage = () => {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const data = await fetchContent();
                setContent(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="page-shell explore-page">
            <div className="section-heading">
                <span className="eyebrow">Explore the channel</span>
                <h1 className="explore-title">Watch the magic behind the biggest YouTube moments</h1>
            </div>

            <div className="content-grid">
                {content.map((item) => (
                    <Link key={item.id} to={`/explore/${item.slug}`} className="explore-card">
                        <img src={item.image} alt={item.title} />
                        <div className="explore-card-copy">
                            <span className="mini-tag">{item.stat}</span>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <span className="read-more">View overview →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;