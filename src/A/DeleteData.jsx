import React, { useState } from "react";
import "./input.css"
function DeleteData() {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleClick = () => {
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };
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
      <h1>Delete Item by using ID</h1>
      <input placeholder="Enter ID" onChange={handleChange} />
      <button onClick={handleClick} style={style1}>Delete</button>
    </div>
  );
}

export default DeleteData;
