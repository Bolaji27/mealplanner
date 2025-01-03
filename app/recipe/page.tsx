import React from "react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import favRecipe1 from "@/public/images/Recipes/Ellipse 4.png";
import favRecipe2 from "@/public/images/Recipes/Ellipse 5.png";
import favRecipe3 from "@/public/images/Recipes/Ellipse 7.png";
import favRecipe4 from "@/public/images/Recipes/Ellipse 8.png";
import breakfastRecipe from "@/public/images/recipeMeal/breakfast.png";
import lunchRecipe from "@/public/images/recipeMeal/lunch.png";
import dinnerRecipe from "@/public/images/recipeMeal/Dinner.png";
import beveragePng from "@/public/images/drink.png";
import beverages from "@/public/images/recipeMeal/Bevarage.png";
import { FaRegHeart } from "react-icons/fa";

export default function Recipe() {
  return (
    <div>
      <div className="flex flex-row text-black border border-black justify-between px-6 mt-5 rounded-md h-[72px] items-center">
        <label htmlFor="productSearch" />
        <input
          id="productSearch"
          name="productSearch"
          placeholder="Search"
          className="w-full text-2xl"
        />
        <IoIosSearch size={28} />
      </div>
      <div className="flex xl:flex-row lg:flex-col md:flex-col gap-12 mt-12 items-center justify-center">
        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col xl:gap-5 gap-2 xl:w-full w-full items-center">
          <div className="border border-black rounded-full xl:w-[166px] lg:w-[159px] lg:h-[178px] h-[166px] font-inria xl:flex lg:flex md:flex items-center justify-center text-orange text-xl md:w-[94px] md:h-[178px] md:text-[18px] sm:hidden hidden">
            Fav <span className="text-blueBg ">recipes</span>
          </div>
          <div className="xl:hidden lg:hidden md:hidden flex justify-start w-full">
          <FaRegHeart className="text-black " size={24}/>
          </div>
         
          <div className="flex flex-row  gap-[40px] px-[48px] py-3 lg:w-full justify-between bg-gray-300 md:w-full w-full">
            <Image src={favRecipe1} alt="favDish" className=" w-full" />
            <Image src={favRecipe2} alt="favDish" className=" w-full " />
            <Image src={favRecipe3} alt="favDish" className="w-full xl:block lg:block md:block sm:block hidden" />
            <Image src={favRecipe4} alt="favDish" className="w-full xl:block lg:block md:block sm:hidden hidden" />
          </div>
        </div>
        <div className="border border-black rounded-full w-[180px] h-[180px] xl:flex justify-center items-center text-orange text-xl lg:hidden md:hidden sm:hidden hidden">
          Saved Meal
        </div>
        
      </div>
      <div className="xl:hidden justify-end flex mt-4 ">
          <div className="flex flex-row  justify-center text-white bg-orange w-[149px] items-center gap-2 rounded-full h-[56px]">
            <FaRegHeart />
            <p>Meal</p>
          </div>
        </div>

      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col text-black mt-14 xl:gap-5 lg:gap-5 md:gap-5 sm:gap-8 gap-8 w-full">
        <div className="w-full text-center ">
          <Image src={breakfastRecipe} alt="breakfast" className="w-full"/>
          <h1 className="font-lowan text-3xl mt-2">BreakFast</h1>
          <p className="font-inria xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-base mt-2">
            View Selections of breakfast choices and how its made tasty for
            you!!
          </p>
        </div>
        <div className="w-full text-center">
          <Image src={lunchRecipe} alt="lunch" className="w-full"/>
          <h1 className="font-lowan text-3xl mt-2">Lunch</h1>
          <p className="font-inria xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-base mt-2">
            Cant go wrong our lunch boxes selection of recipes!!
          </p>
        </div>
        <div className="flex flex-col w-full text-center">
          <Image src={dinnerRecipe} alt="dinner" className="w-full"/>
          <h1 className="font-lowan text-3xl mt-2">Dinner</h1>
          <p className="font-inria xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-base mt-2">
            Dinner well served, the family loves it!!
          </p>
        </div>
      </div>

      <div className="text-black flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col w-full mt-32 xl:h-[459px] h-[395px] gap-5">
        <div className="w-full">
          <h3 className="xl:text-3xl lg:text-3xl md:text-3xl sm:text-base font-inria sm:text-center text-center sm:w-full xl:mb-0 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
            Looking to SHARE your
            <span className="font-inria italic text-xl">recipe ?</span>
          </h3>
          <p className="h-[324px] mt-[140px] text-3xl w-[444px] xl:ml-[235px] my-auto  font-kaisei xl:block lg:block md:block sm:hidden hidden">
            Check for some amazing juice to digest your meal and energy
          </p>
        </div>
        <div className="w-full">
          <div className="flex flex-row gap-5 mb-4 items-center sm:w-full w-full">
            <Image src={beveragePng} alt="beverage" className="w-[40px] " />
            <p className="text-3xl font-inria">Beverages</p>
          </div>
          <Image
            src={beverages}
            alt="beverages"
            className="xl:h-[459px] h-[395px] w-full"
          />
        </div>
        <p className="h-[324px] xl:mt-[140px] lg:mt-[140px] md:mt-[140px] xl:text-3xl lg:text-3xl md:text-3xl xl:w-[444px] lg:w-[444px] md:w-[444px] sm:w-full w-full xl:ml-[235px] my-auto  font-kaisei xl:hidden lg:hidden md:hidden sm:block block sm:text-xl text-xl mt-4">
            Check for some amazing juice to digest your meal and energy
          </p>
      </div>
    </div>
  );
}
