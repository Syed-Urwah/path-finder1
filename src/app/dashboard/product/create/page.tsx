"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import ImagePlaceHolder from "@/../public/images/image-placeholder.png";
import React, { useState } from "react";
import Image from "next/image";
import Options, {
  Option1,
  Option2,
  Option3,
  Option4,
} from "@/components/options";
import { useFormik } from "formik";
import { Pencil } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import ProductCreateForm from "@/components/ProductCreateForm";

export default function Page() {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState<any>(false);
  const [option4, setOption4] = useState(false);

  const [options, setOptions] = useState<any>([
    {
      type: "1",
      question: "question1",
      answers: [
        {
          ans: "ans1",
          img: "",
        },
        {
          ans: "ans2",
          img: "",
        },
      ],
    },
  ]);

  function handleEditClick(index: any) {
    console.log(index);
    const optionToEdit = options[index];
    // setQuestion(optionToEdit.question);
    // setAns(optionToEdit.answers);
    setEditIndex(index);
    setIsEditing(true);
    // setOption1(true); // Show the form
  }

  const [mainImage, setMainImage] = useState(null);

  const createProduct = async (values: any) => {
    try {
      let form: any = document.getElementById("product_form");
      let formString = form.outerHTML;

      console.log(formString);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BE_URL + "/api/v1/product",
        {
          // Replace with your data object
          mainData: values,
          form: formString,
          options,
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      product_name: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      const jsonString = JSON.stringify(
        {
          mainData: values,
          options,
        },
        null,
        2
      );
      console.log({
        mainData: values,
        options,
      });

      createProduct(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  function displayEdit(option: any) {
    if (option.type == 1) {
      return (
        <Option1
          formik={formik}
          options={options}
          option={option}
          setOptions={setOptions}
          setOption1={setOption1}
          edit={true}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      );
    }

    if (option.type == 2) {
      return (
        <Option2
          formik={formik}
          options={options}
          option={option}
          setOptions={setOptions}
          setOption2={setOption2}
          edit={true}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      );
    }

    if (option.type == 3) {
      return (
        <Option3
          formik={formik}
          options={options}
          option={option}
          setOptions={setOptions}
          setOption3={setOption3}
          edit={true}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      );
    }
    if (option.type == 4) {
      return (
        <Option4
          formik={formik}
          options={options}
          option={option}
          setOptions={setOptions}
          setOption4={setOption4}
          edit={true}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      );
    }

    return (
      <Option1
        formik={formik}
        options={options}
        option={option}
        setOptions={setOptions}
        setOption1={setOption1}
        edit={true}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
    );
  }

  return <ProductCreateForm />;
}
