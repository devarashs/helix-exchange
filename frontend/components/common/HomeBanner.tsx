"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // shadcn utility for className merging
import Image from "next/image";

// Map categories to image paths
const categoryImages: Record<string, string> = {
  all: "/images/weapon-banner.png",
  weapons: "/images/weapon-banner.png",
  footwear: "/images/weapon-banner.png",
  accessories: "/images/weapon-banner.png",
  vehicles: "/images/weapon-banner.png",
  properties: "/images/weapon-banner.png",
  clothing: "/images/weapon-banner.png",
  // Add more categories as needed
};

export default function HomeBanner() {
  const pathname = usePathname();
  // Extract category from /categories/[category]
  const match = pathname.match(/^\/categories\/([^/]+)/);
  const category = match ? match[1] : null;
  const imageSrc = category && categoryImages[category];

  return (
    <div className="w-full py-4">
      <div
        className={cn(
          "relative w-full h-64 flex items-center justify-center border rounded-sm overflow-hidden",
          "bg-black",
        )}
      >
        {imageSrc && (
          <Image
            width={1920}
            height={1080}
            src={imageSrc}
            alt={category}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
