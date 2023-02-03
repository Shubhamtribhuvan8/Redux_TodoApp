import React from 'react'
import { useState } from 'react'
import { MyAction } from '../Component/Action/Action';
export default function Input(props) {
    const[state,SetState]=useState("");

    const sendData=()=>{
       MyAction(state)
    }
  return (
    <div>
      <h1>Input Component</h1>
    <input type="text" name="hh" placeholder='Enter Data' onChange={(e)=>{
            SetState(e.target.value);
        }} />
        <button onClick={sendData}>Submit</button>
    </div>
  )
}
