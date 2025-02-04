export async function BreakastData() {

    const breakie = process.env.APR_URL || "http://localhost:3000";
    try {
        const res = await fetch(`${breakie}/api/recipe`);
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