import { Router } from "express";
import { createUserController } from "../useCase/userUseCase/create/index";

const router = Router()

router.post("/createUser", (req, res) => {
    return createUserController.handle(req, res)
})

export { router as createUserRouter }