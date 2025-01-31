"use server"
import { writeFile } from 'fs/promises'
import { join } from 'path'


// import { useRecipeContext } from "@/Context/contextApi";
export async function RecipeSubmit (formData:FormData) {
  const title =  formData.get("title");
  const image = formData.get("image") as File;
  const ingredients = formData.get("ingredients")?.toString().split(",");
  const preparations = formData.get("preparations")?.toString().split(".");
  const type = formData.get("recipe");



//   const {setBreakfast,setLunch,setEvenings} = useRecipeContext();
if (!image) {
    throw new Error("No image addded");
}

  
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const extention = image.name.split(".").pop();
  const filename = `${title}.${extention}`;

  const path = join(process.cwd(), 'public', 'images', 'recipeMeal', filename);
  await writeFile(path, buffer);
  const newData = { 
    type, 
    title, 
    image: `/images/recipeMeal/${filename}`, 
    ingredients, 
    preparations 
  };

  try {
    
    const res = await fetch("http://localhost:3000/api/recipe", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newData)});
        if (!res.ok) {
            const errorText = await res.text();
            console.error('API Response Error:', errorText);
            throw new Error(`Failed to save recipe: ${errorText}`);
          }
        
          const json = await res.json();
          console.log(json);
          return json;
        } catch (error) {
          console.error('Submission Error:', error);
          throw error;
        }
    
    
}

