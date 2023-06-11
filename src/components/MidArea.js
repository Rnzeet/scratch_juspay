import React, { useState } from "react";

export default function MidArea() {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData('text');
    const item = { id: itemId, text: event.dataTransfer.getData('text') };
    setDroppedItems((prevItems) => [...prevItems, item]);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex-1 h-full  overflow-auto" onDrop={handleDrop} onDragOver={handleDragOver}>
      <ul>
        {droppedItems.map((item,index) => (
          <div  className="flex bg-yellow-500 text-white place-content-center mx-72  mt-10 py-2 text-sm cursor-pointer" key={index}>{item.text}</div>
        ))}
        </ul>
    </div>
  );
}