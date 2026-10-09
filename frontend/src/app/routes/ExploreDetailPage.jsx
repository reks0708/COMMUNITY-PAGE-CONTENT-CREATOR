import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchContent } from '../utils/api';

const ExploreDetailPage = () => {
    const { slug } = useParams();

    useEffect(() => {
        document.title = slug ? `MrBeast Community - ${slug}` : 'MrBeast Community';
    }, [slug]);

    const [content, setContent] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            const data = await fetchContent();
            const match = data.find((entry) => entry.slug === slug);
            setContent(match || null);
        };

        loadContent();
    }, [slug]);

    if (!content) {
        return (
            <div className="page-shell detail-empty">
                <p>Content not found.</p>
                <Link to="/explore" className="primary-btn">Back to Explore</Link>
            </div>
        );
    }

    return (
        <div className="page-shell detail-page">
            <Link to="/explore" className="back-link">← Back to Explore</Link>

            <div className="detail-hero">
                <div className="detail-image-wrap">
                    <img src={content.image} alt={content.title} />
                </div>

                <div className="detail-copy">
                    <span className="eyebrow">{content.stat}</span>
                    <h1>{content.title}</h1>
                    <p>{content.overview}</p>
                </div>
            </div>

            <div className="detail-grid">
                <div className="detail-panel">
                    <h2>What it looks like</h2>
                    <p>
                        This category captures the best of MrBeast’s online magic: escalating anticipation,
                        consistent surprise, and unforgettable viewing moments that turn curiosity into community excitement.
                    </p>
                </div>

                <div className="detail-panel">
                    <h2>Highlights</h2>
                    <ul>
                        {content.highlights.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExploreDetailPage;
