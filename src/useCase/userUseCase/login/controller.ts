import { Request, Response } from "express";
import { LoginUseCase } from "./loginUseCase";


export class LoginUserController {
    constructor(
        private loginUsecase: LoginUseCase        
        ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body
        
        try {
            const token = await this.loginUsecase.execute({
                email,
                password
            })            

            return res.status(201).send({ message: "User logged", token: token })

        } catch (error: any) {
            return res.status(400).send({ message: error.message })            
        }
    }
}