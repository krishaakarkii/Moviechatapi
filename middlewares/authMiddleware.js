const jwt = require('jsonwebtoken');
const JWT_SECRET = 'b612a612b16159afdfe43b333ff2cb93016930be2d2aee70def634d3004968e8';

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authenticate;
