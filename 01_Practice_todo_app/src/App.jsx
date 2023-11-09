import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-600">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            To-Do List
          </h1>

          <TodoAdd />

          <TodoList />
          
        </div>
      </div>
    </>
  );
}

export default App;
