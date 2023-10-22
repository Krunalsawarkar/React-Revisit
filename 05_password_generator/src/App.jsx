import { useCallback, useState } from "react"


function App() {
  
  const [length,setLength] = useState("8");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed,SetCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str+="1234567890";
    }
    if(charAllowed){
      str+="!@#$%^&*(){}[];?/`~"
    }

    for (let i = 0; i < array.length; i++) {
      
      let passStr = Math.floor(Math.random()*str.length+1)

      pass = str.charAt(passStr);
      
    }

  },[length,numAllowed,charAllowed,setPassword])

  return (
    <>
     <h1 className="text-4xl text-center text-white" >Password Generator</h1>
    </>
  )
}

export default App
