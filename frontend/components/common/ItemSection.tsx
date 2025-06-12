import React from "react";
import ItemCard from "./ItemCard";

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

export default async function ItemSection({ items }: { items: IItem[] }) {
  return (
    <section className="px-8 py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((col) => (
          <ItemCard key={col._id} item={col} />
        ))}
      </div>
    </section>
  );
}
