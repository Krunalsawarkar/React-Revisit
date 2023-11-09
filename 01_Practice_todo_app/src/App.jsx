import { useEffect, useState } from "react";
import { TodoProvider } from "./Contexts/TodoContext";
import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo === id
          ? { ...prevTodo, isToggle: !prevTodo.isToggle }
          : prevTodo
      )
    );
  };

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));
  //   if (todos && todos.length > 0) {
  //     setTodos(todos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-600">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            To-Do List
          </h1>

          <TodoAdd />

          <TodoList todos={todos} />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
