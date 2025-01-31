import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from 'jose';
import User from "@/models/userModel";
import Recipe from "@/models/recipeModel";
import { ConnectDb } from "@/util/db";



export async function POST (req:Request) {

    const data = await req.json();

   if(!data.type || !data.title || !data.image || !data.ingredients || !data.preparations) {
return NextResponse.json({message:"Cant send Recipe",status:500});
   }
  
 
 try {
    ConnectDb();
    const recipe = new Recipe(data);
    recipe.save();
    return NextResponse.json({message: "New recipe saved", status: 200, recipe})
 } catch (error) {
     return NextResponse.json("failed to save new recipe");
     console.log(error)
 }
 
}

export async function GET() {
    const cookie = await cookies();
    const valueCookie = cookie.get('Authorization');
    if(!valueCookie){
        return NextResponse.json('No cookie authorisation found')
    }
  
  try {
    const token = valueCookie.value;
   
    const secret = new TextEncoder().encode(process.env.JWT_SECRET
   )
  const jwt = token;
  const { payload} = await jose.jwtVerify(jwt, secret);
  const userId = payload.sub;

  const user = await User.findById(userId);
  if(!user) {
    return NextResponse.json("couldnt find user");}
    ConnectDb();
   const recipe = await Recipe.find({});
   if(!recipe) {
     return NextResponse.json("cant find any recipe")
   }
    return NextResponse.json({message:"All recipe sent", recipe, status:200})
  } catch (error) {
    console.log(error)
  }

}
