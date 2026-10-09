import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api';
import NewsletterForm from '../components/NewsletterForm';

const JoinPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteCategory, setFavoriteCategory] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await api.post('/newsletter', { name, email, favoriteCategory });
            if (response.status === 200) {
                setSuccess('Successfully joined the community!');
                setName('');
                setEmail('');
                setFavoriteCategory('');
                setTimeout(() => navigate('/'), 2000);
            }
        } catch (err) {
            setError('There was an error joining the community. Please try again.');
        }
    };

    return (
        <div className="join-page">
            <h1 className="join-page__title">Join the Beast Community</h1>
            <form className="join-page__form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="favoriteCategory">Favorite Content Category:</label>
                    <input
                        type="text"
                        id="favoriteCategory"
                        value={favoriteCategory}
                        onChange={(e) => setFavoriteCategory(e.target.value)}
                    />
                </div>
                <button type="submit" className="join-page__submit-button">Join</button>
                {error && <p className="join-page__error">{error}</p>}
                {success && <p className="join-page__success">{success}</p>}
            </form>
            <NewsletterForm />
        </div>
    );
};

export default JoinPage;