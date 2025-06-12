"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar({ navLinks }: { navLinks: string[] }) {
  const pathname = usePathname();
  const links = [
    "ALL",
    ...navLinks.filter((link) => link.toUpperCase() !== "ALL"),
  ];
  // Extract the current category from the pathname
  const currentCategory = pathname?.startsWith("/categories/")
    ? pathname.split("/")[2]
    : null;
  console.log("Current Category:", currentCategory);

  return (
    <nav className="flex justify-center gap-8 bg-[#181818] border-t border-[#222]">
      {links?.map((link) => {
        const isActive = currentCategory?.toLowerCase() === link.toLowerCase();
        return (
          <Link
            key={link}
            href={`/categories/${link.toLowerCase()}`}
            className={`py-3 text-sm font-bold tracking-wide text-gray-400 hover:text-white transition ${
              isActive ? "text-white border-b-2 border-orange-500" : ""
            }`}
          >
            {link.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
