import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  X,
  Wallet,
  DollarSign,
  TrendingUp,
  Clock,
  HandHelping,
  Filter,
  SlidersHorizontal,
  ArrowBigDown,
} from "lucide-react";
import { IItem } from "./ItemSection";
import Image from "next/image";
import { VectorIcon } from "@/icons/VectorIcon";
import { SubtractIcon } from "@/icons/SubtractIcon";

export default function MakeOfferModal({ item }: { item: IItem }) {
  const [offerAmount, setOfferAmount] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger>
        <div
          onClick={() => setOpen(true)}
          className="w-full bg-white/[0.07] text-white py-6 hover:bg-white/[0.08] font-bold hover:cursor-pointer text-xl flex items-center justify-center rounded-lg h-14"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 95% 100%, 0% 100%)",
          }}
        >
          <span className="mr-2">
            <HandHelping size={22} fill="white" />
          </span>
          MAKE OFFER
        </div>
      </DialogTrigger>
      <DialogContent className="bg-card text-white max-w-md p-1">
        {/* Header */}
        <DialogHeader className="p-4 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle>
              <p className="text-xl font-extrabold text-white scale-y-150">
                MAKE AN OFFER
              </p>
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="p-4 space-y-4">
          {/* Item Info */}
          <div className="flex items-center space-x-3 pb-4 rounded-sm">
            <div className="w-[65px] h-[65px] relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-sm shadow-sm border border-gray-600"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-white/[0.56] text-sm font-semibold">
                  {item.name}
                </span>
                <VectorIcon />
              </div>
              <p className="text-white text-sm font-semibold">
                {item.attributes.type}
              </p>
            </div>
          </div>

          {/* Balance Info */}
          <div className="space-y-2 border p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wallet size={16} className="text-white" />
                <span className="text-white font-semibold text-sm">
                  Your Balance
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-white font-semibold text-sm">
                  2,000,000
                </span>
                <SubtractIcon />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign size={16} className="text-white" />
                <span className="text-white font-semibold text-sm">
                  Floor Price
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-white font-semibold text-sm">
                  250,000
                </span>
                <SubtractIcon />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <HandHelping fill="white" size={16} className="text-white" />
                <span className="text-white font-semibold text-sm">
                  Best Offer
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-white font-semibold text-sm">
                  240,000
                </span>
                <SubtractIcon />
              </div>
            </div>
          </div>

          {/* Offer Section */}
          <div className="flex flex-col gap-2">
            <label className="text-white/[0.56] text-sm font-semibold">
              Offer
            </label>
            <div className="flex items-center">
              <div className="bg-white/[0.06] rounded-l-sm p-[8] border-gray-700 mr-0.5">
                <SubtractIcon />
              </div>
              <Input
                className="border-0 rounded-l-none bg-white/[0.06]"
                type="text"
                placeholder="Enter amount"
                value={offerAmount}
                onChange={(e) => setOfferAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Expires Section */}
          <div className="flex flex-col space-y-3">
            <label className="text-white/[0.56] text-sm font-semibold">
              Expires
            </label>
            <div className="flex items-center justify-between gap-3">
              <Button
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 60%, 90% 100%, 0% 100%)",
                }}
                variant="ghost"
                className="flex items-center text-sm font-semibold text-white bg-[#232326] hover:bg-[#232326]/80 rounded-xs"
              >
                <SlidersHorizontal />
                MOST RECENT
                <ArrowBigDown />
              </Button>

              <div className="border text-sm font-semibold p-2 rounded-sm w-full flex justify-between items-center">
                <span>October 21, 2024</span>
                <span>5:53 PM</span>
              </div>
            </div>
            <Button
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 70%, 95% 100%, 0% 100%)",
              }}
              className="w-full bg-[#F8684F] hover:bg-[#F8684Fd0] text-black text-md font-bold py-6 hover:cursor-pointer items-center"
            >
              <span className="mr-2">
                <HandHelping className="scale-185" />
              </span>
              MAKE OFFER
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
