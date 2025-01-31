
import { useRecipeContext } from "@/Context/contextApi";
export async function AddRecipe () {
    const {breakfast,lunch, dinners} = useRecipeContext();
    return {
        breakfast,
        lunch, dinners
    }

}