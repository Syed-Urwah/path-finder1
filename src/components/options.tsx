"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Switch } from "@/components/ui/switch"
import { FaEllipsisV } from 'react-icons/fa'; 


//import { Toggle } from './ui/toggle'
import { Reorder, useDragControls } from 'framer-motion'

//////

//import { Bold } from "lucide-react"
//import { Toggle } from "@/components/ui/toggle"
//import { Menu, MenuItem } from './ui/dropdown-menu'; 
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,  DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuItem } from './ui/dropdown-menu';
////////



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
            {option3 && <Option3 formik={formik} options={options} setOptions={setOptions} setOption3={setOption3} />}
            {option4 && <Option4 formik={formik} options={options} setOptions={setOptions} setOption4={setOption4} />}
            
            
        </div>
    )
}


function Option1({ formik, options, setOptions, setOption1 }: any) {
    const [items, setItems] = useState([0, 1, 2, 3]);

    const [ans, setAns] = useState([
        {
            ans: '',
            img: '',
        }
    ]);

    const [question, setQuestion] = useState("");

    function handleAnswerChange(e: any, index: number) {
        const newAns = [...ans];
        newAns[index].ans = e.target.value;
        setAns(newAns);
        formik.setFieldValue(`option1_ans_${index}`, e.target.value);
    }

    function handleAnswerImageChange(e: any, index: number) {
        const newAns: any = [...ans];
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newAns[index].img = reader.result;
                setAns(newAns);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleFinished = () => {
        setOptions((prev: any) => prev.concat({
            type: '1',
            question: question,
            answers: ans,
        }));
        setAns([{ ans: '', img: '' }]);
        setQuestion("");
        setOption1(false);
    };

    return (
        <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Multiple choice question</h3>

            <div id="option1_question" className="w-60 flex items-center">
                <Label htmlFor="option1_question">Ask</Label>
                <Input
                    id="option1_question"
                    name="option1_question"
                    type="text"
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                    className="ml-2 flex-grow"
                />
                {

                   <DropdownMenu>
    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel>Add description</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <div className="flex items-center space-x-2">
                <Switch id="hide-option" />
                <Label htmlFor="hide-option">Create variant</Label>
            </div>
            </DropdownMenuItem>
        <DropdownMenuItem>
            <div className="flex items-center space-x-2">
                <Switch id="hide-option" />
                <Label htmlFor="hide-option">Don't show option in config</Label>
            </div>
        </DropdownMenuItem>
        <DropdownMenuItem>To delete</DropdownMenuItem>
    </DropdownMenuContent>
                   </DropdownMenu>

                }
            </div>

            <div id="option1_ans" className="w-60">
                <Label htmlFor="option1_ans">Answers</Label>
                <div className='space-y-2'>
                    {ans.map((ans, index: any) => (
                        <div key={index}>
                            <Input
                                id={`option1_ans_${index}`}
                                name={`option1_ans_${index}`}
                                type="text"
                                onChange={(e) => handleAnswerChange(e, index)}
                                value={formik.values[`option1_ans_${index}`] || ''}
                            />
                            <Input
                                id={`option1_ans_img_${index}`}
                                name={`option1_ans_img_${index}`}
                                type="file"
                                onChange={(e) => handleAnswerImageChange(e, index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    );
}
function Option2({ formik, options, setOptions, setOption2 }: any) {
    const [ans, setAns] = useState([
        {
            ans: '',
            img: '',
        }
    ]);

    const [question, setQuestion] = useState("");

    function handleAnswerChange(e: any, index: number) {
        const newAns = [...ans];
        newAns[index].ans = e.target.value;
        setAns(newAns);
        formik.setFieldValue(`option2_ans_${index}`, e.target.value);
    }

    function handleAnswerImageChange(e: any, index: number) {
        const newAns: any = [...ans];
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                newAns[index].img = reader.result;
                setAns(newAns);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleFinished = () => {
        setOptions((prev: any) => prev.concat({
            type: '2',
            question: question,
            answers: ans,
        }));
        setAns([{ ans: '', img: '' }]);
        setQuestion("");
        setOption2(false);
    };

    return (
        <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Multiple choice question</h3>

            <div id="option2_question" className="w-60 flex items-center">
                <Label htmlFor="option2_question">Ask</Label>
                <Input
                    id="option2_question"
                    name="option2_question"
                    type="text"
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                    className="ml-2 flex-grow"
                />
                <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Add description</DropdownMenuLabel>
    <DropdownMenuSeparator />
    
        <DropdownMenuItem>
        <div className="flex items-center space-x-2">
                <Switch id="hide-option" />
                <Label htmlFor="hide-option">Don't show option in config</Label>
            </div>
            </DropdownMenuItem>
    <DropdownMenuItem>To delete</DropdownMenuItem>
    
  </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div id="option2_ans" className="w-60">
                <Label htmlFor="option2_ans">Answers</Label>
                <div className='space-y-2'>
                    {ans.map((ans, index: any) => (
                        <div key={index}>
                            <Input
                                id={`option2_ans_${index}`}
                                name={`option2_ans_${index}`}
                                type="text"
                                onChange={(e) => handleAnswerChange(e, index)}
                                value={formik.values[`option2_ans_${index}`] || ''}
                            />
                            <Input
                                id={`option2_ans_img_${index}`}
                                name={`option2_ans_img_${index}`}
                                type="file"
                                onChange={(e) => handleAnswerImageChange(e, index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    );
}
function Option3({ formik, options, setOptions, setOption3 }: any) {
    const [smallestSize, setSmallestSize] = useState('');
    const [largestSize, setLargestSize] = useState('');
    const [stepSize, setStepSize] = useState('');

    function handleFinished() {
        setOptions((prev: any) => prev.concat({
            type: '3',
            question: formik.values.option3_question,
            smallestSize: smallestSize,
            largestSize: largestSize,
            stepSize: stepSize
        }));

        setOption3(false);
    }

    return (
        <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
            <h3>Number Question</h3>

            <div id="option3_question" className="w-60 flex items-center">
                <Label htmlFor="option3_question">Ask</Label>
                <Input
                    id="option3_question"
                    name="option3_question"
                    type="text"
                    onChange={(e) => formik.setFieldValue('option3_question', e.target.value)}
                    value={formik.values.option3_question || ''}
                    className="ml-2 flex-grow"
                />
                <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Add description</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
            <div className="flex items-center space-x-2">
                <Switch id="hide-option" />
                <Label htmlFor="hide-option">Don't show option in config</Label>
            </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <div className="flex items-center space-x-2">
                <Switch id="hide-option" />
                <Label htmlFor="hide-option">Price linear growth</Label>
            </div>
        </DropdownMenuItem>
    
    <DropdownMenuItem>To delete</DropdownMenuItem>
    
  </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div id="option3_smallestSize" className="w-60">
                <Label htmlFor="option3_smallestSize">Smallest Size</Label>
                <Input
                    id="option3_smallestSize"
                    name="option3_smallestSize"
                    type="number"
                    onChange={(e) => setSmallestSize(e.target.value)}
                    value={smallestSize}
                />
            </div>

            <div id="option3_largestSize" className="w-60">
                <Label htmlFor="option3_largestSize">Largest Size</Label>
                <Input
                    id="option3_largestSize"
                    name="option3_largestSize"
                    type="number"
                    onChange={(e) => setLargestSize(e.target.value)}
                    value={largestSize}
                />
            </div>

            <div id="option3_stepSize" className="w-60">
                <Label htmlFor="option3_stepSize">Step Size</Label>
                <Input
                    id="option3_stepSize"
                    name="option3_stepSize"
                    type="number"
                    onChange={(e) => setStepSize(e.target.value)}
                    value={stepSize}
                />
            </div>

            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    );
}
// function Option4({ formik, options, setOptions, setOption4 }: any) {
//     const [ask, setAsk] = useState("");
//     const [toggle1, setToggle1] = useState(false);
//     const [toggle2, setToggle2] = useState(false);

//     const handleDelete = () => {
//         setOption4(false);
//     };

//     const handleFinished = () => {
//         setOptions((prev: any) => prev.concat({
//             type: '4',
//             ask: ask,
//             toggle1: toggle1,
//             toggle2: toggle2,
//         }));
//         setAsk("");
//         setToggle1(false);
//         setToggle2(false);
//         setOption4(false);
//     };

//     return (
//         <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
//             <div className="flex justify-between items-center">
//                 <h3>Cross-sell Product</h3>
//                 <button onClick={handleDelete} className="text-gray-500 hover:text-black">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </button>
//             </div>

//             <div id="option4_ask" className="w-60 flex items-center">
//                 <Label htmlFor="option4_ask">Ask</Label>
//                 <Input
//                     id="option4_ask"
//                     name="option4_ask"
//                     type="text"
//                     onChange={(e) => setAsk(e.target.value)}
//                     value={ask}
//                     className="ml-2 flex-grow"
//                 />
//                 <DropdownMenu>
//   <DropdownMenuTrigger>Open</DropdownMenuTrigger>
//   <DropdownMenuContent>
   
//     <DropdownMenuItem>To delete</DropdownMenuItem>
    
//   </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>

//             <div id="option4_toggle" className="w-60 space-y-2">
//                 <Label>Options</Label>
//                 <div className="space-y-2">
//                     {/* <Toggle 
//                         id="toggle1" 
//                         name="toggle1" 
//                         onChange={() => setToggle1(!toggle1)}
//                     >
//                         <span className="mr-2 text-gray-500">T</span>
//                         <Toggle.Button className={`toggle-${toggle1 ? 'on' : 'off'}`} />
//                     </Toggle>
//                    <Toggle 
//                         id="toggle2" 
//                         name="toggle2" 
//                         onChange={() => setToggle2(!toggle2)}
//                     >
//                         <span className="mr-2 text-gray-500">M</span>
//                         <Toggle.Button className={`toggle-${toggle2 ? 'on' : 'off'}`} />
//                     </Toggle>  */

//                     }
//                 </div>
//                 <div className="flex items-center space-x-2">
//                 <Switch id="1" />
//                 <Label htmlFor="a">Completing this cross-sell group is mandatory</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                 <Switch id="2" />
//                 <Label htmlFor="b">Completing multiple cross-sells is possible</Label>
//                 </div>
//             </div>

//             <Button type='button' onClick={handleFinished}>Finished</Button>
//         </div>
//     )
// }
function Option4({ formik, options, setOptions, setOption4 }: any) {
    const [ask, setAsk] = useState("");
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDelete = () => {
        setOption4(false);
    };

    const handleFinished = () => {
        setOptions((prev: any) => prev.concat({
            type: '4',
            ask: ask,
            toggle1: toggle1,
            toggle2: toggle2,
        }));
        setAsk("");
        setToggle1(false);
        setToggle2(false);
        setOption4(false);
    };

    return (
        <div className='bg-[#f2f2f2] pl-5 py-6 my-4 rounded-md space-y-6'>
            <div className="flex justify-between items-center">
                <h3>Cross-sell Product</h3>
                <button onClick={handleDelete} className="text-gray-500 hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div id="option4_ask" className="w-60 flex items-center">
                <Label htmlFor="option4_ask">Ask</Label>
                <Input
                    id="option4_ask"
                    name="option4_ask"
                    type="text"
                    onChange={(e) => setAsk(e.target.value)}
                    value={ask}
                    className="ml-2 flex-grow"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>To delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* New option with dropdown */}
            <div className="w-60 flex items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span className="flex-grow">Products</span>
                {/* <span className="text-gray-500">></span> */}
                <span className="text-gray-500">{'>'}</span>

            </div>
            {dropdownOpen && (
                <DropdownMenu>
                <DropdownMenuTrigger>abc</DropdownMenuTrigger>
                </DropdownMenu>
            )}

            <div id="option4_toggle" className="w-60 space-y-2">
                <Label>Options</Label>
                <div className="space-y-2">
                    {/* <Toggle 
                        id="toggle1" 
                        name="toggle1" 
                        onChange={() => setToggle1(!toggle1)}
                    >
                        <span className="mr-2 text-gray-500">T</span>
                        <Toggle.Button className={`toggle-${toggle1 ? 'on' : 'off'}`} />
                    </Toggle>
                   <Toggle 
                        id="toggle2" 
                        name="toggle2" 
                        onChange={() => setToggle2(!toggle2)}
                    >
                        <span className="mr-2 text-gray-500">M</span>
                        <Toggle.Button className={`toggle-${toggle2 ? 'on' : 'off'}`} />
                    </Toggle>  */
                    }
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="1" />
                    <Label htmlFor="a">Completing this cross-sell group is mandatory</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="2" />
                    <Label htmlFor="b">Completing multiple cross-sells is possible</Label>
                </div>
            </div>

            <Button type='button' onClick={handleFinished}>Finished</Button>
        </div>
    );
}

