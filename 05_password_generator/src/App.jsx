import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState("8");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}[];?/`~";
    }

    for (let i = 0; i < length; i++) {
      let passStr = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(passStr);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyText = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed, passGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            ref={passRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyText}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                SetCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
