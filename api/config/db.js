import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected at ${conn.connection.host}`);
    }catch{
        console.log(`connection error ${error.message}`);
        process.exit(1);
    }
};