"use client";
import { DataTableDemo } from "@/components/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ProductsPage() {
  return (
    <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <DataTableDemo />
    </main>
  );
}
