import { config } from "dotenv";

config();

// Environment Variables

export default {
    
    //Database
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    portsql: process.env.PORTSQL || "",

};
