import { MailProvider } from "../../../providers/implementations/MailProvider/mailProvider";
import { CreateUserUseCase } from "./userUseCase";
import { Request, Response } from "express";

export class CreateUserController {
    constructor(
        private useCase: CreateUserUseCase
    ) {}

    async handle(req: Request, res: Response) {
        const name = (req.query.name as unknown) as string;
        const email = (req.query.email as unknown) as string;
        const password = (req.query.password as unknown) as string;

        try {
            await this.useCase.execute({
                name,
                email,
                password
            });            

            return res.redirect("http://www.takeapekk.com.br/confirmation")

        } catch (error: any) {
            return res.status(400).send({ message: error.message })
        }
        
    }
}