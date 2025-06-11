import React from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { LogOut, Copy, ShoppingBag } from "lucide-react";
import Link from "next/link";
import NavBar from "./NavBar";
import { getData } from "@/lib/getData";

export default async function AppHeader() {
  const Data = await getData("/shop/categories");
  const navLinks = Data?.categories || [];
  return (
    <header className="w-full bg-[#111]">
      <div className="flex items-center justify-between px-8 py-4 h-20">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex flex-col items-center gap-2 h-full justify-center"
        >
          <span className="text-2xl font-bold tracking-widest text-white">
            HELIX
          </span>
          <span className="text-xs font-semibold tracking-widest text-orange-500 ml-1">
            EXCHANGE
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 flex justify-center h-full items-center">
          <Input
            className="w-[400px] bg-[#181818] border-none text-white placeholder:text-gray-400 h-12"
            placeholder="Search"
          />
        </div>

        {/* User Section */}
        <div className="flex items-center gap-1 h-full">
          {/* Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 bg-[#181818] px-3 py-1 rounded-md h-12">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.jpg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#181818] text-white border-none"
            >
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Balance */}
          <div className="flex items-center gap-1 bg-[#181818] px-3 py-1 rounded-md h-12">
            <span className="text-white font-semibold">2,000,000</span>
            <span className="text-pink-400 text-lg">✘</span>
            <button className="ml-1">
              <Copy className="h-4 w-4 text-gray-400" />
            </button>
          </div>

          {/* Shopping Cart */}
          <button className="relative bg-[#181818] p-2 rounded-md h-12 flex items-center">
            <ShoppingBag className="h-5 w-5 text-gray-300" />
            <Badge className="absolute -top-1 -right-1 bg-orange-500 text-xs px-1.5 py-0.5 rounded-full">
              12
            </Badge>
          </button>
        </div>
      </div>

      {/* Navigation */}

      <NavBar navLinks={navLinks} />
    </header>
  );
}
