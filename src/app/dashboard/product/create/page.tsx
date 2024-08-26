"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import ImagePlaceHolder from "@/../public/images/image-placeholder.png";
import React, { useState } from "react";
import Image from "next/image";
import Options from "@/components/options";
import { useFormik } from "formik";
import { Pencil } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
    const [options, setOptions] = useState([{
        type: '1',
        question: "question1",
        answers: [
            {
                ans: 'ans1',
                img: 'img1',
            },
            {
                ans: 'ans2',
                img: 'img2',
            },
        ]
    }]);

    const formik = useFormik({
        initialValues: {
            product_name: "",
            description: "",
            image: "",
        },
        onSubmit: (values) => {
            console.log([values, options]);
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4">
            {/* Existing Form Container */}
            <Card className="w-[500px] bg-white rounded-xl shadow-md">
                <CardContent className="p-6">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <Label htmlFor="product_name">Name</Label>
                            <Input
                                id="product_name"
                                name="product_name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.product_name}
                                className="bg-gray-100"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                name="description"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                className="bg-gray-100"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="picture">
                                Image (5:3)
                                <div className="w-full bg-gray-300 h-32 flex rounded-sm">
                                    <Image
                                        src={ImagePlaceHolder}
                                        alt="image-placeholder"
                                        width={50}
                                        className="mx-auto my-auto"
                                    />
                                </div>
                            </Label>
                            <Input
                                id="picture"
                                type="file"
                                name="image"
                                className="hidden"
                                onChange={formik.handleChange}
                                value={formik.values.image}
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="options">Options</Label>
                            {options.length > 0 &&
                                options.map((option, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-200 py-2 px-2 flex items-center justify-between rounded-md mb-2"
                                    >
                                        <div>
                                            <p className="font-bold text-sm">{option.question}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {option.answers.map((answer, idx) => (
                                                    <p
                                                        key={idx}
                                                        className="bg-gray-400 rounded-sm px-2"
                                                    >
                                                        {answer.ans}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <Pencil />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <Options formik={formik} options={options} setOptions={setOptions} />

                        <button
                            type="submit"
                            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </CardContent>
            </Card>

            {/* New Container with Thick Black Border */}
            <div className="w-[500px] h-[570px] border-4 border-black bg-white mx-4 flex flex-col rounded-xl">

                <div className="flex flex-col p-4 gap-8">
                    <div>
                        <AspectRatio ratio={16 / 9} className="w-full h-full">
                            <Image
                                src="/images/img1.jpg"
                                alt="Your Image Description"
                                className="rounded-md object-cover"
                                layout="fill"
                            />
                        </AspectRatio>
                        <div className=" flex flex-col ">
                            <p className="text-lg font-semibold ">{formik.values.product_name || "Name"}</p>
                            <p className="text-sm text-gray-600 ">{formik.values.description || "Description"}</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-3">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label>Picture</Label>
                            <Input id="picture" type="text"/>
                        </div>
                        <div className="grid w-full max-w-sm items-center">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm">1</span>
                                <span className="text-sm">1000</span>
                            </div>
                            <Slider defaultValue={[1]} max={1000} step={1}/>
                        </div>


                        {/*<div>*/}
                        {/*    */}
                        {/*</div>*/}
                    </div>

                    <div>

                        <RadioGroup defaultValue="option-one">
                            <div className="flex justify-between items-center space-x-2">
                                <Label htmlFor="option-one">Option One</Label>
                                <RadioGroupItem value="option-one" id="option-one"/>
                            </div>
                            <div className="flex justify-between items-center space-x-2">
                                <Label htmlFor="option-two">Option Two</Label>
                                <RadioGroupItem value="option-two" id="option-two"/>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="flex justify-between items-center" >
                        <Label htmlFor="checkbox1" >Checkbox 1</Label>
                        <Checkbox id="checkbox1"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
