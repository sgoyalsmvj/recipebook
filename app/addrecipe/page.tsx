"use client";
import React, { useState } from "react";
import { Form, Input, Button, Select, message, Upload } from "antd";
import recipesData from "@/public/recipes"; // Import the provided recipe data
import {
  UploadOutlined,
  PlusOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import { SSG_GET_INITIAL_PROPS_CONFLICT } from "next/dist/lib/constants";
import { CLIENT_REFERENCE_MANIFEST } from "next/dist/shared/lib/constants";
import { scheduler } from "timers/promises";

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
  const [recipes, setRecipes] = useState(recipesData);

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
      cookingMethod:values.method
    };
    setRecipes([...recipes, newRecipe]);
    form.resetFields();
  };

  const onRemoveIngredient = (index: number) => {
    const newIngredients = [...form.getFieldValue("ingredients")];
    newIngredients.splice(index, 1);
    form.setFieldsValue({ ingredients: newIngredients });
  };

  return (
    <div className="flex items-center justify-center">
      <Form
        form={form}
        name="add_recipe"
        onFinish={onFinish}
        style={{ width: "80%" }}
      >
        <Form.Item
          label="Recipe Title"
          name="title"
          rules={[{ required: true, message: "Please enter the recipe title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter the recipe description" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please enter the image URL" }]}
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
                      { required: true, message: "Please enter the quantity" },
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
          name="method"
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
  );
};

export default AddRecipeForm;
