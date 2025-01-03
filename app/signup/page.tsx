"use client"
import Image from "next/image";
import signoutImage from "@/public/images/signIn.png";
import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { PiEyeSlashLight } from "react-icons/pi";
import firstImage from "@/public/images/time.png";
import secondImage from "@/public/images/quality-signup.png";
import google from "@/public/images/google.png";
import { useState } from "react";
import {signUpActions }from "./signUpActions";
import { useActionState} from "react";




function Signup() {
  const [error, formAction] = useActionState(signUpActions,"undefined");
  
  return (
    <div className="xl:flex xl:flex-col w-full mt-2 ">
        <div className="xl:flex lg:flex md:flex w-full xl:gap-[40px] mb-6 lg:gap-5 md:gap-4">
            <Image src={signoutImage} alt="signout" className="xl:w-full lg:w-full md:w-full"/>
            <div className="xl:w-full xl:ml-[78px] lg:w-full md:w-full text-black">
           <h1 className="text-center mb-2 font-lowan text-[32px] ">Lets get started</h1>
           <p className="text-center mb-2 font-inria xl:text-[24px]">Plan, Prepare and cook</p>
           <form action={formAction}>
            <div>
            <label htmlFor="firstname"/>
            <input id="firstname" name="firstname" placeholder="First Name" className="w-full border border-black rounded-md h-[52px] pl-2 mb-5" />
            </div>
 <div>

 </div>
            <label htmlFor="lastname"/>
            <input id="lastname" name="lastname" placeholder="Last Name" className="w-full border border-black rounded-md h-[52px] pl-2 mb-5" />
            <div className="flex flex-row  items-center border pl-2 gap-4 font-lowan rounded-md mb-5 border-black h-[52px] pr-2">
              <MdOutlineMail className="border-r mr-2 w-[32px] " />
              <label htmlFor="email" />
              <input id="email" name="email" placeholder="Email" className=" xl:text-[20px] lg:text-[20px] w-full md:text-[16px] sm:text-[16px] text-[16px]" />
            </div>
            <div className="flex flex-row  items-center border pl-2 justify-between px-2 font-lowan text-[20px] rounded-md border-black h-[52px] w-full mb-5">
              <div className="flex flex-row  items-center  gap-4  w-full">
                <MdLockOutline  className="w-[32px] pr-2 border-r"/>
                <label htmlFor="password" />
                <input id="password" name="password" placeholder="Password"  className="w-full xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[16px]" />
              </div>
              <PiEyeSlashLight className="w-[22px]"/>
            </div>
            <button type="submit" className="border w-full mb-2 h-[66px] rounded-md border-black xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[24px] text-[24px]">Signup</button>
            <p>{error}</p>
           </form>
           <div className="h-[44px] flex flex-row justify-center gap-[24px] text-[24px] items-center border border-black mb-4 md:text-[16px] sm:text-lg text-lg rounded-md">
           <p className="sm:text-[16px] text-[16px]">Continue with your google acoount</p>
            <Image
              src={google}
              alt="google image"
              className="w-[27px] h-[27px]"
            />
         
          </div>
          <p className="font-lowan text-[16px] text-center">
            Already own an account ? <span className=" border-b border-black text-[24px]">Login</span>
          </p>
            </div>
        </div>
        <div className="xl:flex flex-row text-black items-center justify-center xl:w-full lg:w-full md:xl:w-full sm:hidden lg:flex md:flex hidden">
        <h3 className="w-[449px] font-courier text-[28px] md:text-[20px]" >Great meal takes time</h3>
        <div className="flex flex-row  items-center ">
          <Image src={firstImage} alt="time" className="w-[215px]" />
          <p className="w-full font-gilda text-[32px] text-center md:text-[20px]">So we provide space for a quality time</p>
          <Image src={secondImage} alt="qulityPic" className="w-[215px]" />
        </div>
      </div>
    </div>
  )
}
export default Signup