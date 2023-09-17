import { PrismaClient, Prisma } from "@prisma/client";
import { Schedules } from "../../../entities/schedules/schedules";
import { IScheduleRepository } from "../../../repositories/IScheduleRepository";


const prisma = new PrismaClient();

export class ScheduleRepository implements IScheduleRepository {
    constructor(
        private prisma = new PrismaClient() 
    ) {}

    async save(schedule: Schedules): Promise<void> {
        
        const { client, date, service, hour } = schedule
               

        const scheduleExisting = await this.prisma.schedules.findFirst({
            where: {                
                date,
                hour
            }
        })

        if(scheduleExisting) {
            throw new Error("Schedule already exists")
        }

        await this.prisma.schedules.create({
            data: {
                client,
                date,
                service,
                hour
                 
            }
        })

    }

    async findAllSchedules(id: string): Promise<Schedules[]> {
        const schedules = await this.prisma.schedules.findMany({
            where: {
                client: id
            }
        })        
        return schedules
    }



}