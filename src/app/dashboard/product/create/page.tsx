"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ImagePlaceHolder from "@/../public/images/image-placeholder.png";
import React, { useState } from "react";
import Image from "next/image";
import Options from "@/components/options";
import { useFormik } from "formik";
import { Pencil } from "lucide-react";

export default function page() {

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
    }]) as any;


    const formik = useFormik({
        initialValues: {
            product_name: "",
            description: "",
            image: "",
        },
        onSubmit: (values) => {
            console.log([values, options])
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <div className="flex">
                <form
                    onSubmit={formik.handleSubmit}
                    id="left"
                    className="w-[500px] bg-white rounded-xl px-4"
                >
                    <div id="name" className="w-60">
                        <Label htmlFor="product_name">Name</Label>
                        <Input id="product_name" name="product_name" type="text"
                            onChange={formik.handleChange}
                            value={formik.values.product_name}
                        />
                    </div>
                    <div id="description" className="w-60">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" name="description" type="text"
                            onChange={formik.handleChange}
                            value={formik.values.description} />
                    </div>
                    <div id="image" className="w-60">
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

                        <Input id="picture" type="file" name="image" className="hidden"
                            onChange={formik.handleChange}
                            value={formik.values.image} />
                    </div>
                    <div id="options" className="w-60">
                        <Label htmlFor="options">Options</Label>
                        {options.length > 0 &&
                            options.map((option: any) => {
                                return <div className="bg-gray-200 py-2 px-2 flex items-center justify-between rounded-md">
                                    <div id="left">
                                        <p className="font-bold text-sm">{option.question}</p>
                                        <div id="answers" className="flex flex-wrap gap-2">
                                            {option.answers.map((answer: any) => {
                                                return <p className="bg-gray-400 rounded-sm px-2">{answer.ans}</p>
                                            })}

                                        </div>
                                    </div>

                                    <div id="right">
                                        <Pencil />
                                    </div>
                                </div>
                            })
                        }
                    </div>

                    <Options formik={formik} options={options} setOptions={setOptions} />

                    <button type="submit">submit</button>
                </form>

                <div id="right" className="w-[500px]">
                    {formik.values.image && <img src={formik.values.image} width={100} height={100} alt="product-image" />}

                    <iframe src="http://localhost:3000/api/test" width={100}></iframe>
                </div>
            </div>
        </div>
    );
}
