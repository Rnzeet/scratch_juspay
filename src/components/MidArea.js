import React, { useState } from "react";
import Draggable from "react-draggable";

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
    <div style={{ clipPath: 'polygon(0% 0%, 22% 18%, 5% 15%, 0% 0%, 100% 0%, 100% 92%, 50% 92%,40% 100%,20% 100%, 16% 92%, 0% 92%)' }} className="flex-1 h-full  overflow-auto" onDrop={handleDrop} onDragOver={handleDragOver}>
      <ul>
        {droppedItems.map((item, index) => (
          <div>
            <Draggable>
              <div className="flex bg-yellow-500 text-white place-content-center mx-72  mt-10 py-2 text-sm cursor-pointer" key={index}>
                {item.text}
              </div>
            </Draggable>
          </div>
        ))}
      </ul>
    </div>
  );
}