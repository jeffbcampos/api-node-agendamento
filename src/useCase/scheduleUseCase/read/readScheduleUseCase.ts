import { Schedules } from "../../../entities/schedules/schedules";
import { IScheduleRepository } from "../../../repositories/IScheduleRepository";
import { ScheduleFindDTO } from "./DTO";

export class ReadScheduleUseCase {
    constructor(private scheduleRepository: IScheduleRepository) {}

    async execute(id: string) {        
        return await this.scheduleRepository.findAllSchedules(id)
    }
}