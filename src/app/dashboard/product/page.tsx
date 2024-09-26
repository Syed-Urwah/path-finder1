"use client"
import { DataTableDemo } from '@/components/table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    // <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">

    //   <div>
    //     <Link href='/dashboard/product/create'>
    //       <h2 className="text-xl font-semibold">Product</h2>
    //       <Button className='w-fit float-right'>Create New Product</Button>
    //     </Link>
    //   </div>
    //   <DataTableDemo />

    // </main>
    
<main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold ml-32">Products</h2>
    <Link href='/dashboard/product/create'>
      <Button className='w-fit mr-28 flex items-center'> {/* Increased margin-right */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        New Product
      </Button>
    </Link>
  </div>
  <DataTableDemo />
</main>



  )
}
