import { configDotenv } from "dotenv";

configDotenv();

export const secret = process.env.SECRET;

export const port = process.env.PORT