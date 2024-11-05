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
import { useRouter } from "next/navigation";

export default function ProductCreateForm({ product }: any) {
  const isEdit = !!product; // Convert product to a boolean
  console.log(isEdit);
  console.log(product);

  const router = useRouter();

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(true);

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState<any>(false);
  const [option4, setOption4] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  let optionsArray = isEdit ? product.options : [];

  const [options, setOptions] = useState<any>(optionsArray);

  function handleEditClick(index: any) {
    console.log(index);
    const optionToEdit = options[index];
    // setQuestion(optionToEdit.question);
    // setAns(optionToEdit.answers);
    setEditIndex(index);
    setIsEditing(true);
    // setOption1(true); // Show the form
  }

  const [mainImage, setMainImage] = useState(
    isEdit ? product.mediaUrl + "/" + product.image : null
  );

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
      if (response.data.status == "success") {
        router.push("/dashboard/product");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const EditProduct = async (values: any) => {
    try {
      let form: any = document.getElementById("product_form");
      let formString = form.outerHTML;

      console.log(formString);
      const response = await axios.put(
        process.env.NEXT_PUBLIC_BE_URL + `/api/v1/product/${product.id}`,
        {
          // Replace with your data object
          mainData: values,
          form: formString,
          options,
        }
      );

      console.log("Response:", response.data);
      if (response.data.status == "success") {
        router.push("/dashboard/product");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      product_name: isEdit ? product?.product_name : "",
      description: isEdit ? product?.description : "",
      image: isEdit ? product?.mediaUrl + "/" + product?.image : "",
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

      isEdit ? EditProduct(values) : createProduct(values);
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
          isEditPage={isEdit}
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
          isEditPage={isEdit}
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

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4">
      {/* Existing Form Container */}
      <Card className="w-[700px] bg-white rounded-xl shadow-md">
        <CardContent className="p-6">
          <form onSubmit={formik.handleSubmit}>
            {/* <div className="mb-4">
              <Label htmlFor="product_name" className="block text-sm font-bold text-gray-700">Product Name</Label>
              <Input
                id="product_name"
                name="product_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.product_name}
                className="bg-white "
                required
              />
            </div> */}
            <div className="mb-4">
              <Label htmlFor="product_name" className="block text-sm font-bold text-gray-700">
                Product Name
              </Label>
              <Input
                id="product_name"
                name="product_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.product_name}
                className="bg-white rounded-full border border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            {/* <div className="mb-4">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
                className="bg-gray-100"
                required
              />
            </div> */}


            {/* <div className="mb-4"> */}
            <div className="mt-7">
              <Label htmlFor="description" className="block text-sm font-bold text-gray-700">
                Description
              </Label>
              <textarea
                id="description"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                className="bg-white mt-1 block w-full h-32 rounded-md border border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>


            {/* <div className="mb-4">
              <Label htmlFor="picture">
                Image (5:3)
                {mainImage ? (
                  <AspectRatio ratio={5 / 3} className="w-full h-full">
                    {mainImage && (
                      <Image
                        src={!mainImage ? ImagePlaceHolder : mainImage}
                        alt="Your Image Description"
                        className="rounded-md object-cover"
                        layout="fill"
                      />
                    )}
                  </AspectRatio>
                ) : (
                  <div className="w-full bg-white h-32 flex rounded-sm border border-gray-300">
                    <Image
                      src={!mainImage ? ImagePlaceHolder : mainImage}
                      alt="image-placeholder"
                      width={50}
                      height={50}
                      className="mx-auto my-auto"
                    />
                  </div>
                )}
              </Label>
              <Input
                id="picture"
                type="file"
                name="image"
                className="hidden"
                onChange={(e: any) => {
                  const file = e.target.files[0];
                  // formik.setFieldValue(`image`, file);
                  if (file) {
                    const reader: any = new FileReader();
                    reader.onloadend = () => {
                      setMainImage(reader.result);
                      formik.setFieldValue(`image`, reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                  setMainImage(e.target.files[0]);
                }}
              />
            </div> */}

            <div className="mt-7">
              <Label htmlFor="picture">
                {/* Image (5:3) */}
                {mainImage ? (
                  <AspectRatio ratio={5 / 3} className="w-full h-full">
                    {mainImage && (
                      <Image
                        src={!mainImage ? ImagePlaceHolder : mainImage}
                        alt="Your Image Description"
                        className="rounded-md object-cover"
                        layout="fill"
                      />
                    )}
                  </AspectRatio>
                ) : (
                  <div className="w-full bg-white h-32 flex flex-col items-center justify-center rounded-sm border-4 border-dotted border-gray-400">
                    <Image
                      src={!mainImage ? ImagePlaceHolder : mainImage}
                      alt="image-placeholder"
                      width={30}
                      height={30}
                    />
                    <span className="mt-2 text-gray-700">Click here to upload your file or drag</span>
                    <span className="mt-2 text-gray-500">Supported format JPG,PNG (upto 10 Mb)</span>
                  </div>
                )}
              </Label>

              <Input
                id="picture"
                type="file"
                name="image"
                className="hidden"
                onChange={(e: any) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader: any = new FileReader();
                    reader.onloadend = () => {
                      setMainImage(reader.result);
                      formik.setFieldValue(`image`, reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                  setMainImage(e.target.files[0]);
                }}
              />
            </div>


            <div className="mt-7">
              <Label htmlFor="options">Options</Label>
              {options?.length > 0 &&
                options?.map((option: any, index: any) =>
                  editIndex == index && isEditing ? (
                    displayEdit(option)
                  ) : (
                    <div
                      key={index}
                      className="bg-gray-200 py-2 px-2 flex items-center justify-between rounded-md mb-2"
                    >
                      <div>
                        <p className="font-bold text-sm">{option.question}</p>
                        <div className="flex flex-wrap gap-2">
                          {option.answers.map((answer: any, index: any) => {
                            const isLast = index === option.answers.length - 1;
                            if (!isLast) {
                              if (option.type == "4") {
                                if (isEdit && !answer.product_name) {
                                  answer.product_name =
                                    answer.product?.product_name;
                                }

                                return (
                                  <p
                                    key={index}
                                    className="bg-gray-400 rounded-sm px-2"
                                  >
                                    {answer.product_name}
                                  </p>
                                );
                              }
                              return (
                                <p
                                  key={index}
                                  className="bg-gray-400 rounded-sm px-2"
                                >
                                  {answer.ans}
                                </p>
                              );
                            }
                          })}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleEditClick(index)}
                      >
                        <Pencil />
                      </button>
                    </div>
                  )
                )}
            </div>

            <Options
              formik={formik}
              options={options}
              setOptions={setOptions}
              option1={option1}
              option2={option2}
              option3={option3}
              option4={option4}
              setOption1={setOption1}
              setOption2={setOption2}
              setOption3={setOption3}
              setOption4={setOption4}
            />

            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {formik.isSubmitting ? "loading.." : "Submit"}
            </button>
          </form>
        </CardContent>
      </Card>

      {/* New Additional Container with Gray Background and White Inner Container */}
      <div
        id="product_form"
        className="w-[700px] h-[800px]  mx-4 flex flex-col"
        // className="bg-white w-[700px] h-[800px]  mx-4 flex flex-col  "
      >
        <div className=" border-4 border-gray-200 p-4 rounded-xl w-[700px] ">
          <div className="bg-white p-4 rounded-lg">
            <AspectRatio ratio={16 / 9} className="w-full h-full">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt="Your Image Description"
                  className="rounded-md object-cover"
                  layout="fill"
                />
              )}
            </AspectRatio>
            <div className="flex flex-col mt-4 space-y-2">
              <p className="text-lg font-semibold font-sans ">
                {formik.values.product_name || "Name"}
              </p>
              <p className="text-sm text-gray-600 font-sans ">
                {formik.values.description || "Description"}
              </p>
            </div>
          </div>
          {options?.map((option: any, index: any) => {
            return (
              <DisplayOptions
                key={index}
                option={option}
                isEdit={isEdit}
                isEditing={isEditing}
              />
            );
          })}
        </div>
      </div>

    </div>
  );
}

function DisplayOptions({ option, isEdit, isEditing }: any): any {
  console.log(option);

  const [sliderValue, setSliderValue] = useState(option.answers[0].ans);

  function chooseOption(type: any) {
    if (type == 1) {
      return (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
          <RadioGroup defaultValue="option-one">
            {option.answers.map((answer: any, index: any) => {
              const isLast = index === option.answers.length - 1;
              if (!isLast) {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center space-x-2"
                  >
                    <Label
                      className="font-sans font-normal text-base"
                      htmlFor="option-one"
                    >
                      {answer.ans}
                    </Label>
                    <RadioGroupItem value={answer.ans} id="option-one" />
                  </div>
                );
              }
            })}
          </RadioGroup>
        </div>
      );
    }

    if (type == 2) {
      return (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
          <RadioGroup defaultValue="option-one">
            {option.answers.map((answer: any, index: any) => {
              const isLast = index === option.answers.length - 1;
              if (!isLast) {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center space-x-2"
                  >
                    <Label
                      className="font-sans font-normal text-base"
                      htmlFor="option-one"
                    >
                      {answer.ans}
                    </Label>
                    <Checkbox value={answer.ans} id="checkbox1" />
                  </div>
                );
              }
            })}
          </RadioGroup>
        </div>
      );
    }

    if (type == 3) {
      setSliderValue(option.answers[0].ans);
      return (
        <div className="flex justify-between gap-3 mt-4">
          <div className="grid w-full max-w-sm items-center gap-1.5 transition-colors duration-300 hover:bg-gray-200 p-2 rounded-md">
            <Label className="font-sans text-base">meters</Label>
            <div className="flex justify-between items-center">
              <span className="text-sm">{option.answers[0].ans}</span>
              <Input
                type="number"
                id="meters"
                min={option.answers[0].ans}
                max={option.answers[1].ans}
                value={sliderValue}
                className="w-[50px] text-center border rounded-sm"
              />
              <span className="text-sm">{option.answers[1].ans}</span>
            </div>
          </div>
          {/*<div className="grid w-full max-w-sm items-center gap-1.5">
                <Label>Picture</Label>
                <Input id="picture" type="text"/>
            </div>*/}

          <div className="grid w-full max-w-sm items-center">
            <div className="flex justify-between mb-1">
              <span className="text-sm">{option.answers[0].ans}</span>
              <span className="text-sm">{option.answers[1].ans}</span>
            </div>
            <Slider
              onValueChange={(e) => {
                console.log(e);
                const [a] = e;
                setSliderValue(a);
              }}
              defaultValue={[option.answers[0].ans]}
              max={option.answers[1].ans}
              step={option.answers[2].ans}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {option.type == 1 ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
          <RadioGroup defaultValue="option-one">
            {option.answers.map((answer: any, index: any) => {
              const isLast = index === option.answers.length - 1;
              if (!isLast) {
                // return (
                //   <div
                //     key={index}
                //     className="flex justify-between items-center space-x-2"
                //   >
                //     <Label
                //       className="font-sans font-normal text-base"
                //       htmlFor="option-one"
                //     >
                //       {answer.ans}
                //     </Label>
                //     <div className="flex items-center gap-2">
                //       {answer.img && (
                //         <div className=" h-full">
                //           <Image
                //             src={
                //               answer.img.startsWith("data:image") // Check if the image is base64 encoded
                //                 ? answer.img // Use it directly
                //                 : process.env.NEXT_PUBLIC_BE_URL +
                //                 "/storage/" +
                //                 answer.img // Otherwise, construct the full URL
                //             }
                //             alt="Your Image Description"
                //             className="rounded-md object-cover"
                //             width={30}
                //             height={30}
                //           // layout="fill"
                //           />
                //         </div>
                //       )}
                //       <RadioGroupItem value={answer.ans} id="option-one" />
                //     </div>
                //   </div>
                // );
               
               

                return (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={answer.ans} id="option-one" />
                    {answer.img && (
                      <div className="h-full">
                        <Image
                          src={
                            answer.img.startsWith("data:image") 
                              ? answer.img 
                              : process.env.NEXT_PUBLIC_BE_URL + "/storage/" + answer.img
                          }
                          alt="Your Image Description"
                          className="rounded-full object-cover"
                          width={30}
                          height={30}
                        />
                      </div>
                    )}
                    <Label
                      className="font-sans font-normal text-base"
                      htmlFor="option-one"
                    >
                      {answer.ans}
                    </Label>
                  </div>
                );
                
                
              }
            })}
          </RadioGroup>
        </div>
      ) : option.type == 2 ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
          <RadioGroup defaultValue="option-one">
            {option.answers.map((answer: any, index: any) => {
              const isLast = index === option.answers.length - 1;
              if (!isLast) {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center space-x-2"
                  >
                    <Label
                      className="font-sans font-normal text-base"
                      htmlFor="option-one"
                    >
                      {answer.ans}
                    </Label>
                    <div className="flex items-center gap-2">
                      {answer.img && (
                        <div className=" h-full">
                          <Image
                            src={
                              answer.img.startsWith("data:image") // Check if the image is base64 encoded
                                ? answer.img // Use it directly
                                : process.env.NEXT_PUBLIC_BE_URL +
                                "/storage/" +
                                answer.img // Otherwise, construct the full URL
                            }
                            alt="Your Image Description"
                            className="rounded-md object-cover"
                            width={30}
                            height={30}
                          // layout="fill"
                          />
                        </div>
                      )}
                      <Checkbox value={answer.ans} id="checkbox1" />
                    </div>
                  </div>
                );
              }
            })}
          </RadioGroup>
        </div>
      ) : option.type == 3 ? (
        <div className="flex justify-between gap-3 mt-4">
          <div className="grid w-full max-w-sm items-center gap-1.5 transition-colors duration-300 hover:bg-gray-200 p-2 rounded-md">
            <Label className="font-sans text-base">meters</Label>
            <div className="flex justify-between items-center">
              <span className="text-sm">{option.answers[0].ans}</span>
              <Input
                type="number"
                id="meters"
                min={option.answers[0].ans}
                max={option.answers[1].ans}
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
                className="w-[50px] text-center border rounded-sm"
              />
              <span className="text-sm">{option.answers[1].ans}</span>
            </div>
          </div>
          {/*<div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Picture</Label>
                    <Input id="picture" type="text"/>
                </div>*/}

          <div className="grid w-full max-w-sm items-center">
            <div className="flex justify-between mb-1">
              <span className="text-sm">{option.answers[0].ans}</span>
              <span className="text-sm">{option.answers[1].ans}</span>
            </div>
            <Slider
              onValueChange={(e) => {
                console.log(e);
                const [a] = e;
                setSliderValue(a);
              }}
              value={[sliderValue]}
              defaultValue={[option.answers[0].ans]}
              min={Number.parseInt(option.answers[0].ans)}
              max={option.answers[1].ans}
              step={option.answers[2].ans}
            />
          </div>
        </div>
      ) : option.type == 4 ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
          <RadioGroup defaultValue="option-one">
            {option.answers.map((answer: any, index: any) => {
              const isLast = index === option.answers.length - 1;
              if (!isLast) {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center space-x-2"
                  >
                    <Label
                      className="font-sans font-normal text-base"
                      htmlFor="option-one"
                    >
                      {answer.product_name}
                    </Label>
                    <div className="flex items-center gap-2">
                      {/* {answer.img &&
                                                    <div className=" h-full">
    
                                                        <Image
                                                            src={isEdit ? "http://localhost:8000/storage/" + answer.img : answer.img}
                                                            alt="Your Image Description"
                                                            className="rounded-md object-cover"
                                                            width={30}
                                                            height={30}
                                                        // layout="fill"
                                                        />
    
                                                    </div>
                                                } */}
                      <Checkbox value={answer.ans} id="checkbox1" />
                    </div>
                  </div>
                );
              }
            })}
          </RadioGroup>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
