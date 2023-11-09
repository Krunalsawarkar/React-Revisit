import React from "react";

function TodoAdd() {
  return (
    <div className="flex">
      <input
        type="text"
        className="flex-1 p-3 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Add a new task..."
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-r-md">
        Add
      </button>
    </div>
  );
}

export default TodoAdd;
