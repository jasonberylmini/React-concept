import React,{useState} from 'react'
function Example() {
  const [color, setColor] = useState("green")
  // const handleColor = () =>{
  //   setColor("Red")
  // }
  return (
    <div>
      <h1>{color}</h1>
      <button onClick = {()=> setColor("Red")}>Click me</button>
    </div>
  )
}

export default Example
