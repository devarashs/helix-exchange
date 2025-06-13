import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SubtractIcon } from "@/icons/SubtractIcon";
import { HandHelping } from "lucide-react";

const ItemOffers = () => {
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
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <HandHelping size={22} fill="white" />
          <h2 className="text-white font-semibold text-lg tracking-wide">
            OFFERS
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
              FLOOR DIFF.
            </TableHead>
            <TableHead className="text-white/[0.56] font-semibold text-md px-6 py-4 h-auto justify-start">
              EXPIRATION
            </TableHead>
            <TableHead className="text-white/[0.56] font-semibold text-md px-6 py-4 h-auto flex justify-end">
              FROM
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
                  {offer.floorDiff}
                </span>
              </TableCell>
              <TableCell className="px-6 py-6">
                <span className="text-white font-semibold text-lg">
                  {offer.expiration}
                </span>
              </TableCell>
              <TableCell className="px-6 py-6 flex justify-end">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-[#F8684F] font-semibold text-lg">
                    {offer.from}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ItemOffers;
