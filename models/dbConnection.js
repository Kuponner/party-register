// Database connection
import { createPool } from "mysql2/promise";
import config from "../config.js";

export const conn = createPool({
    host: config.host,
    database: config.database,
    user: 'root',
    password: config.password,
    port: config.portsql
});