"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
  const navLinks = [
    "CLOTHING",
    "FOOTWEAR",
    "ACCESSORIES",
    "PROPERTIES",
    "WEAPONS",
    "VEHICLES",
  ];
  const pathname = usePathname();

  // Extract the current category from the pathname
  const currentCategory = pathname?.startsWith("/categories/")
    ? pathname.split("/")[2]?.toUpperCase()
    : null;
  return (
    <nav className="flex justify-center gap-8 bg-[#181818] border-t border-[#222]">
      {navLinks.map((link) => {
        const isActive = currentCategory === link;
        return (
          <Link
            key={link}
            href={`/categories/${link.toLowerCase()}`}
            className={`py-3 text-sm font-medium tracking-wide text-gray-400 hover:text-white transition ${
              isActive ? "text-white border-b-2 border-orange-500" : ""
            }`}
          >
            {link}
          </Link>
        );
      })}
    </nav>
  );
}
