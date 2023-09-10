import { PrismaClient } from "@prisma/client";
import { ILoginRepository } from "../../../repositories/ILoginRepository";
import jwt from "jsonwebtoken";
import { PasswordProvider } from "../passwordProvider/passwordProvider";

export class LoginRepository implements ILoginRepository {
    constructor(
        private passwordProvider: PasswordProvider,
        private prisma = new PrismaClient()) {}

    async login(email: string, password: string): Promise<string> {
        const user = await this.prisma.users.findUnique({
            where: {
                email
            }
        })
        
        if (!user) {
            throw new Error("User not found")
        }

        if (!await this.passwordProvider.compare(password, user.password)) {
            throw new Error("Invalid password")
        }   

        const tokenLogin = jwt.sign({ id: user.id }, process.env.SECRET!, { expiresIn: '7d' })

        return tokenLogin;
    }
}