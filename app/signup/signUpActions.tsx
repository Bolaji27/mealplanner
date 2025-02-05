'use server'

import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export async function signUpActions(prevState:string, formData: FormData): Promise<string> {
  
    const firstname = formData.get("firstname");
   const lastname = formData.get("lastname");
    const email = formData.get("email");
   const password = formData.get("password");
  

 
   const res = await fetch(`https://mealplanner-umber.vercel.app/api/signup`, {
        method: "POST",
        headers: {"Content-Type":"Application/json"},
        body: JSON.stringify({firstname, lastname, email, password})
       });
       const json = await res.json();
  
       if(res.ok) {
           const cookie = await cookies();
            cookie.set("Authorization", json.token, {
            secure: true,
            httpOnly: true,
            path: "/",
            expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
            sameSite: "strict"
            });

            return redirect("/")
   
  } else {
    return json.error;
  }

  
 

  
}
