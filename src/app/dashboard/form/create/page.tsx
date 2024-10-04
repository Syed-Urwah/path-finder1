/////////////////////Those left/right sidebars structure

"use client";
import React, { useEffect, useState } from "react";
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
import RightSidebar from "@/components/tab_form/RightSidebar";

export default function NewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("content");

  const intialValue = [
    {
      id: 1,
      order: 1,
      questions: [
        {
          question_type_id: 1,
          name: "question1",
          desc_status: false,
          description: "desc 1",
          require: true,
          answers: [
            {
              ans: "ans1",
              img: "",
              description: "",
              desc_status: false,
            },
            {
              ans: "ans2",
              img: "",
              description: "",
              desc_status: false,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      order: 2,
      questions: [
        {
          question_type_id: 1,
          name: "question1",
          desc_status: false,
          description: "desc 2",
          require: true,
          answers: [
            {
              ans: "ans1",
              img: "",
              description: "",
              desc_status: false,
            },
            {
              ans: "ans2",
              img: "",
              description: "",
              desc_status: false,
            },
          ],
        },
      ],
    },
  ];

  const [pages, setPages] = useState(intialValue);

  // Function to update 'page' and 'question' values
  const updateParams = (newPage: any, newQuestion: any) => {
    const updatedParams: any = new URLSearchParams(searchParams.toString());

    // Set the new values for 'page' and 'question'
    updatedParams.set("page", newPage);
    updatedParams.set("question", newQuestion);

    // Update the URL with the new search parameters
    return updatedParams.toString();
  };

  const page = searchParams.get("page"); // Get the 'page' query parameter
  const question = searchParams.get("question"); // Get the 'question' query parameter

  useEffect(()=>{
    if(page==null || question == null ){
      router.push(pathname + "?" + updateParams(0, 0));
    }
  },[])

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

              <Button
                onClick={() => console.log(pages)}
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#B0D59E] text-primary-foreground hover:bg-[#B0D59E] h-10 px-4 py-2 text-md"
              >
                Publish
              </Button>
            </div>
          </div>
        </header>

        <div className="w-full h-full flex flex-row">
          {(activeTab === "content" || activeTab === "style") && (
            <ContentStyleTab pages={pages} setPages={setPages} />
          )}
          {activeTab === "logic" ? (
            <LogicTab />
          ) : (
            <RightSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              pages={pages}
              setPages={setPages}
            />
          )}
        </div>
      </div>
    </>
  );
}
