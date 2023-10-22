import { useCallback, useState } from "react"


function App() {
  
  const [length,setLength] = useState("8");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed,SetCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passGenerator = useCallback(()=>{
    
  },[length,numAllowed,charAllowed,setPassword])

  return (
    <>
     <h1 className="text-4xl text-center text-white" >Password Generator</h1>
    </>
  )
}

export default App
