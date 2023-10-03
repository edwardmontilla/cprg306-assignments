
"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity , setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => { event.preventDefault(); 
    
        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);
        setEvenCreated(true);

        setName("");
        setQuantity("1");
        setCategory("Produce");
    };

    const handleNameChange = (event) => { setName(event.target.value);
    };
    const handleQuantityChange = (event) => { setQuantity(event.target.value);
    };
    const handleCategoryChange = (event) => { setCategory(event.target.value);
    };
    

    return (
                            /* use <input> inside <label> and <option> inside <select> for drop down,
                                use <button> AND add (tag)="type" or "submit" */
                            
        <main class="h-screen bg-sky-950">

            <div class="flex justify-center">
                <div class="w-full max-w-md bg-gray-600 border-2 border-gray-500 p-7 rounded-lg shadow-md mt-10">
                    <form>
                        <div class="font-sans pb-7">

                            <h1 class="text-slate-100 text-3xl text-gray-800 font-sans mb-5">Add New Item</h1>

                            <div>
                                <p class="text-slate-100 text-m text-gray-800 mb-1">Select Category</p>

                                <select class="text-gray-800 p-1 mb-7 border-zinc-400 border-2 rounded-md" value={category} onChange={handleCategoryChange}>
                                    <option disabled selected value> </option>
                                    <option value="Produce" selected>Produce</option>
                                    <option value="Dairy" selected>Dairy</option>
                                    <option value="Bakery" selected>Bakery</option>
                                    <option value="Meat" selected>Meat</option>
                                    <option value="Frozen Foods" selected>Frozen Foods</option>
                                    <option value="Canned Foods" selected>Canned Foods</option>
                                    <option value="Dry Goods" selected>Dry Goods</option>
                                    <option value="Beverages" selected>Beverages</option>
                                    <option value="Snacks" selected>Snacks</option>
                                    <option value="Household" selected>Household</option>
                                    <option value="Other" selected>Other</option>

                                </select>

                                <p class="text-slate-100 text-m text-gray-800">Enter Item Name:</p>
                                <input type="text" placeholder="Apple" required class="text-gray-800 w-4/5 border-zinc-400 border-2 rounded-md p-1 mb-7"
                                    value={name} onChange={handleNameChange}></input>
                                
                                <p class="text-slate-100 text-m text-gray-800">Qty:</p>
                                <input type="number" min="1" max="120" required class="text-gray-800 w-30 border-zinc-400 border-2 rounded-md p-1 mb-10"
                                    value={quantity} onChange={handleQuantityChange}></input>

                            </div>    

                            <button type="submit" class="bg-slate-700 hover:bg-slate-500 text-slate-100 border-zinc-300 p-2 ml-1 border rounded-md w-15">Add</button>

                        </div>    
                    </form>
                    
                </div>

            </div>

        </main>

    )



}

