import { NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import * as jose from 'jose';

export async function POST (Req: Request) {
    const {email, password} = await Req.json();

    if(!email || !password) {
        return Response.json({message: "Please fill in all fields"});
    }
   const user = await User.findOne({email});
   
   if(!user) {
    return Response.json({message: "invalid credentials, try again", status:400})
   }
  
   const isCorrectPassword = bcrypt.compare(password, user.password);

   if(!isCorrectPassword) {
    return Response.json({message: "invalid credentials, try again", status:400})
   }

   const secret = new TextEncoder().encode(process.env.JWT_SECRET
  )
  const alg = 'HS256'
  
  const jwt = await new jose.SignJWT({ })
    .setProtectedHeader({ alg })
    .setSubject(user.id)
    .setExpirationTime('72h')
    .sign(secret)
  
return Response.json({token:jwt});

}