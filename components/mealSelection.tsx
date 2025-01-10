"use client"
import React from "react";
import { useState } from "react";

interface SelectionProps {
    household: number;
    date: Date;
    selection: string;
    id: string
}

export default function MealSelection({household, date, selection, id}:SelectionProps)  {
    const [submit, setSubmit] = useState({
        householdno: 1,
      meal : '',
      beverages: '',
      fruits: "",
      snacks: ""
    });

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSubmit({
            ...submit,
            [e.target.name]: e.target.value,
        })
    }

    const handleInfo = (e:React.ChangeEvent<HTMLInputElement>
    ) => {
        setSubmit({
            ...submit,
            [e.target.name]: e.target.value,
        })
    }
    
  const data = {
    typeOfDay: selection,
    householdId : submit.householdno,
    meal: submit.meal,
    beverage : submit.beverages,
    fruit : submit.fruits,
    snack :submit.snacks,
    date : date,
    id

  }
  const countHouseHold = Math.min(household, 5);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
   e.preventDefault();

   try {
    const res = await fetch(`http://localhost:3000/api/meal`, {
    method: "PUT",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error("cant save meal");
      }
      const json = await res.json();
      return json;

   } catch (error) {
    console.log(error);
    throw error
   }
  }
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-[58px] justify-center mb-5 text-2xl items-center">
          <p className="xl:text-2xl lg:text-xl md:text-xl sm:text-sm text-sm">Select Household</p>
          <select
            name="householdno"
            id="householdno"
            className="border border-black xl:w-[156px] lg:w-[156px] md:w-[156px] px-2 outline-none xl:text-2xl lg:text-2xl md:text-xl sm:text-sm text-sm h-[32px] sm:w-[88px] w-[88px]"
           onChange={handleSelect}
           value={submit.householdno}

          >
            {Array.from({ length: countHouseHold }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Meal Inputs */}
        <div className="flex flex-row w-full justify-between xl:gap-[48px] lg:gap-[48px] md:gap-[48px] sm:gap-[20px] gap-12px xl:text-2xl lg:text-2xl md:text-sm mb-5">
          <div className="flex flex-col w-full">
            <label htmlFor="meal" className="w-full text-center border border-black h-[56px]">
              Meal
            </label>
            <input
              id="meal"
              name="meal"
              placeholder="Add Meal"
              className="border border-black h-[42px] pl-4 outline-none w-full xl:text-xl lg:text-xl md:text-xl sm:text-sm text-sm"
              onChange={handleInfo}
              value={submit.meal}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="beverage" className="w-full text-center border border-black h-[56px]">
              Beverages
            </label>
            <input
              id="beverage"
              name="beverages"
              placeholder="Add Beverage"
              className="border border-black h-[42px] xl:text-xl lg:text-xl md:text-xl sm:text-sm text-sm xl:pl-4 lg:pl-4 md:pl-4 sm:pl-2 pl-2 outline-none w-full"
              onChange={handleInfo}
              value={submit.beverages}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="fruits" className="w-full text-center border border-black h-[56px]">
              Fruits
            </label>
            <input
              id="fruits"
              name="fruits"
              placeholder="Add Fruit"
              className="border border-black h-[42px] xl:text-xl lg:text-xl md:text-xl sm:text-sm text-sm pl-4 outline-none w-full"
              onChange={handleInfo}
              value={submit.fruits}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="snack" className="w-full text-center border border-black h-[56px]">
              Snacks
            </label>
            <input
              id="snack"
              name="snacks"
              placeholder="Add Snack"
              className="border border-black h-[42px] xl:text-xl lg:text-xl md:text-xl sm:text-sm text-sm pl-4 outline-none w-full"
              onChange={handleInfo}
              value={submit.snacks}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full text-center xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl border border-black h-[54px]" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}