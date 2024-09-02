"use client"
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
import Logo2 from "@/../public/images/logo2.png"
import ProfilePlaceholder from '@/../public/images/profile-placeholder.png'
import { motion } from 'framer-motion';

////////////////////////previous
// export default function Sidebar2() {
//     return (
//         <> <div className="hidden md:block border-r bg-muted/40 lg:bg-white w-[68px]">
//         <div className="flex h-full max-h-screen flex-col gap-10">
//           <div className="flex h-14 items-center border-b px-4 lg:h-[60px] py-10 lg:px-6 w-full">
//             <Image src={Logo2} alt="logo" width={30} height={30} />
//           </div>
//           <div className="h-screen w-full">
//             <nav className="flex flex-col justify-center items-center h-full gap-3 text-sm font-medium">
//               <Link href="#" className="h-fit w-fit">
//                 <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all h-fit text-base text-black relative overflow-hidden">
//                   <Home className="h-4 w-4" />
//                   {/* <span>Dashboard</span> */}
//                 </motion.div>
//               </Link>
//               <Link href="#" className="h-fit w-fit">
//                 <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all text-base text-black relative overflow-hidden">
//                   <ShoppingCart className="h-4 w-4" />
//                   {/* <span>Orders</span> */}
//                 </motion.div>
//               </Link>
//               <Link href="#" className="h-fit w-fit">
//                 <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all text-base text-black relative overflow-hidden">
//                   <Package className="h-4 w-4" />
//                   {/* <span>Products</span> */}
//                 </motion.div>
//               </Link>
//               <Link href="#" className="h-fit w-fit">
//                 <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all text-base text-black relative overflow-hidden">
//                   <Users className="h-4 w-4" />
//                   {/* <span>Customers</span> */}
//                 </motion.div>
//               </Link>
//               <Link href="#" className="h-fit w-fit">
//                 <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all text-base text-black relative overflow-hidden">
//                   <LineChart className="h-4 w-4" />
//                   {/* <span>Analytics</span> */}
//                 </motion.div>
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </div>
    
//       {/* Sidebar for small screens */}
//       <div className="md:hidden bg-muted/40 lg:bg-white w-full">
//         <div className="flex flex-col gap-4 p-4">
//           <div className="flex items-center border-b py-2">
//             <Image src={Logo2} alt="logo" width={30} height={30} />
//           </div>
//           <nav className="flex flex-col gap-2">
//             <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
//               <Home className="h-4 w-4" />
//               {/* <span>Dashboard</span> */}
//             </Link>
//             <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
//               <ShoppingCart className="h-4 w-4" />
//               {/* <span>Orders</span> */}
//             </Link>
//             <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
//               <Package className="h-4 w-4" />
//               {/* <span>Products</span> */}
//             </Link>
//             <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
//               <Users className="h-4 w-4" />
//               {/* <span>Customers</span> */}
//             </Link>
//             <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
//               <LineChart className="h-4 w-4" />
//               {/* <span>Analytics</span> */}
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </>
//     )
// }


/////////////////modified with .sticky top-0 and overflow-auto
export default function Sidebar2() {
    return (
        <>
            <div className="hidden md:block border-r bg-muted/40 lg:bg-white w-[68px]">
                <div className="sticky top-0">
                    <div className="flex h-full max-h-screen flex-col gap-10">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] py-10 lg:px-6 w-full">
                            <Image src={Logo2} alt="logo" width={30} height={30} />
                        </div>
                        <div className="h-screen w-full overflow-auto">
                            <nav className="flex flex-col justify-center items-center h-full gap-3 text-sm font-medium">
                                <Link href="#" className="h-fit w-fit">
                                    <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all h-fit text-base text-black relative overflow-hidden">
                                        <Home className="h-4 w-4" />
                                        {/* <span>Dashboard</span> */}
                                    </motion.div>
                                </Link>
                                <Link href="#" className="h-fit w-fit">
                                    <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all text-base text-black relative overflow-hidden">
                                        <ShoppingCart className="h-4 w-4" />
                                        {/* <span>Orders</span> */}
                                    </motion.div>
                                </Link>
                                <Link href="#" className="h-fit w-fit">
                                    <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all text-base text-black relative overflow-hidden">
                                        <Package className="h-4 w-4" />
                                        {/* <span>Products</span> */}
                                    </motion.div>
                                </Link>
                                <Link href="#" className="h-fit w-fit">
                                    <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all text-base text-black relative overflow-hidden">
                                        <Users className="h-4 w-4" />
                                        {/* <span>Customers</span> */}
                                    </motion.div>
                                </Link>
                                <Link href="#" className="h-fit w-fit">
                                    <motion.div className="flex items-center gap-3 rounded-r-3xl px-2 lg:px-4 py-2 text-muted-foreground transition-all text-base text-black relative overflow-hidden">
                                        <LineChart className="h-4 w-4" />
                                        {/* <span>Analytics</span> */}
                                    </motion.div>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar for small screens */}
            <div className="md:hidden bg-muted/40 lg:bg-white w-full">
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex items-center border-b py-2">
                        <Image src={Logo2} alt="logo" width={30} height={30} />
                    </div>
                    <nav className="flex flex-col gap-2">
                        <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
                            <Home className="h-4 w-4" />
                            {/* <span>Dashboard</span> */}
                        </Link>
                        <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
                            <ShoppingCart className="h-4 w-4" />
                            {/* <span>Orders</span> */}
                        </Link>
                        <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
                            <Package className="h-4 w-4" />
                            {/* <span>Products</span> */}
                        </Link>
                        <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
                            <Users className="h-4 w-4" />
                            {/* <span>Customers</span> */}
                        </Link>
                        <Link href="#" className="flex items-center gap-3 rounded px-2 py-2 text-muted-foreground transition-all text-base text-black">
                            <LineChart className="h-4 w-4" />
                            {/* <span>Analytics</span> */}
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}


