import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FormattedTime } from "./formattedDate";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function SmallToNormal() {
  return (
    <div className="xl:hidden lg:hidden md:hidden ">
      <h1 className="w-full text-center font-bold text-2xl">Meal Plan</h1>

      <form className="w-full">
        <div className="flex flex-row gap-2">
          <div className="w-full h-[60px]">
            <p className="mb-2">From</p>
            <div className="flex flex-row border border-black items-center justify-between h-[38px] px-2">
              <label htmlFor="fromDate" />
              <input
                id="fromDate"
                name="fromDate"
                placeholder="dd |   mm |  yy"
                className="w-full pl-4"
              />
              <FaRegCalendarAlt />
            </div>
          </div>
          <div className="w-full h-[60px]">
            <p className="mb-2">To</p>
            <div className="flex flex-row border border-black items-center justify-between h-[38px] px-2">
              <label htmlFor="fromDate" />
              <input
                id="fromDate"
                name="fromDate"
                placeholder="dd | mm | yy"
                className="w-full pl-4"
              />
              <FaRegCalendarAlt />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 w-full items-center text-base gap-4">
          <button
            type="button"
            className="w-[188px] border border-black h-[32px] sm:text-base text-[12px]"
          >
            One course meal
          </button>
          <button
            type="button"
            className="w-[188px] border border-black h-[32px] sm:text-base text-[12px]"
          >
            Two course meal
          </button>
          <button
            type="button"
            className="w-[188px] border border-black h-[32px] sm:text-base text-[12px]"
          >
            Three course meal
          </button>
        </div>
        <div className="flex flex-row gap-5 mt-5">
          <div className="flex flex-row gap-1 items-center w-full">
            <label
              htmlFor="householdNo"
              className="w-full sm:text-base text-[12px]"
            >
              HouseHold No
            </label>
            <input
              id="householdNo"
              name="househouldNo"
              className="w-[28px] border border-black text-center"
            />
          </div>
          <div className="flex flex-row gap-1 items-center w-full">
            <label
              htmlFor="Children"
              className="w-full sm:text-base text-[12px]"
            >
              Children
            </label>
            <input
              id="Children"
              name="Children"
              className="w-[28px] border border-black text-center"
            />
          </div>
          <div className="flex flex-row gap-1 items-center w-full">
            <label
              htmlFor="Visitor"
              className="w-full sm:text-base text-[12px]"
            >
              Visitor
            </label>
            <input
              id="Visitor"
              name="Visitor"
              className="w-[28px] border border-black text-center"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className=" w-[189px] mt-5 border border-black rounded-md h-[36px]"
          >
            Start Planning
          </button>
        </div>
      </form>
      <h1 className="w-full text-xl text-center font-bold mt-10">
        Food and Cookery
      </h1>
      <form className="mt-">
        <div className="border border-black p-2 rounded-md">
          <section className="flex flex-row border border-black h-9">
            <div className="flex flex-row items-center w-full border-r-2 border-black">
              <FaLongArrowAltLeft className="w-[82px]" />
              <FormattedTime classes="sm:text-base text-[12px] w-full text-center " />
              <FaLongArrowAltRight className="w-[82px]" />
            </div>

            <select className="w-full px-2 font-semibold sm:text-base text-[12px]">
              <option className="w-full">Morning</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
          </section>
          <div className="flex flex-row w-full gap-3 mt-2 border border-black px-8 h-[32px] items-center">
            <p className="w-full text-center sm:text-base text-[12px]">
              {" "}
              HouseHold
            </p>
            <div className="w-[36px] border border-black text-center h-6">
              0
            </div>
            <div className="w-[36px] border border-black text-center h-6">
              +
            </div>
            <div className="w-[36px] border border-black text-center h-6">
              -
            </div>
          </div>
          <div className="flex flex-col justify-between mt-2 gap-2 ">
            <div className="flex flex-row items-center w-full gap-6 h-[32px]">
              <select
                id="meal"
                className="border border-black w-full px-2 sm:text-base text-[12px]"
              >
                <option>Meal</option>
              </select>
              <CiCirclePlus size={28} />
            </div>
            <div className="flex flex-row items-center w-full gap-6 h-[32px]">
              <select
                id="beverages"
                className="border border-black w-full px-2 sm:text-base text-[12px]"
              >
                <option>Beverages</option>
              </select>
              <CiCirclePlus size={28} />
            </div>
            <div className="flex flex-row items-center w-full gap-6 h-[32px]">
              <select
                id="fruits"
                className="border border-black w-full px-2 sm:text-base text-[12px]"
              >
                <option>Fruits</option>
              </select>
              <CiCirclePlus size={28} />
            </div>
            <div className="flex flex-row items-center w-full gap-6 h-[32px]">
              <select
                id="snacks"
                className="border border-black w-full px-2 sm:text-base text-[12px]"
              >
                <option>Snacks</option>
              </select>
              <CiCirclePlus size={28} />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <button
            type="submit"
            className="w-[189px] border border-black h-9 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      <h1 className="w-full text-2xl mb-8 mt-5">Meals</h1>
      <div className="flex flex-row h-[112px] gap-1 border border-black">
        <div className="flex flex-col gap-3 justify-between w-[88px]">
          <h3 className="border-b border-black h-[47px] my-auto font-semibold pl-4">
            Day
          </h3>
          <h3 className="h-[47px] my-auto font-semibold pl-4">Date</h3>
        </div>
        <div className="flex flex-col justify-between w-full mr-1">
          <div className="flex flex-row gap-2 h-8 items-center ">
            <div className="w-[24px] h-[24px] border rounded-full border-black"></div>
            <div className="border w-full border-black pl-2 font-semibold sm:text-base text-[12px]">
              BreakFast
            </div>
          </div>
          <div className="flex flex-row gap-2 w-full h-8 items-center">
            <div className="w-[24px] h-[24px] border rounded-full border-black"></div>
            <div className="border border-black w-full pl-2 font-semibold sm:text-base text-[12px]">
              Lunch
            </div>
          </div>
          <div className="flex flex-row gap-2 h-8 items-center">
            <div className="w-[24px] h-[24px] border rounded-full border-black"></div>
            <div className="border border-black w-full pl-2 font-semibold sm:text-base text-[12px]">
              Dinner
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between h-6 mt-1 gap-1 mb-4">
        <h3 className="w-full border border-black pl-1 font-semibold sm:text-base text-[12px]">
          Snacks
        </h3>
        <h3 className="w-full border border-black pl-1 font-semibold sm:text-base text-[12px]">
          Beverage
        </h3>
        <div className="flex flex-row gap-2 w-full items-center">
          <div className="flex flex-row w-[82px] gap-1">
            <h3 className="font-semibold sm:text-base text-[12px]">Meal</h3>
            <select id="meal" className="border border-black">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <RiDeleteBin6Line size={18} />
        </div>
      </div>
    </div>
  );
}
