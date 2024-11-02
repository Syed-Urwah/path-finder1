"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MainLayout from "@/layout/mainLayout";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();

  console.log(pathname);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [toggleSidebar, setToggleSidebar] = useState(false);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}
