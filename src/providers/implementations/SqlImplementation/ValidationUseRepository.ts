
import { IValidationUserRepository } from "../../../repositories/IValidationUserRepository";
import { PasswordProvider } from "../passwordProvider/passwordProvider";
import { MailProvider } from "../MailProvider/mailProvider";
import { PrismaClient } from "@prisma/client";
import { User } from "../../../entities/user/user";
import { CreationToken } from "../tokenProvider/creationTokenProvider";

export class ValidationUseRepository implements IValidationUserRepository {
    constructor(
        private passwordProvider: PasswordProvider,
        private mailProvider: MailProvider,
        private tokenProvider: CreationToken,
        private prisma = new PrismaClient()
    ) {}

    async validation(user: User): Promise<void> {
        const { name, email, password } = user;

        const userExisting = await this.prisma.users.findUnique({
            where: {
                email
            }
        })

        if (userExisting) {
            throw new Error("User already exists")
        }
        
        const hashedPassword = await this.passwordProvider.hash(password);

        const token = await this.tokenProvider.createToken(user.email);

        await this.prisma.validation_user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                token: token
            }
        })

        await this.mailProvider.sendMail({
            from: `no-reply <${process.env.EMAIL}>`,
            to: email,
            subject: "Confirme seu cadastro",
            html: `Olá ${name}, para confirmar o seu cadastro clique no link abaixo:
            <br><br><a href="http://localhost:3333/validate/${token}">http://localhost:3333/validate/${token}</a>`
        })
    }
}
    