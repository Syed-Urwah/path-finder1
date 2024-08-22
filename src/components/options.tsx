"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Reorder, useDragControls } from 'framer-motion'

export default function Options({ formik, options, setOptions }: any) {

    // const [options, setOptions] = useState([]) as any;
    const [optionsOpen, setOptionOpen] = useState(false)
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);

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


            {option1 && <Option1 formik={formik} options={options} setOptions={setOptions} setOption1={setOption1} />}
            {option2 && <Option2 formik={formik} options={options} setOptions={setOptions} setOption2={setOption2} />}
            {option3 && <p>option3</p>}
            {option4 && <p>option4</p>}
        </div>
    )
}



function Option1({ formik, options, setOptions, setOption1 }: any) {
    console.log(formik)

    const [items, setItems] = useState([0, 1, 2, 3])

    const [ans, setAns] = useState([
        {
            ans: '',
            img: '',
        }
    ]);

    const [question, setQuestion] = useState("");

    function handleAnswer(e: any) {
        formik.values.option1_ans = e.target.value
    }

    function handleAnswerChange(e: any, index: number) {
        const newAns = [...ans];
        newAns[index].ans = e.target.value;
        setAns(newAns);

        // Update formik values
        formik.setFieldValue(`option1_ans_${index}`, e.target.value);
        addAnswerField()
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

    function addAnswerField() {
        // Check if the last answer is not empty
        if (ans[ans.length - 1].ans.trim() !== '') {
            setAns([...ans, { ans: '', img: '' }]);
        }
    }

    const handleFinished = () => {
        setOptions((prev: any) => prev.concat({
            type: '1',
            question: question,
            answers: ans
        }))

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
        <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Multiple choice question</h3>

            <div id="option1_question" className="w-60">
                <Label htmlFor="option1_question">Ask</Label>
                <Input id="option1_question" name="option1_question" type="text"
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                />
            </div>

            <div id="option1_ans" className="w-60">
                <Label htmlFor="option1_ans">Answers</Label>
                <div className='space-y-2'>
                    
                    {ans.map((ans, index: any) => (
                        <div>
                            <Input id="option1_question" name="option1_ans" type="text"
                                onChange={(e) => handleAnswerChange(e, index)}
                                value={formik.values.option1_ans}

                            />

                            <Input id="option1_question_image" name="option1_ans_image" type="file"
                                onChange={(e) => handleAnswerImageChange(e, index)}

                            />

                        </div>


                    ))}
                </div>




            </div>






            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    )
}

function Option2({ formik, options, setOptions, setOption2 }: any) {
    console.log(formik)

    const [items, setItems] = useState([0, 1, 2, 3])

    const [ans, setAns] = useState([
        {
            ans: '',
            img: '',
        }
    ]);

    const [question, setQuestion] = useState("");

    function handleAnswer(e: any) {
        formik.values.option1_ans = e.target.value
    }

    function handleAnswerChange(e: any, index: number) {
        const newAns = [...ans];
        newAns[index].ans = e.target.value;
        setAns(newAns);

        // Update formik values
        formik.setFieldValue(`option1_ans_${index}`, e.target.value);
        addAnswerField()
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

    function addAnswerField() {
        // Check if the last answer is not empty
        if (ans[ans.length - 1].ans.trim() !== '') {
            setAns([...ans, { ans: '', img: '' }]);
        }
    }

    const handleFinished = () => {
        setOptions((prev: any) => prev.concat({
            type: '2',
            question: question,
            answers: ans
        }))

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
        <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Multiple choice question</h3>

            <div id="option1_question" className="w-60">
                <Label htmlFor="option1_question">Ask</Label>
                <Input id="option1_question" name="option1_question" type="text"
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                />
            </div>

            <div id="option1_ans" className="w-60">
                <Label htmlFor="option1_ans">Answers</Label>
                <div className='space-y-2'>
                    
                    {ans.map((ans, index: any) => (
                        <div>
                            <Input id="option1_question" name="option1_ans" type="text"
                                onChange={(e) => handleAnswerChange(e, index)}
                                value={formik.values.option1_ans}

                            />

                            <Input id="option1_question_image" name="option1_ans_image" type="file"
                                onChange={(e) => handleAnswerImageChange(e, index)}

                            />

                        </div>


                    ))}
                </div>




            </div>






            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    )
}

