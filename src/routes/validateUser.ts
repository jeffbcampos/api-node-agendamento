import { Router } from "express";
import { validateUserController } from "../useCase/userUseCase/validate/index";

const router = Router();

router.post("/validateUser", (req, res) => {
    return validateUserController.handle(req, res);
})

export { router as validateUserRouter }