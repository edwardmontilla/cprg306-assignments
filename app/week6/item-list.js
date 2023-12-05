"use client";

import { useState } from "react";
import Item from "./item.js";
import DeleteItem from "./delete-item.js";

export default function ItemList({items, onDelete}) {

    let [sortBy, setSortBy] = useState("name");

    let itemsData = items.sort((a, b) => {
    
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

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
                    {/* deletes item 
                    <div>
                        <DeleteItem items={items} onDelete={onDelete} />
                    </div>
                     */}
                    {itemsData.map((item) => (
                        <Item key={item.name} {...item}/>
                    ))}
                </div>
            </div>


        </>
    )

}