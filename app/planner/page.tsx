"use client";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FormattedTime } from "@/components/formattedDate";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import MealSelection from "@/components/mealSelection";
import PlannedMeal from "@/components/plannedMeal";
import { useState } from "react";

export default function Planner() {
  const [active, setActive] = useState<string | null>(null);
  const [body, setBody] = useState<{
    household: number;
    fromDate: Date;
    toDate: Date;
    mealtype: string;
    id: string;
   
  }>({
    household: 1,
    fromDate: new Date(),
    toDate: new Date(),
    mealtype: "",
    id: "1"
  });
  const [fromDate, setFromDate] = useState({
    fromDay: "",
    fromMonth: "",
    fromYy: "",
  });
  const [toDate, setToDate] = useState({
    toDay: "",
    toMonth: "",
    toYy: "",
  });

  const [formData, setFormData] = useState({
    household: "",
    children: "",
    visitor: "",
  });

  const [selection, setSelection] = useState("morning");

  const handleChangeSelect = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setSelection(event.target.value)
  }


  const checkFromDate: Date | null = new Date(body.fromDate);
  const [currentDate, setCurrentDate] = useState(checkFromDate);

  const handleBackDate = () => {
    const fromDate = new Date(body.fromDate);
    if (currentDate.getTime() <= fromDate.getTime()) {
      return;
    }
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleForwardDate = () => {
    const toDate = new Date(body.toDate);

    if (currentDate.getTime() >= toDate.getTime()) {
      return;
    }

    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
      console.log("failed here");
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate({
      ...fromDate,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate({
      ...toDate,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (meal: string) => {
    setActive(meal);
  };
  const Data = {
    mealtype: active,
    datefrom: new Date(
      `${fromDate.fromYy}-${fromDate.fromMonth}-${fromDate.fromDay}`
    ),
    dateto: new Date(`${toDate.toYy}-${toDate.toMonth}-${toDate.toDay}`),
    householdNo: Number(`${formData.household}`),
    children: Number(`${formData.children}`),
    visitor: Number(`${formData.visitor}`),
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`https://mealplanner-umber.vercel.app/api/meal`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Data),
      });

      if (!res.ok) {
        throw new Error("cant log user, internal server error");
      }
      const json = await res.json();

      setBody((prev) => ({
        ...prev,
        household: json.body.householdNo,
        fromDate: new Date(json.body.datefrom),
        toDate: new Date(json.body.dateto),
        mealtype: json.body.mealtype,
        id: json.body.id
      }));
    } catch (error) {
      console.log(error);
    }
  };

 
  

  return (
    <div className="text-black w-full mt-6">
      

      <form className="flex flex-col gap-5 pb-4" onSubmit={handleSubmit}>
        <div className="flex xl:flex-row w-full gap-5 lg:flex-col md:flex-col sm:flex-col flex-col">
            <h3 className="xl:hidden lg:hidden md:hidden flex w-full text-xl justify-center">Meal Plan</h3>
          <div className="flex flex-col w-full xl:border lg:border md:border xl:gap-4 lg:gap-4 md:gap-4 sm:gap-14 gap-12 border-black rounded-md lg:order-2 xl:order-1 md:order-2 sm:order-2 order-2 ">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-6 w-full items-center px-2 mb-5 h-[66px]">
              <h3 className="w-[196px] text-2xl md:text-xl sm:hidden hidden xl:flex lg:flex">Planning for</h3>
              <div className="xl:w-full lg:w-full md:w-full sm:w-[188px] w-[188px] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-between xl:gap-[27px] lg:gap-[27px] md:gap-[27px] sm:gap-[12px] flex-col gap-2 text-xl  ">
                <button
                  className={`border border-black w-full xl:h-[56px] lg:h-[56px] md:h-[56px] sm:h-[32px] h-[32px] md:text-base sm:text-sm text-sm ${
                    active == "one" ? "text-redColor" : "text-black"
                  }`}
                  type="button"
                  onClick={() => handleClick("one")}
                >
                  One course meal
                </button>
                <button
                  className={`border border-black w-full xl:h-[56px] lg:h-[56px] md:h-[56px] sm:h-[32px] h-[32px] md:text-base sm:text-sm text-sm ${
                    active == "two" ? "text-redColor" : "text-black"
                  }`}
                  type="button"
                  onClick={() => handleClick("two")}
                >
                  Two course meal
                </button>
                <button
                  className={`border border-black w-full xl:h-[56px] lg:h-[56px] md:h-[56px] sm:h-[32px] h-[32px] md:text-base sm:text-sm text-sm ${
                    active == "three" ? "text-redColor" : "text-black"
                  }`}
                  type="button"
                  onClick={() => handleClick("three")}
                >
                  Three course meal
                </button>
              </div>
            </div>
            <div className="flex flex-row xl:gap-6 lg:gap-6 md:gap-6 sm:gap-5 gap-2 w-full justify-between px-2 h-[52px]">
              <div className="flex flex-row xl:gap-6 lg:gap-6 md:gap-6 sm:gap-2 gap-2 w-full items-center ">
                <label
                  htmlFor="household"
                  className="w-full xl:text-2xl lg:text-2xl md:text-base sm:text-sm text-sm"
                >
                  Household No
                </label>
                <input
                  type="number"
                  id="household"
                  name="household"
                  className="border border-black xl:w-[120px] lg:w-[120px] md:w-[120px] sm:w-[32px] w-[32px] xl:h-[52px] lg:h-[52px] md:h-[52px] sm:h-[26px] outline-none pl-2 sm:text-sm text-sm"
                  onChange={handleChange}
                  value={formData.household}
                />
              </div>
              <div className="flex flex-row xl:gap-6 lg:gap-6 md:gap-6 sm:gap-2 w-full items-center">
                <label
                  htmlFor="children"
                  className="w-full xl:text-2xl lg:text-2xl text-center md:text-base sm:text-sm text-sm"
                >
                  Children
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  className="border border-black xl:w-[120px] lg:w-[120px] md:w-[120px] sm:w-[32px] w-[32px] xl:h-[52px] lg:h-[52px] md:h-[52px] sm:h-[26px] outline-none pl-2 sm:text-sm text-sm"
                  onChange={handleChange}
                  value={formData.children}
                />
              </div>
              <div className="flex flex-row xl:gap-6 lg:gap-6 md:gap-6 sm:gap-2 w-full items-center">
                <label
                  htmlFor="visitor"
                  className="w-full xl:text-2xl lg:text-2xl text-center md:text-base sm:text-sm text-sm"
                >
                  Visitor
                </label>
                <input
                  type="number"
                  id="visitor"
                  name="visitor"
                  className="border border-black xl:w-[120px] lg:w-[120px] md:w-[120px] sm:w-[32px] w-[32px] xl:h-[52px] lg:h-[52px] md:h-[52px] sm:h-[26px] outline-none pl-2 sm:text-sm text-sm"
                  onChange={handleChange}
                  value={formData.visitor}
                />
              </div>
            </div>
            <div className="w-full flex xl:justify-end lg:justify-end md:justify-end px-2 sm:justify-center justify-center">
              <button
                className="flex border border-black w-[226px] items-center justify-center xl:h-[44px] lg:h-[44px] md:h-[44px] sm:h-[36px] h-[36px] xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-sm font-semibold"
                type="submit"
              >
                Start planning
              </button>
            </div>
          </div>
          <div className="xl:w-[335px] xl:h-[274px] flex xl:flex-col md:lg:w-[739px] md:w-[739px] md:h-[94px] sm:w-full sm:h-[61px]  xl:border lg:border md:border border-black  xl:px-2 rounded-md lg:order-1  xl:order-2 md:order-1 sm:order-1 order-1 lg:flex-row md:flex-row md:gap-6  sm:gap-6 gap-2  md:px-2 lg:h-[120px] lg:gap-6 lg:pr-2 sm:flex-row w-full flex-row ">
            <p className="xl:text-center xl:w-full text-2xl lg:w-[52px] lg:mt-9 xl:mt-0 md:w-[52px] md:text-xl md:mt-6 sm:hidden hidden">
              Date
            </p>
            <div className="flex flex-col w-full lg:mt-4 xl:mt-0 sm:gap-2 sm:h-[62px] gap-2 h-[62px]">
              <p className="xl:text-2xl lg:text-2xl font-semibold md:text-xl text-sm">From</p>
              <div className="flex flex-row border border-black lg:px-1 items-center md:px-2 sm:h-[38px] ">
                <div className="w-full flex flex-row">
                  <div className="w-full  border-r border-black">
                    <label htmlFor="fromDay" />
                    <input
                      name="fromDay"
                      id="fromDay"
                      placeholder="dd"
                      type="text"
                      className="w-full pl-2 outline-none"
                      onChange={handleDateFrom}
                      value={fromDate.fromDay}
                    />
                  </div>
                  <div className="w-full border-r border-black">
                    <label htmlFor="fromMonth" />
                    <input
                      name="fromMonth"
                      id="fromMonth"
                      placeholder="mm"
                      type="text"
                      className="w-full pl-2 outline-none"
                      onChange={handleDateFrom}
                      value={fromDate.fromMonth}
                    />
                  </div>
                  <div className="w-full ">
                    <label htmlFor="fromYy" />
                    <input
                      name="fromYy"
                      id="fromYy"
                      placeholder="yyyy"
                      type="text"
                      className="w-full pl-2 outline-none "
                      onChange={handleDateFrom}
                      value={fromDate.fromYy}
                    />
                  </div>
                </div>

                <FaRegCalendarAlt size={20} className="w-6" />
              </div>
            </div>
            <div className="flex xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-col w-full  lg:mt-4 sm:gap-2 sm-h-[62px] gap-2 h-[62px] ">
              <p className="xl:text-2xl lg:text-2xl font-semibold md:text-xl text-sm">To</p>
              <div className="flex flex-row border border-black lg:px-1 items-center md:px-2 xl:w-full sm:h-[38px]">
                <div className="w-full flex flex-row">
                  <div className="w-full border-r border-black">
                    <label htmlFor="toDay" />
                    <input
                      name="toDay"
                      id="toDay"
                      placeholder="dd"
                      type="text"
                      className="w-full pl-2 outline-none"
                      onChange={handleDateTo}
                      value={toDate.toDay}
                    />
                  </div>
                  <div className="w-full  border-r border-black">
                    <label htmlFor="toMonth" />
                    <input
                      name="toMonth"
                      id="toMonth"
                      placeholder="mm"
                      type="text"
                      className="w-full pl-2 outline-none"
                      onChange={handleDateTo}
                      value={toDate.toMonth}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="toYy" />
                    <input
                      name="toYy"
                      id="toYy"
                      placeholder="yyyy"
                      type="text"
                      className="w-full pl-2 outline-none"
                      onChange={handleDateTo}
                      value={toDate.toYy}
                    />
                  </div>
                </div>
                <FaRegCalendarAlt size={20} className=" w-6" />
              </div>
            </div>
          </div>
        </div>
      </form>

      <h1 className="text-center font-semibold text-3xl mt-6 mb-5 sm:hidden hidden xl:block lg:block md:block">
        Food and Cookery
      </h1>
      <div className="border border-black rounded-md p-2  xl:block lg:block md:block sm-block block">
        <div className="flex flex-row border border-black h-[48px] mb-5 ">
          <div className="flex flex-row justify-center items-center w-full border-r border-black px-2">
            <FaLongArrowAltLeft
              className="w-[82px]"
              size={24}
              onClick={handleBackDate}
            />
            <FormattedTime
              classes="xl:text-2xl lg:text-2xl md:text-xl sm:text-md text-sm"
              fromDate={currentDate}
            />
            <FaLongArrowAltRight
              className="w-[82px]"
              size={24}
              onClick={handleForwardDate}
            />
          </div>
          <div className="w-full flex items-center px-4">
            <select className="w-full xl:text-2xl lg:text-2xl md:text-2xl sm:text-md text-md outline-none " onChange={handleChangeSelect} value={selection} >
              {body.mealtype === "one" ? (
                <option value="morning">Morning</option>
              ) : body.mealtype === "two" ? (
                <>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                </>
              ) : body.mealtype === "three" ? (
                <>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="dinner">Dinner</option>
                </>
              ) : (
                <option>Morning</option>
              )}
            </select>
          </div>
        </div>
        <MealSelection household={body.household} date ={currentDate} selection = {selection} id ={body.id} />
      </div>
      <PlannedMeal />
    </div>
  );
}
