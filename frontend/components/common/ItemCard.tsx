import React from "react";

export interface IItem {
  id: string;
  collectionId: {
    name: string;
    image: string;
  };
  name: string;
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

export default function ItemCard({ item }: { item: IItem }) {
  return <div>ItemCard</div>;
}
