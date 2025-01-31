import Link from "next/link";

import Account from "../account/page";


import { cookies } from "next/headers";
import { logoutAction } from "./logoutAction";

 const NavLinks = async () => {
  const cookie = await cookies();
  const loggedIn = cookie.get("Authorization");
  
  // const logoutClick = async () =>{
  //   "use server"
  //   cookie.get("Authorization");
  //   if(!cookie) {
  //     return {message: "already logged out"}
  //   }
  //   cookie.delete("Authorization");
  //  return {message: "logged out"}
  // }
  return (
    <nav className="flex w-full lg:gap-[20px] xl:gap-[40px] md:gap-[8px] sm:gap-[4px] gap-1">
      {loggedIn?<ul className="flex  w-full lg:gap-[20px] xl:gap-[20px] md:gap-[4px] font-[--font-hammersmith justify-between text-center text-[12px] sm:text-[20px]">
            <li className="font-hammersmith lg:text-[32px] w-full   text-center text-blueText md:text-[24px] xl:text-[32px]"><Link href= "/meal">Meal</Link></li>
            <li className="font-hammersmith  lg:text-[32px] w-full  text-center text-blueText md:text-[24px] xl:text-[32px]"> <Link href="/planner"> Planner</Link></li>
            <li className="lg:text-[32px]  text-center  w-full  text-blueText font-hammersmith md:text-[24px] xl:text-[32px]"> <Link href="/recipe"> Recipe</Link></li>
            <li className="lg:text-[32px]  text-center  w-full text-blueText font-hammersmith md:text-[24px] xl:text-[32px]"> <Link href="/shop">Shopping</Link></li>
           <li className="font-hammersmith lg:text-[32px] w-full text-center text-blueText md:text-[24px] xl:text-[32px]"><button onClick={logoutAction}>LogOut</button></li> 
        </ul>:  <Account />  }
    </nav>
  )
}

export default NavLinks;