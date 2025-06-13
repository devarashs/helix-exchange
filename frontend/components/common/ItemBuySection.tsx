"use client";

import React from "react";
import { IItem } from "./ItemSection";
import { Button } from "@/components/ui/button";
import { Receipt, TagIcon } from "lucide-react";
import { SubtractIcon } from "@/icons/SubtractIcon";
import MakeOfferModal from "./MakeOfferModal";

export default function ItemBuySection({ itemData }: { itemData: IItem }) {
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <div className="bg-white/[0.06] text-white p-5 rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-md uppercase text-white font-bold flex items-center gap-1 text-xl">
            <Receipt /> PRICE
          </span>
        </div>
        <div className="flex items-center justify-start gap-3 mt-1">
          <h2 className="text-3xl font-bold">
            {formatPrice(itemData.price || 250000)}
          </h2>
          <SubtractIcon />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 95% 100%, 0% 100%)",
          }}
          className="w-full bg-[#F8684F] hover:bg-[#F8684Fd0] text-black text-xl font-bold py-6 hover:cursor-pointer"
        >
          <span className="mr-2">
            <TagIcon
              size={22}
              className="font-bold text-[#F8684F]"
              fill="black"
            />
          </span>
          BUY NOW
        </Button>
        <MakeOfferModal item={itemData} />
      </div>
    </div>
  );
}
