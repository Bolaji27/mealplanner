"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function logoutAction () {
    const cookie = await cookies();
    cookie.has("Authorization");
     if(!cookie) {
       return {message: "already logged out"}
     }
     cookie.delete("Authorization");
    return redirect("/");
}