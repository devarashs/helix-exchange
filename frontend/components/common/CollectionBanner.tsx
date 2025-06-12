import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SubtractIcon } from "@/icons/SubtractIcon";
import { VectorIcon } from "@/icons/VectorIcon";
import { CameraIcon } from "@/icons/CameraIcon";
import { ShareIcon } from "@/icons/ShareIcon";
import { ThreeDotIcon } from "@/icons/ThreeDotIcon";
import { ICollection } from "./CollectionSection";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CustomUserIcon } from "@/icons/CustomUserIcon";
import { SupplyIcon } from "@/icons/SupplyIcon";

interface CollectionBannerProps {
  collectionData: ICollection;
  bannerImage: string;
  profileImage: string;
  totalVolume: number;
  floorPrice: number;
  totalSupply: number;
  owners: number;
  verified: boolean;
}

export default function CollectionBanner({
  data,
}: {
  data: CollectionBannerProps;
}) {
  return (
    <div className="relative w-full mb-30">
      {/* Banner Image */}
      <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-md">
        <Image
          src={data.bannerImage}
          alt="Collection banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Avatar and Actions Bar */}
      <div className="relative bg-background/50 backdrop-blur-sm px-4 py-2 flex items-center">
        <div className="absolute -top-12 left-8">
          <div className="relative rounded-sm border-4 border-background bg-background w-24 h-24">
            <Image
              src={data.profileImage}
              alt="Collection avatar"
              fill
              className="object-contain"
            />
            {data.verified && (
              <div className="absolute -bottom-2 -right-2 z-10 bg-background rounded-full p-0.5">
                <VectorIcon size={20} />
              </div>
            )}
          </div>
        </div>

        <div className="ml-32 flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <span className="sr-only">View options</span>
            <CameraIcon size={20} />
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

      {/* Collection Stats */}
      <div className="mt-10">
        <Card className="absolute right-6 bottom-0 p-4 rounded-lg border shadow-lg bg-background">
          <div className="grid grid-cols-1 gap-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Total Volume
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">
                        {data.totalVolume.toLocaleString()}
                      </span>
                      <SubtractIcon size={16} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total trading volume</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex justify-between items-center gap-30">
              <span className="text-sm text-muted-foreground">Floor Price</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">
                        {data.floorPrice.toLocaleString()}
                      </span>
                      <SubtractIcon size={16} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Lowest price available</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Total Supply
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <span className="font-bold mr-1">
                        {data.totalSupply.toLocaleString()}
                      </span>
                      <SupplyIcon size={20} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total number of items</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Owners</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <span className="font-bold mr-1">
                        {data.owners.toLocaleString()}
                      </span>
                      <CustomUserIcon size={20} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Number of unique owners</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </Card>
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-wider">
            {data.collectionData.name}
          </h2>
          <p className="mt-2">
            <span className="font-semibold mr-1">Category:</span>
            <span className="text-yellow-200 font-semibold">
              {data.collectionData.category.charAt(0).toUpperCase() +
                data.collectionData.category.slice(1)}
            </span>
          </p>
          <Collapsible>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              <CollapsibleTrigger asChild>
                <span className="cursor-pointer ml-1 text-[#F8684F]">
                  See More
                </span>
              </CollapsibleTrigger>
            </p>
            <CollapsibleContent>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                ...consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
