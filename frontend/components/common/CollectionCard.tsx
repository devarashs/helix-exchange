import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { SubtractIcon } from "@/icons/SubtractIcon";
import { VectorIcon } from "@/icons/VectorIcon";

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
        "relative bg-[#141415] rounded-md overflow-hidden border border-[#27272a] shadow-none transition-shadow p-0",
        "hover:shadow-lg hover:scale-101 transition-all duration-500",
        "hover:border-white",
        "group",
      )}
    >
      {/* Cover Image - Modified to fill the entire top with no gaps */}
      <div className="relative h-48 w-full">
        <Image
          src={item.coverImage}
          alt={item.name}
          fill
          className="object-cover"
          priority
        />

        {/* Owner Avatar */}
        <div className="absolute left-4 -bottom-10 z-10">
          <div className="bg-black rounded-md p-1 shadow-md w-20 h-20 flex items-center justify-center">
            <Image
              src={item.owner.avatar}
              alt={item.owner.username}
              width={70}
              height={70}
              className="rounded-md object-cover w-18 h-18"
            />
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger
            className={clsx(
              "absolute -bottom-14 right-3 rounded-full p-2 hover:bg-[#2a2a2e] transition-colors",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              "pointer-events-none group-hover:pointer-events-auto hover:cursor-pointer",
            )}
          >
            <MoreHorizontal size={20} className="text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href={`/collection/${item.slug}`}>
              <DropdownMenuLabel>View</DropdownMenuLabel>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Card Content */}
      <CardContent className="pt-8 pb-2 px-2">
        <div className="flex items-center gap-2 mb-1 px-1">
          <span className="text-lg font-semibold text-white">{item.name}</span>
          <VectorIcon size={16} />
        </div>

        <div className="bg-white/[0.06] rounded-md mt-4 flex justify-between px-3 py-3">
          <div className="flex flex-col items-start">
            <span className="text-lg text-white/[0.56] font-semibold mb-1">
              Floor Price
            </span>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[#FFFFFF]">
                {item.floorPrice.toLocaleString()}
              </span>
              <SubtractIcon size={16} />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-lg text-white/[0.56] font-semibold mb-1">
              Total Volume
            </span>
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-[#FFFFFF]">
                {item.volume24h.toLocaleString()}
              </span>
              <SubtractIcon size={16} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
