/////////////////////Those left/right sidebars structure 

"use client"
import React from 'react';
import { cn } from '@/lib/utils'; // Shadcn's class func.
import { Button } from "@/components/ui/button";
import {
  Bold,
  BookCopy,
  Pencil,
  Trash,
  Weight,
  X
} from "lucide-react"
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { Close, Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from 'postcss';
import { Modal } from '@/components/modal';
export default function NewPage() {
  return (
    <>
     <div className="flex flex-col h-screen w-screen m-0 p-0 overflow-hidden">

        {/* ////////////////////////////////////HEADER//////////////////////////////////////////// */}
        <header className="bg-gray-300 w-full h-[50px]  items-center border-b border-black px-2.5">
        <div className="flex justify-between ">
          <div>
              <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                        <X className="font-bold h-7 w-7" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Close</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              <span className="text-lg  font-bold">Naamloze configurator</span>
              <Pencil className="font-bold h-5 w-5" />
          </div>
            
            <div>
              
            </div>

          </div>
        </header>

        {/* ////////////////////////////////////LEFT SIDEBAR//////////////////////////////////////////// */}

        <div style={{
          display: 'flex',
          height: 'calc(100vh - 50px)', // Remaining height after header
          width: '100vw',
          overflow: 'hidden',
        }}>
          <div style={{
            backgroundColor: 'lightgrey',
            width: '15%',
            minHeight: '600px',
            overflowY: 'auto', // Add vertical scrollbar if needed
            borderRight: '1px solid black',
            padding: '10px', // Add padding to the sidebar for spacing
          }}>

    {/* CONTENT with PLUS BUTTON container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <span style={{ marginLeft: '8px', marginBottom: '10px',fontSize: '16px', fontWeight: 'semi-bold' }}>Content</span>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid black',
                  backgroundColor: 'white',
                  padding: '8px',
                  cursor: 'pointer',
                  marginLeft: '88px',
                  marginBottom: '10px'
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
                    width: '24px',
                    height: '24px',
                    fill: 'currentColor',
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  />
                </svg>
              </button>
              
            </div>


            {/* First container */}
            <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>Page 1</h3>
            <div style={{
              backgroundColor: 'white',
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Content </span> {/* Replace with your actual content */}

                {/* Vertical ellipsis icon at the end */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-start items-center hover:cursor-pointer" data-slot="trigger" aria-haspopup="true" aria-expanded="false" id="react-aria275040590-:rbt:">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{ width: '24px', height: '24px' }}>
                        <path fill="currentColor" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                      </svg>
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <BookCopy className="mr-2 h-4 w-4" /><span>Duplicate</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash className="mr-2 h-4 w-4" /><span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>Page 2</h3>
            <div style={{
              backgroundColor: 'white',
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Content </span> {/* Replace with your actual content */}

                {/* Vertical ellipsis icon at the end */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-start items-center hover:cursor-pointer" data-slot="trigger" aria-haspopup="true" aria-expanded="false" id="react-aria275040590-:rbt:">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{ width: '24px', height: '24px' }}>
                        <path fill="currentColor" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                      </svg>
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <BookCopy className="mr-2 h-4 w-4" /><span>Duplicate</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash className="mr-2 h-4 w-4" /><span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>Page 3</h3>
            <div style={{
              backgroundColor: 'white',
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Content </span> {/* Replace with your actual content */}

                {/* Vertical ellipsis icon at the end */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-start items-center hover:cursor-pointer" data-slot="trigger" aria-haspopup="true" aria-expanded="false" id="react-aria275040590-:rbt:">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{ width: '24px', height: '24px' }}>
                        <path fill="currentColor" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                      </svg>
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <BookCopy className="mr-2 h-4 w-4" /><span>Duplicate</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash className="mr-2 h-4 w-4" /><span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>





          </div>




{/* //////////////////////////////////////Main Content///////////////////////////////////////////// */}

          <div style={{
            backgroundColor: 'white',
            width: '70%',
            minHeight: '600px',
            overflowY: 'auto', // Add vertical scrollbar if needed
          }}>
            <h1>Main Content</h1>
            {/* Add your main content here */}
          </div>


{/* /////////////////////////////////////RIGHT SIDEBAR//////////////////////////////////////// */}
          <div className="w-[22%] bg-[#D3D3D3] min-h-[600px] overflow-y-auto border-l border-black">
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="style">Style</TabsTrigger>
                <TabsTrigger value="logic">Logic</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content">
                <div className="grid grid-cols-12">
                  <div className="">
                      <h3>Type</h3>
                      <Modal title="Multiple choice question" />
                      {/* <DialogTrigger asChild>
                      // <Button className="bg-[#D3D3D3] text-black  border border-collapse border-black">Multiple choice question</Button>
                      </DialogTrigger> */}
                      
                    </div>
                  
                  <div></div>
                </div>

              </TabsContent>
{/* //////////////////////////////////////////////STYLE TAB/////////////////////////////// */}
              <TabsContent value="style">
                <div style={{ marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'semi-bold' }}>Font</h3>
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
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

                <Tabs defaultValue="account" className="w-[400px] mt-4">
                  <TabsList>
                    <TabsTrigger value="small">Small</TabsTrigger>
                    <TabsTrigger value="medium">Medium</TabsTrigger>
                    <TabsTrigger value="large">Large</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div style={{
                  display: 'grid',
                  gridTemplateRows: '1fr 1fr',
                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                  gap: '10px', // Optional: Adds spacing between grid items
                  padding: '10px', // Optional: Adds padding around the container
                }}>

                  <div style={{ backgroundColor: 'lightgrey', padding: '20px', fontWeight: "bold" }}>Border Radius</div>
                  <div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>Item 2</div>
                  <div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>Item 3</div>
                  <div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>Item 4</div>
                  <div style={{ backgroundColor: 'lightgrey', padding: '20px', fontWeight: "bold" }}>Border</div>
                  <div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>Item 6</div>
                  <div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>Item 7</div>
                  <div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>Item 8</div>
                </div>



              </TabsContent>
{/* //////////////////////////////////LOGIC TAB/////////////////////////////////////////// */}
              <TabsContent value="logic">hi.</TabsContent>
            </Tabs>

          </div>


        </div>

      </div>
    </>
  );
}
