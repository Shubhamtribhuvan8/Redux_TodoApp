import React, { useState, useEffect } from 'react';
const PostRequest = () => {
 const [isFormEmpty, setIsFormEmpty] = useState(true);
  const [formData, setFormData] = useState([]);
  const postData = async () => {
    try {
      const resp = await fetch("http://localhost:3001/posts", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if(resp.ok){
        const data = await resp.json();
       setFormData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {}, [postData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
     setIsFormEmpty(Object.values(formData).join('').length === 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
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
      <h1>Redux TODO APP/JSON_Server_APP</h1>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder='Enter Your Name'
          value={formData.title}
          onChange={handleChange}
        />
      <br />
        <input
         type="number"
         name='Age'
         placeholder='Enter Your Age'
          value={formData.Age}
          onChange={handleChange}
        />
      <br />
      <button type="submit" disabled={isFormEmpty} style={style1}>Submit</button>
    </form>
  </div>
  )
};

export default PostRequest;