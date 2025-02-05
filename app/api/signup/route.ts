
import { ConnectDb } from "@/util/db";
import User from "@/models/userModel";

import * as jose from 'jose';
import { NextResponse } from "next/server";



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
    const secret = new TextEncoder().encode(process.env.JWT_SECRET
          )
          const alg = 'HS256'
          
          const token = await new jose.SignJWT({ })
            .setProtectedHeader({ alg })
            .setSubject(newUser.id)
            .setExpirationTime('72h')
            .sign(secret)
    return NextResponse.json({message: "new user registered", token},{ status:200});
    
   } catch (error) {
    console.log(error);
    return Response.json({message: "internal error"})
   }
   




}