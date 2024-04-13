"use client";
import React, { useState } from "react";
import { Form, Input, Button, Select, message, Upload } from "antd";
import logo from "@/public/logo.jpg";
import recipesData from "@/public/recipes"; // Import the provided recipe data
import {
  UploadOutlined,
  PlusOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../ui/card";

const { Option } = Select;
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

const AddRecipeForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    const newRecipe = {
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
    const existingRecipes = localStorage.getItem("recipes") || "[]";
    const updatedRecipes = [...JSON.parse(existingRecipes), newRecipe];
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    message.success("Recipe added successfully!");
    form.resetFields();
  };

  const onRemoveIngredient = (index: number) => {
    const newIngredients = [...form.getFieldValue("ingredients")];
    newIngredients.splice(index, 1);
    form.setFieldsValue({ ingredients: newIngredients });
  };

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
          <Link href="/" className="m-3 p-2 bg-blue-500 text-white rounded-md">
            All Recipes
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Form
          form={form}
          name="add_recipe"
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

          <Form.Item
            label="Image"
            name="image"
            // rules={[{ message: "Please enter the image URL" }]}
          >
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
              Add Recipe
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
