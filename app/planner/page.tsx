import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FormattedTime } from "@/components/formattedDate";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import MealSelection from "@/components/mealSelection";
import PlannedMeal from "@/components/plannedMeal";
import SmallToNormal from "@/components/smAndNormalMealPlanner";

export default function Planner() {
  return (
    <div className="text-black w-full mt-6">
        <SmallToNormal/>
      <div className="xl:flex lg:flex md:flex xl:flex-row w-full gap-5 lg:flex-col md:flex-col sm:hidden hidden">
        <div className="flex flex-col w-full border border-black rounded-md lg:order-2 xl:order-1 md:order-2 ">
          <div className="flex flex-row gap-6 w-full  items-center px-2 mb-5 h-[66px]">
            <h3 className="w-[196px] text-2xl md:text-xl">Planning for</h3>
            <div className="w-full flex flex-row justify-between gap-[27px] text-xl ">
              <button className="border border-black w-full h-[56px] md:text-base">
                One course meal
              </button>
              <button className="border border-black w-full h-[56px] md:text-base">
                Two course meal
              </button>
              <button className="border border-black w-full h-[56px] md:text-base">
                Three course meal
              </button>
            </div>
          </div>
          <form className="flex flex-col gap-5 pb-4">
            <div className="flex flex-row gap-6 w-full justify-between px-2 h-[52px]">
              <div className="flex flex-row gap-6 w-full items-center ">
                <label htmlFor="household" className="w-full text-2xl md:text-base ">
                  Household No
                </label>
                <input
                  id="household"
                  name="household"
                  className="border border-black w-[120px] h-[52px]"
                />
              </div>
              <div className="flex flex-row gap-6 w-full items-center">
                <label
                  htmlFor="children"
                  className="w-full text-2xl text-center md:text-base"
                >
                  Children
                </label>
                <input
                  id="children"
                  name="children"
                  className="border border-black w-[120px] h-[52px]"
                />
              </div>
              <div className="flex flex-row gap-6 w-full items-center">
                <label
                  htmlFor="visitor"
                  className="w-full text-2xl text-center md:text-base"
                >
                  Visitor
                </label>
                <input
                  id="visitor"
                  name="visitor"
                  className="border border-black w-[120px] h-[52px]"
                />
              </div>
            </div>
            <div className="w-full flex justify-end px-2">
              <button className="flex border border-black w-[226px] items-center justify-center h-[44px] text-2xl font-semibold">
                Start planning
              </button>
            </div>
          </form>
        </div>
        <div className="xl:w-[335px] xl:h-[274px] xl:flex xl:flex-col lg:w-[739px] md:w-[739px] md:h-[94px] border border-black xl:px-2 rounded-md lg:order-1  xl:order-2 md:order-1  lg:flex lg:flex-row md:flex md:flex-row md:gap-6 md:px-2 lg:h-[120px] lg:gap-6 lg:pr-2  ">
          <p className="xl:text-center xl:w-full text-2xl lg:w-[52px] lg:mt-9 xl:mt-0 md:w-[52px] md:text-xl md:mt-6">
            Date
          </p>
          <div className="flex flex-col  lg:w-full xl:w-full lg:mt-4 xl:mt-0 md:w-full ">
            <p className="text-2xl font-semibold md:text-xl">From</p>
            <div className="flex flex-row border border-black lg:px-1 items-center md:px-2 " >
              <div className="flex flex-row items-center  text-2xl gap-6 w-full   ">
                <p className="border-r border-black pr-2 w-full">dd</p>
                <p className="border-r border-black pr-2 w-full">mm</p>
                <p className="xl:border-r border-black pr-2 w-full">yy</p>
              </div>
              <FaRegCalendarAlt size={20}  className="ml-2"/>
            </div>
          </div>
          <div className="flex xl:flex-col lg:flex-col md:flex-col lg:w-full xl:w-full lg:mt-4 md:w-full">
            <p className="text-2xl font-semibold md:text-xl">To</p>
            <div className="flex flex-row border border-black lg:px-1 items-center md:px-2 ">
              <div className="flex flex-row items-center text-2xl gap-6 w-full ">
                <p className="border-r border-black pr-2 w-full">dd</p>
                <p className="border-r border-black pr-2 w-full">mm</p>
                <p className="xl:border-r border-black pr-2 w-full">yy</p>
              </div>
              <FaRegCalendarAlt size={20}  className="ml-2"/>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center font-semibold text-3xl mt-6 mb-5 sm:hidden hidden xl:block lg:block md:block">
        Food and Cookery
      </h1>
      <div className="border border-black rounded-md p-2 sm:hidden hidden xl:block lg:block md:block">
        <div className="flex flex-row border border-black h-[48px] mb-5 ">
          <div className="flex flex-row justify-center items-center w-full border-r border-black px-2">
            <FaLongArrowAltLeft className="w-[82px]" size={24} />
            <FormattedTime  classes="xl:text-2xl lg:text-2xl md:text-xl"/>
            <FaLongArrowAltRight className="w-[82px]" size={24} />
          </div>
          <div className="w-full flex items-center pr-4 ">
            <select className="w-full text-2xl outline-none">
              <option id="morning">Morning</option>
              <option>Afternoon</option>
              <option>Dinner</option>
            </select>
          </div>
        </div>
        <MealSelection />
      </div>
      <PlannedMeal />
    </div>
  );
}
