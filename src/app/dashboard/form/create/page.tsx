//////////////////////////////////////////THE FIRST DEMO FORM PAGE////
"use client"
import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'; // Shadcn's class func.
import { Button } from "@/components/ui/button";
import {
  BookCopy,
  Pen,
  Plus,
  Trash
} from "lucide-react"
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export default function Page() {


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={cn(
          'w-[300px] bg-gray-100 shadow-md'
        )}
      >
        <div className='m-4'>
          <div className='grid grid-flow-col'>
            <div className='flex justify-between'>
              <h2  className="text-lg font-bold ">Forms</h2>
              <Button className='bg-[#D3D3D3] w-10 h-10 rounded-full flex items-center justify-center p-0'>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus"
                    className="w-6 h-6 text-black"  
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    />
                  </svg>
                </Button>

            </div>
          </div>
          <div className='grid grid-flow-col mt-4'>
            <Input
              type="text"
              placeholder="Search..." className=''
            />
          </div>
          <div className='grid grid-flow-col mt-4'>
            <Button className='option p-2 mt-4 hover:bg-gray-200 rounded-md  flex items-center'>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="wrench"
              className="w-4 h-4 mr-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
              ></path>
            </svg>
            Configurator
            </Button>
          </div>

          <div className='grid grid-flow-col mt-4'>
            <Button className='option p-2 mt-4 hover:bg-gray-200 rounded-md  flex items-center'>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="calendar-check"
              className="w-4 h-4 mr-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"
              ></path>
            </svg>
            Availability
            </Button>
          </div>

          <div className='grid grid-flow-col mt-4'>
            <Button className='option p-2 mt-4 hover:bg-gray-200 rounded-md  flex items-center'>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="calendar-days"
              className="w-4 h-4 mr-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
              ></path>
            </svg>
            Appointment Scheduler
            </Button>
          </div>
       
        </div>

        <div className="sidebar-options">

          <div className="option p-2 mt-4 hover:bg-gray-200 rounded-md cursor-pointer flex items-center">
            {/* Wrench Icon */}
            
            
          </div>
        


         

          

        </div>
      </div>



      {/*//////////////////////////////////// Main content with containers as rows////////////////////// */}

      <div className="flex-grow  flex flex-col space-y-4">
        {/* <div className="bg-white p-4 border rounded-md shadow">Naamloze configurator</div> */}
        {/* The one with the popover over icons */}
        <div className="bg-white p-4 border rounded-md shadow flex items-center space-x-2">
          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className="svg-inline--fa fa-eye"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </Button>


          {/* <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye"
                  className="svg-inline--fa fa-eye"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="16" // Adjust size here
                  height="16"
                >
                  <path
                    fill="currentColor"
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              Place content for the popover here.
            </PopoverContent>
          </Popover> */}


          {/* //second button */}
          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="link"
              className="svg-inline--fa fa-link"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
              />
            </svg>
          </Button>


          {/* ////vertical ellipses with dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-start items-center hover:cursor-pointer" data-slot="trigger" aria-haspopup="true" aria-expanded="false" id="react-aria275040590-:rbt:">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{ width: '24px', height: '24px' }}>
                    <path fill="currentColor" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                  </svg>
                </div>


              </DropdownMenuTrigger>
              <DropdownMenuContent>

                <DropdownMenuItem><Pen className="mr-2 h-4 w-4" /><span>Edit</span></DropdownMenuItem>
                <DropdownMenuItem><BookCopy className="mr-2 h-4 w-4" /><span>Duplicate</span></DropdownMenuItem>
                <DropdownMenuItem><Trash className="mr-2 h-4 w-4" /><span>To Delete</span></DropdownMenuItem>


              </DropdownMenuContent>
            </DropdownMenu>

          </div>
          <span className="text-lg font-bold">Naamloze configurator</span>
        </div>

        <div className="bg-white p-4 border rounded-md shadow flex items-center space-x-2">
          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className="svg-inline--fa fa-eye"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </Button>

          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="link"
              className="svg-inline--fa fa-link"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
              />
            </svg>
          </Button>

          <span className="text-lg font-bold flex-grow">Naamloze configurator</span>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer" data-slot="trigger" aria-haspopup="true" aria-expanded="false">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{ width: '24px', height: '24px' }}>
                    <path fill="currentColor" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Pen className="mr-2 h-4 w-4" /><span>Edit</span></DropdownMenuItem>
                <DropdownMenuItem><BookCopy className="mr-2 h-4 w-4" /><span>Duplicate</span></DropdownMenuItem>
                <DropdownMenuItem><Trash className="mr-2 h-4 w-4" /><span>To Delete</span></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="bg-white p-4 border rounded-md shadow flex items-center space-x-2">
          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className="svg-inline--fa fa-eye"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </Button>

          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="link"
              className="svg-inline--fa fa-link"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
              />
            </svg>
          </Button>

          <span className="text-lg font-bold flex-grow">Nameless configurator</span>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer" data-slot="trigger" aria-haspopup="true" aria-expanded="false">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{ width: '24px', height: '24px' }}>
                    <path fill="currentColor" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Pen className="mr-2 h-4 w-4" /><span>Edit</span></DropdownMenuItem>
                <DropdownMenuItem><BookCopy className="mr-2 h-4 w-4" /><span>Duplicate</span></DropdownMenuItem>
                <DropdownMenuItem><Trash className="mr-2 h-4 w-4" /><span>To Delete</span></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="bg-white p-4 border rounded-md shadow flex items-center space-x-2">
          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className="svg-inline--fa fa-eye"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </Button>

          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="link"
              className="svg-inline--fa fa-link"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
              />
            </svg>
          </Button>

          <span className="text-lg font-bold flex-grow">XYZ configurator</span>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer" data-slot="trigger" aria-haspopup="true" aria-expanded="false">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{ width: '24px', height: '24px' }}>
                    <path fill="currentColor" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Pen className="mr-2 h-4 w-4" /><span>Edit</span></DropdownMenuItem>
                <DropdownMenuItem><BookCopy className="mr-2 h-4 w-4" /><span>Duplicate</span></DropdownMenuItem>
                <DropdownMenuItem><Trash className="mr-2 h-4 w-4" /><span>To Delete</span></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="bg-white p-4 border rounded-md shadow flex items-center space-x-2">
          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              className="svg-inline--fa fa-eye"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </Button>

          <Button variant="outline">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="link"
              className="svg-inline--fa fa-link"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="16" // Adjust size here
              height="16"
            >
              <path
                fill="currentColor"
                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
              />
            </svg>
          </Button>

          <span className="text-lg font-bold flex-grow">Abc configurator</span>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased h-[40px] w-[40px] text-[18px] flex justify-center items-center hover:cursor-pointer" data-slot="trigger" aria-haspopup="true" aria-expanded="false">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" className="svg-inline--fa fa-ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{ width: '24px', height: '24px' }}>
                    <path fill="currentColor" d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Pen className="mr-2 h-4 w-4" /><span>Edit</span></DropdownMenuItem>
                <DropdownMenuItem><BookCopy className="mr-2 h-4 w-4" /><span>Duplicate</span></DropdownMenuItem>
                <DropdownMenuItem><Trash className="mr-2 h-4 w-4" /><span>To Delete</span></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>



      </div>


    </div>

  );
}

