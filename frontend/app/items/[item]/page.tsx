import ItemAnalyzer from "@/components/common/ItemAnalyzer";
import ItemBuySection from "@/components/common/ItemBuySection";
import ItemListing from "@/components/common/ItemListings";
import ItemOffers from "@/components/common/ItemOffers";
import { IItem } from "@/components/common/ItemSection";
import ItemTitle from "@/components/common/ItemTitle";
import ItemVisualizer from "@/components/common/ItemVisualizer";
import { getData } from "@/lib/getData";
import React from "react";

// export interface IItem {
//   _id: string;
//   collectionId: {
//     name: string;
//     image: string;
//   };
//   name: string;
//   price: number;
//   supply: number;
//   image: string;
//   description: string;
//   attributes: {
//     type: string;
//     condition: string;
//     productionYear: number;
//     mobility: number;
//   };
//   ownerId: {
//     username: string;
//     avatar: string;
//   };
//   createdAt: Date;
//   updatedAt: Date;
// }

// Item Data: {
//     [1]   _id: '684acab44725097633e25cdf',
//     [1]   collectionId: { _id: '6849d3fb2bbba9d05c994080', name: 'Panda Weapon Pack' },
//     [1]   name: "Panda's Paw Dagger",
//     [1]   image: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/24/Valorant-Radiant-Entertainment-System-bunle-cover.jpg?width=1200&quality=75&format=auto',
//     [1]   description: 'A ceremonial dagger with a black and white handle, featuring jade inlay.',
//     [1]   attributes: {
//     [1]     type: 'Melee',
//     [1]     condition: 'Minimal Wear',
//     [1]     productionYear: 2023,
//     [1]     mobility: 95
//     [1]   },
//     [1]   ownerId: {
//     [1]     _id: '6849d2277e4ef5baf93e67b2',
//     [1]     username: 'Alex',
//     [1]     avatar: 'https://i.pinimg.com/236x/11/de/fc/11defc17b380ab9fe1861cd0aa817dc2.jpg'
//     [1]   },
//     [1]   price: 8084,
//     [1]   supply: 50,
//     [1]   __v: 0
//     [1] }

export default async function page({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item } = await params;
  const ItemData = await getData(`/item?itemSlug=${item}`, 0);
  const Data: IItem = ItemData.items[0];
  return (
    <div className="flex justify-between gap-8 mb-4">
      <div className="w-[50%]">
        <ItemVisualizer itemData={Data} />
      </div>
      <div className="w-[50%] flex flex-col gap-4">
        <ItemTitle itemData={Data} />
        <ItemBuySection itemData={Data} />
        <ItemAnalyzer itemData={Data} />
        <ItemOffers />
        <ItemListing />
      </div>
    </div>
  );
}
