
export default function Item ({ name, quantity, category, onDelete }) {
    return (
        <main className="container">
            <div className="bg-gray-600 border-2 border-gray-500 w-full max-w-xs m-3 p-2 rounded-lg">
                <div className="font-sans mb-2">
                    <p>Name: {name}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Category: {category}</p>
                </div>
                <div className="flex justify-end">
                    <div className="bg-slate-700 hover:bg-slate-500 text-slate-100 border-zinc-300 p-2 ml-1 border rounded-md w-max">
                        <button onClick={() => onDelete(name)}>Delete</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
