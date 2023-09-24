import { Request, Response } from "express";
import { ValidateUserUseCase } from "./validateUserUseCase";

export class ValidateUserController {
    constructor(
        private validateUserUseCase: ValidateUserUseCase
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        try {

            await this.validateUserUseCase.execute({ name, email, password })

            return res.status(201).send({ message: "User Created Successfully" })

        } catch (error: any) {

            return res.status(400).send({ message: error.message })
            
        }
    }
}