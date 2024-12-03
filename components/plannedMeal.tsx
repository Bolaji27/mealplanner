import React from "react";


export default function PlannedMeal() {
  return (
    <div className="w-full mt-12 sm:hidden hidden xl:block lg:block md:block">
      <div className="flex w-full border border-black h-[84px] items-center">
        <ul className="flex justify-between w-full text-3xl">
          <li>Date</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      <div className="w-[120px]"></div>
      </div>
    </div>
  );
}
