import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './routes/HomePage';
import ExplorePage from './routes/ExplorePage';
import ExploreDetailPage from './routes/ExploreDetailPage';
import CommunityPage from './routes/CommunityPage';
import JoinPage from './routes/JoinPage';
import AboutPage from './routes/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/explore" element={<ExplorePage />} />
                    <Route path="/explore/:slug" element={<ExploreDetailPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/join" element={<JoinPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;