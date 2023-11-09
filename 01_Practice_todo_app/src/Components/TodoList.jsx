import React from "react";

function TodoList() {
  return (
    <ul className="mt-6 space-y-2">
      <li className="flex justify-between items-center p-3 rounded-md shadow-sm bg-blue-100">
        <div className="flex items-center">
          <input type="checkbox" className="mr-3 text-blue-600" />
          <span className="text-gray-800">Todo Here</span>
        </div>
        <button className="text-red-600 hover:text-red-800">Delete</button>
      </li>
    </ul>
  );
}

export default TodoList;
