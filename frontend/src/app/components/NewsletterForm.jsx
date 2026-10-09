import React, { useState } from 'react';
import { subscribeToNewsletter } from '../utils/api';

const NewsletterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contentPreference, setContentPreference] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        if (!email) {
            setErrorMessage('Email is required.');
            return;
        }

        try {
            await subscribeToNewsletter({ name, email, contentPreference });
            setSuccessMessage('Thank you for subscribing!');
            setName('');
            setEmail('');
            setContentPreference('');
        } catch (error) {
            setErrorMessage('There was an error subscribing. Please try again.');
        }
    };

    return (
        <form id="newsletter-form" onSubmit={handleSubmit} className="newsletter-form">
            <h2 className="form-title">Join Our Newsletter</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
            />
            <input
                id="newsletter-email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
            />
            <select
                value={contentPreference}
                onChange={(e) => setContentPreference(e.target.value)}
                className="form-select"
            >
                <option value="">Select Content Preference</option>
                <option value="updates">Updates</option>
                <option value="offers">Offers</option>
                <option value="news">News</option>
            </select>
            <button type="submit" className="form-button">Subscribe</button>
        </form>
    );
};

export default NewsletterForm;