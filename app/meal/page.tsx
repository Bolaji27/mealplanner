"use client";
import React from "react";
import FormattedDate from "@/components/formattedDate";
import { useEffect, useState } from "react";

export default function Meals() {
  type Household = {
    typeOfDay: "morning" | "afternoon" | "evening";
    meal: string;
    beverage: string;
    snack: string;
    fruit: string;
    date: Date;
  };

  type mealType = {
    meal: string[];
    others: string[];
  };

  type mealState = {
    morning: mealType;
    lunch: mealType;
    dinner: mealType;
    householdNo: number;
    children: number;
    visitor: number;
  };
  const [meal, setMeal] = useState<mealState>({
    morning: {
      meal: [] as string[],
      others: [] as string[],
    },
    lunch: {
      meal: [] as string[],
      others: [] as string[],
    },
    dinner: {
      meal: [] as string[],
      others: [] as string[],
    },
    householdNo: 0,
    children: 0,
    visitor: 0,
  });
const mealApi = process.env.NEXT_PUBLIC_API_URL
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(`${mealApi}/api/meal`);
        if (res.ok) {
          const json = await res.json();

          const [{ households, planner }] = json.body;

          const updatedMeals: mealState = {
            householdNo: planner.householdNo,
            children: planner.children,
            visitor: planner.visitor,
            morning: {
              meal: [],
              others: [],
            },
            lunch: {
              meal: [],
              others: [],
            },
            dinner: {
              meal: [],
              others: [],
            },
          };

          if (households && households.length > 0) {
            households.forEach((household: Household) => {
              console.log(household.meal);
             
             
              switch (household.typeOfDay) {
                case "morning":
                  if (household.meal) {
                    updatedMeals.morning.meal.push(household.meal);
                    updatedMeals.morning.others.push(
                      household.beverage,
                      household.fruit,
                      household.snack
                    );
                  }
                  break;
                case "afternoon":
                  if (household.meal) {
                    updatedMeals.lunch.meal.push(household.meal);
                    updatedMeals.lunch.others.push(
                      household.beverage,
                      household.fruit,
                      household.snack
                    );
                  }
                  break;
                case "evening":
                  if (household.meal) {
                    updatedMeals.dinner.meal.push(household.meal);
                    updatedMeals.dinner.others.push(
                      household.beverage,
                      household.fruit,
                      household.snack
                    );
                  }
                  break;
              }
            });
            console.log(updatedMeals)
           
            setMeal(updatedMeals);
        console.log(meal);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, [meal]);

  

  return (
    <div className="text-black">
      <div className="flex justify-center items-center mb-5 gap-[40px] font-inria xl:text-[32px]">
        <h2 className="font-inria border-r  border-black px-1">Today&apos;s meal</h2>
        <FormattedDate />
      </div>
      <div className=" w-full text-xl font-inria xl:hidden lg:hidden md:hidden ">
        <div className="mb-4 ">
          <h1 className="text-center mb-4 w-full">Breakfast</h1>
          <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] mb-4 sm:gap-1 gap-1">
            <p className="sm:w-[104px] w-[104px]">Main Dish</p>
            <div className="border border-black sm:w-full w-full">
              {meal.morning.meal.join(`,`)}
            </div>
          </div>
          <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] sm:gap-1 gap-1">
            <p className="sm:w-[104px] w-[104px]">Others</p>
            <div className="sm:w-full w-full border border-black">
            {meal.morning.others.join(`,`)}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-center mb-4">Lunch</h1>
          <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] mb-4 sm:gap-1 gap-1">
            <p className="sm:w-[104px] w-[104px]">Main Dish</p>
            <div className="border border-black w-full">{meal.lunch.meal.join(",")}</div>
          </div>
          <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] sm:gap-1 gap-1">
            <p className="sm:w-[104px] w-[104px]">Others</p>
            <div className="sm:w-full w-full border border-black">{meal.lunch.others.join(",")}</div>
          </div>
        </div>
        <div>
          <h1 className="text-center mb-4">Dinner</h1>
          <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] mb-4 sm:gap-1 gap-1">
            <p className="sm:w-[104px] w-[104px]">Main Dish</p>
            <div className="border border-black w-full">{meal.dinner.meal.join(",")}</div>
          </div>
          <div className="sm:flex sm:flex-row flex flex-row sm:w-full w-full sm:h-[34px] h-[34px] sm:gap-1 gap-1">
            <p className="sm:w-[104px] w-[104px]">Others</p>
            <div className="sm:w-full w-full border border-black">{meal.dinner.others.join(",")}</div>
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
          <tbody className="h-full">
            <tr>
              <td className="border border-black text-center text-2xl"> {meal.morning.meal.join(",")}</td>
              <td className="border border-black text-center">{meal.morning.others.join(",")}</td>
            </tr>
          </tbody>
          <tbody className="h-full">
            <tr>
              <td className="border border-black">{meal.lunch.meal.join(",")}</td>
              <td className="border border-black">{meal.lunch.others.join(",")}</td>
            </tr>
          </tbody >
          <tbody className="h-full">
            <tr>
              <td className="border border-black">{meal.dinner.meal.join(",")}</td>
              <td className="border border-black">{meal.dinner.others.join(",")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex flex-col mt-10 gap-6">
        <h1 className="text-center font-bold xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[24px] text-2xl">
          Preparations
        </h1>
        <div className="flex flex-row justify-between  xl:gap-[129px] lg:gap-[129px] md:gap-[24px] sm:gap-2 gap-1 xl:h-[72px] lg:h-[72px] md:h-[72px] sm:h-[32px] h-8">
          <div className="flex flex-row  w-full xl:gap-4 lg:gap-4 md:gap-4 sm:gap-0 gap-0 ">
            <p className="xl:w-[192px] lg:w-[192px] md:w-[192px] sm:w-full w-full flex items-center xl:text-[28px]">
              HouseHold
            </p>
            <div className="border xl:w-full lg:w-full md:w-full sm:w-[50px] w-[50px] border-black flex justify-center items-center text-2xl my-auto h-full">{meal.householdNo}</div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <p className="xl:w-[192px] lg:w-[192px] md:w-[192px] sm:w-full w-full flex items-center xl:text-[28px]">
              Children
            </p>
            <div className="border xl:w-full lg:w-full md:w-full sm:w-[50px] w-[50px] border-black flex justify-center items-center text-2xl h-full">{meal.children}</div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <p className="xl:w-[192px] lg:w-[192px] md:w-[192px] sm:w-full w-full flex items-center xl:text-[28px]">
              Visitor
            </p>
            <div className="border xl:w-full lg:w-full md:w-full sm:w-[50px] w-[50px] border-black  text-2xl h-full flex justify-center items-center">{meal.visitor}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
