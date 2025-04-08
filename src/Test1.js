import { AiFillBank } from "react-icons/ai";
import Nature from "../src/pictures/ChatGPT Image Apr 1, 2025, 08_34_28 PM.png"
import React, { useState } from 'react';
import "./App.css"
function Test1() {
  // const[count, setCount] = useState(0)

  // const increaseButton = () =>{
  //   setCount(count+1)
  // }
  const[count, setCount] = useState(100)

  const DecreaseButton = () =>{
    setCount(count-1)
  }
  // const[color, setColor]= useState("red")

  // const handleButton = () =>{
  //   setColor("blue")
  // }
  // const myStyle ={
  //   color: "red",
  //   backgroundColor: "Yellow",
  // };
  return (
    <div>
      {/* <h1>{color}</h1>
      <button  onClick={handleButton}>Change me</button> */}
      {/* <h1>{count}</h1>
      <button onClick={increaseButton}>Increase</button> */}
      <h1>{count}</h1>
      <button onClick={DecreaseButton}>Decrease</button>
      {/* Test 1
      <h1 className="note">Hi </h1>
      <AiFillBank style={{color: "red"}}/>
      <img src={Nature} alt="random image" /> */}

    </div>
  )
}

export default Test1
