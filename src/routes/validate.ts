import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient();

const router = Router();

router.get("/validate/:token", async (req, res) => {
    const token = req.params.token;
    
    try {
        if(jwt.verify(token, process.env.SECRET!)) {
            const user = await prisma.validation_user.findUnique({
                where: {
                    token
                }
            })
            return res.redirect(`http://localhost:3333/createUser?name=${user!.name}&email=${user!.email}&password=${user!.password}`);
        }
    } catch (error: any) {

        return res.status(400).send({ message: "Invalid or Expired Token" })
        
    }    

})

export { router as validateRouter }

