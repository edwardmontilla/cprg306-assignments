
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
                            
        <main>

            <div class="bg-gray-900 min-h-full flex justify-center">
    
                <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    
                </div>

            </div>

        </main>

    )



}

