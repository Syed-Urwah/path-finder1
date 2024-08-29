"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React, { useState } from "react";
import { Menu, MessageSquareMore, Moon, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import ProfileImage from '@/../public/images/profile-placeholder.png'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <>
    
    <header className="bg-white rounded-2xl flex justify-end m-4 p-4 drop-shadow-md fixed z-40" style={{ width: 'calc(100vw - 310px)' }}>
     

      <div className="flex items-center gap-6">
        <div id="search" className="flex relative">
          <Search className="absolute top-2 left-2" />
          <Input type="text" placeholder="Try to searching..." className="pl-10 rounded-3xl outline-[#d7dee1] " />
        </div>
        <Moon />
        <div id="chat" className="hover:cursor-pointer">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <MessageSquareMore />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit px-5 py-6" align="end"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <DropdownMenuLabel className="text-xl flex gap-4">
                <h2>Messages</h2>
                <span className="bg-[#167eb5] rounded-xl text-white text-xs px-2 py-1 text-center m-auto">5 new</span>
                </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="w-fit">
                <DropdownMenuItem className="flex gap-4 items-center">
                  
                    <Image src={ProfileImage} alt="profile" width={50} className="rounded-full"/>
                    <div>
                      <h2 className="text-sm">Syed Urwah</h2>
                      <p className="text-xs">Congrats him</p>
                    </div>
                    <p className="pl-4">9:08AM</p>
                  
                  
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-4 items-center">
                  
                    <Image src={ProfileImage} alt="profile" width={50} className="rounded-full"/>
                    <div>
                      <h2 className="text-sm">Syed Urwah</h2>
                      <p className="text-xs">Congrats him</p>
                    </div>
                    <p className="pl-4">9:08AM</p>
                  
                  
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-4 items-center">
                  
                    <Image src={ProfileImage} alt="profile" width={50} className="rounded-full"/>
                    <div>
                      <h2 className="text-sm">Syed Urwah</h2>
                      <p className="text-xs">Congrats him</p>
                    </div>
                    <p className="pl-4">9:08AM</p>
                  
                  
                </DropdownMenuItem>
                
              </DropdownMenuGroup>
              
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div id="profile" className="flex items-center gap-2">
          <Image src={ProfileImage} alt="profile" width={60} className="rounded-full"/>
          <div id="name">
            <h2>Mike Nielsen</h2>
            <p>admin</p>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
