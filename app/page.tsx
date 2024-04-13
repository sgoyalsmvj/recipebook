"use client";
import Image from "next/image";
import recipesData from "@/public/recipes";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import { Typography } from "antd";
import RecipeCard, { Recipe } from "@/app/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const localRecipes = localStorage.getItem("recipes");
    if (localRecipes) {
      setRecipes(JSON.parse(localRecipes));
    } else {
      // Set recipes to recipesData only if there are no recipes in localStorage
      setRecipes(recipesData);
    }
  }, []);

  return (
    <div>
      <div className="flex items-center  justify-around">
        <div>
          <Image
            className="m-3"
            src={logo}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold ">Recipe-Book</h1>
        </div>
        <div>
          <Link
            href="/addrecipe"
            className="m-3 p-2 bg-blue-500 text-white rounded-md"
          >
            Add Recipe
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-center p-10">
        {/* Map over recipes array to render RecipeCards */}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
