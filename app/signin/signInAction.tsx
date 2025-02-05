"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signInAction (prevState:string, formData: FormData): Promise<string> {
  const email = formData.get("email");
  const password = formData.get("password");
 

  const res = await fetch(`https://mealplanner-umber.vercel.app/api/signin`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ email, password})
   });
   if(!res.ok) {
    console.error("Signin API Error:", res.status);
    throw new Error("cant log user, internal server errorr");
   }
    const json = await res.json();
    console.log(json);

    const cookie = await cookies();
    cookie.set("Authorization", json.token, {
    secure: true,
    httpOnly: true,
    path: "/",
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    sameSite: "strict"
    });

  if(res.ok) {
    redirect("/meal")
  }
  return json.error;

}