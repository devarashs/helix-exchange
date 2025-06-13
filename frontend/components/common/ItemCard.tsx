"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IItem } from "./ItemSection";
import { SubtractIcon } from "@/icons/SubtractIcon";
import { VectorIcon } from "@/icons/VectorIcon";
import { SupplyIcon } from "@/icons/SupplyIcon";
import Link from "next/link";
import { PlusIcon, TagIcon } from "lucide-react"; // Assuming you're using lucide icons

export default function ItemCard({ item }: { item: IItem }) {
  return (
    <div className="block group">
      <Card className="bg-white/[0.06] border rounded-md shadow-lg w-full overflow-hidden transition-all duration-300 hover:border-primary/50 group-hover:shadow-xl p-0 flex flex-col gap-2">
        {/* Image container with hover effect */}
        <div className="w-full h-[320px] relative overflow-hidden">
          {/* Original image (always shown, fades out on hover) */}
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-opacity duration-200 ease-in-out group-hover:opacity-0"
            priority
          />

          {/* Thumbnail image (hidden by default, fades in on hover) */}
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="https://i.pinimg.com/474x/76/17/84/7617844cbcad512d140c13194b404fd4.jpg"
              alt={`${item.name} thumbnail`}
              fill
              className="object-cover transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
            />

            {/* Buttons container - appears on hover */}
            <div className="absolute bottom-4 left-0 w-full px-4 flex justify-center gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {/* Buy button */}

              <Button
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 70%, 80% 100%, 0% 100%)",
                }}
                className="bg-[#F8684F] hover:bg-[#FF8B7A] text-black font-medium rounded-md flex items-center gap-2 py-2 px-4 hover:cursor-pointer"
              >
                <TagIcon
                  size={20}
                  className="font-bold text-[#F8684F]"
                  fill="black"
                />
                <span className="text-lg font-semibold">BUY</span>
              </Button>

              {/* Plus button */}
              <Button
                className="bg-white hover:bg-gray-100 text-black p-3 hover:cursor-pointer relative"
                onClick={(e) => {
                  e.preventDefault();
                }}
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%)",
                }}
              >
                <PlusIcon size={24} className="text-black font-bold" />
              </Button>
            </div>
          </div>
        </div>

        <Link href={`/items/${item.name.toLowerCase().replace(/ /g, "-")}`}>
          <CardContent className="p-0">
            {/* Collection Name with verification icon */}
            <div className="px-3 pt-3">
              <div className="flex items-start gap-1 text-xs text-white/[0.56] font-medium mb-1.5">
                {item.collectionId.name}
                <VectorIcon size={16} />
              </div>

              {/* Item Name */}
              <div className="font-semibold text-white truncate text-base leading-tight mb-1">
                {item.name}
              </div>
            </div>
          </CardContent>

          {/* Price and Supply Footer */}
          <CardFooter className="p-2">
            <div className="flex justify-between w-full px-4 py-4 bg-white/[0.06] rounded-md">
              <div className="flex flex-col">
                <span className="text-lg text-white/[0.56] font-semibold mb-1">
                  Price
                </span>
                <span className="flex items-center text-lg gap-3 font-semibold text-[#FFFFFF]">
                  {item.price.toLocaleString()}
                  <SubtractIcon size={16} />
                </span>
              </div>
              <div className="flex items-start flex-col">
                <span className="text-lg text-white/[0.56] font-semibold mb-1">
                  Supply
                </span>
                <span className="flex items-center text-lg gap-3 font-semibold text-[#FFFFFF]">
                  {item.supply}
                  <SupplyIcon size={20} />
                </span>
              </div>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}
