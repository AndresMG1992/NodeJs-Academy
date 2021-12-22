import { Router } from 'express';
import morgan from 'morgan';
import authRouter from './auth.js';
import usersRouter from './users.js';
import driversRouter from './drivers.js';
import factorialRouter from './factorial.js';
import teamsRouter from './teams.js';
import isAuthenticated from '../middlewares/auth.js';
import isAuthorized from '../middlewares/isAuthorized.js';


const router = Router();

router
    .use(morgan('combined'))
    .use('/factorial', factorialRouter)
    .use('/auth', authRouter)
    .use(isAuthenticated)
    .use(isAuthorized)
    .use('/users', usersRouter)
    .use('/drivers', driversRouter)
    .use('/teams', teamsRouter)

export default router;