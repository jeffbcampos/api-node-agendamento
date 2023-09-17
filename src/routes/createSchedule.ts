import { authMiddleware } from '../useCase/authUsecase/authMiddleware';
import { scheduleController } from './../useCase/scheduleUseCase/create/index';
import { Router } from "express";

const router = Router();

router.post("/createSchedule", authMiddleware, (req, res) => {
    return scheduleController.handle(req, res);
})

export { router as createScheduleRouter };