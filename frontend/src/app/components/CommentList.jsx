import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list">
            {comments.length === 0 ? (
                <p>No comments yet. Be the first to comment!</p>
            ) : (
                comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <div className="comment-author">{comment.author}</div>
                        <div className="comment-timestamp">{new Date(comment.timestamp).toLocaleString()}</div>
                        <div className="comment-message">{comment.message}</div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CommentList;