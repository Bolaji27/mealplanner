"use server" 
import { RecipeSubmit } from "./shareServer"

export default async function RecipeShare() {   
  


    return (<div className="text-black mt-6 flex justify-center flex-col items-center ">
        <h3 className="font-hammersmith text-[24px]">Share Your <span className="text-redColor">recipe</span></h3>
        <p className="font-lowan ">As always we appreciate you sharing your recipe</p>
        <p className="font-inria">Please fill in the form below</p>
       
        <form action={RecipeSubmit}>
       
            <div className="flex w-full flex-col gap-4 mt-2">
            <div className="flex w-full flex-col gap-4">
            <label htmlFor="recipe" className="text-xl" >Recipe Type</label>
            <select id="recipe" name="recipe" className="border border-black rounded-lg w-[400px] outline-none pl-2 h-[40px]">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinners">dinners</option>
            </select>
        </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-xl">Title</label>
            <input id="title" name="title" placeholder="Enter title" type="text" className="border border-black rounded-lg w-[400px] outline-none pl-2 h-[40px]"/>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-xl">Image</label>
            <input id="image" name="image" placeholder="Insert Image"  type="file" 
        accept="image/*" className="border border-black rounded-lg w-[400px] h-[140px] outline-none pl-2 pt-5"/>
            </div>

            <div className="flex flex-col gap-2 ">
            <label htmlFor="ingredients" className="text-xl">Ingredients</label>
            <textarea id="ingredients" name="ingredients" placeholder="Please add ingredients" className="border border-black rounded-lg w-[400px] outline-none pl-2 h-[80px] "/>
            </div>
            <div className="flex flex-col gap-2">
    <label htmlFor="preparations" className="text-xl">Preparations</label>
    <textarea 
        id="preparations" 
        name="preparations" 
        placeholder="identify how we prepare this dish" 
        className="border border-black rounded-lg w-[400px] outline-none pl-2 h-[140px] pt-2"
    />
</div>
            </div>
            <div className="flex items-center justify-center mt-5 mb-2">
            <button type="submit" className="w-[120px] border border-black h-[40px] rounded-md text-blueBg text-[20px] ">Submit</button>
            </div>
        </form>
    </div>)
}