import React, { useState } from "react";

const Accordion = () => {
  const data = [
    { id: 1, title: "Section 1", content: "Content 1" },
    { id: 2, title: "Section 2", content: "Content 2" },
    { id: 3, title: "Section 3", content: "Content 3" },
  ];

  const [activeId, setActiveId] = useState(null);

  const handleActiveId = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => handleActiveId(item.id)}
          >
            {activeId === item.id ? "[-]" : "[+]"}{" "}
          </span>
          <span>{item.title}</span>
          <div
            style={{
              marginLeft: "55px",
              padding: "5px",
            }}
          >
            {activeId === item.id && (
              <div style={{ marginLeft: "10px", padding: "5px" }}>
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
