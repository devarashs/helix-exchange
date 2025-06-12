import ItemSection, { IItem } from "@/components/common/ItemSection";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ collectionItem: string }>;
}) {
  const { collectionItem } = await params;
  const Data = await getData(
    `/item?collectionSlug=${encodeURIComponent(collectionItem)}`,
    0,
  );
  const items: IItem[] = Data.items;
  return (
    <div>
      <ItemSection items={items} />
    </div>
  );
}
