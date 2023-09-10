import { PrismaClient } from "@prisma/client";
import { ILoginRepository } from "../../../repositories/ILoginRepository";
import jwt from "jsonwebtoken";

export class LoginRepository implements ILoginRepository {
    constructor(private prisma = new PrismaClient()) {}

    async login(email: string, password: string): Promise<string> {
        const user = await this.prisma.users.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new Error("User not found")
        }

        if (user.password !== password) {
            throw new Error("Invalid password")
        }   

        const tokenLogin = jwt.sign({ id: user.id }, process.env.SECRET!, { expiresIn: '7d' })

        return tokenLogin;
    }
}