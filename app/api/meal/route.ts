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
  const { payload } = await jose.jwtVerify(jwt, secret);

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
     await Meal.findByIdAndUpdate(id,
        {$push: {households:{date,typeOfDay,householdId,meal,beverage,fruit,snack}}},
        {new: true}
       );
       return NextResponse.json({message: "meal submitted succesfully", status:200})
    
  } catch (error) {
     return NextResponse.json(error)
  }
   
}


export async function GET () {

    const cookie = await cookies();
    const valueCookie = cookie.get('Authorization');
    if(!valueCookie){
        return NextResponse.json('No cookie authorisation found')
    }
    const token = valueCookie.value;
   
    const secret = new TextEncoder().encode(process.env.JWT_SECRET
   )
  const jwt = token;
  const { payload} = await jose.jwtVerify(jwt, secret);
  if(!payload) {
    return NextResponse.json("error, no payload");
  }

  const userId = payload.sub;
 
  const startOfDay = new Date();
startOfDay.setUTCHours(0, 0, 0, 0);

const endOfDay = new Date();
endOfDay.setUTCHours(23, 59, 59, 999);
try {
    const getMeal = await Meal.find({userId:userId,  "households.date": { $gte: startOfDay, $lte: endOfDay }})
    console.log(getMeal)
    return NextResponse.json({
        body: getMeal,
        message:"meal was successfully collected",
        status: 200
    })
    
    
} catch (error) {
    return NextResponse.json(error);
    
}
   



}
