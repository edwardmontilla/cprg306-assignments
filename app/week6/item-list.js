"use client";

import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function ItemList() {
    
    const [sortBy, setSortBy] = useState("name");
    
    if (sortBy === "name") {
        items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "category") {
        items.sort((a,b) => a.category.localeCompare(b.category));
    }

    return (
        <>
            <div class="flex justify-center mb-4">
                <p class="font-sans"> Sort By: </p>
            </div>
            <div className="flex justify-center space-x-2 ml-auto mb-7">
                <select className="text-white border-2 border-slate-400 hover: bg-gray-700 p-1 rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                </select>
            </div>

            {/*
            <div class="flex items-center justify-center space-x-2 mb-6">
                <button
                    onClick={() => setSortBy("name")}
                    class="text-xs text-white bg-slate-800 border-2 border-slate-700 h-8 w-13 max-w-s px-3 rounded-lg hover:bg-cyan-700">
                        Name</button>

                <button 
                    onClick={() => setSortBy("category")}
                    class="text-xs text-white bg-slate-800 border-2 border-slate-700 h-8 w-13 max-w-s px-3 rounded-lg hover:bg-cyan-700">
                        Category</button>
            </div>
            */}

            <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-4">
                    {items.map((item) => (
                        <Item
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>


        </>
    );

}