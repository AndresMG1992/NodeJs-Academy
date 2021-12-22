import app from './app.js';
import Logger from './helpers/logger.js';
import { connect } from './db/redis.js';
const logger = new Logger('index');

const PORT = process.env.PORT || 3000;

Promise.resolve(connect)
    .then(() => {
        logger.info('Redis connected')
        app.listen(PORT, async () => {
            logger.info(`Server is running on port ${PORT}`);
        })
    })
    .catch( error => {
        logger.error('Error connecting to Redis', error);
        process.exit(-1);
    });
