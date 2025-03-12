import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  setSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, setSelectedItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List of {heading} </h1>
      {items.length === 0 && <p>No States Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              setSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
