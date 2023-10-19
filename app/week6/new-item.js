
"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity , setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");
    const [itemCreated, setItemCreated] = useState(false);

    const onAddItem = {
        name,
        quantity,
        category,
    };

    const handleSubmit = (event) => { event.preventDefault();
    
        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);
        setItemCreated(true);

        {/*For future reference, alert timeout 3 sec.
        alert(`Added ${quantity} piece(s) of ${name} to ${category}`);
        setTimeout(() => {
            setItemCreated(false);
        }, 3000);
        */}

        setName("");
        setQuantity("1");
        setCategory("Produce");

        setItemCreated(false);
    };

    const handleNameChange = (event) => { setName(event.target.value);
    };
    const handleQuantityChange = (event) => { setQuantity(event.target.value);
    };
    const handleCategoryChange = (event) => { setCategory(event.target.value);
    };
    

    return (
                            
        <main>
            <div>
                {/* This will be an optional alert which I removed for future reference
                {itemCreated && (
                    <div className="bg-sky-900 absolute top-0 mt-7 p-3 font-sans text-slate-100 text-2xl flex items-center justify-center">
                        Item Created!
                    </div>
                )}
                */}
                
                <div className="min-h-screen bg-sky-950">
                    <div>
                        <div>

                            <form onSubmit={handleSubmit}>

                                <div className="container mx-auto font-sans pb-7 w-full max-w-xs bg-gray-600 border-2 border-gray-500 p-7 rounded-lg shadow-md">

                                    <h1 className="text-slate-100 text-3xl font-sans">Add New Item</h1>

                                    <div>
                                        <p className="text-slate-100 text-m mb-1">Select Category</p>

                                        <select className="text-gray-800 p-1 mb-7 border-zinc-400 border-2 rounded-md"
                                            value={category}
                                            onChange={handleCategoryChange}>
                                                <option value="Produce">Produce</option>
                                                <option value="Dairy">Dairy</option>
                                                <option value="Bakery">Bakery</option>
                                                <option value="Meat">Meat</option>
                                                <option value="Frozen Foods">Frozen Foods</option>
                                                <option value="Canned Foods">Canned Foods</option>
                                                <option value="Dry Goods">Dry Goods</option>
                                                <option value="Beverages">Beverages</option>
                                                <option value="Snacks">Snacks</option>
                                                <option value="Household">Household</option>
                                                <option value="Other">Other</option>
                                        </select>

                                        <p className="text-slate-100 text-m">Enter Item Name:</p>
                                        <input
                                            type="text"
                                            placeholder="Apple"
                                            required
                                            className="text-gray-800 w-4/5 border-zinc-400 border-2 rounded-md p-1 mb-7"
                                            value={name}
                                            onChange={handleNameChange}
                                        />
                                        
                                        <p className="text-slate-100 text-m">Qty:</p>
                                        <input
                                            type="number"
                                            min="1" max="99"
                                            required
                                            className="text-gray-800 w-30 border-zinc-400 border-2 rounded-md p-1 mb-10"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                        />

                                    </div>

                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="bg-slate-700 hover:bg-slate-500 text-slate-100 border-zinc-300 p-2 ml-1 border rounded-md w-15">
                                        Add
                                    </button>

                                </div>    
                            </form>
                            
                        </div>

                    </div>
                </div>
            </div>

        </main>

    )



}

