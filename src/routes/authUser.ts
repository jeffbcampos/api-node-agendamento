import { Router } from 'express';
import { loginUserController } from '../useCase/userUseCase/login/index';


const router = Router()

router.post('/login', async (req, res) => {
    return loginUserController.handle(req, res)    
})

export { router as OAuthRouter }
