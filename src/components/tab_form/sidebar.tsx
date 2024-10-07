"use client";
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
import { Modal } from "../modal";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

// Define the FormSidebar component
export function FormSidebar({ pages, setPages }: any) {
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(true);
  const [dragPosition, setDragPosition] = useState<{ y: number }>({ y: 0 });
  const sidebarRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  console.log(pages);

  const handleDrag = (_: any, info: PanInfo) => {
    setDragPosition({ y: info.point.y });
  };

  function handleQuestionEditDisplay(page: any, question: any): any {
    console.log("page: " + page);
    console.log("question: " + question);
    router.push(pathname + "?" + updateParams(page, question));
  }

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

  console.log(page, question);

  return (
    <>
      {/* Left sidebar */}
      <div
        ref={sidebarRef}
        className="w-full max-w-[300px] h-full flex flex-col border-r bg-[#F4F4F4]  relative"
        style={{ gridArea: "leftbar" }}
      >
        {/* Top Section */}
        <div className="w-full flex justify-between items-center p-4 bg-white">
          <p className="font-medium">Content</p>
          <Modal
            pages={pages}
            setPages={setPages}
            button={
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
            }
          />
        </div>
        <div>
          {pages?.map((page: any, pageIndex: number) => {
            return (
              <div
                key={pageIndex}
                className=" w-full rounded overflow-hidden scroll"
              >
                <div className="min-w-full table">
                  <div className="bg-white">
                    <div className="h-full w-full">
                      <p className="border-b px-4 pb-2 pt-8 truncate">
                        Page {page.order}
                      </p>
                      <div className="container bg-[#F9F9F9]">
                        {page.questions?.map(
                          (question: any, questionIndex: number) => {
                            return (
                              <div
                                key={questionIndex}
                                onClick={() =>
                                  handleQuestionEditDisplay(
                                    pageIndex,
                                    questionIndex
                                  )
                                }
                                className="w-full flex items-center justify-between p-4 border-b py-6 cursor-grab bg-[#F9F9F9]"
                              >
                                <div className="flex items-center">
                                  <div className="w-10 h-10 rounded-md flex justify-center items-center overflow-hidden bg-purple-200">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      className="w-6 h-6"
                                    >
                                      <circle
                                        cx="12"
                                        cy="12"
                                        r="12"
                                        fill="black"
                                      />
                                    </svg>
                                  </div>
                                  <p className="ml-2 max-w-xs truncate">
                                    {question.name}
                                  </p>
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
                                          style={{
                                            width: "24px",
                                            height: "24px",
                                          }}
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
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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

            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <p className="truncate">End</p>
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
              <div className="w-full flex items-center justify-between p-4 border-b py-6 cursor-grab bg-[#F9F9F9]">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-md flex justify-center items-center overflow-hidden bg-purple-200">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="heart-circle-check"
                      className="svg-inline--fa fa-heart-circle-check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"
                      ></path>
                      <circle cx="256" cy="256" r="200" fill="black"></circle>
                    </svg>
                  </div>
                  <p className="ml-2 max-w-xs truncate">Thank you page</p>
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
          </motion.div>
        )}
      </div>
    </>
  );
}
