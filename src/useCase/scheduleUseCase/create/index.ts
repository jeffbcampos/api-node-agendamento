import { ScheduleRepository } from "../../../providers/implementations/SqlImplementation/ScheduleRepository";
import { CreateScheduleController } from "./controller";
import { ScheduleUseCase } from "./scheduleUsecase";

const scheduleRepository = new ScheduleRepository();
const scheduleUseCase = new ScheduleUseCase(scheduleRepository);
const scheduleController = new CreateScheduleController(scheduleUseCase);

export { scheduleController };