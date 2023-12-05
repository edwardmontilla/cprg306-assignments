export default function Item({ name, quantity, category, onSelect }) {
  return (
    <main
      className="container"
      onClick={() => onSelect(name)}
    >
      <div className="bg-gray-600 border-2 border-gray-500 w-full max-w-xs m-3 p-2 rounded-lg">
        <div className="font-sans mb-2">
          <p>Name: {name}</p>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
        </div>
      </div>
    </main>
  );
}
