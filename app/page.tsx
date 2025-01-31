
import Image from "next/image";
import bgPicture from "@/public/images/Phone.png";
import { AiFillHeart } from "react-icons/ai";
import plate from "@/public/images/Home-plate.png";
import RightPage from "@/components/rightPage";
import { FaRegEdit } from "react-icons/fa";

export default function page() {
  return (
    <div className="mt-4 w-full xl:flex xl:flex-col lg:flex lg:flex-col md:flex md:flex-col sm:w-full ">
       <h1 className="font-frank text-black text-center  xl:hidden lg:hidden md:hidden sm:hidden text-[28px] mb-4">
        Meal Family Planner
      </h1>
      <div className=" xl:flex xl:flex-row xl:gap-[20px] lg:flex md:flex lg:flex-row lg:gap-[20px] md:gap-[16px] md:flex-row sm:flex">
        <div className="relative xl:ml-[110px] xl:w-full ">
          <Image
            src={bgPicture}
            alt="phone bg"
            className="xl:w-[568px] xl:h-[482px] lg:w-[486px] lg:h-[603px] md:w-[348px] md:h-[409px] sm:w-[300px] sm:h-[300px] w-[196px] h-[245px] m-auto"
          />
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center ">
            <h3 className="text-black xl:text-[24px] mt-10 md:text-center text-[12px] md:mb-4 sm:mb-4 ml-2 mb-2">
              Messages
            </h3>
            <div className="flex gap-[12px] items-center bg-blueBg  xl:text-[16px] lg:text-[16px] justify-center rounded-md lg:mt-8 sm:text-[8px] text-[8px] xl:w-[120px] xl:ml-6 lg:w-[100px] lg:h-[40px] lg:ml-4 md:w-[74px] md:ml-2 md:mb-2 sm:w-[68px] sm:ml-2 w-[64px] ml-2">
              <p>To: baby</p>
              <AiFillHeart className="text-redColor" />
            </div>
            <p className=" text-black  lg:ml-4  lg:mt-8 mt-2 xl:text-[16px] xl:mb-4 lg:mb-4 lg:text-[12px] md:text-[8px] md:mb-4 sm:text-[8px] text-center sm:ml-2 sm:mb-4 text-[8px] ml-2 mb-2">
              Dinner for two ?
            </p>
            <div className=" border bg-blueBg rounded-lg h-[66px]  xl:h-[66px] xl:w-[140px]  xl:ml-4 lg:w-[100px] lg:h-[86px] lg:ml-4 lg:text-[16px] md:w-[72px] md:ml-2 md:h-[70px] md:text-[12px] sm:w-[66px] sm:text-[8px] sm:ml-2 w-[64px] text-[8px] ml-2">
              <h3 className="text-center xl:mt-1  xl:mb-1 lg:mb-2 text-black mt-1 md:mb-2 sm:mb-2">Me :</h3>
              <p className="text-center xl:text-[16px]">No make it a meal x</p>
            </div>
          </div>
        </div>
        <RightPage />
      </div>
      <div className="xl:flex xl:flex-row xl:gap-[118px] xl:w-full lg:mt-10 md:flex md:flex-col sm:flex sm:flex-col sm:mt-4 flex flex-col">
        <div className="relative xl:w-full md:order-2 md:mt-4 xl:order-1 sm:order-2 sm:mt-4 order-2">
          <Image
            src={plate}
            alt="home plate"
            className="xl:mt-4 xl:w-full xl:h-[244px] lg:w-full md:w-full sm:w-full "
          />
          <ul className="flex text-black absolute xl:top-32 md:top-32 w-full justify-between  font-hammersmith xl:text-[24px] lg:text-[24px] lg:top-[150px] top-[52px] text-[12px] ">
            <li className="text-blueBg w-full">
              SUGGEST.
            </li>
            <li className="w-full">PLAN.</li>
            <li className="text-blueBg w-full">
              PREPARE.
            </li>
            <li className="w-full">SERVE.</li>
          </ul>
        </div>
        <div className=" lg:w-[480px] xl:w-full text-black lg:hidden xl:block md:order-1 md:mt-4  md:block xl:order-2 sm:order-1 order-1">
        <h1 className="border-b text-center xl:text-[32px] lg:text-[32px] md:text-[32px] font-gravitas border-b-black text-black xl:block lg:hidden  md:block  text-[20px] ">
        Food for thought
      </h1>
        <div className="xl:w-full  ">
          <div className="flex flex-col gap-5 px-2 border mt-4 rounded-lg bg-darkenBlue">
            <div className="flex flex-row gap-20">
              <p className="text-[20px]  text-white ">Mon</p>
              <p className="xl:text-[24px] lg:text-[24px] text-[16px] text-white">Pasta</p>
            </div>
            <div className="flex flex-row gap-20">
              <p className="text-[20px] text-white">Tue</p>
              <p className="xl:text-[24px] lg:text-[24px] text-[16px] text-white">Rice and stew</p>
            </div>
            <div className="flex flex-row gap-20">
              <p className="text-[20px] text-white">Wed</p>
              <p className="xl:text-[24px] lg:text-[24px] text-[16px] text-white">Swallow</p>
            </div>
            <div className="flex flex-row gap-20">
              <p className="text-[20px] text-white">Thur</p>
              <p className="xl:text-[24px] lg:text-[24px] text-[16px] text-white">Food orders</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="text-[20px] w-[386px] text-center font-fan">
              Cant be wasted when planned
            </p>
            <FaRegEdit className="text-darkenBlue" size={32} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
{
}
