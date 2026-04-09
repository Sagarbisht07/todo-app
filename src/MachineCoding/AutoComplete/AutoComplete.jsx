import React, { useState } from "react";
import "./style.scss";

const AutoCompleteNew = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Pineapple",
    "Grapes",
    "Watermelon",
    "Strawberry",
    "Kiwi",
    "Papaya",
  ];

  // Filter Suggestions
  const filteredData = fruits.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShow(true);
  };

  const handleSelect = (value) => {
    setQuery(value);
    setShow(false);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search fruit..."
      />

      {show && query && (
        <div className="dropdown">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="item"
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="no-data">No Results</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteNew;
