'use client'
import React from "react";
import FormattedDate from "@/components/formattedDate";
import { useEffect, useState } from "react";

export default function Meals() {
    const [meal, setMeal] = useState([])
    useEffect(() => {
        const fetchMeals = async () => {
          try {
            const res = await fetch("http://localhost:3000/api/meal");
            if (res.ok) {
              const json = await res.json();
              console.log(json);
              setMeal(json);
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchMeals();
      }, []);
    
  return (
    <div className="text-black">
      <div className="flex justify-center items-center mb-5 gap-[40px] font-inria xl:text-[32px]">
        <h2 className="font-inria border-r  border-black px-1">Today's meal</h2>
        <FormattedDate/>
      </div>
      <div className=" w-full text-xl font-inria xl:hidden lg:hidden md:hidden ">
        <div className="mb-4 ">
            <h1 className="text-center mb-4 w-full">Breakfast</h1>
            <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] mb-4 sm:gap-1 gap-1">
                <p className="sm:w-[104px] w-[104px]">Main Dish</p>
                <div className="border border-black sm:w-full w-full"></div>
            </div>
            <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] sm:gap-1 gap-1">
                <p className="sm:w-[104px] w-[104px]">Others</p>
                <div className="sm:w-full w-full border border-black"></div>
            </div>
        </div>
        <div className="mb-4">
            <h1 className="text-center mb-4">Lunch</h1>
            <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] mb-4 sm:gap-1 gap-1">
                <p className="sm:w-[104px] w-[104px]">Main Dish</p>
                <div className="border border-black w-full"></div>
            </div>
            <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] sm:gap-1 gap-1">
                <p className="sm:w-[104px] w-[104px]">Others</p>
                <div className="sm:w-full w-full border border-black"></div>
            </div>
        </div>
        <div>
            <h1 className="text-center mb-4">Dinner</h1>
            <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] mb-4 sm:gap-1 gap-1">
                <p className="sm:w-[104px] w-[104px]">Main Dish</p>
                <div className="border border-black w-full"></div>
            </div>
            <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] sm:gap-1 gap-1">
                <p className="sm:w-[104px] w-[104px]">Others</p>
                <div className="sm:w-full w-full border border-black"></div>
            </div>
        </div>
      </div>

      <div className="xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row xl:gap-5 lg:gap-5 md:gap-4 sm:hidden hidden w-full  ">
        <div className="w-[208px] mt-[60px] text-[32px] font-inria">
          <ul className="flex flex-col gap-[36px]">
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-1/2 xl:text-[36px] font-inria">Main Dish</th>
              <th className="w-1/2 xl:text-[36px] font-inria">Others </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black"> </td>
              <td className="border border-black"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border border-black"></td>
              <td className="border border-black"></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border border-black"></td>
              <td className="border border-black"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex flex-col mt-10 gap-6">
        <h1 className="text-center font-bold xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[24px] text-2xl">Preparations</h1>
        <div className="flex flex-row justify-between  xl:gap-[129px] lg:gap-[129px] md:gap-[24px] sm:gap-2 gap-1 xl:h-[72px] lg:h-[72px] md:h-[72px] sm:h-[32px] h-8">
          <div className="flex flex-row  w-full xl:gap-4 lg:gap-4 md:gap-4 sm:gap-0 gap-0 ">
            <p className="xl:w-[192px] lg:w-[192px] md:w-[192px] sm:w-full w-full flex items-center xl:text-[28px]">
              HouseHold
            </p>
            <div className="border xl:w-full lg:w-full md:w-full sm:w-[50px] w-[50px] border-black"></div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <p className="xl:w-[192px] lg:w-[192px] md:w-[192px] sm:w-full w-full flex items-center xl:text-[28px]">
              Children
            </p>
            <div className="border xl:w-full lg:w-full md:w-full sm:w-[50px] w-[50px] border-black"></div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <p className="xl:w-[192px] lg:w-[192px] md:w-[192px] sm:w-full w-full flex items-center xl:text-[28px]">
              Visitor
            </p>
            <div className="border xl:w-full lg:w-full md:w-full sm:w-[50px] w-[50px] border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
