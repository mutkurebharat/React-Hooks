import { useState } from "react";

const UseStateArr = () => {
  const [items, setItems] = useState([]);

  const addNumber = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
    
  };
  return (
    <div>
        {console.log(items)}
      <button onClick={addNumber}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateArr;
