import { LoginRepository } from "../../../providers/implementations/SqlImplementation/LoginRepository";
import { LoginUserController } from "./controller";
import { LoginUseCase } from "./loginUseCase";

const loginRepository = new LoginRepository();
const loginUseCase = new LoginUseCase(loginRepository);
const loginUserController = new LoginUserController(loginUseCase);

export { loginUserController };
