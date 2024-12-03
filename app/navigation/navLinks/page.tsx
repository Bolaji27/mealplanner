import Link from "next/link";
import Meals from "@/app/meal/page";
import Account from "../account/page";
import Planner from "@/app/planner/page";
 const NavLinks = () => {
  return (
    <nav className="flex w-full lg:gap-[20px] xl:gap-[40px] md:gap-[8px] sm:gap-[4px] gap-1">
        <ul className="flex  w-full lg:gap-[20px] xl:gap-[20px] md:gap-[4px] font-[--font-hammersmith justify-between text-[12px] sm:text-[20px]">
            <li className="font-hammersmith lg:text-[32px] w-full   text-center text-blueText md:text-[24px] xl:text-[32px]"><Link href= "/meal">Meal</Link></li>
            <li className="font-hammersmith  lg:text-[32px] w-full  text-center text-blueText md:text-[24px] xl:text-[32px]"> <Link href="/planner"> Planner</Link></li>
            <li className="lg:text-[32px]  text-center  w-full  text-blueText font-hammersmith md:text-[24px] xl:text-[32px]"> <Link href=""> Recipe</Link></li>
            <li className="lg:text-[32px]  text-center  w-full text-blueText font-hammersmith md:text-[24px] xl:text-[32px]"> <Link href="">Shopping</Link></li>
        </ul>
        <Account />
    </nav>
  )
}

export default NavLinks;