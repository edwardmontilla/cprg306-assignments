"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  let [sortBy, setSortBy] = useState("name");

  let itemsData = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          {itemsData.map((item) => (
            <Item
              key={item.name}
              {...item}
              onSelect={onItemSelect}
            />
          ))}
        </div>
      </div>
    </>
  );
}
