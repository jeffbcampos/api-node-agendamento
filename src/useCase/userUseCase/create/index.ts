import { SqlRepository } from "../../../providers/implementations/SqlImplementation/SqlRepository";
import { PasswordProvider } from "../../../providers/implementations/passwordProvider/passwordProvider";
import { CreateUserController } from "./controller";
import { CreateUserUseCase } from "./userUseCase";

const passwordProvider = new PasswordProvider();
const sqlRepository = new SqlRepository(passwordProvider);
const createUserUseCase = new CreateUserUseCase(sqlRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };