import { PrismaClient } from '@prisma/client';
import { User } from "../../../entities/user/user";
import { IUserRepository } from "../../../repositories/IUserRepository";

;

export class SqlRepository implements IUserRepository {
    constructor(private prisma = new PrismaClient()) {}

    async save(user: User): Promise<void> {
        const { name, email, password } = user;

        const userExisting = await this.prisma.users.findUnique({
            where: {
                email
            }
        })
        if(userExisting) {
            throw new Error("User already exists")
        }
        
        await this.prisma.users.create({
            data: {
                name,
                email,
                password
            }
        })
    }
}