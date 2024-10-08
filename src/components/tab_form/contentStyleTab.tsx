import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";

import { Trash } from "lucide-react";
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
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormSidebar } from "./sidebar";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function ContentStyleTab({ pages, setPages, style, setStyle }: any) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  // Helper function to remove duplicate pages based on 'id'
  function removeDuplicates(pagesArray: any) {
    return Array.from(new Set(pagesArray.map((page: any) => page.id))).map(
      (id) => pagesArray.find((page: any) => page.id === id)
    );
  }

  // Move the page up in the list
  const movePageUp = (index: any) => {
    if (index === 0) return; // If it's the first page, do nothing
    const newPages = [...pages];
    [newPages[index - 1], newPages[index]] = [
      newPages[index],
      newPages[index - 1],
    ];
    setPages(newPages);
  };

  // Move the page down in the list
  const movePageDown = (index: any) => {
    if (index === pages.length - 1) return; // If it's the last page, do nothing
    const newPages = [...pages];
    [newPages[index], newPages[index + 1]] = [
      newPages[index + 1],
      newPages[index],
    ];
    setPages(newPages);
  };

  // Delete the selected page
  const deletePage = (id: any) => {
    console.log("Deleting page with id:", id);
    console.log("Current pages:", pages);

    const newPages = (pages || []).filter((page: any) => page?.id !== id);
    console.log("New pages after deletion:", newPages);

    setPages(newPages);
  };

  // Duplicate a page
  const duplicatePage = (page: any) => {
    const newPage = { ...page, id: pages.length + 1, order: pages.length + 1 };
    setPages([...pages, newPage]);
  };

  function handleQuestionEditDisplay(page: any): any {
    console.log("page: " + page);
    router.push(pathname + "?" + updateParams(page));
  }

  const updateParams = (newPage: any) => {
    const updatedParams: any = new URLSearchParams(searchParams.toString());

    updatedParams.set("page", newPage);

    return updatedParams.toString();
  };
  function addPage() {
    setPages((prev: any) =>
      prev.concat({
        id: 1,
        order: pages.length + 1,
        questions: [],
      })
    );
  }

  return (
    <>
      {/* left sidebar*/}
      <FormSidebar pages={pages} setPages={setPages} />
      <div className="w-full h-screen overflow-y-auto">
        <div className="flex flex-col w-full max-w-2xl mx-auto px-4 py-8 ">
          {/* Page Container */}
          {pages?.map((page: any, index: any) => (
            <div
              key={index}
              className="flex flex-col items-center mb-8"
              style={{
                fontFamily: style.text_font,
                fontSize: style.text_size,
              }}
              onClick={() => handleQuestionEditDisplay(index)}
            >
              {/* Header Section */}
              <div className="flex justify-between items-center mb-2.5 w-full">
                <div className="flex-1 flex items-center">
                  <h1
                    className="m-0 flex items-center font-bold"
                    style={{
                      fontFamily: style.text_font,
                      fontSize: style.text_size,
                    }}
                  >
                    Page {page.order}
                    <Pen className="w-4 h-4 ml-2" />
                  </h1>
                </div>

                {/* Header Buttons */}
                <div className="flex items-center gap-2.5">
                  {/* Up Button */}
                  <button
                    className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer w-8 h-8 flex items-center justify-center"
                    onClick={() => movePageUp(index)}
                  >
                    <ChevronUp className="w-4 h-4 text-black" />
                  </button>

                  {/* Down Button */}
                  <button
                    className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer w-8 h-8 flex items-center justify-center"
                    onClick={() => movePageDown(index)}
                  >
                    <ChevronDown className="w-4 h-4 text-black" />
                  </button>

                  {/* Duplicate Button */}
                  <button
                    className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer w-8 h-8 flex items-center justify-center"
                    onClick={() => duplicatePage(page)}
                  >
                    <Copy className="w-4 h-4 text-black" />
                  </button>

                  {/* Delete Button */}
                  <button
                    className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer w-8 h-8 flex items-center justify-center"
                    onClick={() => deletePage(page.id)}
                  >
                    <Trash className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>

              {/* Card with Content */}
              <Card
                className="shadow-2xl w-full "
                style={{
                  borderColor: style.border_color || "#000000",
                  borderRadius: style.border_radius || "0px",
                  borderWidth: style.border_line || "1px",
                  borderStyle: style.border_line === "none" ? "none" : "solid",
                }}
              >
                <CardContent>
                  <div className="flex">
                    <div className="flex-1 p-5 box-border flex justify-center items-center">
                      <Image
                        src="/images/image.jpg"
                        alt="Description of image"
                        width={200}
                        height={50}
                        className="w-full max-w-full "
                      />
                    </div>

                    {/* Second div for the content */}
                    <div className="flex-1  w-full max-w-full h-[500px]  max-h-[500px] mt-2">
                      <Card
                        className="w-full max-w-full h-[500px] max-h-[500px] overflow-y-auto"
                        style={{
                          borderRadius: style.border_radius || "0px",
                          borderWidth: style.border_line || "1px",
                          borderStyle:
                            style.border_line === "none" ? "none" : "solid",
                        }}
                      >
                        <CardContent
                          style={{
                            fontFamily: style.text_font,
                            fontSize: style.text_size,
                          }}
                        >
                          {page.questions?.map((question: any, index: any) => {
                            if (!question) return null;
                            return (
                              <div key={index}>
                                <div className="flex justify-between mt-4 mb-3">
                                  <Label
                                    className={`font-bold  ${style.text_size} ${style.text_font}`}
                                  >
                                    {question.name}
                                  </Label>

                                  <span className="bg-gray-400 py-1 px-2 rounded-lg text-xs">
                                    {question.require ? "required" : "optional"}
                                  </span>
                                </div>
                                {question && question.desc_status ? (
                                  <Label
                                    className="text "
                                    style={{
                                      fontFamily: style.text_font,
                                      fontSize: style.text_size,
                                    }}
                                  >
                                    {question.description}
                                  </Label>
                                ) : null}

                                <RadioGroup defaultValue="option-one">
                                  <div className="flex flex-col space-y-2">
                                    {question.answers?.map(
                                      (answer: any, index: number) => {
                                        return (
                                          <div
                                            key={index}
                                            className="p-3 rounded-lg border border-gray-300 flex items-center justify-between"
                                          >
                                            {/* Image in front of Answer A */}
                                            <div className="flex items-center space-x-2">
                                              <RadioGroupItem
                                                value={answer.ans}
                                                id={`option-${index}`}
                                              />
                                              <Label
                                                htmlFor={`option-${index}`}
                                                style={{
                                                  fontFamily: style.text_font,
                                                  fontSize: style.text_size,
                                                }}
                                              >
                                                {answer.ans}
                                              </Label>
                                            </div>
                                            {answer.img && (
                                              <img
                                                src={answer.img}
                                                alt=""
                                                className="w-6 h-6 object-contain"
                                              />
                                            )}
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                </RadioGroup>
                              </div>
                            );
                          })}
                        </CardContent>
                        <CardFooter className="flex justify-between mt-9">
                          <Button
                            className={`bg-white ${
                              style.button_color
                                ? `text-[${style.button_color}]`
                                : "text-black"
                            } rounded-full w-10 h-10 flex items-center justify-center border-2  cursor-pointer ${
                              style.text_size
                            } ${style.text_font}`}
                            style={{
                              borderColor: style.button_color || "black",
                              borderRadius: style.border_radius || "0px",
                            }}
                          >
                            <ArrowLeft
                              style={{
                                color: style.button_text || "white",
                              }}
                              className="w-4 h-4 font-bold text-white"
                            />
                          </Button>

                          <Button
                            className={`bg-black ${
                              style.button_text
                                ? `text-${style.button_text}`
                                : "text-white"
                            } rounded-2xl py-2 px-4 border-none cursor-pointer flex items-center`}
                            style={{
                              backgroundColor: style.button_color || "black",
                            }}
                          >
                            <span
                              className={`mr-2 ${style.text_size} ${style.text_font}`}
                              style={{
                                borderRadius: style.border_radius || "0px",
                                color: style.button_text || "white",
                              }}
                            >
                              Next
                            </span>
                            <ArrowRight
                              style={{
                                color: style.button_text || "white",
                              }}
                              className="w-4 h-4 font-bold text-white"
                            />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center mb-4">
            {/* Main Container */}
            <div className=" flex flex-col w-full  bg-white box-border items-center justify-center p-5 rounded-lg">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xs">Add Page</span>
                <button
                  onClick={addPage}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white p-2 cursor-pointer border-2 border-black"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus"
                    className="svg-inline--fa fa-plus fa-lg w-6 h-6 fill-current"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
