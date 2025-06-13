"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SubtractIcon } from "@/icons/SubtractIcon";
import { HandHelping, TagIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const ItemListings = () => {
  const [open, setOpen] = useState(false);

  const offers = [
    {
      price: 2000,
      floorDiff: "24.7% above",
      expiration: "12h",
      from: "Conqr",
    },
    {
      price: 2000,
      floorDiff: "24.7% above",
      expiration: "12h",
      from: "Conqr",
    },
    {
      price: 2000,
      floorDiff: "24.7% above",
      expiration: "12h",
      from: "Conqr",
    },
  ];

  return (
    <div className="bg-white/[0.05] rounded-lg px-4">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 -px-4">
        <div className="flex items-center gap-3">
          <TagIcon className="text-black" fill="white" />
          <h2 className="text-white font-semibold text-lg tracking-wide">
            LISTINGS
          </h2>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader className="border-t border-b">
          <TableRow className="border-none hover:bg-transparent">
            <TableHead className="text-white/[0.56] font-semibold text-md px-6 py-4 h-auto justify-start">
              PRICE
            </TableHead>
            <TableHead className="text-white/[0.56] font-semibold text-md px-6 py-4 h-auto justify-start">
              EXPIRATION
            </TableHead>
            <TableHead className="text-white/[0.56] font-semibold text-md px-6 py-4 h-auto justify-start">
              FROM
            </TableHead>
            <TableHead className="text-white/[0.56] font-semibold text-md px-6 py-4 h-auto flex justify-end">
              ACTION
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {offers.map((offer, index) => (
            <TableRow key={index} className="border-none hover:bg-zinc-800/50">
              <TableCell className="px-6 py-6">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold text-lg">
                    {offer.price}
                  </span>
                  <SubtractIcon />
                </div>
              </TableCell>
              <TableCell className="px-6 py-6">
                <span className="text-white font-semibold text-lg">
                  {offer.expiration}
                </span>
              </TableCell>
              <TableCell className="px-6 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-[#F8684F] font-semibold text-lg">
                    {offer.from}
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-6 py-6">
                <div className="flex gap-1 justify-end">
                  <Button
                    style={{
                      clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)",
                    }}
                    className="w-fit bg-[#F8684F] hover:bg-[#F8684Fd0] text-lg text-black font-bold py-6 hover:cursor-pointer"
                  >
                    <span className="mr-2">
                      <TagIcon
                        className="font-bold text-[#F8684F] scale-150"
                        fill="black"
                      />
                    </span>
                    BUY
                  </Button>
                  <Button
                    className="w-fit bg-white/[0.07] text-white py-6 text-lg hover:bg-white/[0.08] font-bold hover:cursor-pointer"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%)",
                    }}
                  >
                    <span className="mr-2">
                      <HandHelping fill="white" className="scale-150" />
                    </span>
                    MAKE OFFER
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ItemListings;
