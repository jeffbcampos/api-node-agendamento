import { User } from "../../../entities/user/user";
import { secret } from "../../../routes/authUser";
import { ITokenImplementations } from "../ITokenImplementations";
import jwt from "jsonwebtoken";

export class CreationToken implements ITokenImplementations {
    createToken(id: string): Promise<string> {
        const token = jwt.sign({ id }, secret!, { expiresIn: '7d' })
        return Promise.resolve(token)

    }
}