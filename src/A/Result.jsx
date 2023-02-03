import React from 'react'
import {useSelector} from "react-redux"
export default function Result(props) {
  let data=useSelector((storeData)=>{
    return storeData;
  })
  return (
    <div>
      <dl>
              <div style={{
              margin: "50px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}>
                 {data.api.map((post, index) => (
                 <div key={index}
                 style={{
                  boxShadow: "0 0 10px black",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "52px",
                }}
                 >
                <img src="https://images.unsplash.com/photo-1603384699007-50799748fc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Image from API" style={{width:"135px",height:"157px",borderRadius:"50%",objectFit:"cover"}}/>
                 <h3 style={{margin:"0"}}>ID:{post.id}</h3>
                <h3 style={{margin:"0"}}>NAME:{post.title}</h3>
                <h3 style={{margin:"0"}}>AGE:{post.Age}</h3>
            </div>
              ))
            }
           </div>
      </dl>
    </div>
  )
}