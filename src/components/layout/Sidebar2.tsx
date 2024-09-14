"use client";
import Link from "next/link";
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  BookCopy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Logo2 from "@/../public/images/logo2.png";
import { motion } from "framer-motion";

export default function Sidebar2() {
  const navItems = [
    {
      href: "#",
      icon: Home,
      label: "Dashboard",
      isActive: true,
      notification: 0,
    },
    {
      href: "#",
      icon: ShoppingCart,
      label: "Orders",
      isActive: false,
      notification: 1,
    },
    {
      href: "#",
      icon: Package,
      label: "Products",
      isActive: false,
      notification: 0,
    },
    {
      href: "#",
      icon: Users,
      label: "Customers",
      isActive: false,
      notification: 0,
    },
    {
      href: "#",
      icon: LineChart,
      label: "Analytics",
      isActive: false,
      notification: 0,
    },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block bg-white w-[68px]">
      <div className="fixed h-full max-h-screen flex flex-col gap-10">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] py-10 lg:px-6 w-full">
          <Image src={Logo2} alt="logo" width={20} height={20} />
        </div>
        <div className="h-full flex flex-col w-full">
          {/* Navigation items - centered */}
          <nav className="flex flex-col justify-center items-center gap-3 text-sm font-medium flex-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative h-fit w-fit"
              >
                <motion.div
                  className={`flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 transition-all text-base relative overflow-hidden 
            ${
              item.isActive ? "text-green-500" : "text-gray-400"
            } hover:text-black`}
                >
                  <item.icon className="h-6 w-6" />
                  {/* Show badge if there are notifications */}
                  {item.notification > 0 && (
                    <Badge className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {item.notification}
                    </Badge>
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* DropdownMenu - positioned at the bottom */}
          <div className="flex flex-col items-center mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="z-10 h-[40px] w-[40px] text-[18px] items-center hover:cursor-pointer">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="ellipsis-vertical"
                    className="svg-inline--fa fa-ellipsis-vertical"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 512"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <path
                      fill="currentColor"
                      d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                    ></path>
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Configurations</DropdownMenuItem>
                <DropdownMenuItem>
                  <BookCopy className="mr-2 h-4 w-4" />
                  Relaties
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
