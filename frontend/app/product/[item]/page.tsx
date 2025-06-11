import { getData } from "@/lib/getData";
import React from "react";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  //   console.log("Item Slug:", params);
  const { item } = await params;
  const CollectionItems = await getData(
    `/item?collectionSlug=${encodeURIComponent(item)}`,
    0,
  );
  console.log("Collection Items:", CollectionItems);
  return <div>ItemPage</div>;
}
