import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { IItem } from "./ItemSection";
import { SubtractIcon } from "@/icons/SubtractIcon";
import { VectorIcon } from "@/icons/VectorIcon";
import { SupplyIcon } from "@/icons/SupplyIcon";
import Link from "next/link";

export default function ItemCard({ item }: { item: IItem }) {
  return (
    <Link href={`/item/${item._id}`} className="block group">
      <Card className="bg-white/[0.06] border rounded-md shadow-lg w-full overflow-hidden transition-all duration-300 hover:border-primary/50 group-hover:shadow-xl p-0">
        {/* Item Image - Ensuring it fills the entire top with no gaps */}
        <div className="w-full h-[260px] relative">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <CardContent className="p-0">
          {/* Collection Name with verification icon */}
          <div className="px-4 pt-3 pb-2">
            <div className="flex items-center gap-1 text-xs text-white/[0.56 font-medium mb-1.5">
              {item.collectionId.name}
              <VectorIcon size={14} />
            </div>

            {/* Item Name */}
            <div className="font-semibold text-white truncate text-base leading-tight mb-1">
              {item.name}
            </div>
          </div>
        </CardContent>

        {/* Price and Supply Footer */}
        <CardFooter className=" p-2">
          <div className="flex justify-between w-full px-4 py-4 bg-white/[0.06]">
            <div className="flex flex-col">
              <span className="text-lg text-white/[0.56] font-semibold mb-1">
                Price
              </span>
              <span className="flex items-center text-lg gap-1 font-semibold text-[#FFFFFF]">
                {item.price.toLocaleString()}
                <SubtractIcon size={14} />
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-lg text-white/[0.56] font-semibold mb-1">
                Supply
              </span>
              <span className="flex items-center text-lg gap-1 font-semibold text-[#FFFFFF]">
                {item.supply}
                <SupplyIcon size={14} />
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
