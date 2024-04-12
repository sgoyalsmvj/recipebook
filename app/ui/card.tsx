import React from "react";
import { Card, Typography } from "antd";
import Link from "next/link";
// import { Recipe } from './types'; // Define the Recipe type if not already done

const { Title, Paragraph } = Typography;

export interface Recipe {
  title: string;
  description: string;
  image: string;
  ingredients: { name: string; quantity: string }[];
  cookingMethod:string[];
}
interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {

  return (
    <Link href={recipe.title}>
      <Card
        hoverable
        style={{ width: 350, height: 600, margin: "20px" }}
        cover={
          <img
            className="w-full object-cover h-[200px]"
            alt={recipe.title}
            src={recipe.image}
          />
        }
      >
        <div style={{ padding: "12px 16px" }}>
          <Title level={4}>{recipe.title}</Title>
          <Paragraph>{recipe.description}</Paragraph>
          <Title level={5}>Ingredients:</Title>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
              >{`${ingredient.name}: ${ingredient.quantity}`}</li>
            ))}
          </ul>
        </div>
      </Card>
    </Link>
  );
};

export default RecipeCard;
