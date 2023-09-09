
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { secret } from './authUser';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ message: 'Token not provided' });
    }

    const token = authHeader.split(' ')[1];

    try {

        jwt.verify(token, secret!);
        console.log("Token verified")
        next();
        
    } catch (error) {
        return res.status(401).send({ message: 'Invalid token' });
    }
}