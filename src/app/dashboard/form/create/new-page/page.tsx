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
import { Close } from '@radix-ui/react-dialog';

export default function NewPage() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column', // Stack header and content vertically
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        margin: '0', // Remove default margin
        padding: '0', // Remove default padding
        overflow: 'hidden', // Prevent horizontal overflow
      }}>

        {/* ////////////////////////////////////HEADER//////////////////////////////////////////// */}
        <header style={{
          backgroundColor: 'lightgrey',
          width: '100%',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid black',
          padding: '0 10px',
        }}>
          <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                marginRight: '35px' // Add space between X and text
              }}
              aria-label="Close"
              onMouseEnter={(e) => {
                const span = e.currentTarget.querySelector('span');
                if (span) {
                  span.style.visibility = 'visible';
                }
              }}
              onMouseLeave={(e) => {
                const span = e.currentTarget.querySelector('span');
                if (span) {
                  span.style.visibility = 'hidden';
                }
              }}
            >
              <X className="font-bold h-7 w-7" />
              <span style={{
                visibility: 'hidden',
                position: 'absolute',
                left: '100%',
                whiteSpace: 'nowrap',
                marginLeft: '5px',
                padding: '5px 10px', // Add padding for the box
                backgroundColor: 'white', // Set background color to white
                border: '1px solid black', // Add border to make it visible
                borderRadius: '3px' // Optionally round the corners
              }}>
                Close
              </span>
            </button>
            <span className="text-lg mr-2 font-bold">Naamloze configurator</span>
            <Pencil className="font-bold h-5 w-5" />
          </div>
          <div style={{ textAlign: 'center', flex: '1' }}>
            {/* ////////////////////////////////////////////////////////////Other content can go here */}

            <Button variant="outline">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="desktop"
                className="svg-inline--fa fa-desktop"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width="16" // Adjust size here
                height="16"
              >
                <path
                  fill="currentColor"
                  d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"
                />
              </svg>
            </Button>

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

            <Button variant="outline">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="gear"
                className="svg-inline--fa fa-gear"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="16" // Adjust size here
                height="16"
              >
                <path
                  fill="currentColor"
                  d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                />
              </svg>
            </Button>

            <Button style={{ backgroundColor: 'green', color: 'white' }}>
              Save
            </Button>

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

          <div style={{
            width: '15%',
            backgroundColor: 'lightgrey',
            minHeight: '600px',
            overflowY: 'auto', // Add vertical scrollbar if needed
            borderLeft: '1px solid black',
            padding: '10px', // Add some padding for better spacing
          }}>
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="style">Style</TabsTrigger>
                <TabsTrigger value="logic">Logic</TabsTrigger>
              </TabsList>
              <TabsContent value="content">Make changes to your account here.</TabsContent>
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
