import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div>
                <p>&copy; {new Date().getFullYear()} BEAST COMMUNITY. All rights reserved.</p>
                <nav className="footer-links">
                    <Link to="/about">About</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="/community">Community</Link>
                    <Link to="/join">Join</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;