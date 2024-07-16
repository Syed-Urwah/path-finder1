import Link from "next/link"
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    LogOut,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Logo from "@/../public/images/logo.png"
import ProfilePlaceholder from '@/../public/images/profile-placeholder.png'

export default function Sidebar() {
    return (
        <div className="hidden border-r bg-muted/40 md:block bg-white">
            <div className="flex h-full max-h-screen flex-col gap-10 ">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] py-10 lg:px-6 ">
                    <Image src={Logo} alt="logo" />
                    {/* <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 gap-3 text-sm font-medium lg:px-4">
                        <div className="text-[#707a82]">
                            <p>Home</p>
                        </div>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary h-14 w-60 hover:bg-[#e5f3fb] text-base text-black"
                        >
                            <Home className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary h-14 w-60 hover:bg-[#e5f3fb] text-base text-black"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            Orders
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                6
                            </Badge>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary h-14 w-60 hover:bg-[#e5f3fb] text-base text-black"
                        >
                            <Package className="h-4 w-4" />
                            Products{" "}
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary h-14 w-60 hover:bg-[#e5f3fb] text-base text-black"
                        >
                            <Users className="h-4 w-4" />
                            Customers
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary h-14 w-60 hover:bg-[#e5f3fb] text-base text-black"
                        >
                            <LineChart className="h-4 w-4" />
                            Analytics
                        </Link>
                    </nav>
                </div>
                <div className="">
                    <div className="flex justify-center items-center gap-4 mx-4 my-4 p-4 rounded-lg bg-[#e5f3fb]">
                        <div id="1">
                            <Image src={ProfilePlaceholder} alt="profile" width={50} className="rounded-full" />
                        </div>
                        <div id="2" className="flex flex-col justify-center items-center pr-8">
                            <p>Mike</p>
                            <p className="text-[#707a82]">Admin</p>
                        </div>
                        <div id="3">
                            <LogOut />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
