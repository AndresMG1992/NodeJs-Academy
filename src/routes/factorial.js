import { Router } from 'express';
import factorial from '../lib/factorial.js';
import redisClient from '../db/redis.js';

const router = Router();

router.get('/:n', async (req, res) => {

    const { n } = req.params;
    await redisClient.connect();
    let result = await redisClient.get(n);
    if (!result) {
        result = factorial(parseInt(n));
        redisClient.set(n, result);
    }
    redisClient.quit();
    res.json({ message: `The factorial of ${n} is ${result}`});
});

const a = 1;
export default router;