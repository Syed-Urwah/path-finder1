import { Dashboard } from '@/components/dashbaord2'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import React from 'react'

export default function page() {
  return (
    <TooltipProvider>
    <Dashboard/>
    </TooltipProvider>
  )
}
