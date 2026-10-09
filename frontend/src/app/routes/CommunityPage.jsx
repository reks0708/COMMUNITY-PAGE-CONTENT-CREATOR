import React, { useEffect, useState } from 'react';
import CommentList from '../components/CommentList';
import CommentComposer from '../components/CommentComposer';
import { fetchComments } from '../utils/api';

const CommunityPage = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadComments = async () => {
            try {
                const fetchedComments = await fetchComments();
                setComments(fetchedComments);
            } catch (err) {
                setError('Failed to load comments.');
            } finally {
                setLoading(false);
            }
        };

        loadComments();
    }, []);

    return (
        <div className="community-page">
            <h1 className="page-title">Community Discussions</h1>
            {loading && <p>Loading comments...</p>}
            {error && <p>{error}</p>}
            <CommentComposer onCommentAdded={(newComment) => setComments([...comments, newComment])} />
            <CommentList comments={comments} />
        </div>
    );
};

export default CommunityPage;