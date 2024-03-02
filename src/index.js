import dbConnection from "./db/db_conection.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

dbConnection()