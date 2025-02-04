'use server'

import { redirect } from "next/navigation";


export async function signUpActions(prevState:string, formData: FormData): Promise<string> {
  
    const firstname = formData.get("firstname");
   const lastname = formData.get("lastname");
    const email = formData.get("email");
   const password = formData.get("password");
  
   const outApi = process.env.APR_URL || "http://localhost:3000";
 
   const res = await fetch(`${outApi}/api/signup`, {
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
