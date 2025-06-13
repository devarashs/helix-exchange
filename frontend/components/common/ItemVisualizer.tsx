"use client";

import React from "react";
import { IItem } from "./ItemSection";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  ChevronUp,
  Info,
  RefreshCcw,
  Maximize,
  ReceiptText,
} from "lucide-react";

export default function ItemVisualizer({ itemData }: { itemData: IItem }) {
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(true);

  // Convert stats value to percentage for the progress bar (assuming max value is 200)
  const calculatePercentage = (value: number) => (value / 200) * 100;
  const randomStats = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 91) + 10,
  );

  return (
    <div className="bg-white/[0] text-white overflow-hidden flex flex-col gap-8 mb-4 rounded-md">
      {/* Image Section */}
      <div className="relative aspect-video bg-black w-full flex items-center justify-center">
        <Image
          src={itemData.image}
          alt={itemData.name}
          width={500}
          height={250}
          className="object-fill w-full h-full rounded-md p-0.5 border-1 hover:border-white hover:p-0 transition-all duration-300"
        />

        {/* Control buttons */}
        <div className="absolute bottom-2 right-2 flex gap-2">
          <button className="p-1 rounded-full bg-black/50 hover:bg-black/70">
            <Info size={16} className="text-white/80" />
          </button>
          <button className="p-1 rounded-full bg-black/50 hover:bg-black/70">
            <RefreshCcw size={16} className="text-white/80" />
          </button>
          <button className="p-1 rounded-full bg-black/50 hover:bg-black/70">
            <Maximize size={16} className="text-white/80" />
          </button>
        </div>
      </div>

      {/* Details Section */}
      <Card>
        <Collapsible open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full px-3 border-gray-800">
            <div className="flex items-center gap-2">
              <ReceiptText />
              <span className="font-semibold uppercase">DETAILS</span>
            </div>
            {isDetailsOpen ? (
              <ChevronUp size={16} className="text-gray-400" />
            ) : (
              <ChevronDown size={16} className="text-gray-400" />
            )}
          </CollapsibleTrigger>

          <CollapsibleContent>
            <CardContent className="p-4 pt-2">
              {/* Description */}
              <p className="text-sm text-white/[0.56] mb-4">
                {itemData.description}
              </p>
              <hr className="my-5" />
              {/* Stats */}
              <div className="space-y-4 mb-4">
                <h3 className="text-sm font-semibold mb-4 text-white/[0.56]">
                  Stats
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white">Accuracy</span>
                    <div className="flex items-center gap-2 flex-1 mx-4">
                      <Progress
                        value={calculatePercentage(
                          itemData.attributes.mobility,
                        )}
                        className="h-1 bg-gray-400"
                      />
                    </div>
                    <span className="text-sm">
                      {itemData.attributes.mobility}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white]">Damage</span>
                    <div className="flex items-center gap-2 flex-1 mx-4">
                      <Progress
                        value={calculatePercentage(randomStats[0])}
                        className="h-1 bg-gray-400"
                      />
                    </div>
                    <span className="text-sm">{randomStats[0]}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white">Range</span>
                    <div className="flex items-center gap-2 flex-1 mx-4">
                      <Progress
                        value={calculatePercentage(randomStats[1])}
                        className="h-1 bg-gray-400"
                      />
                    </div>
                    <span className="text-sm">{randomStats[1]}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white">Fire Rate</span>
                    <div className="flex items-center gap-2 flex-1 mx-4">
                      <Progress
                        value={calculatePercentage(randomStats[2])}
                        className="h-1 bg-gray-400"
                      />
                    </div>
                    <span className="text-sm">{randomStats[2]}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white">Mobility</span>
                    <div className="flex items-center gap-2 flex-1 mx-4">
                      <Progress
                        value={calculatePercentage(randomStats[3])}
                        className="h-1 bg-gray-400"
                      />
                    </div>
                    <span className="text-sm">{randomStats[3]}</span>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 font-semibold mb-1">
                    Production Year
                  </p>
                  <p className="text-white font-semibold">
                    {itemData.attributes.productionYear}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold mb-1">Category</p>
                  <p className="text-white font-semibold">Camo</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold mb-1">Condition</p>
                  <p className="text-white font-semibold">
                    {itemData.attributes.condition}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold mb-1">Type</p>
                  <p className="text-white font-semibold">
                    {itemData.attributes.type}
                  </p>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}
