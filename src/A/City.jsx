import React from 'react'
import { useState } from 'react'
import { CityAction } from '../Component/Action/CityAction';
import { useDispatch } from 'react-redux';
export default function City(props) {
   const dispatch=useDispatch();
    const [city,SetCity]=useState("");
   const sendDatatoCityAction=()=>{
    CityAction(city,dispatch);
   }
   return (
    <div>
      <h1>City Component</h1>
   <input  type="text" placeholder='Enter City'
   onChange={(e)=>{
    SetCity(e.target.value);
   }}
   />
   <button onClick={sendDatatoCityAction}>Store City</button>
    </div>
  )
}
