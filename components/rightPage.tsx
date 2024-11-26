import React from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";

import meal from "@/public/images/meal-homePage.png";

function RightPage() {
  return (
    <div className="xl:w-full lg:w-full md:w-full sm:w-full xl:flex xl:flex-col lg:flex-col sm:block md:block hidden sm:mt-8">
      <h1 className="font-frank text-black text-center text-[32px] xl:w-[686px] md:w-full md:mt-12 xl:block lg:block md:block sm:mb-4">
        Meal Family Planner
      </h1>
      <Image
        src={meal}
        alt="meal-ad"
        className=" xl:mt-18 lg:mt-6 xl:ml-[196px] lg:m-auto md:w-[348px] md:h-[207px] md:mt-10 md:m-auto xl:block lg:block md:block sm:w-[240px] sm:m-auto "
      />
      <p className="font-frank xl:w-[568px] xl:m-auto xl:mt-2 h-[82px] text-[32px] text-black text-center  mt-5  lg:hidden xl:block md:hidden sm:hidden">
        Food to the belly make a healthy environment
      </p>
      <h1 className="border-b text-center text-[32px] font-gravitas border-b-black text-black xl:mt-12 xl:ml-[98px] lg:mt-4 md:hidden sm:hidden">
        Food for thought
      </h1>
      <div className="xl:w-[568px]   text-black xl:hidden lg:block md:hidden sm:hidden">
          <div className="flex flex-col gap-5 px-2 border mt-4 rounded-lg bg-darkenBlue">
            <div className="flex flex-row gap-20">
              <p className="text-[20px] text-white">Mon</p>
              <p className="text-[24px] text-white">Pasta</p>
            </div>
            <div className="flex flex-row gap-20">
              <p className="text-[20px] text-white">Tue</p>
              <p className="text-[24px] text-white">Rice and stew</p>
            </div>
            <div className="flex flex-row gap-20">
              <p className="text-[20px] text-white">Wed</p>
              <p className="text-[24px] text-white">Swallow</p>
            </div>
            <div className="flex flex-row gap-20">
              <p className="text-[20px] text-white">Thur</p>
              <p className="text-[24px] text-white">Food orders</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="text-[20px] w-[386px] text-center font-fan">Cant be wasted when planned</p>
            <FaRegEdit  className="text-darkenBlue" size={32} />
          </div>
        </div>
    </div>
  );
}

export default RightPage;
