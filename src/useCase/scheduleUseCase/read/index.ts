import { ScheduleRepository } from "../../../providers/implementations/SqlImplementation/ScheduleRepository";
import { ReadScheduleController } from "./controller";
import { ReadScheduleUseCase } from "./readScheduleUseCase";

const scheduleRepository = new ScheduleRepository();
const readScheduleUseCase = new ReadScheduleUseCase(scheduleRepository);
const readScheduleController = new ReadScheduleController(readScheduleUseCase);

export { readScheduleController };