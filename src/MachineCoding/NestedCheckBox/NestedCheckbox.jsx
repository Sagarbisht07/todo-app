import React, { useState } from "react";
import TreeNode from "./TreeNode";
import { checkboxData } from "./Data";

const App = () => {
  const [tree, setTree] = useState(checkboxData);

  // 🔥 toggle handler
  const handleToggle = (id) => {
    const updateTree = (nodes) => {
      return nodes.map((node) => {
        if (node.id === id) {
          const newChecked = !node.checked;

          return {
            ...node,
            checked: newChecked,
            indeterminate: false,
            children: toggleAllChildren(node.children, newChecked),
          };
        }

        if (node.children) {
          const updatedChildren = updateTree(node.children);

          const allChecked = updatedChildren.every((c) => c.checked);

          const someChecked = updatedChildren.some(
            (c) => c.checked || c.indeterminate,
          );

          return {
            ...node,
            children: updatedChildren,
            checked: allChecked,
            indeterminate: !allChecked && someChecked,
          };
        }

        return node;
      });
    };

    setTree(updateTree(tree));
  };

  // 🔥 toggle children recursively
  const toggleAllChildren = (children = [], checked) => {
    return children.map((child) => ({
      ...child,
      checked,
      indeterminate: false,
      children: toggleAllChildren(child.children, checked),
    }));
  };

  return (
    <div>
      {tree.map((node) => (
        <TreeNode key={node.id} node={node} onToggle={handleToggle} />
      ))}
    </div>
  );
};

export default App;
