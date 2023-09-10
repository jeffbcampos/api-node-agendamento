import { IBcryptImplementation } from "../IBcryptImplementation";
import bcrypt from "bcrypt";

export class PasswordProvider implements IBcryptImplementation {
    constructor() {}    
    
    async hash(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}

