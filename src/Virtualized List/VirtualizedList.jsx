import React, { useState } from "react";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);
const item_height = 40;
const container_height = 400;
const VirtualizedList = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / item_height);
  const visibleCount = Math.ceil(container_height / item_height);
  const endIndex = startIndex + visibleCount;

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      style={{
        height: container_height,
        overflow: "auto",
        border: "1px solid black",
      }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div
        style={{
          height: items.length * item_height,
          position: "relative",
        }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            style={{
              position: "absolute",
              top: (startIndex + index) * item_height,
              height: item_height,
              left: 0,
              right: 0,
              borderBottom: "1px solid #eee",
              padding: "10px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;
