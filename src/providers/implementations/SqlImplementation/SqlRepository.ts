import { PrismaClient } from '@prisma/client';
import { User } from "../../../entities/user/user";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { PasswordProvider } from '../passwordProvider/passwordProvider';

;

export class SqlRepository implements IUserRepository {
    constructor(        
        private passwordProvider: PasswordProvider,
        private prisma = new PrismaClient()
    ) {}

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
        
        const hashedPassword = await this.passwordProvider.hash(password);

        await this.prisma.users.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
    }
}