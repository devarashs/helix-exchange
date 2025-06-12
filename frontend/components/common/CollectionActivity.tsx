import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Activity, Clock, Filter } from "lucide-react";
import Image from "next/image";
import { SubtractIcon } from "@/icons/SubtractIcon";
import { Button } from "../ui/button";

interface ActivityItem {
  time: string;
  image: string;
  price: number;
  user: string;
  action: "Sold" | "Listed" | "Offer";
}

export default function CollectionActivity({
  data,
  maxHeight = "586px", // Added a prop for customizable height
}: {
  data: {
    collectionImage: string;
  };
  maxHeight?: string;
}) {
  // Mock data generator function
  const generateMockData = (): ActivityItem[] => {
    const users = ["Cypher", "Sage", "Reyna", "Phoenix", "Jett", "Raze"];

    const actions: ActivityItem["action"][] = ["Sold", "Listed", "Offer"];
    return Array.from({ length: 30 }, () => {
      const hour = Math.floor(Math.random() * 24) + 1;
      return {
        time: `${hour}h`,
        image: data.collectionImage,
        price: Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000,
        user: users[Math.floor(Math.random() * users.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
      };
    });
  };

  const activityData = generateMockData();

  return (
    <div className="w-full white/[0.10] text-white">
      {/* Header */}
      <div className="flex justify-between gap-2 py-3 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Activity size={18} className="text-white" />
          <h2 className="text-white font-bold uppercase">ACTIVITY</h2>
        </div>
        <Button
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 90% 100%, 0% 100%)",
          }}
          variant="ghost"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-[#232326] hover:bg-[#232326]/80 rounded-xs"
        >
          MOST RECENT
          <Filter className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Table with fixed height and scroll */}
      <div className="overflow-auto" style={{ maxHeight }}>
        <Table className="w-full">
          <TableHeader className="sticky top-0 bg-black z-10">
            <TableRow className="border-b border-gray-800 hover:bg-transparent">
              <TableHead className="w-[80px] text-gray-400 font-normal">
                <Clock size={16} className="text-gray-400" />
              </TableHead>
              <TableHead className="text-gray-400 uppercase font-normal">
                ITEM
              </TableHead>
              <TableHead className="text-gray-400 uppercase font-normal">
                PRICE
              </TableHead>
              <TableHead className="text-gray-400 uppercase font-normal">
                USER
              </TableHead>
              <TableHead className="text-gray-400 uppercase font-normal text-right pr-4">
                ACTION
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activityData.map((item, index) => (
              <TableRow
                key={index}
                className="border-b border-gray-800 hover:bg-gray-900/20"
              >
                <TableCell className="py-3 font-medium text-[#00FFFF]">
                  {item.time}
                </TableCell>
                <TableCell>
                  <div className="h-10 w-10 bg-gray-800 rounded">
                    <Image
                      width={40}
                      height={40}
                      src={item.image}
                      alt="Item"
                      className="h-full w-full object-cover rounded"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">
                      {item.price.toLocaleString()}
                    </span>
                    <SubtractIcon size={20} />
                  </div>
                </TableCell>
                <TableCell className="text-[#FF6B4E]">{item.user}</TableCell>
                <TableCell className="text-right pr-4 font-medium">
                  {item.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
