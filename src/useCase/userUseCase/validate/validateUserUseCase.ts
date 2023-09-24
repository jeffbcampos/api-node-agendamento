import { IValidationUserRepository } from "../../../repositories/IValidationUserRepository";
import { IValidateUserDTO } from "./DTO";

export class ValidateUserUseCase {
    constructor(
        private validationUserRepository: IValidationUserRepository
    ) {}

    async execute(data:IValidateUserDTO) {
        await this.validationUserRepository.validation(data);
    }
}