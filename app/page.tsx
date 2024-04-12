"use client"
import Image from "next/image";
import recipesData from "@/public/recipes";
import Link from "next/link";
import { Typography } from "antd";
import RecipeCard, { Recipe } from "@/app/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="flex flex-wrap items-start justify-center p-10">
      {/* Map over recipes array to render RecipeCards */}
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}
