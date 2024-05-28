import {Router} from 'express';
import { login, signup } from '../controller/userController.js';

const authRouter=Router();

authRouter.post('/signup',signup );
authRouter.post('/login',login);


export default authRouter;