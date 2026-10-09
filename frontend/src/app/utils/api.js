import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
});

export const fetchHealth = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/health`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching health status');
    }
};

export const subscribeToNewsletter = async (payload) => {
    try {
        const response = await api.post('/newsletter', payload);
        return response.data;
    } catch (error) {
        throw new Error('Error subscribing to newsletter');
    }
};

export const fetchComments = async () => {
    try {
        const response = await api.get('/comments');
        return response.data;
    } catch (error) {
        return [];
    }
};

export const postComment = async (commentData) => {
    try {
        const response = await api.post('/comments', commentData);
        return response.data;
    } catch (error) {
        return {
            id: Date.now(),
            author: 'You',
            timestamp: new Date().toISOString(),
            message: commentData.message,
        };
    }
};

export const fetchContent = async () => {
    return [
        {
            id: 1,
            slug: 'challenges',
            title: 'Challenges',
            description: 'Epic challenge content and huge community moments.',
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
            overview: 'MrBeast challenges turn ordinary moments into unforgettable spectacles. From crossing giant obstacles to extreme endurance tests, these videos center on big stakes, massive energy, and fan-favorite competition.',
            highlights: ['Huge prize pools', 'High-energy competition', 'Massive fan engagement'],
            stat: '10M+ watch-time spikes'
        },
        {
            id: 2,
            slug: 'philanthropy',
            title: 'Philanthropy',
            description: 'Charity and giving back to communities in action.',
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
            overview: 'The philanthropic side of the channel focuses on giving massive gifts, funding life-changing moments, and supporting communities through high-impact generosity that reaches beyond the screen.',
            highlights: ['Cash giveaways', 'Community support', 'Big-hearted impact'],
            stat: '100+ community events'
        },
        {
            id: 3,
            slug: 'stunts',
            title: 'Creative Stunts',
            description: 'Big ideas, bold experiments, and unforgettable entertainment.',
            image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=80',
            overview: 'His stunt content blends spectacle and storytelling, using cinematic scale to build tension, surprise, and joy. It keeps viewers hooked with huge concepts and unforgettable reveals.',
            highlights: ['World-record energy', 'Cinematic storytelling', 'Pure viral moments'],
            stat: '20B+ total views'
        },
    ];
};

export const likeComment = async (commentId) => {
    try {
        const response = await api.post(`/comments/${commentId}/likes`);
        return response.data;
    } catch (error) {
        throw new Error('Error liking comment');
    }
};

export const reportComment = async (commentId) => {
    try {
        const response = await api.post(`/comments/${commentId}/reports`);
        return response.data;
    } catch (error) {
        throw new Error('Error reporting comment');
    }
};