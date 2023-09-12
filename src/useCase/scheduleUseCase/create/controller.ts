import { Request, Response} from "express";
import { ScheduleUseCase } from "./scheduleUsecase";
import jwt from "jsonwebtoken";

export class CreateScheduleController {
    constructor(
        private scheduleUseCase: ScheduleUseCase
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {

        const authHeader = req.headers.authorization;    

        if (!authHeader) {
            return res.status(401).send({ message: 'Token not provided' });
        }

        const token = authHeader.split(' ')[1];
        const payload = jwt.decode(token);                        

        if (typeof payload === 'object' && payload !== null && 'id' in payload) {

            const { date, service, hour } = req.body;

            try {
                await this.scheduleUseCase.execute({
                    client: payload.id,
                    date,
                    service,
                    hour
                })
        
                return res.status(201).send({ message: "Schedule created" })

            } catch (error: any) {

                return res.status(400).send({ message: error.message })

            }
        } else {
            return res.status(401).send({ message: "Invalid token" })
        }        
        
    } 

}   