'use server'

import { redirect } from "next/navigation";
import { json } from "node:stream/consumers";

export async function signUpActions(prevState:any, formData: FormData): Promise<string> {
  
    const firstname = formData.get("firstname");
   const lastname = formData.get("lastname");
    const email = formData.get("email");
   const password = formData.get("password");
  
  const port = process.env.PORT
   const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {"Content-Type":"Application/json"},
        body: JSON.stringify({firstname, lastname, email, password})
       });
       const json = await res.json();
  
       if(res.ok) {
   redirect("/signin");
  } else {
    return json.error;
  }

  
 

  
}
