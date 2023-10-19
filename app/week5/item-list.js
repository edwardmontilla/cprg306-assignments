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
            <div class="flex items-center justify-center mb-4">
                <p class="font-sans"> Sort By: </p>
            </div>
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
            <div>
                {items.map((item) => (
                    <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </div>



        </>
    );

}