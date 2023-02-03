import React from 'react'
    let initialData={
        name:"",
        city:"",
        country:"",
        api:[]
    }
    const MyReducer=(state=initialData,action)=>{
        if(action.type=="NAME"){
        return (state={
            ...state,
            name:action.payload,
           }); 
        }
        else if(action.type=="CITY"){
            return (state={
                ...state,
                city:action.payload,
            });
        } 
        else if(action.type=="COUNTRY"){
            return (state={
                ...state,
                country:action.payload,
            });
        } 
        else if(action.type=="API"){
            return (state={
                ...state,
                api:action.payload,
            });
        } 
        return state;
    }
export default  MyReducer ;