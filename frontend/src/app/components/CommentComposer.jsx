import React, { useState } from 'react';
import { postComment } from '../utils/api';

const CommentComposer = ({ onCommentAdded }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim()) {
            try {
                const newComment = await postComment({ message: comment });
                if (onCommentAdded) { onCommentAdded(newComment); }
                setComment('');
            } catch (error) {
                console.error('Error submitting comment:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-composer">
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment..."
                required
                className="comment-input"
            />
            <button type="submit" className="submit-button">
                Submit
            </button>
        </form>
    );
};

export default CommentComposer;