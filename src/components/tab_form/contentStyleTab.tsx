import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Head from "next/head";

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

      {/* Main page in opt_pages file*/}
      <div className="w-full h-full flex flex-col border-r hover:overflow-auto overflow-auto">
        {/* <div className="w-full h-[500px] flex flex-col border-r overflow-y-auto"> */}
        {/* <div className="w-full h-full flex flex-col border-r overflow-y-auto scroll-smooth"> */}
        {/* <div className="w-full flex-grow flex flex-col border-r overflow-y-auto"> */}

        <div
          className="flex-grow flex flex-col overflow-y-auto scroll-smooth"
          style={{
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE and Edge
          }}
        >
          {/* Hide scrollbar for Chrome, Safari and Edge */}
          <style>
            {`
              .flex-grow::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {/* ////////////////////////PAGE-1(Radio button)Multiple choice question///////////////////////////////////////////// */}

          {pages?.map((page: any, index: any) => {
            return (
              <div
                key={index}
                className={`flex flex-col items-center h-screen p-5 box-border`}
                style={{
                  fontFamily: style.text_font,
                  fontSize: style.text_size,
                }}
                onClick={() => handleQuestionEditDisplay(index)}
              >
                {/* Header Section */}
                <div className="flex justify-between items-center w-4/5 mb-2.5 text-left box-border">
                  <div className="flex-1 flex items-center">
                    <h1
                      className="m-0 flex items-center font-bold"
                      style={{
                        fontFamily: style.text_font,
                        fontSize: style.text_size,
                      }}
                    >
                      Page {page.order}
                      <Pen className="ml-2 w-4 h-4" />
                    </h1>
                  </div>

                  {/* Header Buttons */}
                  <div className="flex items-center gap-2.5 mr-8">
                    {/* <button className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer relative w-8 h-8 flex items-center justify-center">
                      <ChevronUp className="w-4 h-4 text-black" />
                    </button>
                    <button className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer relative w-8 h-8 flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 text-black" />
                    </button>
                    <button className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer relative w-8 h-8 flex items-center justify-center">
                      <Settings className="w-4 h-4 text-black" />
                    </button>
                    <button className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer relative w-8 h-8 flex items-center justify-center">
                      <Copy className="w-4 h-4 text-black" />
                    </button>
                    <button className="p-1.5 border-none rounded-full bg-gray-200 text-white cursor-pointer relative w-8 h-8 flex items-center justify-center">
                      <Trash className="w-4 h-4 text-black" />
                    </button> */}

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

                {/* Main Container */}
                <div
                  className={`flex flex-row w-[800px] h-[500px] bg-white box-border `}
                  style={{
                    borderColor: style.border_color || "#000000", // Dynamic border color
                    borderRadius: style.border_radius || "0px", // Dynamic border radius
                    borderWidth: style.border_line || "1px", // Dynamic border line thickness
                    borderStyle:
                      style.border_line === "none" ? "none" : "solid", // Dynamic border style
                  }}
                >
                  {/* Left Image Container */}
                  <div className="flex-1 p-5 box-border flex justify-center items-center">
                    <img
                      src="/images/image.jpg"
                      alt="Description of image"
                      className="w-full h-auto mb-5"
                    />
                  </div>

                  {/* Right Card Container */}
                  <div className="flex-1 p-5 box-border flex flex-col justify-between">
                    {/* Card Component with dynamic border radius and line */}
                    <Card
                      className="w-[90%] h-[80%] mx-auto shadow-lg p-4 flex flex-col justify-between"
                      style={{
                        borderRadius: style.border_radius || "0px", // Dynamic border radius
                        borderWidth: style.border_line || "1px", // Dynamic border line
                        borderStyle:
                          style.border_line === "none" ? "none" : "solid", // Handle no-border case
                      }}
                    >
                      <CardContent
                        className="overflow-y-auto custom-scrollbar"
                        style={{
                          fontFamily: style.text_font,
                          fontSize: style.text_size,
                        }}
                      >
                        <form>
                          {page.questions?.map((question: any, index: any) => {
                            if (!question) return null;
                            return (
                              <div key={index}>
                                <div className="flex justify-between mb-3">
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
                        </form>
                      </CardContent>

                      {/* Buttons positioned at the bottom */}
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
                            className={`w-5 h-5  ${
                              style.button_color
                                ? `text-[${style.button_color}]`
                                : "text-black"
                            }`}
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
              </div>
            );
          })}

          {/* ////////////////////////add page button//////////////////////////////////////////// */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              justifyContent: "center", // Center content vertically
            }}
          >
            {/* Main Container */}
            <div
              className="mb-12"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%", // Match width with the header
                height: "auto", // Adjust height dynamically
                backgroundColor: "white",
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "center", // Center content inside
                padding: "20px",
                borderRadius: "8px", // Removed the border and adjusted the styling
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "12px" }}>Add Page</span>
                <button
                  onClick={addPage}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: "8px",
                    cursor: "pointer",
                    border: "2px solid black", // You can remove this if border is unnecessary
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus"
                    className="svg-inline--fa fa-plus fa-lg"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{
                      width: "24px",
                      height: "24px",
                      fill: "currentColor",
                    }}
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
