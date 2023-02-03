import React from 'react'
import City from '../A/City'
import Country from '../A/Country'
import Input from '../A/Input'
import Result2 from '../A/Result2'

export default function Other() {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
       {/* <input/>
      <City/>
      <Country/> */}
      <Input/>
      <City/>
      <Country/>
       </div>
       <Result2/>
    </div>
  )
}
