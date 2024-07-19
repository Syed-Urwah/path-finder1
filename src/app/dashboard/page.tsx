import Header from '@/components/layout/Header'
import { DataTableDemo } from '@/components/table'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col">
          <Header />
          
          <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6 mt-24">

            
            <DataTableDemo />

          </main>
        </div>
  )
}
