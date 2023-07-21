import React, { useState } from 'react'

const Dashboard = () => {
  const [color,setColor]=useState(["red"])
const changeColor=(val)=>{
  setColor((pre)=>[
  ...pre,val])

}
    
  return (
    <div>
      <h1>
      Color is {color.map((item,index)=>(
        <p>{item}</p>
      ))}
      </h1>
      {/* <input type='text' onChange={(e)=>setColor(e.target.value)}/> */}
     <button onClick={()=>changeColor("pink")}>Add color</button>
    </div>
   
  )
}

export default Dashboard