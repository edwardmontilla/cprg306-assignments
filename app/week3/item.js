
export default function Item ({ name, quantity, category }) {
    return (
        <main class="flex items-center justify-center">
            <div class="bg-cyan-600 border-2 border-cyan-500 w-full max-w-xs m-3 p-2 rounded-lg">
                <div class="font-sans">
                    <p>Name: {name}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Category: {category}</p>
                </div>
            </div>
        </main>
    );
}
