import { LoginRepository } from "../../../providers/implementations/SqlImplementation/LoginRepository";
import { PasswordProvider } from "../../../providers/implementations/passwordProvider/passwordProvider";
import { LoginUserController } from "./controller";
import { LoginUseCase } from "./loginUseCase";

const passwordProvider = new PasswordProvider();
const loginRepository = new LoginRepository(passwordProvider);
const loginUseCase = new LoginUseCase(loginRepository);
const loginUserController = new LoginUserController(loginUseCase);

export { loginUserController };
