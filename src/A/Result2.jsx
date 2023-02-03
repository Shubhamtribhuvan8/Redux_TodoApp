import React from 'react'
import {useSelector} from "react-redux"
export default function Result2(props) {
  let data=useSelector((storeData)=>{
    return storeData;
  })
  return (
    <div>
      <h1>Check Result is here!</h1>
      <dl>
      <dt><b>User Name</b></dt>
      <dd style={{color:"blue",fontWeight:"bold"}}>{data.name} </dd>
      <dt><b>City Name</b></dt>
      <dd style={{color:"red",fontWeight:"bold"}}>{data.city} </dd>
      <dt><b>Country Name</b></dt>
      <dd style={{color:"red",fontWeight:"bold"}}>{data.country} </dd> 
      </dl>
    </div>
  )
}