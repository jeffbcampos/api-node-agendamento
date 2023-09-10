import { secret } from "../../../config/vars";
import { ITokenImplementations } from "../ITokenImplementations";
import jwt from "jsonwebtoken";

export class CreationToken implements ITokenImplementations {
    createToken(id: string): Promise<string> {
        const token = jwt.sign({ id }, secret!, { expiresIn: '7d' })
        return Promise.resolve(token)

    }
}