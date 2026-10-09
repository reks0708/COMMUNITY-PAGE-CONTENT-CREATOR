import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/explore', label: 'Explore' },
    { to: '/community', label: 'Community' },
    { to: '/join', label: 'Join' },
    { to: '/about', label: 'About' },
];

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="logo">BEAST COMMUNITY</Link>
            </div>
            <ul className="navbar-links">
                {navItems.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="navbar-join">
                <Link to="/join" className="join-button">JOIN NOW</Link>
            </div>
        </nav>
    );
};

export default Navbar;