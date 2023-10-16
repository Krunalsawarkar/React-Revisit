import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addVal = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      return;
    }
  };

  const removeVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>Count : {counter} </p>
      <button onClick={addVal}>Add</button>
      <span> </span>
      <button onClick={removeVal}>Remove</button>
    </>
  );
}

export default App;
