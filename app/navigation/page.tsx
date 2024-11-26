import Link from "next/link";
import NavLinks from "./navLinks/page";


 const Navigation = () => {
  return (
 
        <ul className="flex w-full items-center xl:h-[102px] lg:h-[81px] md:gap-[8px] lg:gap-[20px] xl:gap-[100px] sm:gap-[8px] gap-[8px] h-[80px]">
            <li className="font-hammersmith xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[20px] xl:w-[98px] lg:w-[98px] md:w-[98px] sm:w-[57px] w-[57px] text-redColor text-[20px] "><Link href="/"> MF2</Link></li>
            <NavLinks/>
        </ul>
       
   
  )
}

export default Navigation;