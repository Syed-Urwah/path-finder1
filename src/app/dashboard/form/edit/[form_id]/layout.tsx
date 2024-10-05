"use client";

import Sidebar2 from "@/components/layout/Sidebar2";
import Header2 from "@/components/layout/Header2";

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      
      
     
        {children}
      
      </body>
    </html>
   
  );
}
