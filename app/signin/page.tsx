import React from "react";
import Image from "next/image";
import accImage from "@/public/images/signIn.png";
import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { PiEyeSlashLight } from "react-icons/pi";
import google from "@/public/images/google.png";
import firstImage from "@/public/images/time.png";
import secondImage from "@/public/images/quality-signup.png";

export default function Signin() {
  return (
    <div className="xl:flex lg:flex md:flex w-full flex-col mt-3 ">
      <div className="flex  flex-col xl:flex-row lg:flex-row md:flex-row  xl:w-full lg:w-full md:w-full sm:w-full xl:gap-[20px] lg:gap-[20px] md:gap-[20px] mb-6 sm:flex-col w-full ">
        <Image src={accImage} alt="account image" className="md:w-[346px] xl:w-[685px] xl:h-[559px] lg:w-[486px] lg:h-[570px] md:h-[537px] sm:h-[195px] w-full"/>
        <div className="xl:w-[566px] xl:ml-[98px] text-black text-center lg:w-full md:w-full  ">
          <h1 className="font-lowan xl:text-[28px] lg:text-[28px] mb-4 md:text-[20px] sm:text-[20px] w-full text-[20px]">Enter your credentials to sign in</h1>
          <p className="font-inria xl:text-[24px] lg:text-[24px] mb-5 md:text-[16px] sm:text-[16px] text-[16px]">Plan and prepare to cook </p>
          <form>
            <div className="flex flex-row  items-center border pl-2 gap-4 font-lowan rounded-md mb-5 border-black h-[52px] pr-2">
              <MdOutlineMail className="border-r mr-2 w-[32px] " />
              <label htmlFor="email" />
              <input id="email" name="email" placeholder="Email" className=" xl:text-[20px] lg:text-[20px] w-full md:text-[16px] sm:text-[16px] text-[16px]"/>
            </div>
            <div className="flex flex-row  items-center border pl-2 justify-between px-2 font-lowan text-[20px] rounded-md border-black h-[52px] w-full">
              <div className="flex flex-row  items-center  gap-4  w-full">
                <MdLockOutline  className="w-[32px] pr-2 border-r"/>
                <label htmlFor="password" />
                <input id="password" name="password" placeholder="Password"  className="w-full xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[16px]"/>
              </div>
              <PiEyeSlashLight className="w-[22px]"/>
            </div>
            <p className="flex justify-end font-lowan text-[16px] mb-6 md:text-[16px]">forgot password ?</p>
            <button className=" border w-full font-hammersmith xl:text-[32px] xl:h-[52px] lg:text-[32px] mb-10 rounded-md border-black md:text-[24px] sm:text-[24px] text-2xl">Login</button>
          </form>
          <div className="flex flex-row justify-center gap-[24px] text-[24px] items-center border border-black mb-4 md:text-[16px] sm:text-lg text-lg">
            <Image
              src={google}
              alt="google image"
              className="w-[27px] h-[27px]"
            />
            <p>Login with Google</p>
          </div>
          <p className="font-lowan text-[16px]">
            Dont have an account ? <span>signup</span>
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
  );
}
