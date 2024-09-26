///////////////////////////contains logic tab of left sidebar of Form

"use client"
import React from 'react';
import { cn } from '@/lib/utils'; // Shadcn's class func.
import { Button } from "@/components/ui/button";
import { } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function Logic() {
  return (
    <>

      <div className="flex items-center justify-center min-h-screen bg-gray-90">

        {/* Container for Questions */}
        <div className="flex items-center space-x-8">

          {/* Question 1 */}
          <div className="flex flex-col items-center space-y-2">

            {/* Heading */}
            <h2 className="text-lg font-semibold">Page 1</h2>

            {/* White Background Container */}
            <div className="bg-white p-6 rounded-lg shadow-md">

              {/* Question and Circle Button */}
              <div className="flex items-center justify-between space-x-4">
                {/* Question 1 */}
                <div className="flex items-center space-x-2">
                  <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
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
                  </div>
                  <p>Question 1</p>
                </div>

                {/* Circle Button with + Icon */}
                <div className="flex items-center">
                  <button className="w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>


            {/* Arrow */}
            <div className="flex items-center">
              <div className="h-[2px] w-16 bg-black mr-1" /> {/* Keep the width for the line */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black relative -left-2" // Adjust the position to overlap the line
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

          </div>

          {/* Question 2 */}
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-lg font-semibold justify-start items-start">Page 2</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                    <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="road"
                        className="svg-inline--fa fa-road"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path
                          fill="currentColor"
                          d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p>Question 2</p>
                </div>

                {/* Circle Button with + Icon */}
                <div className="flex items-center">
                  <button className="w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>


            {/* Arrow */}
            <div className="flex items-center">
              <div className="h-[2px] w-16 bg-black mr-1" /> {/* Keep the width for the line */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black relative -left-2" // Adjust the position to overlap the line
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Question 3 */}
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-lg font-semibold">Page 3</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
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
                  </div>
                  <p>Question 3</p>
                </div>


                {/* Circle Button with + Icon */}
                <div className="flex items-center">
                  <button className="w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>


            {/* Arrow */}
            <div className="flex items-center">
              <div className="h-[2px] w-16 bg-black mr-1" /> {/* Keep the width for the line */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black relative -left-2" // Adjust the position to overlap the line
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Thank you page*/}
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-lg font-semibold">Thank you page</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Question and Circle Button */}
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                    <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="heart-circle-check"
                        className="svg-inline--fa fa-heart-circle-check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p>Thank you page</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>


      {/* Minimize maxi buttons*/}
      <div className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-md border border-gray-300 fixed bottom-0 left-0 m-4 ml-20 h-auto max-h-[300px]">
        <button
          type="button"
          title="zoom in"
          aria-label="zoom in"
          className="flex items-center justify-center bg-white p-2 border border-gray-300 rounded-md w-10 h-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 text-gray-700">
            <path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path>
          </svg>
        </button>

        <button
          type="button"
          title="zoom out"
          aria-label="zoom out"
          className="flex items-center justify-center bg-white p-2 border border-gray-300 rounded-md w-10 h-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5" className="w-4 h-4 text-gray-700">
            <path d="M0 0h32v4.2H0z"></path>
          </svg>
        </button>

        <button
          type="button"
          title="fit view"
          aria-label="fit view"
          className="flex items-center justify-center bg-white p-2 border border-gray-300 rounded-md w-10 h-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30" className="w-4 h-4 text-gray-700">
            <path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path>
          </svg>
        </button>

        <button
          type="button"
          title="toggle interactivity"
          aria-label="toggle interactivity"
          className="flex items-center justify-center bg-white p-2 border border-gray-300 rounded-md w-10 h-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32" className="w-4 h-4 text-gray-700">
            <path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path>
          </svg>
        </button>
      </div>


    </>
  );
}


