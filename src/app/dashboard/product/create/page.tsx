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
    const [options, setOptions] = useState<any>([{
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

    const [mainImage, setMainImage] = useState(null)

    const formik = useFormik({
        initialValues: {
            product_name: "",
            description: "",
            image: "",
        },
        onSubmit: (values) => {
            const jsonString = JSON.stringify({
                mainData: values,
                options
            }, null, 2);
            console.log(jsonString);
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
                                {mainImage ?
                                    <AspectRatio ratio={5 / 3} className="w-full h-full">
                                        {mainImage && (
                                            <Image
                                                src={!mainImage ? ImagePlaceHolder : mainImage}
                                                alt="Your Image Description"
                                                className="rounded-md object-cover"
                                                layout="fill"
                                            />
                                        )}
                                    </AspectRatio> :
                                    <div className="w-full bg-gray-300 h-32 flex rounded-sm">
                                        <Image
                                            src={!mainImage ? ImagePlaceHolder : mainImage}
                                            alt="image-placeholder"
                                            width={50}
                                            height={50}
                                            className="mx-auto my-auto"
                                        />
                                    </div>

                                }


                            </Label>
                            <Input
                                id="picture"
                                type="file"
                                name="image"
                                className="hidden"
                                onChange={(e: any) => {
                                    const file = e.target.files[0];
                                    formik.setFieldValue(`image`, file);
                                    if (file) {
                                        const reader: any = new FileReader();
                                        reader.onloadend = () => {


                                            setMainImage(reader.result);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                    // formik.setFieldValue(`image`, e.target.files[0]);
                                    // setMainImage(e.target.files[0])
                                }}

                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="options">Options</Label>
                            {options.length > 0 &&
                                options.map((option: any, index: any) => (
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
                                                        if (option.type == '4') {
                                                            return <p className="bg-gray-400 rounded-sm px-2">{answer.product_name}</p>
                                                        }
                                                        return <p className="bg-gray-400 rounded-sm px-2">{answer.ans}</p>
                                                    }
                                                })}
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

            {/* New Additional Container with Gray Background and White Inner Container */}
            <div className="w-[500px] h-[800px]  mx-4 flex flex-col  ">
                <div className=" border-4 border-black bg-gray-300 p-4 rounded-xl w-[500px] ">
                    <div className="bg-white p-4 rounded-lg">
                        <AspectRatio ratio={16 / 9} className="w-full h-full">
                            {mainImage &&
                                <Image
                                    src={mainImage}
                                    alt="Your Image Description"
                                    className="rounded-md object-cover"
                                    layout="fill"
                                />
                            }

                        </AspectRatio>
                        <div className="flex flex-col mt-4 space-y-2">
                            <p className="text-lg font-semibold font-sans text-base">{formik.values.product_name || "Name"}</p>
                            <p className="text-sm text-gray-600 font-sans text-base">{formik.values.description || "Description"}</p>
                        </div>
                    </div>
                    {options.map((option: any) => {
                        return <DisplayOptions option={option} />
                    })}

                </div>
            </div>
        </div>
    );
}



function DisplayOptions({ option }: any): any {


    const [sliderValue, setSliderValue] = useState(option.answers[0].ans)

    function chooseOption(type: any) {
        if (type == 1) {
            return <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
                <RadioGroup defaultValue="option-one">
                    {option.answers.map((answer: any, index: any) => {
                        const isLast = index === option.answers.length - 1;
                        if (!isLast) {
                            return <div className="flex justify-between items-center space-x-2">
                                <Label className="font-sans font-normal text-base" htmlFor="option-one">{answer.ans}</Label>
                                <RadioGroupItem value={answer.ans} id="option-one" />
                            </div>
                        }
                    })}
                </RadioGroup>
            </div>
        }

        if (type == 2) {
            return <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
                <RadioGroup defaultValue="option-one">
                    {option.answers.map((answer: any, index: any) => {
                        const isLast = index === option.answers.length - 1;
                        if (!isLast) {
                            return <div className="flex justify-between items-center space-x-2">
                                <Label className="font-sans font-normal text-base" htmlFor="option-one">{answer.ans}</Label>
                                <Checkbox value={answer.ans} id="checkbox1" />
                            </div>
                        }
                    })}
                </RadioGroup>
            </div>
        }

        if (type == 3) {
            setSliderValue(option.answers[0].ans)
            return <div className="flex justify-between gap-3 mt-4">
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
                    <Slider onValueChange={(e) => {
                        console.log(e)
                        const [a] = e;
                        setSliderValue(a)

                    }} defaultValue={[option.answers[0].ans]} max={option.answers[1].ans} step={option.answers[2].ans} />
                </div>
            </div>
        }
    }

    return (
        <div>
            {
                option.type == 1 ?
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
                        <RadioGroup defaultValue="option-one">
                            {option.answers.map((answer: any, index: any) => {
                                const isLast = index === option.answers.length - 1;
                                if (!isLast) {
                                    return <div key={index} className="flex justify-between items-center space-x-2">
                                        <Label className="font-sans font-normal text-base" htmlFor="option-one">{answer.ans}</Label>
                                        <RadioGroupItem value={answer.ans} id="option-one" />
                                    </div>
                                }
                            })}
                        </RadioGroup>
                    </div>
                    : option.type == 2 ?

                        <div className="mt-4">
                            <h2 className="text-lg font-semibold mb-2">{option.question}:</h2>
                            <RadioGroup defaultValue="option-one">
                                {option.answers.map((answer: any, index: any) => {
                                    const isLast = index === option.answers.length - 1;
                                    if (!isLast) {
                                        return <div className="flex justify-between items-center space-x-2">
                                            <Label className="font-sans font-normal text-base" htmlFor="option-one">{answer.ans}</Label>
                                            <Checkbox value={answer.ans} id="checkbox1" />
                                        </div>
                                    }
                                })}
                            </RadioGroup>
                        </div>
                        : option.type == 3 ?


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
                                    <Slider onValueChange={(e) => {
                                        console.log(e)
                                        const [a] = e;
                                        setSliderValue(a)

                                    }} value={[sliderValue]} defaultValue={[option.answers[0].ans]} min={Number.parseInt(option.answers[0].ans)} max={option.answers[1].ans} step={option.answers[2].ans} />
                                </div>
                            </div>
                            : ''
            }
        </div>
    )
}
