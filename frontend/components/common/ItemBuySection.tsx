import React from "react";
import { IItem } from "./ItemSection";
import { Button } from "@/components/ui/button";
import { HandHelping, Receipt, TagIcon } from "lucide-react";
import { SubtractIcon } from "@/icons/SubtractIcon";

export default function ItemBuySection({ itemData }: { itemData: IItem }) {
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <div className="bg-white/[0.06] text-white p-5 rounded-lg shadow-lg">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-md uppercase text-white font-bold flex items-center gap-1">
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
          className="w-full bg-[#FF6B5A] hover:bg-[#ff6b5ad0] text-black font-bold py-6 hover:cursor-pointer"
        >
          <span className="mr-2">
            <TagIcon
              size={22}
              className="font-bold text-[#FF6B5A]"
              fill="black"
            />
          </span>
          BUY NOW
        </Button>
        <Button
          className="w-full bg-white/[0.07] text-white py-6 hover:bg-white/[0.08] font-bold hover:cursor-pointer"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 95% 100%, 0% 100%)",
          }}
        >
          <span className="mr-2">
            <HandHelping size={22} fill="white" />
          </span>
          MAKE OFFER
        </Button>
      </div>
    </div>
  );
}
