import React from 'react'
import "./input.css"
import { useState } from 'react'
import { ApiAction } from '../Component/Action/ApiAction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export default function Api(props) {
   const dispatch=useDispatch();

   const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3001/posts")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          console.log(data)
        });
    }, []);
   

   const FetchApiData=()=>{
    ApiAction(products,dispatch);
   }
   const style1={
    width: "152px",
    height: "36px",
    fontSize: "initial",
    fontWeight: "bold",
    color: "chocolate",
    backgroundColor: "chartreuse",
    borderRadius: "31px"
      }
   return (
    <div>
      <h1>Click On Below Button!</h1>
   <button onClick={FetchApiData} style={style1} className="falling-button">#UPDATE TODO#</button>
    </div>
  )
}
