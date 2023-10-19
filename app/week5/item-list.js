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
    setSortBy("category");


    
    return (
        <>
            
            <button class="text-xs text-white bg-cyan-600 border-2 border-cyan-500 h-8 w-13 max-w-s px-3 rounded-lg hover:bg-cyan-700">
                Name</button>

            <button class="text-xs text-white bg-cyan-600 border-2 border-cyan-500 h-8 w-13 max-w-s px-3 rounded-lg hover:bg-cyan-700">
                Category</button>

            </>
    );

}