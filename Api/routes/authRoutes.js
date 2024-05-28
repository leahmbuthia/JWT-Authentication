import {Router} from 'express';
import { signup } from '../controller/userController.js';

const authRouter=Router();

authRouter.post('/signup',signup );
// authRouter.get('/users',getAllUser );


export default authRouter;