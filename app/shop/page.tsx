import React from "react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import tesco from "@/public/images/storeImg/simple-icons_tesco.png"
import sainsburys from "@/public/images/storeImg/Frame 449.png"
import morrisons from "@/public/images/storeImg/simple-icons_morrisons.png"
import { FaPlus } from "react-icons/fa6";

export default function Shop() {
  return (
    <div className="text-black">
      <div className="flex flex-row w-full border border-black px-5 rounded-md h-[64px] items-center">
        <label htmlFor="ingredient" />
        <input
          id="ingredient"
          name="ingredient"
          placeholder="Search Ingredient"
          className="w-full outline-none"
        />
      <IoIosSearch size={24}/>
      </div>

      <div className="w-full mt-16 mb-[160px]">
        <div className="flex flex-row w-full border border-black h-[100px] items-center xl:text-3xl lg:text-3xl md:text-xl sm:text-base text-base rounded-md">
        <h3 className="w-full text-center">Retailer</h3>
        <h3 className="w-full text-center">Availability</h3>
        <h3 className="w-full text-center">Price</h3>
        <h3 className="w-full text-center">Location</h3>
        </div>
      </div>

  <div className="flex flex-row justify-between xl:w-[1156px] lg:w-[838px] xl:mx-auto lg:mx-auto w-full mb-[80px]">
    <Image src={tesco} alt="tesco logo"/>
    <Image src={morrisons} alt="morrions logo"/>
    <Image src={sainsburys} alt="sainsbury's logo"/>
  </div>

  <div className="flex flex-col xl:w-[450px] lg:w-[482px] md:w-[528px] w-full xl:ml-[98px] lg:ml-[98px]">
    <h3 className="xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-bold">Stores</h3>
    <p className="xl:text-2xl lg:text-2xl md:text-2xl text-base">Save and refine your ingredient list</p>
  </div>

  <form className="xl:w-[1272px] w-full h-[190px] items-center mt-10 xl:mb-10 lg:mb-10 sm:mb-52 mb-40">
    <div className="flex xl:flex-row lg:flex-row md:flex-row xl:gap-[88px] lg:gap-[88px] md:gap-[88px] sm:gap-[20px] gap-20px mb-10 w-full sm:flex sm:flex-col flex-col " >
    <div className="xl:w-[441.5px] lg:w-[297.5px] md:w-full sm:w-full w-full flex xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-col xl:gap-[72px] lg:gap-[72px] md:gap-[72px] sm:gap-[20px] gap-20px">
        <label htmlFor="ingredientName" className="text-center h-[39px] xl:text-3xl lg:text-3xl md:text-3xl sm:2text-xl text-2xl">Ingredient</label>
        <input id="ingredientName" name="ingredientName" placeholder="Name" className="pl-2 xl:h-[79px] lg:h-[79px] md:h-[79px] sm:h-[60px] h-[60px] sm:w-full w-full border border-black xl:text-2xl lg:text-2xl md:text-2xl sm:text-base text-base outline-none rounded-md"/>
    </div>
    <div className=" xl:w-[441.5px] lg:w-[297.5px] md:w-full sm:w-full w-full flex xl:flex-col lg:flex-col md:flex-col sm:flex-col flex-col  xl:gap-[72px] lg:gap-[72px] md:gap-[72px] sm:gap-[20px] gap-20px  ">
        <label htmlFor="quantity" className="text-center h-[39px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">Quantity</label>
        <input id="quantity" name="quantity" placeholder="Quantity" className="pl-2 xl:h-[79px] lg:h-[79px] md:h-[79px] sm:h-[60px] h-[60px] border border-black xl:text-2xl lg:text-2xl md:text-2xl sm:text-base text-base outline-none rounded-md"/>
    </div>
    <div className=" w-[120px]  xl:flex xl:flex-row lg:flex lg:flex-row items-center border border-black xl:gap-8 h-[79px] rounded-md  mt-28 justify-center md:hidden  sm:hidden hidden pl-4">
        <FaPlus  size={30} className="w-[30px]"/>
        <button type="submit" className=" md:w-full w-full  text-2xl  font-semibold ">Add</button>
    </div>

    </div>
   
    
    
    <div className="  w-[120px] md:flex sm:flex flex flex-row  items-center border border-black  h-[79px] rounded-md mx-auto  xl:hidden lg:hidden justify-center  ">
        <FaPlus  size={30} className="w-full justify-end"/>
        <button type="submit" className="w-full text-2xl font-semibold justify-start ">Add</button>
    </div>
  </form>

  <div className="border border-black h-[400px] w-full">
    <div className="flex flex-row mb-8 mt-2 w-full">
        <h3 className="xl:w-[348px] lg:w-[348px] md:w-[256px] sm:w-[140px] w-[130px] xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl text-center">Name</h3>
        <h3 className="xl:w-[348px] lg:w-[348px] md:w-[256px] sm:w-[140px] w-[130px] xl:text-3xl   lg:text-3xl md:text-3xl sm:text-2xl text-2xl text-center">Quantity</h3>
    </div>
    <div>
        <p></p>
        <p></p>

    </div>
  </div>

    </div>
  );
}
