"use client";

import Link from "next/link.js";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };



    return (

        <main className="h-full bg-sky-950">

            <div className="flex items-center justify-center p-3 pt-10 mb-10">
                <h1 className="text-5xl font-sans">Shopping List</h1>
                
            </div>
            <div className="font-medium pb-20 text-white">
                <NewItem onAddItem={handleAddItem} />
            </div>
            <div className="font-medium pb-20 text-white">
                <ItemList items={itemsData} />
            </div>

            <div className="absolute left-9 top-8">
                <button className="text-xs text-white bg-cyan-600 border-2 border-cyan-500 h-8 w-13 max-w-s m-3 py-2 px-3 rounded-lg hover:bg-cyan-700">
                    <Link href="/">Home</Link></button>
 
            </div>

        </main>
    )   
}
