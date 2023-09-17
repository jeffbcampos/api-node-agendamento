import { Router } from "express";
import { readScheduleController } from "../../useCase/scheduleUseCase/read";

const router = Router();

router.get("/readSchedule", (req, res) => {
    return readScheduleController.handle(req, res);
})

export { router as readScheduleRouter };