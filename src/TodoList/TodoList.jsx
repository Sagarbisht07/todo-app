import React, { useState } from "react";
import "./TodoStyle.scss";

const TodoList = () => {
  const dummyTodos = [
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Build a Todo app", completed: true },
    { id: 3, text: "Practice JavaScript problems", completed: false },
    { id: 4, text: "Prepare for frontend interview", completed: false },
    { id: 5, text: "Revise React hooks", completed: true },
  ];

  const [todoListData, setTodoListData] = useState(dummyTodos);

  const handleDelete = (id) => {
    setTodoListData((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleAddNewTask = () => {
    const newTask = {
      id: Date.now(),
      text: "Added New Task",
      completed: false,
    };
    setTodoListData((prev) => [...prev, newTask]);
  };
  const handleUpdate = (id) => {
    setTodoListData(
      todoListData.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h3>List of Tasks</h3>
        <button className="add-btn" onClick={handleAddNewTask}>
          + Add Task
        </button>
      </div>

      <table className="todo-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {todoListData.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>

              <td
                className={
                  todo.completed ? "status completed" : "status pending"
                }
                onClick={() => handleUpdate(todo.id)}
              >
                {todo.completed ? "Completed" : "Not Completed"}
              </td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
