import { config } from "dotenv";
config({ path: ".env" });
export const { NODE_ENV, PORT, ORIGIN, APIDRIVER } = process.env;
