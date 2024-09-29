/////////////////////Those left/right sidebars structure

"use client";
import React from "react";
import { cn } from "@/lib/utils"; // Shadcn's class func.
import { Button } from "@/components/ui/button";
import { Bold, BookCopy, Pencil, Trash, Weight, X, Plus } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
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

export default function NewPage() {
  const router = useRouter();
  return (
    <>
    
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        {/* Header*/}
        <header
          className="bg-[#FFFFFF] w-full border-b h-[60px] flex justify-between items-center pr-2 pl-0 text-lg "
          style={{ gridArea: "header" }}
        >
          <div className="ml-3 flex gap-4 items-center w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="xmark"
                    className="svg-inline--fa fa-xmark text-2xl"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="20" // Set width to match your image
                    height="20" // Set height to match your image
                    onClick={() => router.push("/dashboard/form")}
                  >
                    <path
                      fill="currentColor"
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    ></path>
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Close</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="text-lg ">Naamloze configurator</span>
            <Pencil className="font-bold h-5 w-5" />
          </div>

          <div className="flex justify-end gap-4 items-center w-full h-full">
            <div className="flex gap-2 items-center h-full">
              <Button
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 w-12" // Increased height and width
                data-state="closed"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="desktop"
                  className="svg-inline--fa fa-desktop"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="32" // Adjusted the width here
                  height="32" // Adjusted the height here
                >
                  <path
                    fill="currentColor"
                    d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
                  />
                </svg>
              </Button>

              <Button
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 w-12" // Increased height and width
                data-state="closed"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye"
                  className="w-8 h-8 svg-inline--fa fa-eye" // Increased size of the SVG icon
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  ></path>
                </svg>
              </Button>

              <div data-state="closed">
                <Button className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 w-12">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="link"
                    className="w-8 h-8 svg-inline--fa fa-link" // Increased size of the SVG icon
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4 10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                    ></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div
              className="bg-border h-[50%] w-[1px] rounded-full"
              content=""
            ></div>
            <div className="flex gap-4 items-center h-full">
              <Button
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 w-12" // Increased button size
                data-state="closed"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gear"
                  className="w-8 h-8 svg-inline--fa fa-gear" // Increased size of the SVG icon
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                  ></path>
                </svg>
              </Button>

              <Button className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#B0D59E] text-primary-foreground hover:bg-[#B0D59E] h-10 px-4 py-2 text-md">
                Publish
              </Button>
            </div>
          </div>
        </header>

        <div className="w-full h-full flex flex-row">
          {/* left sidebar*/}
          <div
            className="w-full max-w-[300px] h-full flex flex-col border-r  bg-white hover:overflow-auto  "
            style={{ gridArea: "leftbar" }}
          >
            <div className="w-full flex justify-between items-center p-4">
              <p className="font-medium">Content</p>
              <Button className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full w-11 h-11">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="plus"
                  className="svg-inline--fa fa-plus"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20" // Adjust the size here
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  ></path>
                </svg>
              </Button>
            </div>

            {/* ///////////////////////////////QUESTIONS////////////////////// */}

            <div className="h-full w-full rounded overflow-hidden scroll">
              <div className="min-w-full table">
                <div className="bg-white">
                  <div className="h-full w-full">
                    <p className="border-b px-4 pb-2 pt-8 truncate">Page 1</p>
                    <div className="container">
                      <div className="w-full flex items-center justify-between p-4 border-b py-6 cursor-grab bg-white">
                        <div className="flex items-center">
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
                          <p className="ml-2 max-w-xs truncate">Question 1</p>
                        </div>
                        <div className="flex items-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <div
                                className="aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer"
                                data-slot="trigger"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="react-aria275040590-:rbt:"
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="ellipsis-vertical"
                                  className="svg-inline--fa fa-ellipsis-vertical"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 128 512"
                                  style={{ width: "24px", height: "24px" }}
                                >
                                  <path
                                    fill="currentColor"
                                    d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                                  ></path>
                                </svg>
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <BookCopy className="mr-2 h-4 w-4" />
                                <span>Duplicate</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Trash className="mr-2 h-4 w-4" />
                                <span>To Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white">
                  <div className="h-full w-full">
                    <p className="border-b px-4 pb-2 pt-8 truncate">Page 2</p>
                    <div className="container">
                      <div className="w-full flex items-center justify-between p-4 border-b py-6 cursor-grab bg-white">
                        <div className="flex items-center">
                          <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                            <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                              <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center flex-col">
                                <div className="w-[24px] h-[24px] rounded-[5px] bg-black flex justify-center items-center">
                                  <p className="text-white text-[10px]">1 m²</p>
                                </div>
                              </div>
                            </div>
                            <p className="ml-2 max-w-xs truncate">Question 2</p>
                          </button>
                        </div>
                        <div className="flex items-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <div
                                className="aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer"
                                data-slot="trigger"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="react-aria275040590-:rbt:"
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="ellipsis-vertical"
                                  className="svg-inline--fa fa-ellipsis-vertical"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 128 512"
                                  style={{ width: "24px", height: "24px" }}
                                >
                                  <path
                                    fill="currentColor"
                                    d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                                  ></path>
                                </svg>
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <BookCopy className="mr-2 h-4 w-4" />
                                <span>Duplicate</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Trash className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white">
                  <div className="h-full w-full">
                    <p className="border-b px-4 pb-2 pt-8 truncate">Page 3</p>
                    <div className="container">
                      <div className="w-full flex items-center justify-between p-4 border-b py-6 cursor-grab bg-white">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-md flex justify-center items-center overflow-hidden bg-purple-200">
                            <div className="w-5 h-5 rounded bg-black flex justify-center items-center">
                              <svg
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="text-purple-200 text-[15px]"
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <p className="ml-2 max-w-xs truncate">Question 3</p>
                        </div>
                        <div className="flex items-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <div
                                className="aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer"
                                data-slot="trigger"
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="react-aria275040590-:rbt:"
                              >
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="ellipsis-vertical"
                                  className="svg-inline--fa fa-ellipsis-vertical"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 128 512"
                                  style={{ width: "24px", height: "24px" }}
                                >
                                  <path
                                    fill="currentColor"
                                    d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                                  ></path>
                                </svg>
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <BookCopy className="mr-2 h-4 w-4" />
                                <span>Duplicate</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Trash className="mr-2 h-4 w-4" />
                                <span>To Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main page in opt_pages file*/}
          <div className="w-full h-full flex flex-col border-r hover:overflow-auto overflow-auto">
            <>
              {/* ////////////////////////PAGE-1(Radio button)Multiple choice question///////////////////////////////////////////// */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100vh",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Header Section */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "80%", // Set width to match the main container
                    marginBottom: "7px",
                    textAlign: "left",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{ flex: 1, display: "flex", alignItems: "center" }}
                  >
                    <h1
                      style={{
                        margin: 0,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Page1
                      <Pen
                        style={{
                          marginLeft: "8px",
                          height: "16px",
                          width: "16px",
                        }}
                      />
                    </h1>
                  </div>

                  {/* //////////////////////////////////HEADER BUTTONS////////////////////////////////////////////// */}
                  <>
                    <div
                      style={{
                        display: "flex", // Use flexbox to lay out buttons in a row
                        alignItems: "center", // Align items vertically in the center
                        gap: "10px", // Optional: Adds space between buttons
                      }}
                    >
                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ChevronUp
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Page Up
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ChevronDown
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Page Down
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Settings
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Settings
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Copy
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Duplicate
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Trash
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Delete
                        </div>
                      </button>
                    </div>
                  </>
                </div>

                {/* Main Container */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "5px solid black",
                    borderRadius: "8px",
                    width: "80%", // Match width with the header
                    height: "90%",
                    backgroundColor: "white",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: "20px",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Image */}
                    <img
                      src="/images/image.jpg"
                      alt="Description of image"
                      style={{
                        width: "100%", // Adjust the width as needed
                        height: "auto", // Maintain aspect ratio
                        marginBottom: "20px", // Space between image and text
                      }}
                    />
                  </div>

                  <div
                    style={{
                      flex: 1,
                      padding: "20px",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Content for the second section */}
                    <Card className="w-[500px], h-[400px]">
                      <CardHeader>
                        <CardTitle>Question 1</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="flex justify-between ">
                            <Label className="font-bold text-base">
                              Question 1
                            </Label>
                            <span className="bg-gray-400 mb-4 rounded-lg">
                              Verplicht
                            </span>
                          </div>
                          <RadioGroup defaultValue="option-one">
                            <div className="flex flex-col space-y-2">
                              <div className="p-4 rounded-lg border border-gray-300 flex items-center space-x-80">
                                {/* Image in front of Answer A */}

                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="option-one"
                                    id="option-one"
                                  />
                                  <Label htmlFor="option-one">Answer A</Label>
                                </div>
                                <img
                                  src="your-image-url.jpg"
                                  className="w-8 ml-6 h-8 object-contain"
                                />
                              </div>
                              <div className="p-4 rounded-lg border border-gray-300">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="option-two"
                                    id="option-two"
                                  />
                                  <Label htmlFor="option-two">Answer B</Label>
                                </div>
                              </div>
                              <div className="p-4 rounded-lg border border-gray-300">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="option-three"
                                    id="option-three"
                                  />
                                  <Label htmlFor="option-three">Answer C</Label>
                                </div>
                              </div>
                            </div>
                          </RadioGroup>
                        </form>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "50%", // Circle shape
                            width: "50px", // Adjust width as needed
                            height: "50px", // Adjust height to match width
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid black", // Black border
                            marginRight: "10px",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "lightgray")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "white")
                          }
                        >
                          <ArrowLeft
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              width: "24px", // Adjust to fit the button
                              height: "24px", // Adjust to fit the button
                            }}
                          />
                        </Button>

                        <Button
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "25px", // Oval shape
                            padding: "10px 20px",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "gray")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "black")
                          }
                        >
                          <span style={{ marginRight: "8px" }}>Volgende</span>
                          <ArrowRight
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              width: "16px", // Adjust to fit the button
                              height: "16px", // Adjust to fit the button
                            }}
                          />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>

              {/* ////////////////////////PAGE-2(slider)Number question///////////////////////////////////////////// */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100vh",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Header Section */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "80%", // Set width to match the main container
                    marginBottom: "7px",
                    textAlign: "left",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{ flex: 1, display: "flex", alignItems: "center" }}
                  >
                    <h1
                      style={{
                        margin: 0,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Page2
                      <Pen
                        style={{
                          marginLeft: "8px",
                          height: "16px",
                          width: "16px",
                        }}
                      />
                    </h1>
                  </div>

                  {/* //////////////////////////////////HEADER BUTTONS////////////////////////////////////////////// */}
                  <>
                    <div
                      style={{
                        display: "flex", // Use flexbox to lay out buttons in a row
                        alignItems: "center", // Align items vertically in the center
                        gap: "10px", // Optional: Adds space between buttons
                      }}
                    >
                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ChevronUp
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Page Up
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ChevronDown
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Page Down
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Settings
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Settings
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Copy
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Duplicate
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Trash
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Delete
                        </div>
                      </button>
                    </div>
                  </>
                </div>

                {/* Main Container */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "5px solid black",
                    borderRadius: "8px",
                    width: "80%", // Match width with the header
                    height: "90%",
                    backgroundColor: "white",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: "20px",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Image */}
                    <img
                      src="/images/image.jpg"
                      alt="Description of image"
                      style={{
                        width: "100%", // Adjust the width as needed
                        height: "auto", // Maintain aspect ratio
                        marginBottom: "20px", // Space between image and text
                      }}
                    />
                  </div>

                  <div
                    style={{
                      flex: 1,
                      padding: "20px",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Content for the second section */}
                    <Card className="w-[500px], h-[400px]">
                      <CardHeader>
                        <CardTitle>Question 2</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="flex justify-between ">
                            <Label className="font-bold text-base">
                              Question 2
                            </Label>
                            <span className="bg-gray-400 mb-4 rounded-lg">
                              Verplicht
                            </span>
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "50%", // Circle shape
                            width: "50px", // Adjust width as needed
                            height: "50px", // Adjust height to match width
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid black", // Black border
                            marginRight: "10px",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "lightgray")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "white")
                          }
                        >
                          <ArrowLeft
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              width: "24px", // Adjust to fit the button
                              height: "24px", // Adjust to fit the button
                            }}
                          />
                        </Button>

                        <Button
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "25px", // Oval shape
                            padding: "10px 20px",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "gray")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "black")
                          }
                        >
                          <span style={{ marginRight: "8px" }}>Volgende</span>
                          <ArrowRight
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              width: "16px", // Adjust to fit the button
                              height: "16px", // Adjust to fit the button
                            }}
                          />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>

              {/* ////////////////////////PAGE-3(checkbox)Multiple select question//////////////////////////////////////////// */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100vh",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Header Section */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "80%", // Set width to match the main container
                    marginBottom: "7px",
                    textAlign: "left",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{ flex: 1, display: "flex", alignItems: "center" }}
                  >
                    <h1
                      style={{
                        margin: 0,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Page3
                      <Pen
                        style={{
                          marginLeft: "8px",
                          height: "16px",
                          width: "16px",
                        }}
                      />
                    </h1>
                  </div>

                  {/* //////////////////////////////////HEADER BUTTONS////////////////////////////////////////////// */}
                  <>
                    <div
                      style={{
                        display: "flex", // Use flexbox to lay out buttons in a row
                        alignItems: "center", // Align items vertically in the center
                        gap: "10px", // Optional: Adds space between buttons
                      }}
                    >
                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ChevronUp
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Page Up
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ChevronDown
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Page Down
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Settings
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Settings
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Copy
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Duplicate
                        </div>
                      </button>

                      <button
                        style={{
                          padding: "10px",
                          border: "none",
                          borderRadius: "50%",
                          backgroundColor: "#f0f0f0",
                          color: "white",
                          cursor: "pointer",
                          position: "relative",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Trash
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "black",
                          }}
                        />
                        <div
                          style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            fontSize: "12px",
                          }}
                        >
                          Delete
                        </div>
                      </button>
                    </div>
                  </>
                </div>

                {/* Main Container */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "5px solid black",
                    borderRadius: "8px",
                    width: "80%", // Match width with the header
                    height: "90%",
                    backgroundColor: "white",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: "20px",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Image */}
                    <img
                      src="/images/image.jpg"
                      alt="Description of image"
                      style={{
                        width: "100%", // Adjust the width as needed
                        height: "auto", // Maintain aspect ratio
                        marginBottom: "20px", // Space between image and text
                      }}
                    />
                  </div>

                  <div
                    style={{
                      flex: 1,
                      padding: "20px",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Content for the second section */}
                    <Card className="w-[500px], h-[400px]">
                      <CardHeader>
                        <CardTitle>Question 3</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="flex flex-col space-y-2">
                            <div className="p-4 rounded-lg border border-gray-300 flex items-center space-x-80">
                              <div className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  id="checkbox1"
                                  className="h-6 w-6"
                                />
                                <Label htmlFor="checkbox1">Answer A</Label>
                              </div>
                              <img
                                src="your-image-url.jpg"
                                className="w-8 ml-6 h-8 object-contain"
                                alt="Icon for Answer A"
                              />
                            </div>
                            <div className="p-4 rounded-lg border border-gray-300">
                              <div className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  id="checkbox2"
                                  className="h-6 w-6"
                                />
                                <Label htmlFor="checkbox2">Answer B</Label>
                              </div>
                            </div>
                            <div className="p-4 rounded-lg border border-gray-300">
                              <div className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  id="checkbox3"
                                  className="h-6 w-6"
                                />
                                <Label htmlFor="checkbox3">Answer C</Label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "50%", // Circle shape
                            width: "50px", // Adjust width as needed
                            height: "50px", // Adjust height to match width
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid black", // Black border
                            marginRight: "10px",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "lightgray")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "white")
                          }
                        >
                          <ArrowLeft
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              width: "24px", // Adjust to fit the button
                              height: "24px", // Adjust to fit the button
                            }}
                          />
                        </Button>

                        <Button
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "25px", // Oval shape
                            padding: "10px 20px",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "gray")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "black")
                          }
                        >
                          <span style={{ marginRight: "8px" }}>Volgende</span>
                          <ArrowRight
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              width: "16px", // Adjust to fit the button
                              height: "16px", // Adjust to fit the button
                            }}
                          />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>

              {/* ///////////////////////////////ADD PAGE PLUS BUTTON////////////////////////////////             */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <span style={{ marginTop: "8px", fontSize: "12px" }}>
                  Add Page
                </span>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid black",
                    backgroundColor: "white",
                    padding: "8px",
                    cursor: "pointer",
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
            </>
          </div>

          {/* right side  */}
          <div
            className="bg-white overflow-hidden min-w-[350px] hover:overflow-auto"
            style={{ gridArea: "rightbar" }}
          >
            <Tabs defaultValue="account">
              <TabsList className="flex justify-between bg-white-300 border-b p-5">
                <TabsTrigger className="w-full" value="content">
                  Content
                </TabsTrigger>
                <TabsTrigger className="w-full" value="style">
                  Style
                </TabsTrigger>
                <TabsTrigger className="w-full" value="logic">
                  Logic
                </TabsTrigger>
              </TabsList>

              <TabsContent defaultValue={"content"} value="content">
                <div className="w-full border-b px-4  flex flex-col gap-5 pb-4 mt-2">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Type</p>
                    {/* <Modal
                      button={
                        <Button className="border border-black ">
                          <div className="border flex  p-1 pr-4 rounded justify-between items-center">
                            <div className="flex items-center gap-1">
                              <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden ">
                                <div className="configurator-standard-choice"></div>
                              </div>
                              <p>Multiple choice question</p>
                            </div>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="chevron-right"
                              className="svg-inline--fa fa-chevron-right "
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                            >
                              <path
                                fill="currentColor"
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                              ></path>
                            </svg>
                          </div>
                        </Button>
                      }
                    /> */}
                    <>
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
                    </>
                  </div>
                  <div className="flex flex-col gap-1 ">
                    <p className="font-medium">Questions</p>
                    <div className="flex items-center gap-2">
                      <Input></Input>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <div
                            className=" aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer"
                            data-slot="trigger"
                            aria-haspopup="true"
                            aria-expanded="false"
                            id="react-aria275040590-:rbt:"
                          >
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="ellipsis-vertical"
                              className="svg-inline--fa fa-ellipsis-vertical"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 128 512"
                              style={{ width: "24px", height: "24px" }}
                            >
                              <path
                                fill="currentColor"
                                d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                              ></path>
                            </svg>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="">
                          <DropdownMenuLabel>
                            Display Description
                            <Switch id="display-description" />
                          </DropdownMenuLabel>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <Textarea
                      className="mt-2"
                      placeholder="Type your message here."
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="required-switch" />
                    <p className="font-medium">Required</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="font-medium">Answers</p>

                    <div className="flex items-center gap-2">
                      {/* Grip Vertical Icon */}
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="grip-vertical"
                          className="svg-inline--fa fa-grip-vertical w-6 h-6"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"
                          ></path>
                        </svg>
                      </div>

                      {/* Email Input */}
                      <div className="flex-grow">
                        <input
                          type="email"
                          className="p-2 border border-gray-300 rounded-md w-full"
                        />
                      </div>

                      {/* File Input Button with Darker SVG Icon */}
                      <div className="flex items-center">
                        <label
                          htmlFor="picture"
                          className="flex items-center justify-center p-2 rounded-full cursor-pointer relative"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="image"
                            className="w-6 h-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{ marginRight: "0.5rem", color: "#4A4A4A" }} // Darker color
                          >
                            <path
                              fill="currentColor"
                              d="M21 21H3V3h18v18zm-1.5-15H4.5v13h15v-13zm-4.5 6.75l-3-3-3 3h6zm-3-2.25L17 12.75V6H6v6.75l2.25-2.25z"
                            ></path>
                          </svg>
                          <input
                            id="picture"
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer w-6 h-6"
                          />
                        </label>
                      </div>

                      {/* Vertical Ellipsis Icon */}
                      <div className="flex items-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div
                              className="aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer"
                              data-slot="trigger"
                              aria-haspopup="true"
                              aria-expanded="false"
                              id="react-aria275040590-:rbt:"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="ellipsis-vertical"
                                className="svg-inline--fa fa-ellipsis-vertical"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 128 512"
                                style={{ width: "24px", height: "24px" }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                                ></path>
                              </svg>
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="">
                            <DropdownMenuLabel>
                              Add Description
                              <Switch id="display-description" />
                            </DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Trash className="mr-2 h-4 w-4" />
                              <span>To Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Grip Vertical Icon */}
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="grip-vertical"
                          className="svg-inline--fa fa-grip-vertical w-6 h-6"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"
                          ></path>
                        </svg>
                      </div>

                      {/* Email Input */}
                      <div className="flex-grow">
                        <input
                          type="email"
                          className="p-2 border border-gray-300 rounded-md w-full"
                        />
                      </div>

                      {/* File Input Button with Darker SVG Icon */}
                      <div className="flex items-center">
                        <label
                          htmlFor="picture"
                          className="flex items-center justify-center p-2 rounded-full cursor-pointer relative"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="image"
                            className="w-6 h-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{ marginRight: "0.5rem", color: "#4A4A4A" }} // Darker color
                          >
                            <path
                              fill="currentColor"
                              d="M21 21H3V3h18v18zm-1.5-15H4.5v13h15v-13zm-4.5 6.75l-3-3-3 3h6zm-3-2.25L17 12.75V6H6v6.75l2.25-2.25z"
                            ></path>
                          </svg>
                          <input
                            id="picture"
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer w-6 h-6"
                          />
                        </label>
                      </div>

                      {/* Vertical Ellipsis Icon */}
                      <div className="flex items-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div
                              className="aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer"
                              data-slot="trigger"
                              aria-haspopup="true"
                              aria-expanded="false"
                              id="react-aria275040590-:rbt:"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="ellipsis-vertical"
                                className="svg-inline--fa fa-ellipsis-vertical"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 128 512"
                                style={{ width: "24px", height: "24px" }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                                ></path>
                              </svg>
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="">
                            <DropdownMenuLabel>
                              Add Description
                              <Switch id="display-description" />
                            </DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Trash className="mr-2 h-4 w-4" />
                              <span>To Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <Input placeholder="Add another item" />
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="font-medium">
                        Distance to previous question
                      </p>
                    </div>

                    <div>
                      <div>
                        {/* <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Medium Distance</AccordionTrigger>
                            <AccordionContent> */}
                        <Select defaultValue="2">
                          <SelectTrigger className="w-[300px]">
                            <span>Select distance</span>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="1">Small distance</SelectItem>
                              <SelectItem value="2">Medium distance</SelectItem>
                              <SelectItem value="3">Large distance</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        {/* /         </AccordionContent>
                          </AccordionItem>
                        </Accordion> */}
                      </div>
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
                    <p className="font-semibold break-all whitespace-normal text-xl">Change logic for Page 1</p>
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
                          <span style={{ pointerEvents: 'none' }} className="text-black">
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
                        <SelectTrigger className="w-[calc(100%-40px)]"> {/* Adjust width here */}
                          <SelectValue placeholder="Make a choice" className="text-sm" />
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
                        <span style={{ pointerEvents: 'none' }} className="text-black">
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
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                        </svg>
                      </div>
                    </button>


                  </div>

                </div>
              </TabsContent>

            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
