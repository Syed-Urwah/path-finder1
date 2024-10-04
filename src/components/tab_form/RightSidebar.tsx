"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils"; // Shadcn's class func.
import { Button } from "@/components/ui/button";
import { Bold, BookCopy, Pencil, Trash, Weight, X, Plus } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Close, Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/modal";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Copy,
  Pen,
  Settings,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ContentStyleTab } from "@/components/tab_form/contentStyleTab";
import LogicTab from "@/components/tab_form/logicTab";
import { PagesRouteModule } from "next/dist/server/future/route-modules/pages/module.compiled";
export default function RightSidebar({
  activeTab,
  setActiveTab,
  pages,
  setPages,
}: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [question, setQuestion] = useState<any>({});
  const [newAnswer, setNewAnswer] = useState("");
  const inputRefs = useRef<any[]>([]);

  const pageIndex: any = searchParams.get("page");
  const questionIndex: any = searchParams.get("question");

  useEffect(() => {
    const pageObject = pages[pageIndex ? pageIndex : 0];
    const questionObject =
      pageObject?.questions[questionIndex ? questionIndex : 0];
    setQuestion(questionObject);
    setActiveTab("content");
  }, [searchParams, pathname, pages]);

  function handleQuestionChange(e: any) {
    const updatedPages = [...pages];
    updatedPages[pageIndex].questions[questionIndex].name = e.target.value;
    // updatedPages[pageIndex].questions[questionIndex].description =
    //   e.target.value;
    setPages(updatedPages);
  }

  function handleQuestionDescriptionChange(e: any) {
    const updatedPages = [...pages];
    // updatedPages[pageIndex].questions[questionIndex].name = e.target.value;
    updatedPages[pageIndex].questions[questionIndex].description =
      e.target.value;
    setPages(updatedPages);
  }

  function handleDeleteAnswer(ansIndex: number) {
    const updatedPages = [...pages];
    updatedPages[pageIndex].questions[questionIndex].answers.splice(
      ansIndex,
      1
    );
    setPages(updatedPages);
  }

  const handleAddAnswer = () => {
    if (newAnswer.trim() !== "") {
      const updatedPages = [...pages];
      const page = updatedPages[0];
      const question = page.questions[0];

      question.answers = [...question.answers, { ans: newAnswer }];
      setPages(updatedPages);
      setNewAnswer("");
      setTimeout(() => {
        const lastIndex = question.answers.length - 1;
        inputRefs.current[lastIndex]?.focus();
      }, 100);
    }
  };

  return (
    <div
      className="bg-white overflow-hidden min-w-[350px] hover:overflow-auto"
      style={{ gridArea: "rightbar" }}
    >
      <Tabs value={activeTab} defaultValue="content">
        <TabsList className="flex justify-between bg-white-300 border-b p-5">
          <TabsTrigger
            className="w-full"
            value="content"
            onClick={() => setActiveTab("content")}
          >
            Content
          </TabsTrigger>
          <TabsTrigger
            className="w-full"
            value="style"
            onClick={() => setActiveTab("style")}
          >
            Style
          </TabsTrigger>
          <TabsTrigger
            className="w-full"
            value="logic"
            onClick={() => setActiveTab("logic")}
          >
            Logic
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <div className="w-full border-b px-4 flex flex-col gap-5 pb-4 mt-2">
            <div className="flex flex-col gap-1">
              <p className="font-medium">Type</p>
              <Modal
                button={
                  <Button className="bg-white text-black border border-light-grey hover:bg-light-grey flex items-center gap-2 transition-colors duration-200 px-2 py-1">
                    <div className="w-10 h-10 rounded-md flex justify-center items-center overflow-hidden bg-purple-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <circle cx="12" cy="12" r="12" fill="black" />
                      </svg>
                    </div>
                    <p className="ml-2 flex-1 text-sm">
                      Multiple choice question
                    </p>
                    <ChevronRight className="w-6 h-6 text-black" />
                  </Button>
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-medium">Questions</p>
              <div className="flex items-center gap-2">
                <Input
                  onChange={handleQuestionChange}
                  value={question?.name || ""}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path
                          fill="currentColor"
                          d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                        />
                      </svg>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      Display Description
                      <Switch
                        checked={question?.desc_status || false}
                        onCheckedChange={(checked) => {
                          const updatedPages = [...pages];
                          updatedPages[pageIndex].questions[
                            questionIndex
                          ].desc_status = checked;
                          setPages(updatedPages);
                        }}
                      />
                    </DropdownMenuLabel>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {question.desc_status && (
                <Textarea
                  className="mt-2"
                  placeholder="Type your description here."
                  value={question.description || ""}
                  onChange={handleQuestionDescriptionChange}
                />
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                checked={question?.require || false}
                onCheckedChange={(checked) => {
                  const updatedPages = [...pages];
                  updatedPages[pageIndex].questions[questionIndex].require =
                    checked;
                  setPages(updatedPages);
                }}
              />
              <p className="font-medium">Required</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-medium">Answers</p>

              {question?.answers?.map((ans: any, ansIndex: number) => (
                <div className="flex flex-col gap-2" key={ansIndex}>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-6 h-6"
                      >
                        <path
                          fill="currentColor"
                          d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"
                        />
                      </svg>
                    </div>

                    <div className="flex-grow">
                      <Input
                        ref={(el: HTMLInputElement | null) => {
                          inputRefs.current[ansIndex] = el;
                        }}
                        value={ans.ans || ""}
                        onChange={(e) => {
                          const updatedPages = [...pages];
                          updatedPages[pageIndex].questions[
                            questionIndex
                          ].answers[ansIndex].ans = e.target.value;
                          setPages(updatedPages);
                        }}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <div className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 512"
                            style={{ width: "24px", height: "24px" }}
                          >
                            <path
                              fill="currentColor"
                              d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                            />
                          </svg>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          Add Description
                          <Switch
                            checked={ans.desc_status}
                            onCheckedChange={(checked) => {
                              const updatedPages = [...pages];
                              updatedPages[pageIndex].questions[
                                questionIndex
                              ].answers[ansIndex].desc_status = checked;
                              setPages(updatedPages);
                            }}
                          />
                        </DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => handleDeleteAnswer(ansIndex)}
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Conditionally render description input if desc_status is true */}
                  {ans.desc_status && (
                    <div className="mt-2">
                      <Textarea
                        className="mt-2"
                        placeholder="Type your description here."
                        value={ans.description || ""}
                        onChange={(e) => {
                          const updatedPages = [...pages];
                          updatedPages[pageIndex].questions[
                            questionIndex
                          ].answers[ansIndex].description = e.target.value;
                          setPages(updatedPages);
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}

              <div className="flex-grow">
                <Input
                  placeholder="Add another answer"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  onBlur={handleAddAnswer}
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent defaultValue={"style"} value="style">
          <div className="w-full border-b px-4  flex flex-col gap-5 pb-4">
            <div className="flex flex-col gap-1">
              <p className="font-medium">Font</p>

              <Select>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="Select a font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Poppins</SelectItem>
                    <SelectItem value="2">Roboto</SelectItem>
                    <SelectItem value="3">Courier Prime</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-row gap-2 justify-center items-center">
              <Button variant="outline">Small</Button>
              <Button variant="outline">Medium</Button>
              <Button variant="outline">Large</Button>
            </div>

            <div className="grid grid-cols-4 gap-0">
              <div className="col-span-1">
                <Label className="font-bold">Border radius</Label>
              </div>
              {/* <div className="col-span-1">

                    </div>
                    <div className="col-span-1">

                    </div>
                    <div className="col-span-1">

                    </div> */}
              <div className="h-full w-full flex flex-col col-span-3">
                <div className="flex w-full justify-around relative items-center border-b !border-0">
                  <div
                    className="h-full absolute hover:cursor-pointer p-[5px]"
                    style={{ left: "0%", width: "33.3333%" }} // Correct style object usage
                  >
                    <div className="h-full w-full bg-transparent-5 rounded-[5px] bg-background-200"></div>
                  </div>

                  <button className="w-full h-fit flex justify-center py-[10px] z-10 hover:cursor-pointer">
                    <div className="border-transparent-10 w-[50px] text-center rounded-[5px] py-[5px] flex justify-center items-center">
                      <div className="h-[22px] w-[30px] border-[3px] border-black rounded-[0px]"></div>
                    </div>
                  </button>

                  <button className="w-full h-fit flex justify-center py-[10px] z-10 hover:cursor-pointer">
                    <div className="border-transparent-10 w-[50px] text-center rounded-[5px] py-[5px] flex justify-center items-center">
                      <div className="h-[22px] w-[30px] border-[3px] border-black rounded-[5px]"></div>
                    </div>
                  </button>

                  <button className="w-full h-fit flex justify-center py-[10px] z-10 hover:cursor-pointer">
                    <div className="border-transparent-10 w-[50px] text-center rounded-[5px] py-[5px] flex justify-center items-center">
                      <div className="h-[22px] w-[30px] border-[3px] border-black rounded-[10px]"></div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="col-span-1">
                <Label className="font-bold">Border</Label>
              </div>
              {/* <div className="col-span-1">

                    </div>
                    <div className="col-span-1">

                    </div>
                    <div className="col-span-1">

                    </div> */}
              <div className="h-full w-full flex flex-col col-span-3">
                <div className="flex w-full justify-around relative items-center border-b !border-0">
                  <div
                    className="h-full absolute hover:cursor-pointer p-[5px]"
                    style={{ left: "66.6667%", width: "33.3333%" }} // Fixed inline styles
                  >
                    <div className="h-full w-full bg-transparent-5 rounded-[5px] bg-background-200"></div>
                  </div>

                  <button className="w-full h-fit flex justify-center py-[10px] z-10 hover:cursor-pointer">
                    <div className="border-transparent-10 w-[50px] text-center rounded-[5px] py-[5px] flex justify-center items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ban"
                        className="svg-inline--fa fa-ban text-[22px] !text-black h-[22px] w-[30px]"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  <button className="w-full h-fit flex justify-center py-[10px] z-10 hover:cursor-pointer">
                    <div className="border-transparent-10 w-[50px] h-[35px] text-center rounded-[5px] py-[5px] flex justify-center items-center">
                      <div className="w-[30px] h-[2px] bg-black"></div>
                    </div>
                  </button>

                  <button className="w-full h-fit flex justify-center py-[10px] z-10 hover:cursor-pointer">
                    <div className="border-transparent-10 w-[50px] h-[35px] text-center rounded-[5px] py-[5px] flex justify-center items-center">
                      <div className="w-[30px] h-[5px] bg-black"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <Label className="font-bold">Border color</Label>
              </div>
              <div className="col-span-2">
                {/* <Button variant="ghost">#000000</Button> */}
                <div className="flex justify-between w-[150px] bg-input-background px-[10px] py-[7.5px] rounded placeholder:text-[#b0b0b0] outline-focus items-center cursor-pointer">
                  <span className="font-medium">#000000</span>
                  <span
                    style={{
                      backgroundColor: "rgb(0, 0, 0)", // Camel case for background-color
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%", // Camel case for border-radius
                      display: "inline-block", // Optional, for making sure the span behaves like a block element if needed
                    }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>

              <div className="col-span-1">
                <Label className="font-bold">Buttons</Label>
              </div>
              <div className="col-span-2">
                {/* <Button variant="ghost">#000000</Button> */}
                <div className="flex justify-between w-[150px] bg-input-background px-[10px] py-[7.5px] rounded placeholder:text-[#b0b0b0] outline-focus items-center cursor-pointer">
                  <span className="font-medium">#000000</span>
                  <span
                    style={{
                      backgroundColor: "rgb(0, 0, 0)", // Camel case for background-color
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%", // Camel case for border-radius
                      display: "inline-block", // Optional, for making sure the span behaves like a block element if needed
                    }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>

              <div className="col-span-1">
                <Label className="font-bold">Button text</Label>
              </div>
              <div className="col-span-1">
                {/* <Button variant="ghost">#FFFFFF</Button> */}
                <div className="flex justify-between w-[150px] bg-input-background px-[10px] py-[7.5px] rounded placeholder:text-[#b0b0b0] outline-focus items-center cursor-pointer">
                  <span className="font-medium">#FFFFFF</span>
                </div>
              </div>

              <div className="col-span-1"></div>
            </div>

            <div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Custom css</AccordionTrigger>
                    <AccordionContent>
                      <Input></Input>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent defaultValue="logic" value="logic">
          <div className="w-full h-full pt-4 bg-white">
            <div className="w-full border-b px-4 flex flex-col gap-5 pb-4">
              <p className="font-semibold break-all whitespace-normal text-xl">
                Change logic for Page 1
              </p>
              <div className="flex flex-col gap-4 rounded bg-white"></div>
              {/* <div className="flex flex-col gap-1 bg-gray-100 p-4 rounded-md">
                      Always go to Name
                      <div>
                        <Button
                          type="button"
                          role="combobox"
                          aria-controls="radix-:rmr:"
                          aria-expanded="false"
                          aria-autocomplete="none"
                          dir="ltr"
                          data-state="closed"
                          className="flex h-[45px] w-full items-center justify-between whitespace-nowrap rounded-md border border-gray-300 bg-transparent pr-3 pl-3 py-2 ring-offset-background placeholder:text-gray-500 outline-none data-[state=open]:outline-none data-[state=open]:ring-1 data-[state=open]:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                        >
                          <span style={{ pointerEvents: 'none' }}>
                            <div className="flex gap-3 items-center">
                              <div className="w-[40px] h-[40px] rounded-[12px] bg-gray-200 flex items-center justify-center font-bold">
                                <p>P</p>
                              </div>
                              Page 2
                            </div>
                          </span>
                         
                        </Button>
                      </div>
                    </div> */}
              <div className="flex flex-col gap-1 bg-gray-100 p-4 rounded-md text-black">
                Always go to Name
                <div>
                  <Button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:rmr:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-[45px] w-full items-center justify-between whitespace-nowrap rounded-md border border-gray-300 bg-white pr-3 pl-3 py-2 ring-offset-background placeholder:text-gray-500 outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:bg-white"
                  >
                    <span
                      style={{ pointerEvents: "none" }}
                      className="text-black"
                    >
                      <div className="flex gap-3 items-center">
                        <div className="w-[40px] h-[40px] rounded-[12px] bg-gray-200 flex items-center justify-center font-bold text-black">
                          <p>P</p>
                        </div>
                        <span className="text-black">Page 2</span>
                      </div>
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 bg-gray-100 p-4 rounded-md mt-5 mr-3 ml-3">
              <h2 className=" font-bold mt-2">When</h2>
              <div className=" mr-5">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Make a choice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="l">
                      <div className="flex items-center gap-2">
                        <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="building"
                            className="svg-inline--fa fa-building text-black"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width="20px"
                            height="20px"
                          >
                            <path
                              fill="currentColor"
                              d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                            ></path>
                          </svg>
                        </div>
                        <span className="font-bold ml-2">Street</span>
                      </div>
                    </SelectItem>

                    {/* <SelectItem value="d">
                          <div className="flex items-center gap-2">
                            <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                className="svg-inline--fa fa-check text-black"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                width="20px"
                                height="20px"
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <span className="font-bold ml-2">Multiple select question</span>
                          </div>
                        </SelectItem> */}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-4 ml-5 mt-3">
                <button className="flex items-center bg-gray-300 text-black  px-2.5 py-1 rounded-l">
                  <Plus className="mr-2" />
                  And
                </button>
                <button className="flex items-center bg-gray-300 text-black  px-2.5 py-1 rounded-r">
                  <Plus className="mr-2" />
                  Or
                </button>
              </div>

              <h2 className=" font-bold mt-5">Then go to</h2>
              <div className="flex items-center relative w-full">
                <Select>
                  <SelectTrigger className="w-[calc(100%-40px)]">
                    {" "}
                    {/* Adjust width here */}
                    <SelectValue
                      placeholder="Make a choice"
                      className="text-sm"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light" className="text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="building"
                            className="svg-inline--fa fa-building text-black"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width="20px"
                            height="20px"
                          >
                            <path
                              fill="currentColor"
                              d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                            ></path>
                          </svg>
                        </div>
                        <span className="font-bold ml-2">Street</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                <button className="!w-[32px] !h-[32px] bg-destructive/[0.1] rounded-full hover:bg-destructive/[0.2] flex items-center justify-center ml-2">
                  <span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="trash"
                      className="svg-inline--fa fa-trash text-destructive"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="16px" // Adjust SVG size as needed
                      height="16px"
                    >
                      <path
                        fill="currentColor"
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>

              <h2 className=" font-bold mt-5">Otherwise go to</h2>
              <div className="mr-5">
                <Button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:rmr:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-[45px] w-full items-center justify-between whitespace-nowrap rounded-md border border-gray-300 bg-white pr-3 pl-3 py-2 ring-offset-background placeholder:text-gray-500 outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:bg-white"
                >
                  <span
                    style={{ pointerEvents: "none" }}
                    className="text-black"
                  >
                    <div className="flex gap-3 items-center">
                      <div className="w-[40px] h-[40px] rounded-[12px] bg-gray-200 flex items-center justify-center font-bold text-black">
                        <p>P</p>
                      </div>
                      <span className="text-black">Page 3</span>
                    </div>
                  </span>
                </Button>
              </div>

              <button className="flex flex-col items-center space-y-2 px-3 py-6 mt-5 mr-5 bg-gray-200 text-black border border-dotted border-gray-400 rounded hover:bg-gray-300 transition duration-200">
                <p className="text-center">Add rule</p>
                <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus"
                    className="svg-inline--fa fa-plus w-4 h-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
