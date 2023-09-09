import { CreateUserUseCase } from "./userUseCase";
import { Request, Response } from "express";

export class CreateUserController {
    constructor(
        private useCase: CreateUserUseCase
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body

        try {
            await this.useCase.execute({
                name,
                email,
                password
            });

            return res.status(201).send({ message: "User created" })

        } catch (error: any) {
            return res.status(400).send({ message: error.message })
        }
    }
}