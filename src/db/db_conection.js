import mongoose, { Mongoose } from "mongoose";
import {DB_NAME} from "../constants.js"

const dbConnection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}`)
        console.log(`db connected successfully DB HOST:${connectionInstance}/${DB_NAME}`);
    } catch (error) {
        console.error("Mongoose connection was unsuccess", error);
        process.exit(1)
    }
}

export default dbConnection