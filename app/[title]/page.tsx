"use client"
import recipes from "@/public/recipes";
import { Recipe } from "../ui/card";
import { usePathname } from "next/navigation";

export default function RecipePage() {
    const pathname = usePathname();
    let decodedPathname = decodeURIComponent(pathname);
    decodedPathname = decodedPathname.slice(1);
    console.log(decodedPathname);
    // Find the recipe based on the decoded pathname
    const recipe = recipes.find((recipe) => recipe.title === decodedPathname);

    // Handle case where recipe is not found
    if (!recipe) {
        return (
            <div>
                <p>Recipe not found!</p>
            </div>
        );
    }

    return (
        <div>
            <img className="w-full h-[400px] object-cover" src={recipe.image} alt={recipe.title} />
            {/* Display other recipe details as needed */}
        </div>
    );
}
