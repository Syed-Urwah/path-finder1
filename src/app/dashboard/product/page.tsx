"use client";
import { DataTableDemo } from "@/components/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ProductsPage() {
  return (
    <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold ">Products</h2>
          <Link href="/dashboard/product/create">
            <Button className="w-fit bg-[#A8D194] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              New Product
            </Button>
          </Link>
        </div>
      </div>
      <DataTableDemo />
    </main>
  );
}
