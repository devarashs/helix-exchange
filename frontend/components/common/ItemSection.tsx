import React from "react";
import ItemCard from "./ItemCard";
import CollectionAnalyzer from "./CollectionAnalyzer";
import { ICollection } from "./CollectionSection";

export interface IItem {
  _id: string;
  collectionId: {
    name: string;
    image: string;
  };
  name: string;
  price: number;
  supply: number;
  image: string;
  description: string;
  attributes: {
    type: string;
    condition: string;
    productionYear: number;
    mobility: number;
  };
  ownerId: {
    username: string;
    avatar: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export default async function ItemSection({
  items,
  collection,
}: {
  items: IItem[];
  collection: ICollection;
}) {
  return (
    <section className="py-2 flex flex-row">
      <div className="grid w-[75%] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {items.map((col) => (
          <ItemCard key={col._id} item={col} />
        ))}
      </div>

      <div className="w-[25%] pl-8">
        <CollectionAnalyzer
          data={{
            items: items,
            collection: collection,
          }}
        />
      </div>
    </section>
  );
}
