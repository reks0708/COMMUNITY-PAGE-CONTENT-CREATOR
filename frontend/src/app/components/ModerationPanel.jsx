import React, { useEffect, useState } from 'react';
import { fetchComments, approveComment, rejectComment } from '../utils/api';

const ModerationPanel = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadComments = async () => {
            try {
                const fetchedComments = await fetchComments();
                setComments(fetchedComments);
            } catch (err) {
                setError('Failed to load comments');
            } finally {
                setLoading(false);
            }
        };

        loadComments();
    }, []);

    const handleApprove = async (commentId) => {
        try {
            await approveComment(commentId);
            setComments(comments.filter(comment => comment.id !== commentId));
        } catch (err) {
            setError('Failed to approve comment');
        }
    };

    const handleReject = async (commentId) => {
        try {
            await rejectComment(commentId);
            setComments(comments.filter(comment => comment.id !== commentId));
        } catch (err) {
            setError('Failed to reject comment');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="moderation-panel">
            <h2>Moderation Panel</h2>
            {comments.length === 0 ? (
                <p>No comments to moderate.</p>
            ) : (
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>
                            <p>{comment.message}</p>
                            <button onClick={() => handleApprove(comment.id)}>Approve</button>
                            <button onClick={() => handleReject(comment.id)}>Reject</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ModerationPanel;