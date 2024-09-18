"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { EllipsisVertical, Plus } from 'lucide-react'
import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Reorder, useDragControls } from 'framer-motion'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ImagePlaceHolder from "@/../public/images/image-placeholder.png";
import { AspectRatio } from './ui/aspect-ratio'
import axios from 'axios'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Options({
    formik, options, setOptions,
    option1,
    option2,
    option3,
    option4,
    setOption1,
    setOption2,
    setOption3,
    setOption4,
}: any) {

    // const [options, setOptions] = useState([]) as any;
    const [optionsOpen, setOptionOpen] = useState(false)
    // const [option1, setOption1] = useState(false);
    // const [option2, setOption2] = useState(false);
    // const [option3, setOption3] = useState<any>(false);
    // const [option4, setOption4] = useState(false);

    console.log(formik)

    function handleOptionsClick(e: any) {
        console.log(e.target.id)
        setOptionOpen(false)
        let option_id = e.target.id;
        if (option_id == 'option1') {
            setOption1(true)
            return
        }

        if (option_id == 'option2') {
            setOption2(true)
            return
        }

        if (option_id == 'option3') {
            setOption3(true)
            return
        }

        if (option_id == 'option4') {
            setOption4(true)
            return
        }
    }


    const AllOptions = () => {
        return (
            <div>
                <div id='option1' onClick={handleOptionsClick} className='hover:bg-gray-200 hover:cursor-pointer'>
                    <div id="option1" className='flex items-center'>
                        <div id='option1' className="w-[16px] h-[16px] bg-black flex justify-center items-center border-1 border-black rounded-full"><div className="w-[4px] h-[4px] bg-white rounded-full"></div>
                        </div>
                        <p id='option1' className="pl-[5px]">Multiple choice question</p>
                    </div>

                    <p id='option1' className="w-[350px] max-w-[100%] whitespace-normal text-clip break-words text-gray-400">Use multiple choice questions to let people make a choice.</p>
                </div>

                <div id='option2' onClick={handleOptionsClick} className='hover:bg-gray-200 hover:cursor-pointer'>
                    <div id="option2" className='flex items-center'>
                        <div className="w-[16px] h-[16px] flex justify-center items-center bg-black text-white rounded text-[12px]"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></div>
                        <p id='option2' className="pl-[5px]">Multiple choice question</p>
                    </div>

                    <p id='option2' className="w-[350px] max-w-[100%] whitespace-normal text-clip break-words text-gray-400">Use multiple choice questions to let people make a selection of choices.</p>
                </div>

                <div id='option3' onClick={handleOptionsClick} className='hover:bg-gray-200 hover:cursor-pointer'>
                    <div id="option3" className='flex items-center'>
                        <div className="w-[32px] h-[20px] flex justify-center items-center bg-black text-white rounded text-[10px]">1 2 3</div>
                        <p id='option3' className="pl-[5px]">Number question</p>
                    </div>

                    <p id='option3' className="w-[350px] max-w-[100%] whitespace-normal text-clip break-words text-gray-400">Use number prompt to have people enter a number, such as square meters.</p>
                </div>

                <div id='option4' onClick={handleOptionsClick} className='hover:bg-gray-200 hover:cursor-pointer'>
                    <div id="option4" className='flex items-center'>
                        <span className="text-[18px]">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tag" className="svg-inline--fa fa-tag " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></span>
                        <p id='option4' className="pl-[5px]">Cross-sell product</p>
                    </div>

                    <p id='option4' className="w-[350px] max-w-[100%] whitespace-normal text-clip break-words text-gray-400">Use number prompt to have people enter a number, such as square meters.</p>
                </div>
            </div>
        )
    }


    return (
        <div>
            <Button type='button' onClick={() => setOptionOpen((prev) => !prev)} className='bg-[#d9d9d9]'>
                <Plus />
                Add Option
            </Button>

            {optionsOpen &&
                <AllOptions />
            }


            {option1 && <Option1 formik={formik} options={options} setOptions={setOptions} setOption1={setOption1} edit={false} />}
            {option2 && <Option2 formik={formik} options={options} setOptions={setOptions} setOption2={setOption2} edit={false} />}
            {option3 && <Option3 formik={formik} options={options} setOptions={setOptions} setOption3={setOption3} edit={false} />}
            {option4 && <Option4 formik={formik} options={options} setOptions={setOptions} setOption4={setOption4} edit={false} />}
        </div>
    )
}



function Option1({
    formik, options, setOptions, setOption1, edit, isEditing, setIsEditing, editIndex, setEditIndex, option, isEditPage
}: any) {
    console.log(formik)

    console.log(isEditPage)

    console.log(isEditing)

    console.log(option)

    const [items, setItems] = useState([0, 1, 2, 3])

    let ansArray = edit ? option.answers :
        [
            {
                ans: '',
                img: '',
            }
        ]

    console.log(ansArray)

    function isBase64Jpeg(imageData: any) {
        return imageData.startsWith('data:image/jpeg;base64,');
    }

    const [ans, setAns] = useState(ansArray);

    const [question, setQuestion] = useState(edit ? option.question : '');

    function handleAnswer(e: any) {
        formik.values.option1_ans = e.target.value
    }

    function handleAnswerChange(e: any, index: number) {
        const newAns = [...ans];
        newAns[index].ans = e.target.value;
        setAns(newAns);

        // Update formik values
        // formik.setFieldValue(`option1_ans_${index}`, e.target.value);
        addAnswerField()
    }

    function handleAnswerImageChange(e: any, index: number) {
        const newAns: any = [...ans];
        // newAns[index].img = e.target.value;
        // setAns(newAns);

        // Update formik values
        // formik.setFieldValue(`option1_ans_img_${index}`, e.target.files[0]);


        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newAns[index].img = reader.result
                setAns(newAns);
            };
            reader.readAsDataURL(file);
        }

        // addAnswerField()
    }

    function addAnswerField() {
        // Check if the last answer is not empty
        if (ans[ans.length - 1].ans.trim() !== '') {
            setAns([...ans, { ans: '', img: '' }]);
        }
    }

    const handleDelete = () => {
        if (isEditing && editIndex !== null) {
             // Remove item at a specific index using filter
            const newOptions = options.filter((_: any, i: any) => i !== editIndex);
            setOptions(newOptions);
            setIsEditing(false);
            setEditIndex(null);
        }

        setQuestion("")
        setOption1(false)
    }

    const handleFinished = () => {
        console.log(isEditing)
        console.log(editIndex)
        if (isEditing && editIndex !== null) {
            const updatedOptions = [...options];
            updatedOptions[editIndex] = {
                type: '1',
                question: question,
                answers: ans
            };

            console.log(updatedOptions);
            setOptions(updatedOptions);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setOptions((prev: any) => prev.concat({
                type: '1',
                question: question,
                answers: ans
            }));
        }

        setAns([
            {
                ans: '',
                img: ''
            }
        ])
        setQuestion("")
        setOption1(false)
        console.log(options)
    }

    const controls = useDragControls()

    return (
        <div className='bg-[#f2f2f2] px-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Multiple choice question</h3>

            <div id="option1_question" className="w-60">
            <Label htmlFor="option1_question">Ask</Label>

                <div className='flex gap-2'>
                    <Input id="option1_question" name="option1_question" type="text"
                        onChange={(e) => setQuestion(e.target.value)}
                        value={question}
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleDelete} className='space-x-2'>
                                <span className="w-4"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></span>
                                <p>To delete</p>
                            </DropdownMenuItem>
                            {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div id="option1_ans" className="w-full">
                <Label htmlFor="option1_ans">Answers</Label>
                <div className='space-y-2'>

                    {ans.map((ans: any, index: any) => (
                        <div className='flex justify-between'>
                            <Input id="option1_question" name="option1_ans" type="text"
                                onChange={(e) => handleAnswerChange(e, index)}
                                value={ans.ans}
                                className='w-1/2'
                            />
                            <Label htmlFor={'option1' + index} className='w-10'>
                                {ans.img ?
                                    <div className="w-full h-full">

                                        <Image
                                            src={(isEditPage && !isBase64Jpeg(ans.img)) ? process.env.BE_URL + "/storage/" + ans.img : ans.img}
                                            alt="Your Image Description"
                                            className="rounded-md object-cover"
                                            width={100}
                                            height={100}
                                        // layout="fill"
                                        />

                                    </div> :
                                    <div className="w-full bg-gray-300 h-10 flex rounded-sm">
                                        <Image
                                            src={ImagePlaceHolder}
                                            alt="image-placeholder"
                                            width={20}
                                            height={20}
                                            className="mx-auto my-auto"
                                        />
                                    </div>

                                }
                            </Label>
                            <Input id={'option1' + index} name={'option1' + index} type="file"
                                onChange={(e) => handleAnswerImageChange(e, index)}
                                className='hidden'
                            />

                        </div>


                    ))}
                </div>




            </div>






            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    )
}

function Option2({ formik, options, setOptions, setOption2, edit, isEditing, setIsEditing, editIndex, setEditIndex, option, isEditPage }: any) {
    console.log(option)
    console.log(edit)

    const [items, setItems] = useState([0, 1, 2, 3])

    let ansArray = edit ? option.answers :
        [
            {
                ans: '',
                img: '',
            }
        ]

    console.log(ansArray)



    const [ans, setAns] = useState(ansArray);

    const [question, setQuestion] = useState(edit ? option.question : '');

    function isBase64Jpeg(imageData: any) {
        return imageData.startsWith('data:image/jpeg;base64,');
    }

    function handleAnswer(e: any) {
        formik.values.option1_ans = e.target.value
    }

    const handleDelete = () => {
        if (isEditing && editIndex !== null) {
             // Remove item at a specific index using filter
            const newOptions = options.filter((_: any, i: any) => i !== editIndex);
            setOptions(newOptions);
            setIsEditing(false);
            setEditIndex(null);
        }

        setQuestion("")
        setOption2(false)
    }

    function handleAnswerChange(e: any, index: number) {
        const newAns = [...ans];
        newAns[index].ans = e.target.value;
        setAns(newAns);

        // Update formik values
        // formik.setFieldValue(`option1_ans_${index}`, e.target.value);
        addAnswerField()
    }

    function handleAnswerImageChange(e: any, index: number) {
        const newAns: any = [...ans];
        // newAns[index].img = e.target.value;
        // setAns(newAns);

        // Update formik values
        // formik.setFieldValue(`option1_ans_img_${index}`, e.target.files[0]);


        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newAns[index].img = reader.result
                setAns(newAns);
            };
            reader.readAsDataURL(file);
        }

        // addAnswerField()
    }

    function addAnswerField() {
        // Check if the last answer is not empty
        if (ans[ans.length - 1].ans.trim() !== '') {
            setAns([...ans, { ans: '', img: '' }]);
        }
    }

    const handleFinished = () => {

        if (isEditing && editIndex !== null) {
            const updatedOptions = [...options];
            updatedOptions[editIndex] = {
                type: '2',
                question: question,
                answers: ans
            };

            console.log(updatedOptions);
            setOptions(updatedOptions);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setOptions((prev: any) => prev.concat({
                type: '2',
                question: question,
                answers: ans
            }));
        }


        setAns([
            {
                ans: '',
                img: ''
            }
        ])
        setQuestion("")
        setOption2(false)
        console.log(options)
    }

    const controls = useDragControls()

    return (
        <div className='bg-[#f2f2f2] px-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Multiple choice question</h3>

            <div id="option1_question" className="w-60">
            <Label htmlFor="option1_question">Ask</Label>

                <div className='flex gap-2'>
                    <Input id="option1_question" name="option1_question" type="text"
                        onChange={(e) => setQuestion(e.target.value)}
                        value={question}
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleDelete} className='space-x-2'>
                                <span className="w-4"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></span>
                                <p>To delete</p>
                            </DropdownMenuItem>
                            {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div id="option1_ans" className="w-full">
                <Label htmlFor="option1_ans">Answers</Label>
                <div className='space-y-2'>

                    {ans.map((ans: any, index: any) => (
                        <div className='flex justify-between'>
                            <Input id="option1_question" name="option1_ans" type="text"
                                onChange={(e) => handleAnswerChange(e, index)}
                                value={ans.ans}
                                className='w-1/2'
                            />

                            <Label htmlFor={'option2' + index} className='w-10'>
                                {ans.img ?
                                    <div className="w-full h-full">

                                        <Image
                                            src={(isEditPage && !isBase64Jpeg(ans.img)) ? process.env.BE_URL + "/storage/" + ans.img : ans.img}
                                            alt="Your Image Description"
                                            className="rounded-md object-cover"
                                            width={100}
                                            height={100}
                                        // layout="fill"
                                        />

                                    </div> :
                                    <div className="w-full bg-gray-300 h-10 flex rounded-sm">
                                        <Image
                                            src={ImagePlaceHolder}
                                            alt="image-placeholder"
                                            width={20}
                                            height={20}
                                            className="mx-auto my-auto"
                                        />
                                    </div>

                                }
                            </Label>

                            <Input id={'option2' + index} name={'option2' + index} type="file"
                                onChange={(e) => handleAnswerImageChange(e, index)}
                                className='hidden'
                            />

                        </div>


                    ))}
                </div>




            </div>






            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    )
}

function Option3({ formik, options, setOptions, setOption3, edit, isEditing, setIsEditing, editIndex, setEditIndex, option }: any) {
    console.log(formik)

    console.log(option)

    const [items, setItems] = useState([0, 1, 2, 3])

    let ansArray = edit ? option.answers :
        [
            {
                label: "Smallest possible answer",
                ans: '',
                img: null,
                min: 0
            },
            {
                label: "Biggest possible answer",
                ans: '',
                img: null,
                max: 0

            },
            {
                label: "Step size",
                ans: '',
                img: null,
                step: 0
            }
        ]

    console.log(ansArray)

    const [ans, setAns] = useState(ansArray);

    const [question, setQuestion] = useState(edit ? option.question : '');



    function handleAnswer(e: any) {
        formik.values.option1_ans = e.target.value
    }

    const handleDelete = () => {
        if (isEditing && editIndex !== null) {
             // Remove item at a specific index using filter
            const newOptions = options.filter((_: any, i: any) => i !== editIndex);
            setOptions(newOptions);
            setIsEditing(false);
            setEditIndex(null);
        }

        setQuestion("")
        setOption3(false)
    }

    function handleAnswerChange(e: any, index: number) {
        console.log(index)
        const newAns = [...ans];
        newAns[index].ans = e.target.value;
        if (index == 0) {
            newAns[index].min = e.target.value;
        }

        if (index == 1) {
            newAns[index].max = e.target.value;
        }

        if (index == 2) {
            newAns[index].step = e.target.value;
        }
        setAns(newAns);

        // Update formik values
        // formik.setFieldValue(`option1_ans_${index}`, e.target.value);
        // addAnswerField()
    }

    function handleAnswerImageChange(e: any, index: number) {
        const newAns: any = [...ans];
        // newAns[index].img = e.target.value;
        // setAns(newAns);

        // Update formik values
        formik.setFieldValue(`option1_ans_img_${index}`, e.target.files[0]);


        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newAns[index].img = reader.result
                setAns(newAns);
            };
            reader.readAsDataURL(file);
        }

        // addAnswerField()
    }



    const handleFinished = () => {

        if (isEditing && editIndex !== null) {
            const updatedOptions = [...options];
            updatedOptions[editIndex] = {
                type: '3',
                question: question,
                answers: ans
            };

            console.log(updatedOptions);
            setOptions(updatedOptions);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setOptions((prev: any) => prev.concat({
                type: '3',
                question: question,
                answers: ans
            }));
        }

        setAns([
            {
                label: "Smallest possible answer",
                ans: '',
                img: null,
            },
            {
                label: "Biggest possible answer",
                ans: '',
                img: null,
            },
            {
                label: "Step size",
                ans: '',
                img: null,
            }
        ])
        setQuestion("")
        setOption3(false)
        console.log(options)
    }

    const controls = useDragControls()

    return (
        <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Number question</h3>

            <div id="option1_question" className="w-60">
            <Label htmlFor="option1_question">Ask</Label>

                <div className='flex gap-2'>
                    <Input id="option1_question" name="option1_question" type="text"
                        onChange={(e) => setQuestion(e.target.value)}
                        value={question}
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleDelete} className='space-x-2'>
                                <span className="w-4"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></span>
                                <p>To delete</p>
                            </DropdownMenuItem>
                            {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div id="option1_ans" className="w-60">
                <div className='space-y-2'>

                    {ans.map((ans: any, index: any) => (
                        <div>
                            <Label>{ans.label}</Label>
                            <Input id="option1_question" name="option1_ans" type="number"
                                onChange={(e) => handleAnswerChange(e, index)}
                                value={ans.ans}

                            />


                        </div>


                    ))}
                </div>




            </div>






            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    )
}

function Option4({ formik, options, setOptions, setOption4, edit, isEditing, setIsEditing, editIndex, setEditIndex, option }: any) {
    console.log(formik)

    console.log(option)

    const [items, setItems] = useState([0, 1, 2, 3])

    let ansArray = edit ? option.answers :
        [
            {
                product_id: '',
                product_name: '',
                img: null,
            }
        ]

    console.log(ansArray)

    const [ans, setAns] = useState(ansArray);

    const [question, setQuestion] = useState(edit ? option.question : '');

    const [products, setProducts] = useState<any>([])

    const fetchProducts = async () => {

        try {


            const response = await axios.get(process.env.BE_URL + '/api/v1/product');

            console.log('Response:', response.data);
            setProducts(response.data.data)
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const handleDelete = () => {
        if (isEditing && editIndex !== null) {
             // Remove item at a specific index using filter
            const newOptions = options.filter((_: any, i: any) => i !== editIndex);
            setOptions(newOptions);
            setIsEditing(false);
            setEditIndex(null);
        }

        setQuestion("")
        setOption4(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    function handleAnswer(e: any) {
        formik.values.option1_ans = e.target.value
    }

    function handleAnswerChange(e: any, index: number): any {
        console.log(e)
        console.log(ans)
        const selectedProduct: any = products.find((product: any) => product.product_name == e);
        console.log(selectedProduct)
        // return;
        const newAns = [...ans];
        newAns[index].product_id = selectedProduct?.id;
        newAns[index].product_name = e;
        setAns(newAns);

        console.log(newAns)

        // Update formik values
        addAnswerField()
    }

    function handleAnswerImageChange(e: any, index: number) {
        const newAns: any = [...ans];
        // newAns[index].img = e.target.value;
        // setAns(newAns);

        // Update formik values
        // formik.setFieldValue(`option1_ans_img_${index}`, e.target.files[0]);


        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newAns[index].img = reader.result
                setAns(newAns);
            };
            reader.readAsDataURL(file);
        }

        // addAnswerField()
    }

    function addAnswerField() {
        // Check if the last answer is not empty
        if (ans[ans.length - 1].product_name !== '' && ans[ans.length - 1].product_id !== null) {
            setAns([...ans, { product_id: '', product_name: '', img: null }]);
        }
    }

    const handleFinished = () => {

        console.log(ans)
        // return;

        if (isEditing && editIndex !== null) {
            const updatedOptions = [...options];
            updatedOptions[editIndex] = {
                type: '4',
                question: question,
                answers: ans
            };

            console.log(updatedOptions);
            setOptions(updatedOptions);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            console.log(ans)
            // return
            setOptions((prev: any) => prev.concat({
                type: '4',
                question: question,
                answers: ans
            }));
        }

        console.log(ans)
        // return;

        setAns([
            {
                product_id: '',
                product_name: '',
                img: null
            }
        ])
        setQuestion("")
        setOption4(false)
        console.log(options)
    }

    const controls = useDragControls()

    return (
        <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Cross-sell group</h3>

            <div id="option1_question" className="w-60">
            <Label htmlFor="option1_question">Ask</Label>

                <div className='flex gap-2'>
                    <Input id="option1_question" name="option1_question" type="text"
                        onChange={(e) => setQuestion(e.target.value)}
                        value={question}
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleDelete} className='space-x-2'>
                                <span className="w-4"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></span>
                                <p>To delete</p>
                            </DropdownMenuItem>
                            {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div id="option1_ans" className="w-60">
                <Label htmlFor="option1_ans">Answers</Label>
                <div className='space-y-2'>

                    {ans.map((ans: any, index: any) => (
                        <div>
                            {/* <Input id="option1_question" name="option1_ans" type="text"
                                onChange={(e) => handleAnswerChange(e, index)}
                                value={formik.values.option1_ans}

                            /> */}



                            <Select onValueChange={(e) => handleAnswerChange(e, index)} defaultValue={ans.product_name}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Product" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Products</SelectLabel>
                                        {products.map((product: any) => {
                                            return <SelectItem
                                                value={product.product_name}>{product.product_name}</SelectItem>
                                        })}
                                        {/* <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem> */}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>


                    ))}
                </div>




            </div>






            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    )
}


export { Option1, Option2, Option3, Option4 }