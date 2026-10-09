import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';

import mrBeastHeroImage from '../../image.png';
import mrBeastMilestoneImage from '../../image copy.png';
import mrBeastCrewChallengeImage from '../../../image.png';

const youtubeLogo = 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg';
const mrBeastPortrait = mrBeastHeroImage;
const challengeShot = mrBeastHeroImage;
const mrBeastBrand = 'MRBEAST';
const realChallengeImage1 = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';
const realChallengeImage2 = mrBeastHeroImage;
const realChallengeImage3 = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80';
const realChallengeImage4 = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80';
const realMilestoneImage = mrBeastMilestoneImage;
const realCrewImage = mrBeastCrewChallengeImage;
const realGiveawayImage = mrBeastHeroImage;

const achievements = [
    {
        title: 'Massive global reach',
        text: 'MrBeast has grown his audience to hundreds of millions, turning every upload into a worldwide cultural event and giving fans a reason to tune in for big moments.',
    },
    {
        title: 'Record-breaking challenges',
        text: 'He has built a reputation around giant, cinematic challenge concepts such as last-to-leave competitions, high-stakes elimination stunts, and massive team-building events.',
    },
    {
        title: 'Philanthropy at scale',
        text: 'From cash giveaways and giant donations to charity events and community support, his content blends entertainment with generosity in a way that feels huge and personal.',
    },
];

const challengeMoments = [
    {
        title: 'I Built the Biggest',
        text: 'Large-scale challenge builds and giant props create hyper-visual experiences that feel like a live event.',
        image: realChallengeImage1,
    },
    {
        title: 'Last To Leave',
        text: 'Endurance-based elimination challenges push contestants to the edge and keep viewers locked in to every minute.',
        image: realChallengeImage2,
    },
    {
        title: 'Giving Away Everything',
        text: 'Huge giveaways and luxury moments merge spectacle with generosity, making the channel feel different from a normal creator page.',
        image: realChallengeImage3,
    },
    {
        title: 'Experimental Stunts',
        text: 'Ambitious, high-risk ideas make each challenge feel like a cinematic production while reinforcing the channel’s huge scale.',
        image: realChallengeImage4,
    },
];

const premiumGallery = [
    { title: 'Subscriber milestone', image: realMilestoneImage },
    { title: 'Crew challenge energy', image: realCrewImage },
    { title: 'Giveaway moment', image: realGiveawayImage },
];

const HomePage = () => {
    const [notifyVisible, setNotifyVisible] = useState(true);

    const openNewsletter = () => {
        document.getElementById('newsletter-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        window.setTimeout(() => document.getElementById('newsletter-email')?.focus({ preventScroll: true }), 350);
    };

    const openHighlights = () => {
        document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        document.title = 'MrBeast Community - Home';
        const timer = setTimeout(() => setNotifyVisible(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="page-shell">
            <section className="hero-section">
                <div className="hero-copy">
                    <span className="eyebrow">UNOFFICIAL FAN COMMUNITY</span>
                    <h1>Welcome to the MrBeast Community</h1>
                    <p>
                        Explore the world of one of YouTube’s most ambitious creators, where massive challenges,
                        huge giveaways, and inspiring philanthropy turn every upload into a global event.
                    </p>
                    <div className="hero-actions">
                        <Link to="/explore" className="primary-btn">Explore Content</Link>
                        <Link to="/join" className="secondary-btn">Join the Community</Link>
                        <button className="notify-btn" type="button" onClick={openNewsletter}>Get Notified</button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-box">
                            <strong>350M+</strong>
                            <span>Subscribers</span>
                        </div>
                        <div className="stat-box">
                            <strong>20B+</strong>
                            <span>Views</span>
                        </div>
                        <div className="stat-box">
                            <strong>100+</strong>
                            <span>Big viral stunts</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="youtube-badge">
                        <img src={youtubeLogo} alt="YouTube logo" />
                        <span>{mrBeastBrand}</span>
                    </div>

                    <div className="visual-frame large">
                        <img
                            src={challengeShot}
                            alt="Real challenge atmosphere from a high-energy creator event"
                        />
                    </div>

                    <div className="cartoon-panel">
                        <img src={mrBeastPortrait} alt="Real creator portrait" />
                    </div>

                    <div className="visual-badge">
                        <span>Creator of the year energy</span>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="section-heading">
                    <span className="eyebrow">Why people follow him</span>
                    <h2>Achievements that changed YouTube</h2>
                </div>

                <div className="achievement-grid">
                    {achievements.map((item) => (
                        <article key={item.title} className="info-card">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="content-section premium-gallery-section">
                <div className="section-heading">
                    <span className="eyebrow">Featured challenge gallery</span>
                    <h2>Big moments from the MrBeast universe</h2>
                </div>

                <div className="premium-gallery">
                    {premiumGallery.map((item) => (
                        <div key={item.title} className="premium-gallery-item">
                            <img src={item.image} alt={item.title} />
                            <div className="premium-gallery-label">{item.title}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="content-section spotlight-section" id="highlights">
                <div className="section-heading">
                    <span className="eyebrow">Fan favorites</span>
                    <h2>What makes the channel stand out</h2>
                </div>

                <div className="spotlight-grid">
                    {challengeMoments.map((card) => (
                        <article key={card.title} className="spotlight-card">
                            <img src={card.image} alt={card.title} />
                            <div className="spotlight-copy">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="content-section about-section">
                <div className="about-copy">
                    <span className="eyebrow">About the channel</span>
                    <h2>Big ideas, bigger impact</h2>
                    <p>
                        MrBeast is known for turning creativity into spectacle. His channel combines massive challenges,
                        world-record-style experiments, and generous giving, creating a mix of entertainment and impact that has
                        inspired millions of fans and creators around the world. From giant survival games to overwhelming giveaways,
                        his videos are built around one core idea: make the impossible feel exciting and shareable.
                    </p>
                    <div className="mini-actions">
                        <button type="button" className="notify-btn alt" onClick={openNewsletter}>Follow New Drops</button>
                        <button type="button" className="notify-btn secondary" onClick={openHighlights}>See Highlights</button>
                    </div>
                </div>
                <div className="about-image-card">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
                        alt="Fan community celebrating content creator culture"
                    />
                </div>
            </section>

            <NewsletterForm />

            {notifyVisible && (
                <div className="premium-toast" role="status" aria-live="polite">
                    <span className="toast-dot" />
                    New challenge drops are live — get notified
                </div>
            )}
        </main>
    );
};

export default HomePage;