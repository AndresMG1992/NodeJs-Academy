import { Router } from 'express';
import UserService from '../services/userService.js';

const router = Router();
const userService = new UserService();

router.post('/', async (req, res) => {
    try {
        const user = await userService.save(req.body);
        res.json(user)
    } catch (error) {
        res.status(403).json({ error })
    }
    
})
/* router.post('/', async (req, res) => {
    const { name, username, email, password, roles } = req.body;
    const newUser = await createUser({
        name, username, email, password, roles
    });
    res.status(201).json(newUser);
}); */

export default router;