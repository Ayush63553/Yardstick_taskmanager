import mongoose from "mongoose";
import {users} from "@/models/users"
export const dbconn = async ()=>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URL,{
            dbName:"Task_manager",
        });
        console.log("db connected...");
        console.log(connection);
    }
    catch(error){
        console.log("failed to connect...");
        console.log(error);
    }
}