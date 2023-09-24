import { User } from "../entities/user/user";

export interface IValidationUserRepository {
    validation(user:User): Promise<void>;
}