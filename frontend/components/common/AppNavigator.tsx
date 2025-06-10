"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

export default function AppNavigator() {
  const pathname = usePathname();
  // Remove leading/trailing slashes, split by "/"
  const segments = pathname
    .replace(/^\/|\/$/g, "")
    .split("/")
    .filter(Boolean)
    .map((seg) => seg.toUpperCase());

  return (
    <nav className="flex items-center gap-2 px-8 py-3">
      <Home className="text-white h-5 w-5" />
      {segments.length > 0 &&
        segments.map((seg, idx) => (
          <React.Fragment key={seg + idx}>
            <span className="text-white mx-1">{">"}</span>
            <span className="text-white font-bold text-sm">{seg}</span>
          </React.Fragment>
        ))}
    </nav>
  );
}
