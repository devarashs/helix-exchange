"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import {
  Filter,
  CircleDot,
  Grid2X2,
  Rows,
  SlidersHorizontal,
} from "lucide-react";

export default function CollectionSearchBar() {
  return (
    <div className="flex items-center justify-between w-full pb-6 rounded-lg gap-4">
      {/* Left: Filters */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-[#232326] hover:bg-[#232326]/80 rounded-md"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="uppercase tracking-wide">Filters</span>
          {/* <Badge
            className="ml-2 bg-[#FF3B3B] text-white px-2 py-0.5 text-xs font-bold rounded-full"
            variant="secondary"
          >
            12
          </Badge> */}
        </Button>
        <span className="flex items-center ml-4 text-green-400 text-xs font-semibold gap-1">
          <CircleDot className="w-3 h-3 fill-green-400 text-green-400" />
          LIVE
        </span>
        <span className="ml-2 text-xs text-white/70 font-medium">
          5 Results
        </span>
      </div>

      {/* Center: Search */}
      <div className="flex-1 flex justify-center">
        <Input
          className="w-full max-w-md bg-[#232326] border-none text-white placeholder:text-white/40 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#232326] focus:outline-none"
          placeholder="Search Collections"
        />
      </div>

      {/* Right: View & Sort */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-md bg-[#232326] text-white hover:bg-[#232326]/80"
        >
          <Grid2X2 className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-md bg-[#232326] text-white hover:bg-[#232326]/80"
        >
          <Rows className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-[#232326] hover:bg-[#232326]/80 rounded-md"
        >
          MOST RECENT
          <Filter className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
