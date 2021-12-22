import { Router } from 'express';
import debug from 'debug';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserService from '../services/userService.js';
const userService = new UserService();

const router = Router();
const log = debug('globant:auth');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const dataset = await userService.findByEmail(email);
    const user = dataset.dataValues;
    
    if (!user || !bcrypt.compareSync(password, user.PASSWORD)) {
        res.status(401).json({ message: 'Wrong credentials!'});
    }

    const token = jwt.sign({
        email: user.email,
        username: user.username,
        roles: user.roles ? user.roles : []
    }, process.env.JWT_SECRET);

    res.json({
        message: 'login ok',
        token
    })
});

export default router;