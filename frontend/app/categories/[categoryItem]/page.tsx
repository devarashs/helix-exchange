import CollectionSearchBar from "@/components/common/CollectionSearchBar";
import CollectionSection, {
  ICollection,
} from "@/components/common/CollectionSection";
import { getData } from "@/lib/getData";
import React from "react";

export default async function CategoryItem({
  params,
}: {
  params: Promise<{ categoryItem: string }>;
}) {
  const { categoryItem } = await params;
  let Data;
  if (categoryItem === "all") {
    Data = await getData("/collection", 0);
  } else {
    Data = await getData(
      `/collection?category=${encodeURIComponent(categoryItem)}`,
      0,
    );
  }
  const collections: ICollection[] = Data.collections;
  return (
    <div>
      <CollectionSearchBar
        data={{
          resultCount: collections.length,
        }}
      />
      <hr className="mb-4" />
      <CollectionSection collections={collections} />
    </div>
  );
}
