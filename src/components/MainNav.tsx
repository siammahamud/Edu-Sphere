"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { INavItem } from "@/types/nav";
// import { useTheme } from "next-themes";

interface MainNavProps {
  items: INavItem[];
  children?: React.ReactNode;
}
export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="flex justify-between gap-6 lg:gap-10">
        <Link href="/">
          <Logo />
        </Link>
        {items?.length ? (
          <nav className="hidden gap-6 lg:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "/" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}

        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
      <nav className="flex items-center gap-3 ">
        <div className="items-center gap-3 hidden lg:flex">
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
          >
            Login
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Register
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-4">
              <DropdownMenuItem className="cursor-pointer">
                <Link href="">Student</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href="">Instructor</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* profile avatar dropdown menu  */}
        <div
          className="relative"
          onBlur={() => setShowDropdown(false)}
          tabIndex={0}
        >
          <div>
            <div
              className="cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className=" absolute -left-44 bg-white border rounded-md shadow-md mt-2 w-50 ">
              {/* ড্রপডাউন মেনু  */}
              {showDropdown && (
                <div className="p-2">
                  <Link href="account" className="block p-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link
                    href="account/enrolled-courses"
                    className="block p-2 hover:bg-gray-100"
                  >
                    My Courses
                  </Link>
                  <Link href="" className="block p-2 hover:bg-gray-100">
                    Testimonials & Certificates
                  </Link>
                  <Link href="" className="block p-2 hover:bg-gray-100">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* mobile navbar icon  */}
        <button
          className="flex items-center space-x-2 lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </nav>
    </>
  );
}
