import { SqlRepository } from "../../../implementations/SqlImplementation/SqlRepository";
import { CreateUserController } from "./controller";
import { CreateUserUseCase } from "./userUseCase";

const sqlRepository = new SqlRepository();
const createUserUseCase = new CreateUserUseCase(sqlRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };