import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

function TodoAdd() {
  const [todos, setTodos] = useState("");
  const { addTodo } = useTodo();

  const insertTodo = (e) => {
    e.preventDefault();
    if (!todos) return;
    addTodo({ todos, isToggle: false });
    setTodos("");
  };

  return (
    <form onSubmit={insertTodo} className="flex">
      <input
        type="text"
        className="flex-1 p-3 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Add a new task..."
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-r-md">
        Add
      </button>
    </form>
  );
}

export default TodoAdd;
