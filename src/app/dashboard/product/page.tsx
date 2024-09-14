import { DataTableDemo } from '@/components/table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">

      <div>
        <Link href='/dashboard/product/create'>
          <Button className='w-fit float-right'>Create New Product</Button>
        </Link>
      </div>
      <DataTableDemo />

    </main>
  )
}
