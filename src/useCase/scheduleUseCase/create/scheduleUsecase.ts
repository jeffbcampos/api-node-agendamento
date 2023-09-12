import { Schedules } from "../../../entities/schedules/schedules";
import { IScheduleRepository } from "../../../repositories/IScheduleRepository";
import { ScheduleDTO } from "./DTO";

export class ScheduleUseCase {
    constructor(private scheduleRepository: IScheduleRepository) {}

    async execute(data:ScheduleDTO) {
        const schedule = new Schedules(data)
        await this.scheduleRepository.save(schedule);        
    }    
}