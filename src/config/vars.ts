import { configDotenv } from "dotenv";

configDotenv();

export const secret = process.env.SECRET;