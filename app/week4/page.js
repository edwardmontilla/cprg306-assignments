import NewItem from "./new-item";
import Link from "next/link.js";

export default function Page() {

    return (
        <main>
            <div>
            <NewItem />
            </div>

            <div class="absolute left-9 top-8">
                <button class="text-xs text-white bg-cyan-600 border-2 border-cyan-500 h-8 w-13 max-w-s m-3 py-2 px-3 rounded-lg hover:bg-cyan-700">
                    <Link href="/">Home</Link></button>
 
            </div>

        </main>
    );
}