import React from "react";
import { Card, Typography, Button } from "antd";
import { DeleteOutlined,EyeOutlined } from "@ant-design/icons";
import Link from "next/link";
// import { Recipe } from './types'; // Define the Recipe type if not already done

const { Title, Paragraph } = Typography;

export interface Recipe {
  title: string;
  description: string;
  image: string;
  ingredients: { name: string; quantity: string }[];
  cookingMethod: string[];
}
interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const handleDelete = () => {
    const existingRecipes = localStorage.getItem("recipes") || "[]";
    const updatedRecipes = JSON.parse(existingRecipes).filter((item: Recipe) => item.title !== recipe.title);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    location.reload();
  }
  return (
    <Card
      hoverable
      style={{ width: 350, height: 420, margin: "20px" }}
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
        {/* <Title level={5}>Ingredients:</Title>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
              >{`${ingredient.name}: ${ingredient.quantity}`}</li>
            ))}
          </ul> */}
        <div className="flex space-x-4 items-center">
          <Button type="default" icon={<EyeOutlined />}>
            <Link href={recipe.title}>View</Link>
          </Button>
          <Button onClick={handleDelete} type="dashed" danger ghost icon={<DeleteOutlined />}> Delete</Button>
        </div>
      </div>
    </Card>
  );
};

export default RecipeCard;
