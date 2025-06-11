import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { BadgeCheck, MoreHorizontal, XCircle } from "lucide-react";
import clsx from "clsx";

export default function CollectionCard({
  item,
}: {
  item: {
    slug: string;
    name: string;
    category: string;
    coverImage: string;
    floorPrice: number;
    volume24h: number;
    owner: {
      username: string;
      avatar: string;
    };
  };
}) {
  return (
    <Card
      key={item.slug}
      className={clsx(
        "relative bg-[#18181b] rounded-md overflow-hidden border border-[#27272a] shadow-none transition-shadow",
        "hover:shadow-lg hover:scale-101 transition-all duration-500",
        "hover:border-white",
        "group",
      )}
    >
      {/* Cover Image */}
      <div className="relative">
        <Image
          width={400}
          height={200}
          src={item.coverImage}
          alt={item.name}
          className="w-full h-48 object-cover"
          priority
        />
        {/* Owner Avatar */}
        <div className="absolute left-4 -bottom-12 z-10">
          <div className="bg-black rounded-md p-1 shadow-md w-20 h-20 flex items-center justify-center">
            <Image
              src={item.owner.avatar}
              alt={item.owner.username}
              width={70}
              height={70}
              className="rounded-lg object-cover w-18 h-18"
            />
          </div>
        </div>

        <button
          className={clsx(
            "absolute -bottom-14 right-3 rounded-full p-2 hover:bg-[#2a2a2e] transition-colors",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "pointer-events-none group-hover:pointer-events-auto hover:cursor-pointer",
          )}
        >
          <MoreHorizontal size={20} className="text-white" />
        </button>
      </div>
      {/* Card Content */}
      <CardContent className="pt-12 px-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-semibold text-white">{item.name}</span>
          <BadgeCheck className="text-yellow-400" size={20} />
        </div>

        <div className="bg-[#232326] rounded-md mt-4 flex justify-between px-3 py-3">
          <div className="flex flex-col items-start">
            <span className="text-sm text-[#a1a1aa] font-semibold mb-1">
              Floor Price
            </span>
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-white">
                {item.floorPrice.toLocaleString()}
              </span>
              <XCircle className="text-pink-400" size={20} />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm text-[#a1a1aa] font-semibold mb-1">
              Total Volume
            </span>
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-white">
                {item.volume24h.toLocaleString()}
              </span>
              <XCircle className="text-pink-400" size={20} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
