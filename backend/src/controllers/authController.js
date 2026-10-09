const authService = require('../services/authService');
const { validateSignup, validateLogin } = require('../middleware/validation');
const { sendResponse } = require('../utils/responses');

exports.signup = async (req, res) => {
    const { error } = validateSignup(req.body);
    if (error) return sendResponse(res, 400, error.details[0].message);

    try {
        const user = await authService.signup(req.body);
        sendResponse(res, 201, { message: 'User created successfully', user });
    } catch (err) {
        sendResponse(res, 500, 'Internal server error');
    }
};

exports.login = async (req, res) => {
    const { error } = validateLogin(req.body);
    if (error) return sendResponse(res, 400, error.details[0].message);

    try {
        const token = await authService.login(req.body);
        sendResponse(res, 200, { message: 'Login successful', token });
    } catch (err) {
        sendResponse(res, 401, 'Invalid email or password');
    }
};