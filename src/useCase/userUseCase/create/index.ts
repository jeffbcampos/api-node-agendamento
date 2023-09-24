import { SqlRepository } from "../../../providers/implementations/SqlImplementation/SqlRepository";
import { PasswordProvider } from "../../../providers/implementations/passwordProvider/passwordProvider";
import { CreateUserController } from "./controller";
import { CreateUserUseCase } from "./userUseCase";

const sqlRepository = new SqlRepository();
const createUserUseCase = new CreateUserUseCase(sqlRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };