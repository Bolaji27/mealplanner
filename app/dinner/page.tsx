"use client";
import Image from "next/image";
import { useRecipeContext } from "@/Context/contextApi";
import pizza from "@/public/images/recipeMeal/pizza.jpeg";
import noodles from "@/public/images/recipeMeal/noodles.jpeg";
import chicken from "@/public/images/recipeMeal/chicken.jpeg";
import friedrice from "@/public/images/recipeMeal/friedrice.jpeg";
import efo from "@/public/images/recipeMeal/efo.jpeg";
import { BreakastData } from "../breakfast/breakfastServer";
import { useEffect } from "react";

export default function Dinner() {
  const { dinners, setDinners} = useRecipeContext();

  type RecipeType = {
      title: string,
      type: string,
      image: string,
      ingredients: string[],
      preparations: string
   }
   useEffect(() => {
      const fetchData = async () => {
          const recipeData = await BreakastData();
          console.log(recipeData)
  
          if (recipeData && recipeData.recipe && recipeData.recipe.length > 0) {
              recipeData.recipe.forEach((recipe:RecipeType) => {
                  const newRecipe = {
                      title: recipe.title || 'No Title Available',
                      image: recipe.image || null,
                      ingredients: recipe.ingredients || ['No ingredients available'],
                      preparations: recipe.preparations || 'No preparation steps available'
              };
              
  
              // Update breakfast, lunch, or dinner based on recipe type
              switch (recipe.type) {
                  case 'dinners':
                      setDinners(prev => [...prev, newRecipe]);
                      break;
              }
               })}
              }
      
  
      fetchData();
          },[]);

  const dinner = [
    {
      title: "pizza",
      image: pizza,
      ingredients: ["tomatoes", "chicken", "cheese"],
      preparations: `1) put in the oven after mixing`,
    },
    {
      title: "noodles",
      image: noodles,
      ingredients: ["noodles pack"],
      preparations: `1) boil some water 2) deep your noodles 3) wait 5mins then add noodles sauce`,
    },
    {
      title: "seasoned chicken",
      image: chicken,
      ingredients: ["all purpose seasoning", "chicken"],
      preparations: `1) season your chicken with all purpose 2) leave it for 15mins to marinate 3) turn on the oven to preheat 4) put chicken in for max 45mins`,
    },
    {
      title: "fried rice",
      image: friedrice,
      ingredients: [
        "mixed veg",
        "rice",
        "oil or butter",
        "bell peppers",
        "hot pepper",
        "prawns ",
      ],
      preparations: `1) fry your mixed veg and peppers 2) cook your rice 3) mixed them all together `,
    },
    {
      title: "efo and poundo",
      image: efo,
      ingredients: [
        "spinach",
        "peppers",
        "oinions",
        "tomatoes",
        "fish or meat",
        "poudo flour",
      ],
      preparations: `1)blend your peppers 2) cook the peppers 3) add your spinach 4) mix with your fish or meat 5) add sauce 6) prepare your poundo`,
    },
  ];


  const allDinners = [
    ...dinner,
   ...dinners
  ];

  return (
    <div className="text-black">
      {allDinners.map((dinner, index) => (
        <div
          key={index}
          className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col w-full xl:h-[450px] lg:h-[450px] md:h-[450px] sm:h-[450px] xl:mb-10 lg:mb-10 mb-5 md:gap-[40px] sm:gap-[40px] gap-4 "
        >
          <div className="flex flex-col   xl:w-full lg:w-full md:w-[450px] sm:w-[400px] ">
            <h3 className=" mb-4 xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] font-bold xl:pl-[180px] lg:pl-[180px] md:pl-[80px]  text-blueBg">
              {dinner.title}
            </h3>
            {dinner.image?<Image src={dinner.image} alt='breakfast' priority width={250} height={250}  className="xl:ml-[100px] lg:ml-[100px] rounded-md w-auto h-auto "
      />:<p>No image</p>}
            <div>
              <h3 className="xl:pl-[180px] lg:pl-[180px] md:pl-[60px]  mb-2 xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[16px] font-bold">
                Ingredients
              </h3>
              <div className="xl:pl-[100px] lg:pl-[100px]  ">
                {dinner.ingredients}
              </div>
            </div>
          </div>
          <div className="xl:w-full lg:w-full md:w-full sm:w-[450px] flex flex-col ">
            <h3 className="text-center xl:mb-10 lg:mb-10 font-semibold md:mb-[18px] sm:mb-[14px] mb-2 xl:text-[24px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[16px] ">
              Prepare
            </h3>
            <div className="border border-black rounded-md h-[200px] p-1 sm:h-[220px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">
              {dinner.preparations}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
