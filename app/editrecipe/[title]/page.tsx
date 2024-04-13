"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, message, UploadProps } from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import { Recipe } from "../../ui/card";
import { usePathname } from "next/navigation";

const props: UploadProps = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const EditRecipeForm: React.FC = () => {
  const [form] = Form.useForm();
  const pathname = usePathname();
  let decodedPathname = decodeURIComponent(pathname);
  decodedPathname = decodedPathname.slice(12);
  console.log(decodedPathname);
  const localRecipes = localStorage.getItem("recipes");
  const parsedRecipes = JSON.parse(localRecipes || "[]");
  const currentrecipe = parsedRecipes?.find(
    (recipe: { title: string }) => recipe.title === decodedPathname
  );
  if (!currentrecipe) {
    return (
      <div>
        <p>Recipe not found!</p>
      </div>
    );
  }
  useEffect(() => {
    form.setFieldsValue({
      title: currentrecipe.title,
      description: currentrecipe.description,
      image: currentrecipe.image,
      ingredients: currentrecipe.ingredients,
      cookingMethod: currentrecipe.cookingMethod.join("\n"),
    });
  }, [currentrecipe]);

  const onFinish = (values: any) => {
    const updatedRecipe = {
      ...currentrecipe,
      title: values.title,
      description: values.description,
      image: values.image,
      ingredients: values.ingredients.map((ingredient: any) => ({
        name: ingredient.name,
        quantity: ingredient.quantity,
      })),
      cookingMethod: values.cookingMethod
        .split("\n")
        .map((step: string) => step.trim()),
    };
    // Update the existing recipe in localStorage
    const existingRecipes = localStorage.getItem("recipes") || "[]";
    const parsedRecipes = JSON.parse(existingRecipes);
    const updatedRecipes = parsedRecipes.map((r: Recipe) =>
      r.title === currentrecipe.title ? updatedRecipe : r
    );
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    message.success("Recipe updated successfully!");
  };

  const onRemoveIngredient = (index: number) => {
    const newIngredients = [...form.getFieldValue("ingredients")];
    newIngredients.splice(index, 1);
    form.setFieldsValue({ ingredients: newIngredients });
  };

  return (
    <div>
      {/* Header */}
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
          <Link href="/" className="m-3 p-2 bg-blue-500 text-white rounded-md">
            All Recipes
          </Link>
        </div>
      </div>
      {/* Form */}
      <div className="flex flex-col items-center justify-center">
        <Form
          form={form}
          name="edit_recipe"
          onFinish={onFinish}
          style={{ width: "80%" }}
        >
          <Form.Item
            label="Recipe Title"
            name="title"
            rules={[
              { required: true, message: "Please enter the recipe title" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter the recipe description",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Image" name="image">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.List name="ingredients">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
                  <div key={key}>
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      label="Ingredient Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the ingredient name",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "quantity"]}
                      label="Quantity"
                      rules={[
                        {
                          required: true,
                          message: "Please enter the quantity",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item>
                      <Button onClick={() => onRemoveIngredient(index)}>
                        Remove
                      </Button>
                    </Form.Item>
                  </div>
                ))}
                <Form.Item style={{ margin: "20px" }}>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <PlusOutlined />
                    Add Ingredient
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            label="Cooking Method"
            name="cookingMethod"
            rules={[
              { required: true, message: "Please enter the cooking method" },
            ]}
          >
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ display: "flex", alignItems: "center" }}
            >
              <PlusCircleTwoTone />
              Update Recipe
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditRecipeForm;
