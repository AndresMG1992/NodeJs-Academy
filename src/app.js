import express from 'express';
import helmet from 'helmet';
import mongo from './db/mongo.js';
import postgres from './db/postgres.js';
import router from './routes/index.js';
import Logger from './helpers/logger.js';

const logger = new Logger('app')

Promise.resolve(mongo)
    .then(() => logger.info('[Mongo] Connected to DB!'))
    .catch((error) => logger.error('[Mongo] Error connecting to the DB', error));

Promise.resolve(postgres.authenticate())
    .then(() => logger.info('[Postgres] Connected to DB!'))
    .catch( err => logger.error('[Postgres] Error connecting to the DB', err))

const app = express();

app.use(helmet());
app.use(express.json());
app.use(router);

export default app;