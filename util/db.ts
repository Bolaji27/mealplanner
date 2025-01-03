import mongoose from "mongoose";

export async function ConnectDb () {
const db = process.env.DB_HOST;
if(!db) {
    return console.log("database not connected")
}
   await mongoose.connect(db);
    console.log("database connected")
}