const sanitizeInput = (input) => {
    if (typeof input !== 'string') {
        return '';
    }
    return input
        .replace(/<script.*?>.*?<\/script>/gi, '') // Remove script tags
        .replace(/<\/?[^>]+(>|$)/g, ''); // Remove HTML tags
};

const sanitizeComment = (comment) => {
    return sanitizeInput(comment);
};

const sanitizeNewsletterEmail = (email) => {
    return sanitizeInput(email).trim().toLowerCase();
};

module.exports = {
    sanitizeInput,
    sanitizeComment,
    sanitizeNewsletterEmail,
};