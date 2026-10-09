module.exports = {
    successResponse: (res, data, message = 'Request was successful') => {
        return res.status(200).json({
            success: true,
            message,
            data,
        });
    },

    createdResponse: (res, data, message = 'Resource created successfully') => {
        return res.status(201).json({
            success: true,
            message,
            data,
        });
    },

    clientErrorResponse: (res, message = 'Client error occurred') => {
        return res.status(400).json({
            success: false,
            message,
        });
    },

    unauthorizedResponse: (res, message = 'Unauthorized access') => {
        return res.status(401).json({
            success: false,
            message,
        });
    },

    notFoundResponse: (res, message = 'Resource not found') => {
        return res.status(404).json({
            success: false,
            message,
        });
    },

    serverErrorResponse: (res, message = 'Internal server error') => {
        return res.status(500).json({
            success: false,
            message,
        });
    },
};