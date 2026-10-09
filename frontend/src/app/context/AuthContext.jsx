import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            // Logic to fetch user data from backend or local storage
            // Example: const response = await fetch('/api/auth/user');
            // const userData = await response.json();
            // setUser(userData);
            setLoading(false);
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        // Logic to handle user login
        // Example: const response = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
        // const userData = await response.json();
        // setUser(userData);
    };

    const logout = async () => {
        // Logic to handle user logout
        // Example: await fetch('/api/auth/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};