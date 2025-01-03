import { NextResponse } from "next/server";
import Meal from "@/models/mealModel";
import { cookies } from "next/headers";
import * as jose from 'jose';
import { ConnectDb } from "@/util/db";



export async function POST(req:Request) {
    const {mealtype, datefrom, dateto,householdNo, children, visitor} = await req.json();

   if(!mealtype || !datefrom || !dateto || !householdNo || !children || visitor == null) {
      return NextResponse.json({message: "please fill in all fields", status: 400});
      console.log("please fill in all fields")
   }
   console.log(mealtype);
   const cookie = await cookies();
   const tokenValue = cookie.get("Authorization");
   if(!tokenValue){
    return NextResponse.json({message: "invalid form submission, no cookie", status: 400})
   }
   const token = tokenValue.value;
   
    const secret = new TextEncoder().encode(process.env.JWT_SECRET
   )
  const jwt = token;
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);

  const userId = payload.sub;
 
   

   try {
    await ConnectDb();
    const newMeal = new Meal({ userId, planner:{mealtype, datefrom, dateto,householdNo, children, visitor}, household:[]});
    await newMeal.save();
     return NextResponse.json({message: "new plan saved",body:{datefrom,dateto,householdNo, mealtype, id: newMeal._id},status: 200})
   } catch (error) {
     return NextResponse.json({message: "server error", error});
     console.log(error)
   }
}

export async function PUT (req:Request) {
   const {date, typeOfDay, householdId, meal, beverage, fruit, snack, id} = await req.json();
   if(!date || !typeOfDay || !householdId || !meal || !beverage || !fruit || !snack){
    return NextResponse.json("Please fill in all meal credentials");
   }

  try {
    const mealUpdateId = await Meal.findByIdAndUpdate(id,
        {$push: {households:{date,typeOfDay,householdId,meal,beverage,fruit,snack}}},
        {new: true}
       );
       return NextResponse.json({message: "meal submitted succesfully", status:200})
    
  } catch (error) {
     return NextResponse.json(error)
  }
   
}


export async function GET (req: Request) {

    const cookie = await cookies();
    const valueCookie = cookie.get('Authorization');
    if(!valueCookie){
        return NextResponse.json('No cookie authorisation found')
    }
    const token = valueCookie.value;
   
    const secret = new TextEncoder().encode(process.env.JWT_SECRET
   )
  const jwt = token;
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);

  const userId = payload.sub;
 
  
try {
    const getMeal = await Meal.findById(userId);
    
    
} catch (error) {
    
}
   



}