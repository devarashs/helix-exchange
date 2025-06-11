import React from "react";

export default async function CategoryItem({
  params,
}: {
  params: Promise<{ categoryItem: string }>;
}) {
  const { categoryItem } = await params;
  console.log("Category Item Slug:", categoryItem);
  return <div>{categoryItem}</div>;
}
