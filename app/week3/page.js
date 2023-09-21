import Link from "next/link.js";
import ItemList from "./item-list.js";


export default function Page() {
    return (

        <main class="bg-gray-900">

            <div class="flex items-center justify-center p-3 pt-10 mb-9">
                <h1 class="text-5xl font-sans">Shopping List</h1>
                
            </div>
            <div class="font-medium text-white">
                <ItemList />
            </div>

            <div class="absolute left-9 top-9">
                <button class="text-xs text-white bg-cyan-600 border-2 border-cyan-500 h-8 w-13 max-w-s m-3 py-2 px-3 rounded-lg hover:bg-cyan-700">
                    <Link href="/">Home</Link></button>
 
            </div>

        </main>
    )   
}
