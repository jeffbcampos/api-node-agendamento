import { Schedules } from './../entities/schedules/schedules';

export interface IScheduleRepository {
    save(schedule: Schedules): Promise<void>;
    findAllSchedules(id: string): Promise<Schedules[]>
}