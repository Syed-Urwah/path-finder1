import React, { useState, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { Button } from "@/components/ui/button"; // Ensure you import the Button component from the correct path
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookCopy, Trash } from "lucide-react";

// Define the FormSidebar component
export function FormSidebar() {
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(true);
  const [dragPosition, setDragPosition] = useState<{ y: number }>({ y: 0 });
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleDrag = (_: any, info: PanInfo) => {
    setDragPosition({ y: info.point.y });
  };

  return (
    <>
      {/* Left sidebar */}
      <div
        ref={sidebarRef}
        className="w-full max-w-[300px] h-full flex flex-col border-r bg-white hover:overflow-auto relative"
        style={{ gridArea: "leftbar" }}
      >
        {/* Top Section */}
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
        <div>
          <div className=" w-full rounded overflow-hidden scroll">
            <div className="min-w-full table">
              <div className="bg-white">
                <div className="h-full w-full">
                  <p className="border-b px-4 pb-2 pt-8 truncate">Page 1</p>
                  <div className="container bg-[#F9F9F9]">
                    <div className="w-full flex items-center justify-between p-4 border-b py-6 cursor-grab bg-[#F9F9F9]">
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
            </div>
          </div>
          <div className=" w-full rounded overflow-hidden scroll">
            <div className="min-w-full table">
              <div className="bg-white">
                <div className="h-full w-full">
                  <p className="border-b px-4 pb-2 pt-8 truncate">Page 2</p>
                  <div className="container bg-[#F9F9F9]">
                    <div className="w-full flex items-center justify-between p-4 border-b py-6 cursor-grab bg-[#F9F9F9]">
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
                        <p className="ml-2 max-w-xs truncate">Question 2</p>
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

        {showBottomSheet && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[150px] bg-white rounded-t-lg  border-t"
            drag="y"
            dragConstraints={{ top: -300, bottom: 0 }}
            onDrag={handleDrag}
            style={{ y: dragPosition.y }}
            initial={{ y: 150 }}
            animate={{ y: 0 }}
          >
            <div className="w-full flex justify-center p-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full cursor-pointer"></div>
            </div>
            <div className="p-4  flex justify-between items-center">
              <p className="truncate">End</p>
              <Button className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full w-11 h-11">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="ellipsis-v"
                  className="svg-inline--fa fa-ellipsis-v"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192 512"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M96 56C96 25.1 121.1 0 152 0S208 25.1 208 56 181.1 112 152 112 96 86.9 96 56zM96 256C96 225.1 121.1 200 152 200S208 225.1 208 256 181.1 312 152 312 96 286.9 96 256zM96 456C96 425.1 121.1 400 152 400S208 425.1 208 456 181.1 512 152 512 96 486.9 96 456z"
                  ></path>
                </svg>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
