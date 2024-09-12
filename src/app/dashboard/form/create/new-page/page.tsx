/////////////////////Those left/right sidebars structure

"use client";
import React from "react";
import { cn } from "@/lib/utils"; // Shadcn's class func.
import { Button } from "@/components/ui/button";
import { Bold, BookCopy, Pencil, Trash, Weight, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
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
import { Textarea } from "@/components/ui/textarea";

export default function NewPage() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-hidden">
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
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 w-9"
                data-state="closed"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="desktop"
                  className="w-16 h-16 svg-inline--fa fa-desktop"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
                  ></path>
                </svg>
              </Button>

              <Button
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 w-9"
                data-state="closed"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye"
                  className="w-6 h-6 svg-inline--fa fa-eye"
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
                <Button className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 w-9">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="link"
                    className="w-6 h-6 svg-inline--fa fa-link"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
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
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 w-9"
                data-state="closed"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="gear"
                  className="w-6 h-6 svg-inline--fa fa-gear"
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
                Publiceren
              </Button>
            </div>
          </div>
        </header>

        <div className="w-full h-full flex flex-row">
          <div
            className="w-full max-w-[300px] h-full flex flex-col border-r  bg-white hover:overflow-auto  "
            style={{ gridArea: "leftbar" }}
          ></div>
          <div className="w-full h-full flex flex-col border-r hover:overflow-auto">
            <div className=""></div>
          </div>

          {/* right side  */}
          <div
            className="bg-white overflow-hidden min-w-[350px] hover:overflow-auto"
            style={{ gridArea: "rightbar" }}
          >
            <Tabs defaultValue="account">
              <TabsList className="flex justify-between bg-lime-300 border-b p-5">
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
                <div className="w-full border-b px-4  flex flex-col gap-5 pb-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Type</p>
                    <Modal
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
                    />
                  </div>
                  <div className="flex flex-col gap-1">
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
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
