import {Router} from 'express';
import { createLogin, createSignup, getLogin, getSignup } from './controllers/authController.js';

const authRouter=Router();

authRouter.get('/signup',getSignup )
authRouter.post('/signup', createSignup)
authRouter.get('/login',getLogin )
authRouter.post('/login',createLogin )

export default authRouter;