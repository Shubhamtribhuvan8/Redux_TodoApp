import React from 'react'
import { useState } from 'react'
import { CountryAction } from '../Component/Action/CountryAction';
import { useDispatch } from 'react-redux';
export default function Country(props) {
   const dispatch=useDispatch();
    const [Country,SetCountry]=useState("");
   const SendDatatoCountry=()=>{
    CountryAction(Country,dispatch);
   }
   return (
    <div>
      <h1>Country Component</h1>
   <input  type="text" placeholder='Enter Country'
   onChange={(e)=>{
    SetCountry(e.target.value);
   }}
   />
   <button onClick={SendDatatoCountry}>Store Country</button>
    </div>
  )
}
