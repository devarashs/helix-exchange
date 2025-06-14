"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // shadcn utility for className merging
import Image from "next/image";

// Map categories to image paths
const categoryImages: Record<string, string> = {
  all: "https://i.pinimg.com/736x/d2/31/72/d23172f849f5f070d57faf3130ad6fd9.jpg",
  weapons: "/images/weapon-banner.png",
  footwear:
    "https://i.pinimg.com/originals/41/18/ef/4118efe4ef45befc56ff3fab487cb4b6.jpg",
  accessories:
    "https://i.pinimg.com/736x/a6/39/fd/a639fd190e86ed40cf3b65949a21e52e.jpg",
  vehicles:
    "https://i.pinimg.com/736x/34/af/dd/34afdd640a95bf87cdfda17227da0aea.jpg",
  properties:
    "https://i.pinimg.com/736x/0d/60/34/0d6034c46447cec546353713802164e3.jpg",
  clothing:
    "https://i.pinimg.com/736x/b4/c6/de/b4c6def460dfe01861ca9d093355657d.jpg",
  // Add more categories as needed
};

export default function HomeBanner() {
  const pathname = usePathname();
  // Extract category from /categories/[category]
  const match = pathname.match(/^\/categories\/([^/]+)/);
  const category = match ? match[1] : null;
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (category && categoryImages[category]) {
      setIsLoading(true);
      setImageSrc(categoryImages[category]);
    } else {
      setImageSrc(null);
    }
  }, [category]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full py-4">
      <div
        className={cn(
          "relative w-full h-64 flex items-center justify-center border rounded-sm overflow-hidden",
          "bg-black",
        )}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-pulse w-10 h-10 rounded-full bg-gray-400"></div>
          </div>
        )}

        {imageSrc && (
          <Image
            width={1920}
            height={1080}
            src={imageSrc}
            alt={category || "banner"}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              isLoading ? "opacity-0" : "opacity-100",
            )}
            onLoad={handleImageLoad}
          />
        )}
      </div>
    </div>
  );
}
