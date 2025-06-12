import React from "react";
import CollectionCard from "./CollectionCard";

export interface ICollection {
  _id: string;
  slug: string;
  name: string;
  category:
    | "clothing"
    | "footwear"
    | "accessories"
    | "properties"
    | "weapons"
    | "vehicles";
  coverImage: string;
  floorPrice: number;
  volume24h: number;
  owner: {
    username: string;
    avatar: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export default async function CollectionSection({
  collections,
}: {
  collections: ICollection[];
}) {
  return (
    <section className="py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
        {collections.map((col) => (
          <CollectionCard key={col.slug} item={col} />
        ))}
      </div>
    </section>
  );
}
