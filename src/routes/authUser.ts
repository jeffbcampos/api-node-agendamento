import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import jwt from 'jsonwebtoken';

const dotenv = require('dotenv');
dotenv.config();

const prisma = new PrismaClient();
export const secret = process.env.SECRET
const router = Router()

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
    
        const user = await prisma.users.findUnique({
            where: {
                email
            }
        })
        if(!user) {
            return res.status(404).send({ message: 'User not found' })
        }

        if(user.password !== password) {
            return res.status(401).send({ message: 'Invalid password' })
        }

        const token = jwt.sign({ id: user.id }, secret!, { expiresIn: '7d' })
        return res.status(200).send({ msg: token })

    } catch (error: any) {
        return res.status(400).send({ message: error.message })
        
    }
    
})

export { router as OAuthRouter }
