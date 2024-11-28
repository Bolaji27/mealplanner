import Link from "next/link"
import Signin from "@/app/signin/page"
import Signup from "@/app/signup/page"
export default function Account() {
  return (
    <ul className="flex  xl:w-[220px] xl:gap-[40px] lg:w-[220px] lg:gap-[12px] md:w-[220px] md:gap-[8px] w-[95px] gap-1 sm:text-[20px] text-[12px]">
          <li className="xl:w-[102] w-full  text-center text-blueText font-hammersmith lg:text-[32px] md:text-[24px] xl:text-[32px]"> <Link href="/signup"> Signup</Link></li>
          <li className="xl:w-[78px] lg:w-[78px]  md:w-[78px] w-[39px] lg:text-[32px] text-center pb-1 border-b-4 text-blueText border-blueText font-hammersmith md:text-[24px] xl:text-[32px]"> <Link href='/signin'> Login</Link></li>
    </ul>
  )
}
