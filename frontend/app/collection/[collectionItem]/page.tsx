import CollectionBanner from "@/components/common/CollectionBanner";
import { ICollection } from "@/components/common/CollectionSection";
import ItemSection, { IItem } from "@/components/common/ItemSection";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ collectionItem: string }>;
}) {
  const { collectionItem } = await params;
  const ItemData = await getData(
    `/item?collectionSlug=${encodeURIComponent(collectionItem)}`,
    0,
  );
  const CollectionData = await getData(
    `/collection?categorySlug=${encodeURIComponent(collectionItem)}`,
    0,
  );

  const items: IItem[] = ItemData.items;
  const collection: ICollection = CollectionData.collections[0];
  const totalSupply = items.reduce((acc, item) => acc + (item.supply || 0), 0);
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  return (
    <div>
      <CollectionBanner
        data={{
          collectionData: collection,
          bannerImage: collection.coverImage,
          profileImage: collection.owner.avatar,
          totalVolume: collection.volume24h,
          floorPrice: collection.floorPrice,
          totalSupply: totalSupply,
          owners: randomNumber,
          verified: true,
          itemCount: items.length,
        }}
      />
      <ItemSection items={items} collection={collection} />
    </div>
  );
}
