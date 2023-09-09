import { User } from "../../../entities/user/user";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { UserDTO } from "./DTO";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(data:UserDTO) {
        const user = new User(data)
        await this.userRepository.save(user);
    }
}