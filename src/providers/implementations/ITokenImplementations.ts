import { User } from "../../entities/user/user";

export interface ITokenImplementations {
    createToken(id: string): Promise<string>;
}