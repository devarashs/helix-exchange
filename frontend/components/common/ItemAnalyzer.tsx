import React from "react";
import { IItem } from "./ItemSection";
import ItemChart from "./ItemChart";

export default function ItemAnalyzer({ itemData }: { itemData: IItem }) {
  return (
    <div>
      <ItemChart itemData={itemData} />
    </div>
  );
}
