import jwt from 'jsonwebtoken';
import Logger from '../helpers/logger.js';

const logger = new Logger('authGuard')

export default (req, res, next) => {
    try {
        const auth = req.get('Authorization').replace('Bearer ', '');
        req.user = jwt.verify(auth, process.env.JWT_SECRET);
        next();
    } catch (e) {
        logger.error(e);
        if (typeof e === jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'Unauthorized' })
        }
        res.status(503).json({ message: 'Unavailable service'})
    }
}