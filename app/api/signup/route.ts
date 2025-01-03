
import { ConnectDb } from "@/util/db";
import { NextResponse } from "next/server";
import User from "@/models/userModel";





export async function POST (req:Request) {
   await ConnectDb();

   const {firstname, lastname, email, password} = await req.json();
   if(!firstname || !lastname || !email || !password) {
    return Response.json({message: "Please fill all fields"});
   }
   try {
    const user = await User.findOne({email});
    if(user) {
        return Response.json({message: "user already Exist"});
    }
    const newUser = new User({firstname, lastname, email,password});
    await newUser.save();
    return Response.json({message: "new user saved", status:200});
    
   } catch (error) {
    console.log(error);
    return Response.json({message: "internal error"})
   }
   




}