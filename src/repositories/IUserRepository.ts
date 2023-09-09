import { User } from "../entities/user/user";

export interface IUserRepository {
    save(user:User): Promise<void>;
    
}