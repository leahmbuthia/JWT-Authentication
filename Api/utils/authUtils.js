import jwt from 'jsonwebtoken';
import { secretKey } from '../configuration/jwtConfig.js';


export const generateToken = (user)=>{
    const payload ={
        id:user._id,
        email: user.email,
        role:user.role
    };
   return jwt.sign(payload, secretKey, {expiresIn: "1h"}) 
};
export const generaterefreshToken = (user)=>{
    const payload ={
        id:user._id,
        email: user.email,
        role:user.role
    };
   return jwt.sign(payload, secretKey, {expiresIn: "7h"}) 
};
export const verifyToken = (token)=>{
   return jwt.verify(token, secretKey);
};