 "use server"
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import * as jose from 'jose';
import { ConnectDb } from "@/util/db";
import { NextResponse } from "next/server";

export async function POST (Req: Request) {
    try {
       
        const {email, password} = await Req.json();
        console.log("Received email:", email, "password:", password);

        if(!email || !password) {
            return NextResponse.json({message: "Please fill in all fields"},     { status: 400, headers: { "Content-Type": "application/json" }});
        }
        await ConnectDb();
       const user = await User.findOne({email});
       
       if(!user) {
        return NextResponse.json({message: "invalid credentials, try again"}, {status:400})
       }
      
       const isCorrectPassword = await bcrypt.compare(password, user.password);
    
       if(!isCorrectPassword) {
        return NextResponse.json({message: "invalid credentials, try again"}, {status:400})
       }
    
       const secret = new TextEncoder().encode(process.env.JWT_SECRET
      )
      const alg = 'HS256'
      
      const jwt = await new jose.SignJWT({ })
        .setProtectedHeader({ alg })
        .setSubject(user.id)
        .setExpirationTime('72h')
        .sign(secret)
      
    return NextResponse.json({token:jwt});
        
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Internal server error" }, 
            { status: 500 }
        );
    }
}