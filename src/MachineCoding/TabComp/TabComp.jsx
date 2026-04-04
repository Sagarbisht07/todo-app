import React, { useState } from "react";
import "./style.scss";

const TabComp = () => {
  const tabs = [
    {
      id: 1,
      label: "Home",
      content: "Home Content",
    },
    {
      id: 2,
      label: "Profile",
      content: "Profile Content",
    },
    {
      id: 3,
      label: "Settings",
      content: "Settings Content",
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const selectedTab = tabs.find((i) => i.id === activeTab);
  const handleKeyDown = (e, index) => {
    console.log(e.key);
    if (e.key === "ArrowRight") {

      const next =  (index + 1) % tabs.length;
      console.log(next);
      setActiveTab(tabs[next].id);
    }

    if (e.key === "ArrowLeft") {
      const prev = (index - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prev].id);
    }
  };
  return (
    <>
      <div className="tab_wrapper">
        {tabs.map((i, index) => (
          <div
            key={i.id}
            className={`tab_labels ${i.id === activeTab ? "active_tab" : ""}`}
            onClick={() => setActiveTab(i.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={i.id === activeTab ? 0 : -1}
          >
            <span>{i.label}</span>
          </div>
        ))}
      </div>
      <div className="tab_content">{selectedTab?.content}</div>
    </>
  );
};

export default TabComp;
