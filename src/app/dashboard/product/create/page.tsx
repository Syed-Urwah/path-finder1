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

    const [mainImage, setImage] = useState<any>(null)


    function handleImageChange(e: any) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const formik = useFormik({
        initialValues: {
            product_name: "",
            description: "",
            image: "" as any,
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
                            {
                                mainImage ?
                                    <div
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            backgroundImage: `url(${mainImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}

                                    >
                                        {/* Any other content can go inside this div */}
                                    </div>
                                    :
                                    <div className="w-full bg-gray-300 h-32 flex rounded-sm">
                                        <Image
                                            src={ImagePlaceHolder}
                                            alt="image-placeholder"
                                            width={50}
                                            className="mx-auto my-auto"
                                        />
                                    </div>
                            }

                        </Label>

                        <Input id="picture" type="file" name="image" className="hidden"
                            onChange={handleImageChange}
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
                                            {option.answers.map((answer: any, index: number) => {
                                                const isLast = index === option.answers.length - 1;
                                                if (!isLast) {
                                                    return <p className="bg-gray-400 rounded-sm px-2">{answer.ans}</p>
                                                }
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
                    {mainImage &&
                    <div
                    className="bg-gray-600"
                    style={{
                        width: '100%',
                        height: '288px',
                        backgroundImage: `url(${mainImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}

                >
                    {/* Any other content can go inside this div */}
                </div>
                
                    }

                    <h2>{formik.values.product_name}</h2>
                    <p>{formik.values.description}</p>
                    <iframe src="http://localhost:3000/api/test" width={100}></iframe>
                </div>
            </div>
        </div>
    );
}
