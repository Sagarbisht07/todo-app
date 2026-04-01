import { Checkbox } from "antd";
import React from "react";

const TreeNode = ({ node, onToggle }) => {
  function handleOnChange() {
    onToggle(node.id); // 🔥 inform parent
  }
  return (
    <div>
      {/* Node Row */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={node.checked}
          onChange={() => handleOnChange(node.id)}
        >
          {node.label}
        </Checkbox>
      </div>

      {/* Children */}
      {node.children?.length > 0 && (
        <div style={{ marginLeft: 24 }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onToggle={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
