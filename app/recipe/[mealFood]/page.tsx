
import Image from "next/image";
import whitewine from "@/public/images/beverages/white-wine.png";
import redwine from "@/public/images/beverages/red -wine.png";
import gnger from "@/public/images/beverages/ginger.png";
import hotchoco from "@/public/images/beverages/hot choco.png";
import vanilla from "@/public/images/beverages/vanilla.png";
import spirit from "@/public/images/beverages/spirit.png";
import banana from "@/public/images/beverages/banana.png";
import tea from "@/public/images/beverages/tea.png";
import plain from "@/public/images/beverages/Frame 586.png"

export default async function page({params}:{params: Promise<{mealFood: string}>}) {
  
    
    const beverages = {
        hotDrinks:[hotchoco,tea,gnger,vanilla],
        mildDrinks : [banana,whitewine,redwine,spirit]
    } 

    const drinks = {
        hotDrinks:[hotchoco,tea,gnger],
        mildDrinks : [banana,whitewine,redwine],
        moreDrinks : [vanilla,spirit, plain]
        
    }

    const smDrinks = {
        hotDrinks:[hotchoco,tea],
        lilDrinks: [gnger, redwine],
        mildDrinks : [banana,whitewine],
        moreDrinks : [vanilla,spirit]
        
    }
    
    
    const mealFood = (await params).mealFood;
  return (
    <div className ='text-black mt-10 font-kaisei'>{
            mealFood === "beverages" ?  <div className="flex flex-col gap-8 mb-2 w-full"><div className="xl:flex lg:flex md:flex flex-row gap-2 sm:hidden hidden"> {beverages.hotDrinks.map((beverage, index)=>(
        <Image key={index}   src={beverage} alt="beverage" className="  xl:w-full lg:w-full md:w-full w-[100px]" width={300} priority/>
    )
    )}</div>

    <div className="xl:flex lg:flex md:flex flex-row gap-2 sm:hidden hidden">
    {beverages.mildDrinks.map((beverage, index)=>(
        <Image key={index} src={beverage} alt="beverage" className=" xl:w-full lg:w-full md:w-full w-[100px]" />
    )
    )}
    </div>
    <div className="xl:hidden lg:hidden md:hidden sm:flex hidden flex-row sm:w-full w-full">{drinks.hotDrinks.map((drink, index)=> (
        <Image key={index}  src={drink} alt="drink" priority className="w-full"/>
    ))}</div>
    <div className="xl:hidden lg:hidden md:hidden sm:flex hidden flex-row sm:w-full w-full">{drinks.mildDrinks.map((drink, index)=> (
        <Image key={index} src={drink} alt="drink" className ="w-full "/> 
    ))}</div>
     <div className="xl:hidden lg:hidden md:hidden sm:flex hidden flex-row sm:w-full w-full ">{drinks.moreDrinks.map((drink, index)=> (
        <Image key={index}  src={drink} alt="drink" className ="w-full "/>
    ))}</div>

<div className="xl:hidden lg:hidden md:hidden sm:hidden flex flex-row sm:w-full w-full gap-2">{smDrinks.moreDrinks.map((drink, index)=> (
        <Image key={index} src={drink} alt="drink" className ="w-full "/>
    ))}</div>
    <div className="xl:hidden lg:hidden md:hidden sm:hidden flex flex-row sm:w-full w-full gap-2 ">{smDrinks.lilDrinks.map((drink, index)=> (
        <Image key={index} src={drink} alt="drink" className ="w-full "/>
    ))}</div>
    <div className="xl:hidden lg:hidden md:hidden sm:hidden flex flex-row sm:w-full w-full gap-2 ">{smDrinks.mildDrinks.map((drink, index)=> (
        <Image key={index} src={drink} alt="drink" className ="w-full "/>
    ))}</div>

    </div>:""} </div>
  )
}
