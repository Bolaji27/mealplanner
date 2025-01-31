"use client"
import beans from "@/public/images/recipeMeal/beans.jpeg"
import pasta from "@/public/images/recipeMeal/pasta2.jpeg"
import salad from "@/public/images/recipeMeal/salad.jpeg"
import jollof from "@/public/images/recipeMeal/jollof.jpeg"
import potatoe from "@/public/images/recipeMeal/potatoe.jpeg"
import Image from "next/image"
import { BreakastData } from "../breakfast/breakfastServer";
import { useRecipeContext } from "@/Context/contextApi";
import { useEffect } from "react";

export default function Lunch() {
    const {setLunch, lunch} = useRecipeContext();
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
                
                switch (recipe.type) {
                    case 'lunch':
                        setLunch(prev => [...prev, newRecipe]);
                        break;
                }
                 })}
                }
        
    
        fetchData();
            },[setLunch]);


const lunche = [{
        title: "Beans",
        image: beans,
        ingredients: ['bell pepper', ', ',  'hot pepper', ',',  'onions', ',',  'tomatoes',', ',  'red oil',', ',  'beans'],
        preparations: `1) Put the beans in a boiling water 2) Blend your peppers 3) Cook your pepper 4) Add pepper into beans 5) Add ingredients `
     },
    {
        title: 'Pasta with beef',
        image: pasta,
        ingredients: ['pasta',', ', 'sweet corn', ', ', 'peas', ', ', 'beef'],
        preparations: `1)Boil your pasta 2) Cook your beef 3) Mix your veg 4) Mix all together`

    }, 
{
    title: 'Chicken salad',
    image: salad,
    ingredients: ['chicken',',', 'mixed veg', ', ','salad dressing', ' ,', 'egg'],
    preparations: `1) Cook chicken 2) Mix salad with egg 3) Add your chicken and dressing`
},
{
    title: 'Jollof rice',
    image: jollof,
    ingredients: ['bell pepper', ', ', 'hot pepper',',', 'onions',',', 'tomatoes',',', 'oil'],
    preparations: `1)Blend your peppers  2) Pour into an empty pot  3) Add oil and heat up 4) Boil your rice 5) Add rice into the pepper 6) Add ingredients `

},
{
    title: 'Potatoe and egg',
    image: potatoe,
    ingredients: ['potatoes',', ', 'egg', ', ', 'tomatoes', ', ', 'onions', ', ', 'butter'],
    preparations: `1) Peel and boil your potatoes 2) Mix your eggs 3) Cut your tomatoes and onions 4) Butter in a pot 5) Add your vegs 6) Add your mixed eggs`
}];

const allLunch = [...lunche, ...lunch  ]
    return (<div className="text-black">
        {allLunch.map((lunch, index)=> <div key={index} className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col w-full xl:h-[450px] lg:h-[450px] md:h-[450px] sm:h-[450px] xl:mb-[80px] lg:mb-10 mb-5 md:gap-[40px] sm:gap-[40px] gap-4 "> 
        <div className="flex flex-col   xl:w-full lg:w-full md:w-[450px] sm:w-[400px] ">
            <h3 className=" mb-4 xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[20px] text-[16px] font-bold xl:pl-[180px] lg:pl-[180px] md:pl-[80px]  text-blueBg xl:mb-[60px]">{lunch.title}</h3>
            {lunch.image? <Image src={lunch.image} alt='breakfast' priority width={250} height={250}  className="xl:ml-[100px] lg:ml-[100px] rounded-md w-auto h-auto xl:mb-[36px]"
  />:<p>No image</p>}
             <div>
               <h3 className="xl:pl-[180px] lg:pl-[180px] md:pl-[60px]  mb-2 xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[16px] font-bold">Ingredients</h3>
               <div className="xl:pl-[100px] lg:pl-[100px]  ">{lunch.ingredients}</div>
                 </div>
        </div>
        <div className="xl:w-full lg:w-full md:w-full sm:w-[450px] flex flex-col ">
            <h3 className="text-center xl:mb-10 lg:mb-10 font-semibold md:mb-[18px] sm:mb-[14px] mb-2 xl:text-[24px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[16px] ">Prepare</h3>
            <div className="border border-black rounded-md h-[200px] p-1 sm:h-[220px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px]  ">{lunch.preparations}</div>
            
             </div>
    </div>)}

    </div>)
}