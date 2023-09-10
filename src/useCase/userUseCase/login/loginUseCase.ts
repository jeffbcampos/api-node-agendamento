import { ILoginRepository } from "../../../repositories/ILoginRepository";
import { LoginDTO } from "./DTO";

export class LoginUseCase {
    constructor(
        private loginRepository: ILoginRepository
    ) {}

    async execute(data:LoginDTO): Promise<string> {
        const token = await this.loginRepository.login(data.email, data.password);

        return token;
    }
}