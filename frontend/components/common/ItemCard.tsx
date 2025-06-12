import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Droplets } from "lucide-react";
import Image from "next/image";
import { IItem } from "./ItemSection";
import { SubtractIcon } from "@/icons/SubtractIcon";

export default function ItemCard({ item }: { item: IItem }) {
  return (
    <Card className="bg-[#141415] border border-[#232428] rounded-xl shadow-lg w-[300px] overflow-hidden">
      <CardContent className="p-0">
        {/* Item Image */}
        <div className="w-full h-[180px] relative">
          <Image
            fill
            src={item.image}
            alt={item.name}
            className="object-contain"
          />
        </div>

        {/* Collection Name with Star */}
        <div className="px-4 pt-2">
          <div className="flex items-center gap-1 text-xs text-[#A1A1AA] font-medium">
            {item.collectionId.name}
            <Star className="w-4 h-4 text-yellow-400" fill="#facc15" />
          </div>

          {/* Item Name */}
          <div className="font-semibold text-white truncate text-base leading-tight mb-2">
            {item.name}
          </div>
        </div>
      </CardContent>

      {/* Price and Supply Footer */}
      <CardFooter className="bg-[#18191C] px-4 py-3">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <span className="text-xs text-[#A1A1AA]">Price</span>
            <span className="flex items-center gap-1 font-semibold text-white">
              {item.price}
              <SubtractIcon size={16} />
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-[#A1A1AA]">Supply</span>
            <span className="flex items-center gap-1 font-semibold text-white">
              {item.supply}
              <Droplets className="w-4 h-4 text-cyan-400" fill="none" />
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
