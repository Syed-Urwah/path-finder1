import React from "react";
import { Handle, NodeProps, Position } from "reactflow";

// Custom Thank You Node Component
const ThankYouNode = ({ data }: NodeProps) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Top Label for the Thank You Page Title */}
      <div className="text-center text-base font-semibold mb-2">
        {data.page}
      </div>

      <div className="bg-white p-2 rounded-lg shadow-md flex items-center space-x-3">
        {/* Icon inside colored circle */}
        <div className="w-[40px] h-[40px] rounded-full bg-[#E4B5FF] flex justify-center items-center">
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

        {/* Text Label for the Thank You Page */}
        <p className="text-base font-semibold">{data.label}</p>
      </div>

      {/* Handles for Edges */}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default ThankYouNode;
