"use client";

import Sidebar2 from "@/components/layout/Sidebar2";
import Header2 from "@/components/layout/Header2";

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <div className="grid min-h-screen w-full md:grid-cols-[68px_1fr]">
      <Sidebar2 />
      <div className="flex flex-col">
        <Header2 />
        <main className="p-4">{children}</main>
      </div>
    </div>
      </body>
    </html>
   
  );
}
