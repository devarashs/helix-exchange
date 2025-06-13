import React from "react";
import { IItem } from "./ItemSection";
import { Avatar } from "@/components/ui/avatar";
import { Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VectorIcon } from "@/icons/VectorIcon";
import Image from "next/image";
import { ThreeDotIcon } from "@/icons/ThreeDotIcon";
import { CameraIcon } from "@/icons/CameraIcon";
import { ShareIcon } from "@/icons/ShareIcon";

export default function ItemTitle({ itemData }: { itemData: IItem }) {
  return (
    <div className="flex flex-col gap-3 w-full bg-white/[0] text-white">
      {/* Collection badge */}
      <div className="flex items-center gap-1.5">
        <p className="text-white/[0.65] font-semibold">Military Collection</p>{" "}
        <VectorIcon size={20} />
      </div>

      {/* Item Title */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-extrabold uppercase tracking-wide">
          {itemData.name || "PANDA HEX QUEEN SKIN #2201"}
        </h1>
        <div className="ml-32 flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Like</span>
            <Heart size={20} className="text-white/[0.65]" />
          </Button>
          <Button variant="ghost" size="icon">
            <span className="sr-only">View options</span>
            <CameraIcon size={22} className="font-bold" />
          </Button>

          <Button variant="ghost" size="icon">
            <span className="sr-only">Share</span>
            <ShareIcon size={20} />
          </Button>

          <Button variant="ghost" size="icon">
            <span className="sr-only">More</span>
            <ThreeDotIcon size={20} />
          </Button>
        </div>
      </div>

      {/* Owner and stats row */}
      <div className="flex justify-start items-center mt-1 w-1/3">
        <div className="flex items-center gap-2 pr-6 border-r">
          <Avatar className="h-12 w-12 border border-gray-700">
            <Image
              className="rounded-full"
              width={50}
              height={50}
              src={itemData.ownerId.avatar || "/placeholder-avatar.png"}
              alt="Owner"
            />
          </Avatar>
          <hr />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-400">Owner</span>
            <span className="text-lg font-bold text-[#F8684F]">
              {itemData.ownerId.username || "CallumGamer"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-4">
          {/* Likes */}
          <div className="flex items-center gap-1.5">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart size={20} className="text-white font-semibold" />
            </Button>
            <span className="text-md font-semibold">{24}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1.5 font-semibold">
            <Eye size={20} className="text-white" />
            <span className="text-md font-semibold">{1223}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
