import Card from './components/Card';
import Counter from './components/Counter';
import { useState } from "react";

function App() {
  let  myObj = {
    name: "monitor",
    id: "maksad"
  }
  const colors = [
    {c:"bg-red-500",d:"red"},
    {c:"bg-green-500",d:"green"},
    {c:"bg-blue-500",d:"blue"},
    {c:"bg-pink-500",d:"pink"},
    {c:"bg-yellow-600",d:"yellow"},
    {c:"bg-orange-400",d:"orange"}
  ];

  const [color, setColor] = useState("green");

  function changeBg(color){
    setColor(color);
  }

  const allcolor = colors.map(color => 
    <button className = {`${color.c} flex w-30 h-12 mt-1.5 ml-3 mr-2 justify-evenly text-center rounded-md `} onClick={() => changeBg(color.d)}> {color.d} </button>
  );
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
    <div>
      <p className='bg-green-200'>
        Click on the Vite and React logos to learn more
        <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button>
      </p>
      <Card greetings="Yea le!"/> <br></br>
      {/* <Card greetings="Welcome Back" someObj = {myObj}/> <br/> */}
      <Counter/> <br></br>
    </div>    
            
      <div className="flex w-200 h-15 justify-center rounded-md bg-amber-200">
        {allcolor}
      </div>
    </div>
  )
}

export default App
