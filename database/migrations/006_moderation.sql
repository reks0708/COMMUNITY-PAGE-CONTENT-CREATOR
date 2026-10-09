CREATE TABLE moderation (
    id SERIAL PRIMARY KEY,
    comment_id INT NOT NULL,
    action VARCHAR(50) NOT NULL,
    reason TEXT,
    moderator_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE,
    FOREIGN KEY (moderator_id) REFERENCES users(id) ON DELETE CASCADE
);