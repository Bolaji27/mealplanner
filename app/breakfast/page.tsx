"use client"
import Image from "next/image";
import yamandegg from '@/public/images/recipeMeal/yam and egg.jpeg'
import ricestew from "@/public/images/recipeMeal/rice and stew.jpeg"
import porridge from "@/public/images/recipeMeal/porridge2.jpeg"
import breadandegg from "@/public/images/recipeMeal/bread and egg.jpeg"
import cereal from "@/public/images/recipeMeal/cereal.jpeg"
import { useEffect } from "react";
import { BreakastData } from "./breakfastServer";
import { useRecipeContext } from "@/Context/contextApi";
 

export default function Breakfast () {
 const {breakfast, setBreakfast} = useRecipeContext();

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
                case 'breakfast':
                    setBreakfast(prev => [...prev, newRecipe]);
                    break;
            }
             })}
            }
    

    fetchData();
        },[setBreakfast]);


    console.log(breakfast);
const breakfasts = [{
            title: "Yam and egg",
            image: yamandegg,
            ingredients: ['yam', " ",  'egg', " ",'tomatoes', " ",'onions', " ",'butter', " ",'salt'," ", 'maggi'],
            preparations: `1) boil some water, 2) peel your yam, 3)insert yam into boiling water, 4) add your salt, 5) prepare your egg, 6) add some oil into an empty pan, 7) ensure its warm before putting oil or butter`
},
{
    title: "Rice and Stew",
    image: ricestew,
    ingredients: ['bell pepper', ", ",  'hot pepper', ", ",  'tomatoes', ", ",  'oil', " ,",  'rice',", ",  'salt'," ,",  'maggi'],
    preparations: `1)blend your pepper mix 2) pour into an empty pots 3)boil for about 30mins 4) add your ingredients`
},
{
    title: "Porridge",
    image: porridge,
    ingredients: ['porridge satchet', ', ',  'milk',', ', 'sugar or honey'],
    preparations: `1) open up the satchet 2)pour all into a bowl 3)add milk 4)warm reading the label`
},
{
    title: "Bread and egg",
    image: breadandegg,
    ingredients: ['tomatoes',', ', 'egg',', ', 'onions',', ', 'salt',',', 'bread'],
    preparations: `1) break your egg into an empty bowl 2) add some ingredient like salt 3) mix up 4) warm up your oil 5)pour the egg into the pan when warm`
}, {
    title: 'Cereal',
    image: cereal,
    ingredients: ['ceral',', ', 'milk'],
    preparations: `1) warm up milk(your choice) 2) add cereal`
},
]

const allBreakfast = [...breakfasts, ...breakfast];



    return (<div className="text-black" >
        {allBreakfast.map((breakfast, index)=> <div key={index}> 
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col w-full xl:h-[450px] lg:h-[450px] md:h-[450px] sm:h-[450px] xl:mb-10 lg:mb-10 mb-5 md:gap-[40px] sm:gap-[40px] gap-4 "> 
            <div className="flex flex-col   xl:w-full lg:w-full md:w-[450px] sm:w-[400px] ">
                <h3 className=" mb-4 xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] font-bold xl:pl-[180px] lg:pl-[180px] md:pl-[80px]  text-blueBg">{breakfast.title}</h3>
                 {breakfast.image?<Image src={breakfast.image} alt='breakfast' priority width={300} height={300}  className="xl:ml-[100px] lg:ml-[100px] rounded-md w-auto h-auto "
      />:<p>No image</p>}
                 <div>
                   <h3 className="xl:pl-[180px] lg:pl-[180px] md:pl-[60px]  mb-2 xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[16px] font-bold">Ingredients</h3>
                   <div className="xl:pl-[100px] lg:pl-[100px]  ">{breakfast.ingredients}</div>
                     </div>
            </div>
            <div className="xl:w-full lg:w-full md:w-full sm:w-[450px] flex flex-col ">
                <h3 className="text-center xl:mb-10 lg:mb-10 font-semibold md:mb-[18px] sm:mb-[14px] mb-2 xl:text-[24px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[16px] ">Prepare</h3>
                <div className="border border-black rounded-md h-[200px] p-1 sm:h-[220px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">{breakfast.preparations}</div>
                
                 </div>
        </div>
        </div>)}

        </div>)
}