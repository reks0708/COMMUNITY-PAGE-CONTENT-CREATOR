const healthCheck = (req, res) => {
    res.status(200).json({ message: 'Healthy' });
};

module.exports = {
    healthCheck,
};