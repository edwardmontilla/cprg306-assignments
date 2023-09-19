import ItemList from "./item-list.js";


export default function Page() {
    return (

        <main>
            <div class="font-mono">
                <h1 style={{ fontSize: 35 }}>Shopping List</h1>
                
            </div>
            <div>
                <ItemList />
            </div>

        </main>
    )   
}
