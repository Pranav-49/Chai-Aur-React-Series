import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hooks.
  const passwordRef = useRef(null);
  // useCallback for store that multiple call fuction in memory.
  

  const passwordGenerator = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "@#$%^&!*";
    for (let i = 1; i <= length; i++) {
      let index = (Math.random()* str.length  + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-800'>

      <h3 className='text-white mx-3 my-2'>Password Generator</h3>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-200 my-2'>

          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-6' 
          placeholder='password' 
          readOnly 
          ref={passwordRef}/>

          <button className='outline-none
          bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipBoard}>copy</button>
        </div>

        <div className='flex text-sm gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) =>{setLength(e.target.value)}}/>
          <label >Length : {length}</label>
        </div>

        <div className='felx items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
            setnumberAllowed((prev) => !prev);
          }}/>
          <label htmlFor="numberIput">Numbers</label>
        </div>

        <div className='felx items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} 
          id='charInput' onChange={()=>{
            setcharAllowed((prev) => !prev);
          }}/>
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </>
  )
}

export default App
