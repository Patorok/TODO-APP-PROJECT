import { useState } from "react";

interface ListGroupProps {
    items: any[];
    heading: string;

    onSelectItem: (item: string, value: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="p-5">
            <h1>{heading}</h1>
            {items.length === 0 && <p className="alert alert-danger">There are no items in the list.</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={ selectedIndex === index ? "list-group-item active" : "list-group-item" }
                        key={item.id} 
                        onClick={ () => {
                            setSelectedIndex(index);
                            onSelectItem(item.item, item.value);
                        }}>{item.item + ' ' + item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListGroup;
