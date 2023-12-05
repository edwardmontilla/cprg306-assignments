"use client";

import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items }) {
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
      <div className="flex justify-center mb-4">
        <p className="font-sans"> Sort By: </p>
      </div>
      <div className="flex justify-center space-x-2 ml-auto mb-7">
        <select
          className="text-white border-2 border-slate-400 hover:bg-gray-700 p-1 rounded-md"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          {itemsData.map((item) => (
            <Item key={item.name} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
