"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Change here
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Sidebar2 from "@/components/layout/Sidebar2";
import { useEffect, useState } from "react";
import Header2 from "@/components/layout/Header2";
import MainLayout from "@/layout/mainLayout";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const newPageRoutes = "/dashboard/form/create/new-page";
  const createRoutes = "/dashboard/form/create";
  const productRoutes = "/dashboard/product/create";

  // Track client-side mounting
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();

  console.log(pathname);

  useEffect(() => {
    // Set the mounted state to true when the component is mounted
    setIsMounted(true);
  }, []);

  const [toggleSidebar, setToggleSidebar] = useState(false);

  // If the component has not yet mounted, do not render anything router-related
  if (!isMounted) {
    return null; // Return nothing or a loading state if preferred
  }
  return (
    <>
      {/* Mobile Sheet for Sidebar */}
      {/* <Sheet open={toggleSidebar}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only text-black">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Users className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet> */}


      {/* Main Layout */}
      {/* <div className="grid min-h-screen w-full md:grid-cols-[68px_1fr] lg:grid-cols-[68px_1fr]">

        <Sidebar2 />
        <div className="flex flex-col">
          <Header setToggleSidebar={setToggleSidebar} />
          <div className="mt-32">{children}</div>
        </div>

      </div> */}

      <MainLayout>
        {children}
      </MainLayout>

    </>
  );
}
