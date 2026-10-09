export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateName = (name) => {
    return name.trim().length > 0;
};

export const validateNewsletterForm = (formData) => {
    const { name, email } = formData;
    const errors = {};

    if (!validateName(name)) {
        errors.name = "Name is required.";
    }

    if (!validateEmail(email)) {
        errors.email = "Email is invalid.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};