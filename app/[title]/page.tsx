"use client";
// import recipes from "@/public/recipes";
import { Recipe } from "../ui/card";
import { usePathname } from "next/navigation";
import { Typography } from "antd";

export default function RecipePage() {
  const pathname = usePathname();
  let decodedPathname = decodeURIComponent(pathname);
  decodedPathname = decodedPathname.slice(1);
  console.log(decodedPathname);
  const localRecipes = localStorage.getItem("recipes");
  const parsedRecipes = JSON.parse(localRecipes || "[]");
  const recipe = parsedRecipes?.find((recipe) => recipe.title === decodedPathname);
  if (!recipe) {
    return (
      <div>
        <p>Recipe not found!</p>
      </div>
    );
  }

  return (
    <div>
      <img
        className="w-full h-[350px] object-cover"
        src={recipe.image}
        alt={recipe.title}
      />

      <Typography className="my-8 mx-16">
        <Typography.Title level={1}>{recipe.title}</Typography.Title>
        <Typography.Paragraph className="font-semibold">
          {recipe.description}
        </Typography.Paragraph>
        <Typography.Title level={3}>Ingredients:</Typography.Title>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li
              className="font-semibold"
              key={index}
            >{`${ingredient.name}: ${ingredient.quantity}`}</li>
          ))}
        </ul>
        <Typography.Title level={3}>Cooking Method:</Typography.Title>
        <ul>
          {recipe.cookingMethod.map((step, index) => (
            <li className="font-semibold list-decimal" key={index}>{step}</li>
          ))}
        </ul>
      </Typography>
    </div>
  );
}
