import CollectionSearchBar from "@/components/common/CollectionSearchBar";
import CollectionSection from "@/components/common/CollectionSection";
import React from "react";

export default async function CategoryItem({
  params,
}: {
  params: Promise<{ categoryItem: string }>;
}) {
  const { categoryItem } = await params;
  console.log("Category Item Slug:", categoryItem);
  return (
    <div>
      <CollectionSearchBar />
      <hr className="mb-4 px-2" />
      <CollectionSection />
    </div>
  );
}
