export async function BreakastData() {
    try {
        const res = await fetch("/api/recipe");
        if(!res.ok) {
            throw new Error("error, cant get recipe")
        }
         const recipe = await res.json();
         console.log(recipe)
         return recipe;
         
    } catch (error) {
        console.log(error)
        return { error: 'Failed to fetch recipes' };
    }
   
}