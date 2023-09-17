import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { ReadScheduleUseCase } from "./readScheduleUseCase";

export class ReadScheduleController {
    constructor(private readScheduleUseCase: ReadScheduleUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({ message: 'Token not provided' });
        }
        const token = authHeader.split(' ')[1];
        const payload = jwt.decode(token);
        

        if (typeof payload === 'object' && payload !== null && 'id' in payload) {
            const  id = payload.id;
            

            try {
                const schedules = await this.readScheduleUseCase.execute(id);                

                return res.status(201).send(schedules);
            } catch (error: any) {
                return res.status(400).send({ message: error.message });
            }            
            
        } else {
            return res.status(401).send({ message: "Invalid token" })
        }
    }
    
}