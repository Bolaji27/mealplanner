import React from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function MealSelection() {
  return (
    <div className="w-full">
         <form>
      <div className="flex gap-[58px] justify-center mb-5 text-2xl" >
        <p>Select Househould </p>
        <select name="householdno" id="householdno" className="border border-black w-[156px]">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
     
      <div className="flex flex-row w-full justify-between gap-[48px] xl:text-2xl lg:text-2xl md:text-sm mb-5">
        <div className="flex flex-col w-full">
          <select id="meal" name="meal" className="border border-black pl-4 h-[56px] pr-1 ">
            <option value="meal">Meal</option>
          </select>
          <div className="border flex justify-center border-black gap-3 h-[42px] items-center">
            <CiCirclePlus size={24} />
            <p>Add Meal</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <select id="beverages" name="beverages" className="border border-black pl-4 h-[56px] pr-1 ">
            <option value="beverages">Beverages</option>
          </select>
          <div className="border flex justify-center border-black gap-3 h-[42px] items-center">
            <CiCirclePlus size={24} />
            <p>Add Beverage</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <select id="fruits" name="fruits" className="border border-black pl-4 h-[56px] pr-1">
            <option value="fruits">Fruit</option>
          </select>
          <div className="border flex justify-center border-black gap-3 h-[42px] items-center">
            <CiCirclePlus size={24} />
            <p>Add Fruit</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <select id="snacks" name="snacks" className="border border-black pl-4 h-[56px] items-center pr-1 ">
            <option value="snacks">Snacks</option>
          </select>
          <div className="border flex justify-center border-black gap-3 h-[42px] items-center">
            <CiCirclePlus size={24} />
            <p>Add Snack</p>
          </div>
        </div>
      </div>
      <button className="w-full text-center text-2xl border border-black h-[54px]">Submit</button>
      </form>
    </div>
  );
}
