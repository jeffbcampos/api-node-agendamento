import { ValidateUserUseCase } from './validateUserUseCase';
import { MailProvider } from "../../../providers/implementations/MailProvider/mailProvider";
import { ValidationUseRepository } from "../../../providers/implementations/SqlImplementation/ValidationUseRepository";
import { PasswordProvider } from "../../../providers/implementations/passwordProvider/passwordProvider";
import { CreationToken } from "../../../providers/implementations/tokenProvider/creationTokenProvider";
import { ValidateUserController } from "./controller";

const passwordProvider = new PasswordProvider();
const mailProvider = new MailProvider();
const creationToken = new CreationToken();
const validateRepository = new ValidationUseRepository(passwordProvider, mailProvider, creationToken);
const validateUserUseCase = new ValidateUserUseCase(validateRepository);
const validateUserController = new ValidateUserController(validateUserUseCase);

export { validateUserController };