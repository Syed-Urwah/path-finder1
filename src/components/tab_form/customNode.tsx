import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
// import { FaPlus } from "react-icons/fa"; // Import Plus icon

// Custom Node Component
const CustomNode = ({ data }: NodeProps) => {
  return (
    <div className="relative p-2 border rounded-lg shadow-md bg-white">
      {/* Top Label for Page number */}
      <div className="absolute -top-5 left-0 text-center w-full text-sm font-semibold">
        {data.page}
      </div>

      <div className="flex items-center space-x-2">
        {/* Icon inside colored circle */}
        <div className="w-[40px] h-[40px] rounded-full bg-[#E4B5FF] flex justify-center items-center">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle"
            className="svg-inline--fa fa-circle text-black"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20px"
            height="20px"
          >
            <circle cx="256" cy="256" r="200" fill="black"></circle>
          </svg>
        </div>

        {/* Question label */}
        <p className="text-lg font-semibold">{data.label}</p>

        {/* Plus Icon (Right side) */}
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

      {/* Source and target handles */}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default CustomNode;
