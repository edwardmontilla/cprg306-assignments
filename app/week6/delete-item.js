import Item from "./item.js";

export default function DeleteItem({ items, onDelete }) {
    //function handleDelete(name) {
    //    onDelete(name);
    //}

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onDelete={onDelete} />
                </div>

            ))}
        </div>

    );
}