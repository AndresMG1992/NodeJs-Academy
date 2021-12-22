import authGuard from '../helpers/auth-guard.js';
import Logger from '../helpers/logger.js';

const logger = new Logger('rolesMiddleware')

export default (req, res, next) => {
    const { user, originalUrl } = req;
    const acceptedRoles = authGuard.find(route => route.path === originalUrl)?.roles;
    if (!acceptedRoles) {
        res.status(503).json({ message: 'Unavailable service'});
    }
    if (acceptedRoles.length === 0 ||
        (
            acceptedRoles.length > 0 && 
            user.roles.length > 0 &&
            acceptedRoles.some( role => user.roles.includes(role))
        )
    ) {
        next();
    } else {
        logger.error('Unathorized')
        res.status(401).json({ message: 'Unauthorized'})
    }
}

