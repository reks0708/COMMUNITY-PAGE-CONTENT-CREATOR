const newsletterService = require('../services/newsletterService');
const { validateEmail } = require('../middleware/validation');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/responses');

exports.subscribeToNewsletter = async (req, res) => {
    const { email } = req.body;

    // Validate email
    const validationError = validateEmail(email);
    if (validationError) {
        return sendErrorResponse(res, validationError);
    }

    try {
        const subscription = await newsletterService.subscribe(email);
        return sendSuccessResponse(res, { message: 'Subscription successful', subscription });
    } catch (error) {
        return sendErrorResponse(res, { message: 'Subscription failed', error: error.message });
    }
};