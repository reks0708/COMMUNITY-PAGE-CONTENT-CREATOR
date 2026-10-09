INSERT INTO newsletter_subscriptions (email, created_at) VALUES 
('example1@example.com', NOW()),
('example2@example.com', NOW()),
('example3@example.com', NOW());

INSERT INTO comments (author, message, created_at) VALUES 
('User1', 'This is a great community!', NOW()),
('User2', 'I love MrBeast’s videos!', NOW()),
('User3', 'Can’t wait for the next challenge!', NOW());

INSERT INTO likes (comment_id, user_id, created_at) VALUES 
(1, 1, NOW()),
(2, 2, NOW()),
(3, 3, NOW());

INSERT INTO reports (comment_id, user_id, reason, created_at) VALUES 
(1, 1, 'Inappropriate content', NOW()),
(2, 2, 'Spam', NOW());

INSERT INTO moderation (comment_id, action, created_at) VALUES 
(1, 'approved', NOW()),
(2, 'rejected', NOW());