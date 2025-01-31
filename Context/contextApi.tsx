"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { useState, createContext, useContext, ReactNode } from "react";

type recipeType = {
    title: string,
    image:  string | StaticImageData | null,
    ingredients: string[],
    preparations: string
}

type contextRecipeType = {
    breakfast: recipeType[],
    lunch: recipeType[],
    dinners: recipeType[],
    setBreakfast: React.Dispatch<React.SetStateAction<recipeType[]>>,
    setLunch: React.Dispatch<React.SetStateAction<recipeType[]>>,
    setDinners: React.Dispatch<React.SetStateAction<recipeType[]>>
}


const RecipeContext = createContext<contextRecipeType>({
    breakfast: [{
        title: '',
        image: null,
        ingredients: [],
        preparations: ''
    }],
    lunch: [{
        title: '',
        image: null,
        ingredients: [],
        preparations: ''
    }],
    dinners: [{
        title: '',
        image: null,
        ingredients: [],
        preparations: ''
    }],
    setBreakfast: () => {},
    setLunch: () => {},
    setDinners: () => {}
});

export function MyContxt({ children }: { children: ReactNode }) {
    const [breakfast, setBreakfast] = useState<recipeType[]>([{
       title: '',
        image: null,
        ingredients: [''],
        preparations: ''
    }]);
    const [lunch, setLunch] = useState<recipeType[]>([{
        title: '',
        image: null,
        ingredients: [''],
        preparations: ''
    }]);
    const [dinners, setDinners] = useState<recipeType[]>([{
        title: '',
        image: null,
        ingredients: [''],
        preparations: ''
    }]);

    const value = {
        breakfast,
        lunch,
        dinners,
        setBreakfast,
        setLunch,
        setDinners
    }
    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
}

export function useRecipeContext() {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('useRecipeContext must be used within a MyContxt provider');
    }
    return context;
}